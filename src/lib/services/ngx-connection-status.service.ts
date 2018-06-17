import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, interval } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConnectionStatusConfig } from '../models/connection-status-config';
import { CONNECTION_STATUS_CONFIG } from '../injection-tokens/connection-status-config.token';

@Injectable({
  providedIn: 'root'
})
export class NgxConnectionStatusService {

  private statusHook$: Observable<boolean>;

  constructor(@Inject(CONNECTION_STATUS_CONFIG) private config: ConnectionStatusConfig, private http: HttpClient) {
    this.initConnectionCheck(config.checkInterval);
  }

  private initConnectionCheck(_interval: number = 5000) {
    this.statusHook$ =
      interval(_interval)
      .pipe(
        switchMap(() => {
          return this.http.head<boolean>(`//${window.location.hostname}:${window.location.port}`)
          .pipe(
            map(() => {
              return true;
            }), catchError(this.handleError())
          );
        })
      );
  }

  private handleError() {
    return (error: any): Observable<boolean> => {
      let isOnline = false;
      if (error.status == 304 || (error.status >= 200 && error.status < 300)) {
        isOnline = true;
      }
      return of(isOnline);
    };
  }

  public statusHook() {
    return this.statusHook$;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxConnectionStatusService } from './services/ngx-connection-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-connection-status',
  templateUrl: './ngx-connection-status.component.html',
  styleUrls: ['./ngx-connection-status.component.css']
})
export class NgxConnectionStatusComponent implements OnInit, OnDestroy {

  isOnline: boolean =  true;
  fresh: boolean = true;
  subscription: Subscription;

  constructor(private cs: NgxConnectionStatusService) { }

  ngOnInit() {
    this.subscription = this.cs.statusHook().subscribe(isOnline => {
      if (isOnline) {
        this.isOnline = true;
      } else {
        this.isOnline = false;
        this.fresh = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

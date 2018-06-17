import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxConnectionStatusComponent } from './ngx-connection-status.component';
import { NgxConnectionStatusService } from './services/ngx-connection-status.service';
import { ConnectionStatusConfig } from './models/connection-status-config';
import { CONNECTION_STATUS_CONFIG } from './injection-tokens/connection-status-config.token';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [NgxConnectionStatusComponent],
  exports: [NgxConnectionStatusComponent],
  // providers: [NgxConnectionStatusService]
})
export class NgxConnectionStatusModule {

  static forRoot(config: ConnectionStatusConfig) : ModuleWithProviders {
    return {
      ngModule: NgxConnectionStatusModule ,
      providers: [
        NgxConnectionStatusService,
        {
          provide: CONNECTION_STATUS_CONFIG,
          useValue: config
        }
      ],

    }
  }
}

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxConnectionStatusComponent } from './ngx-connection-status.component';
import { NgxConnectionStatusService } from './services/ngx-connection-status.service';
import { FeedbackPositionDirective } from './directives/feedback-position.directive';
import { ConnectionStatusConfig } from './models/connection-status-config';
import { CONNECTION_STATUS_CONFIG } from './injection-tokens/connection-status-config.token';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [NgxConnectionStatusComponent, FeedbackPositionDirective],
  exports: [NgxConnectionStatusComponent, FeedbackPositionDirective],
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

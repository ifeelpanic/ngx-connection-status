import { Component, OnInit } from '@angular/core';
import { NgxConnectionStatusService } from './services/ngx-connection-status.service';

@Component({
  selector: 'ngx-connection-status',
  templateUrl: './ngx-connection-status.component.html',
  styles: []
})
export class NgxConnectionStatusComponent implements OnInit {

  text: string;

  constructor(private cs: NgxConnectionStatusService) { }

  ngOnInit() {
    this.cs.statusHook().subscribe(isOnline => {
      if (isOnline) {
        this.text = 'online';
      } else {
        this.text = 'offline';
      }
    });
  }

}

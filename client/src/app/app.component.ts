import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on("Server-send-data", data => {
      alert(data);
    });
  }

  onClickSent() {
    this.socket.emit('Client-send-data', "HELLO");
  }
}

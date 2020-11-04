import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: string;
  arMsg = ["123", "456"];
  msg: string;
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on("Server-send-data", data => {
      this.arMsg.push(data);
    });

    this.socket.on("ai do dang go chu", () => {
      this.msg = "ai do dang go chu...";
    });

    this.socket.on("ai do ngung go chu", () => {
      this.msg = "";
    });
  }

  onClickSentData() {
    this.socket.emit('Client-send-data', this.data);
    this.data = "";
    this.socket.emit("ai do ngung go chu");
  }

  onFocusIn(ev) {
    console.log(ev);
    this.socket.emit("ai do dang go chu");
  }
}

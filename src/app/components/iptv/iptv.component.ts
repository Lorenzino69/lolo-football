import { Component, OnInit } from '@angular/core';
import DPlayer from 'dplayer';



@Component({
  selector: 'app-iptv',
  templateUrl: './iptv.component.html',
  styleUrls: ['./iptv.component.css']
})
export class IptvComponent implements OnInit {

  constructor(private window: Window) {

}

  ngOnInit(): void {
    this.initPlayers();

  }
   initPlayers() {
    // const dp6 = new DPlayer(options);
     new DPlayer({
      container: document.getElementById('dplayer6'),
      preload: 'none',
      live: true,
      danmaku: true,
      apiBackend: {
        read: function (endpoint, callback) {
          console.log('假装 WebSocket 连接成功');
          // callback();
        },
        send: function (endpoint, danmakuData, callback) {
          console.log('假装通过 WebSocket 发送数据', danmakuData);
          // callback();
        }
      },
      video: {
        url: 'http://185.177.125.86:3333/sunshine/fUphGuJYr3ipMYML-e6wu44kPxHvVdLMXO5JnLiK3ztQGmx43AlI8WZvMGeAe61vxl-iGZlrGrDqDCtVI1l1Ic1GKVJLGqPHBVuztmso6r88eUxdng4mTq4aH2I7rhL7bcMN8oYPgjPcc3EPZTHf_YmUrBZtHPyrXBjfSHUpgCiWaOSUx0o6-3RFoCf7WB9T/hls/index.m3u8',
        type: 'hls'
      }
    });
  }

}

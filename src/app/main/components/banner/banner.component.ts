import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  endtime: string = 'September 28 2019 16:00:0 GMT+0100'
  timeLeft: any;

  constructor() { }

  ngOnInit() {
    this.initializeClock(this.endtime);
  }

  getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date().toString());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': ('0' + days).slice(-2),
      'hours': ('0' + hours).slice(-2),
      'minutes': ('0' + minutes).slice(-2),
      'seconds': ('0' + seconds).slice(-2)
    };
  }

  initializeClock(endtime){
    const timeinterval = setInterval(() => {
    this.timeLeft = this.getTimeRemaining(this.endtime);
      if (this.timeLeft.total <=0 ){
        clearInterval(timeinterval);
      }
    }, 1000);
  }
}

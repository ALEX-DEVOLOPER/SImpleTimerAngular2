import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Stopwatch';
  
  interval;
  time = new Date(null);

  startTimer(){
    this.interval = setInterval(() => {
    this.time.setSeconds(this.time.getSeconds() + 1 );
    },1000);
  }

  pauseTimer(){
    clearImmediate(this.interval)
  }

  resetTimer(){
    this.time.setSeconds(0);
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DatareturnService } from './datareturn.service';
import { ReportsService } from './reports.service';
import { StartimeService } from './startime.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hourHandStyle;
  minuteHandStyle;
  secondHandStyle;
  wallColor;
  hourHandColor;
  faceColor;
  wallStyle;
  faceStyle;
  data_from_django: any;
  report_from_django: [];
  task_start_program_time;
  task_event_type;
  number_of_servers_running;

  isRunning = true;
  timerId: any;

  date: Date;
  hour: number;
  minute: number;
  second: number;
  time:any = "2015-03-25T12:00:00";

  // ngAfterViewInit() {
  //   this.timerId = this.getTime();
  // }

  animateAnalogClock() {
    
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)`};

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };

    this.wallStyle = { backgroundColor: this.wallColor };

    this.hourHandStyle = { backgroundColor: this.hourHandColor };

    this.faceStyle =  { backgroundColor: this.faceColor };

  }

  constructor(private datareturnService : DatareturnService, private getreport : ReportsService,private startime : StartimeService) { }
  

  getTime() {
    this.startime.startime().subscribe(
      (res) => {
        console.table('timer started')
      },
      (err) => {
        console.log(err)
      }
    )
    return setInterval(() => {
      this.date = new Date(this.time);
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();
      this.animateAnalogClock();
      this.time = this.date.setSeconds(this.date.getSeconds() + 1)
    }, 1000);

  }


  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  




  getData(){
  return setInterval(() => {
    this.datareturnService.getData().subscribe(
      (res) => {
        this.data_from_django = res;
        this.wallColor = this.data_from_django.clock_wall_color;
        this.hourHandColor = this.data_from_django.clock_hand_color;
        this.faceColor = this.data_from_django.clock_face_color;
        this.number_of_servers_running = this.data_from_django.number_of_servers_running;
        this.task_event_type = this.data_from_django.task_event_type;
        this.task_start_program_time = this.data_from_django.task_start_program_time;
        console.log(this.data_from_django);
      },
      (err) => {
        console.log(err)
      }
    )
  },1000)
}

getReport(){
  this.getreport.getReport().subscribe(
    (res) => {
      this.report_from_django = res;
      console.table(this.report_from_django)
    },
    (err) => {
      console.log(err)
    }
  )
}



}

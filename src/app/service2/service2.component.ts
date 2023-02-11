import { Component, OnInit } from '@angular/core';
import { DistinctcomponentService } from '../distinctcomponent.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit{
constructor(private distinctservice:DistinctcomponentService){}
resultmessage!:string;
ngOnInit(): void {
  this.distinctservice.teachermessage$.subscribe((messge) => {
    if(messge === 'Good Morning'){
      // alert('Good Morning Teacher')
      this.resultmessage = 'Good Morning Teacher'
    } else if(messge === 'Well Done'){
      // alert('Thank You Teacher')
      this.resultmessage = 'Thank You Teacher'
    }
  })
}
}

import { Component } from '@angular/core';
import { DistinctcomponentService } from '../distinctcomponent.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component {
  constructor(private componetservice:DistinctcomponentService){}
  greetStudent(){
    this.componetservice.sendMessage('Good Morning');
  }
  appreciateStudent() {
    this.componetservice.sendMessage('Well Done');
  }
}

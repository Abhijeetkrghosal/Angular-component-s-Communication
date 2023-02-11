import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
 @Input() isLoggedIn!:boolean;
 @Input() message! :string;
 setgetmessage! :string;
 private logIn!:boolean;
 templaterefvariable = 'templaterefvariable';
 @Input() ngonchangestring = 'ngonchange value'


 get LoggedIn() :boolean{
  return this.logIn;;
 }

  @Input() set loggedIn(value:boolean) {
  this.logIn = value;
  if(value === true){
    this.setgetmessage = 'getsetmessage is true'
  } else {
    this.setgetmessage = 'getsetmessage is false'
  }
 }

 ngOnChanges(changes:SimpleChanges){
  console.log(changes)
 }

 templaterefvarmethod() {
  this.message = 'i am coming from child using template  reference variable'
 }
}

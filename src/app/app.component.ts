import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import { DistinctcomponentService } from './distinctcomponent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular-Component-Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name!:string;
  private _testname!:string;

  userLoggedIn = true;
  @ViewChild('nameRef')  nameElementRef!:ElementRef;
  get getsetName():string{
    return this._testname;
  }

  set getsetName(value:string){
    this._testname = value;
    if(value === 'Abhijeet') alert('hi Abhijeet')
  }
  incrementCOunt() {
    this.count += 1;
  }
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

}

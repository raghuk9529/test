import { Component,Inject } from '@angular/core';
import { appService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj;
  constructor(private appservice:appService){}

      fun1()
      {
          this.appservice.getData().subscribe(function(x)
          {
             alert(x._body)
          })
      }
     
}

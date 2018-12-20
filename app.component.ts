import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./login/login.component.html`,
  styleUrls:['./login/login.css']

})
export class AppComponent {

  constructor( public route: Router){}

  rect():void
    {
      this.route.navigate(['/home']);
    }
}

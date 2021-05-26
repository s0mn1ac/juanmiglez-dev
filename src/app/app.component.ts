import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent {

  public prepareRoute(outlet: RouterOutlet): any {
    console.log(outlet)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

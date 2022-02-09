import { Component } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private appService: AppService) { }

  public navigateTo(name: string): void {
    this.appService.navigationService.navigateTo(name);
  }

  public navigateByUrl(url: string): void {
    window.open(url, '_blank');
  }

}

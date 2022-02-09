import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private appService: AppService) {
    //
  }

  ngOnInit(): void {
    //
  }

  public navigateTo(name: string): void {
    this.appService.navigationService.navigateTo(name);
  }

  public navigateByUrl(url?: string): void {
    if (url == null) {
      return;
    }
    window.open(url, '_blank');
  }

}

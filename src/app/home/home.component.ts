import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public wordArray!: string[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.buildWOrdArray();
  }

  private buildWOrdArray(): void {

    this.wordArray = [
        this.appService.translocoService.translate('home.phrases.phrase1'),
        this.appService.translocoService.translate('home.phrases.phrase2'),
        this.appService.translocoService.translate('home.phrases.phrase3'),
        this.appService.translocoService.translate('home.phrases.phrase4'),
        this.appService.translocoService.translate('home.phrases.phrase5'),
        this.appService.translocoService.translate('home.phrases.phrase6'),
    ];
  }


}

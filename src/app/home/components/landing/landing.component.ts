import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  private transloco$!: Subscription;

  public wordArray!: string[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.buildWordArray();
    this.initSubscriptions();
  }

  private buildWordArray(): void {

    this.wordArray = [
      this.appService.translocoService.translate('home.landing.phrases.phrase1'),
      this.appService.translocoService.translate('home.landing.phrases.phrase2'),
      this.appService.translocoService.translate('home.landing.phrases.phrase3'),
      this.appService.translocoService.translate('home.landing.phrases.phrase4'),
      this.appService.translocoService.translate('home.landing.phrases.phrase5'),
      this.appService.translocoService.translate('home.landing.phrases.phrase6'),
    ];
  }

  private initSubscriptions(): void {

    this.transloco$ = this.appService.translocoService.selectTranslation().subscribe(() => {
      // sessionStorage.setItem('active-lang', this.appService.translocoService.getActiveLang());
      this.buildWordArray();
    });
  }

  private destroySubscriptions(): void {

    if (this.transloco$ != null) {
      this.transloco$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroySubscriptions();
  }

}
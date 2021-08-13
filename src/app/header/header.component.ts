import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedLanguage!: any;

  public languages!: any[];

  public isSidebarVisible = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.initLanguageSelector();
  }

  private initLanguageSelector(): void {

    this.languages = [
      { id: 'es', name: 'es', icon: '../../assets/images/flags/spain.png' },
      { id: 'en', name: 'en', icon: '../../assets/images/flags/united-kingdom.png' },
    ];

    this.selectedLanguage = this.languages[0];
  }

  public changeLanguage(): void {
    this.appService.translocoService.setActiveLang(this.selectedLanguage.id);
  }

  public toggleSidebar(): void {
    this.isSidebarVisible = ! this.isSidebarVisible;
  }

}
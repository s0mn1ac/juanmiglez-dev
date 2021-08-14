import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {

  public darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  public switchValue!: boolean;

  constructor(private darkModeService: DarkModeService) {}

  public async onToggle(): Promise<void> {
    this.darkModeService.toggle();
    console.log(this.darkMode$)
  }

}

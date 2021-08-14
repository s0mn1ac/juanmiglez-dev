import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private fragment!: string;

  private route$!: Subscription;
  private navigation$!: Subscription;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.initSubscriptions();
  }

  ngAfterViewInit(): void {

    try {
      document?.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (e) {
      console.warn('e');
    }
  }

  private navigateTo(route: string): void {
    this.router.navigate([''], {fragment: route}).then(() => document.getElementById(route)?.scrollIntoView({behavior: 'smooth'}));
  }

  private initSubscriptions(): void {
    this.destroySubscriptions();
    this.route$ = this.route.fragment.subscribe(fragment => this.fragment = fragment);
    this.navigation$ = this.appService.navigationService.navigationObservable.subscribe( async (route: string) => this.navigateTo(route));
  }

  private destroySubscriptions(): void {

    if (this.route$ != null) {
      this.route$.unsubscribe();
    }

    if (this.navigation$ != null) {
      this.navigation$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroySubscriptions();
  }

}
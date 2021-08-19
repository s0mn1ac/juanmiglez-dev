import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('home') home!: ElementRef;

  // public items: any[] = [];

  private fragment!: string;

  private route$!: Subscription;
  private navigation$!: Subscription;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initSubscriptions();
    // setTimeout(() => this.initParallaxItems(), 1);
  }

  ngAfterViewInit(): void {

    try {
      document?.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (e) {
      console.warn('e');
    }
  }

  // private initParallaxItems(): void {

  //   const height = this.home.nativeElement.scrollHeight;
  //   const width = this.home.nativeElement.clientWidth;
  //   const ratio = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  //   for (let index = 0; index < 20; index++) {
  //     const item: any = {};
  //     item.xAxis = Math.floor(Math.random() * (width - 0)) + 0;
  //     item.yAxis = Math.floor(Math.random() * (height - 0)) + 0;
  //     item.ratio = ratio[Math.floor(Math.random() * (ratio.length - 0)) + 0];
  //     item.url = '../../../../assets/images/others/about.svg';
  //     this.items.push(item);
  //   }

  //   console.log(this.items)
  // }

  private navigateTo(route: string): void {
    this.router.navigate([''], {fragment: route}).then(() => document.getElementById(route)?.scrollIntoView({behavior: 'smooth'}));
  }

  private initSubscriptions(): void {
    this.destroySubscriptions();
    this.route$ = this.route.fragment.subscribe(fragment => this.fragment = fragment);
    this.navigation$ = this.appService.navigationService.navigationObservable.subscribe( async (route: string) => route ? this.navigateTo(route) : console.log('👀 Nothing to see here...'));
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
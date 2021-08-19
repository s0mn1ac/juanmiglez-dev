import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../shared/modules/core/core.module';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TypeDeleteComponent } from '../shared/components/type-delete/type-delete.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ParallaxComponent } from '../shared/components/parallax/parallax.component';

@NgModule({
  declarations: [HomeComponent, TypeDeleteComponent, ParallaxComponent, LandingComponent, ContactComponent, AboutComponent, PortfolioComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule,
    PrimengModule
  ],
  providers: []
})
export class HomeModule { }
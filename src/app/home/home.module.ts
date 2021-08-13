import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../shared/modules/core/core.module';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TypeDeleteComponent } from '../shared/components/type-delete/type-delete.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [HomeComponent, TypeDeleteComponent, LandingComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule,
    PrimengModule
  ],
  providers: []
})
export class HomeModule { }
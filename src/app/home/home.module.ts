import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../shared/modules/core/core.module';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TypeDeleteComponent } from './type-delete/type-delete.component';



@NgModule({
  declarations: [HomeComponent, TypeDeleteComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule,
    PrimengModule
  ],
  providers: []
})
export class HomeModule { }

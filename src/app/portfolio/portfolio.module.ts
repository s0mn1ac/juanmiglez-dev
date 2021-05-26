import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../shared/modules/core/core.module';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    CoreModule,
    PrimengModule
  ],
  providers: []
})
export class PortfolioModule { }

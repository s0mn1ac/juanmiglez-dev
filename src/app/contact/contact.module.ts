import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../shared/modules/core/core.module';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutingModule,
    CommonModule,
    CoreModule,
    PrimengModule
  ],
  providers: []
})
export class ContactModule { }

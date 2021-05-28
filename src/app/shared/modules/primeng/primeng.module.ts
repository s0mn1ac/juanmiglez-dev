import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DropdownModule,
    SidebarModule
  ]
})
export class PrimengModule { }

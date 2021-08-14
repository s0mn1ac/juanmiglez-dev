import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DropdownModule,
    SidebarModule,
    InputSwitchModule
  ]
})
export class PrimengModule { }
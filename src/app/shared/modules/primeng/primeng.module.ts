import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DividerModule,
    DropdownModule,
    InputSwitchModule,
    SidebarModule
  ]
})
export class PrimengModule { }
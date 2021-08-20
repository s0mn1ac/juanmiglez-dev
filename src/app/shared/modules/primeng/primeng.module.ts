import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DividerModule,
    DropdownModule,
    InputSwitchModule,
    ScrollTopModule,
    SidebarModule,
    ProgressBarModule
  ]
})
export class PrimengModule { }
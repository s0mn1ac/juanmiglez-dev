import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './shared/modules/core/core.module';
import { PrimengModule } from './shared/modules/primeng/primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoInitializer } from './config/initializers/transloco.initializer';
import { TranslocoRootModule } from './config/transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CoreModule.forRoot(), PrimengModule, RouterModule, HttpClientModule, TranslocoRootModule],
  providers: [TranslocoInitializer],
  bootstrap: [AppComponent]
})
export class AppModule { }
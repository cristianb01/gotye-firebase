import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalGraphBarComponent } from './horizontal-graph-bar/horizontal-graph-bar.component';

@NgModule({
  declarations: [NavbarComponent, HorizontalGraphBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    HorizontalGraphBarComponent
  ]
})
export class ComponentsModule { }

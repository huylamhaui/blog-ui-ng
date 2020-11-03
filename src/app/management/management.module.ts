import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ManagementLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }

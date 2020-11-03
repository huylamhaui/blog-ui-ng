import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatTreeModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule
]


@NgModule({
  declarations: [AdminMenuComponent],
  imports: [
    CommonModule,
    MATERIAL_MODULE
  ],
  exports: [
    AdminMenuComponent,
    MATERIAL_MODULE
  ]
})
export class SharedModule { }

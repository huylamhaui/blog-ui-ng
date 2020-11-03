import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryPageComponent } from './containers/category-page/category-page.component';
import { CategoryImportComponent } from './containers/category-import/category-import.component';
import { CategoryTreeComponent } from './components/category-tree/category-tree.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoryPageComponent, CategoryImportComponent, CategoryTreeComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }

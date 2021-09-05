import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
//import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//import { MatNativeDateModule } from '@angular/material/core';

const MaterialComponents = [
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  //MatProgressSpinnerModule,
  //MatNativeDateModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [
    ...MaterialComponents
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/product/edit/edit.component';
import { ListComponent } from './pages/product/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product/list', component: ListComponent },
      { path: 'product/edit/:id', component: EditComponent },
      { path: 'product/new', component: EditComponent,  pathMatch: 'full' },
      { path: '**', component: ListComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

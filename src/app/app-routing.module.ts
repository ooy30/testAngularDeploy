import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataDialogTestComponent } from './panges/test/add-data-dialog-test/add-data-dialog-test.component';
import { TestComponent } from './panges/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
  {
    path: 'test1',
    component: AddDataDialogTestComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

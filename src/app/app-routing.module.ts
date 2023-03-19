import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'card-form'},
  {path: '', children: [
    {path: 'card-form', component: CardFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

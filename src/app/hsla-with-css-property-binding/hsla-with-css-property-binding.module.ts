import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HslaComponent } from './hsla.component';


const routes: Routes = [
  { path: '', component: HslaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HslaComponent]
})
export class HslaWithCssPropertyBindingModule { }
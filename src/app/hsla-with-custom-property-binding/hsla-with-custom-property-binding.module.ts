import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HslaDivScopeComponent } from './hsla-div-scope/hsla-div-scope.component';
import { HslaMainScopeComponent } from './hsla-main-scope/hsla-main-scope.component';
import { HslaHostbindingComponent } from './hsla-hostbinding/hsla-hostbinding.component';
import { HslaBoxShadowComponent } from './hsla-box-shadow/hsla-box-shadow.component';

const routes = [
  { path: '', component: HslaDivScopeComponent },
  { path: 'main-scope', component: HslaMainScopeComponent },
  { path: 'hostbinding', component: HslaHostbindingComponent },
  { path: 'box-shadow', component: HslaBoxShadowComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HslaDivScopeComponent, HslaMainScopeComponent, HslaHostbindingComponent, HslaBoxShadowComponent, ]
})
export class HslaWithCustomPropertyBindingModule { }
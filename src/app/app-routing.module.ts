import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'css-property-binding', loadChildren: () => import('./hsla-with-css-property-binding/hsla-with-css-property-binding.module').then(m => m.HslaWithCssPropertyBindingModule) },
  { path: 'custom-property-binding', loadChildren: () => import('./hsla-with-custom-property-binding/hsla-with-custom-property-binding.module').then(m => m.HslaWithCustomPropertyBindingModule) },
  { path: 'custom-property', loadChildren: () => import('./hsla-with-custom-property/hsla-with-custom-property.module').then(m => m.HslaWithCustomPropertyModule) },
  { path: '', redirectTo: '/custom-property-binding/box-shadow', pathMatch: 'full', },
  { path: '**', redirectTo: '/custom-property-binding/box-shadow'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
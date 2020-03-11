import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
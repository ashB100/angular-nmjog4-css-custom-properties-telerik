import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsla-hostbinding',
  templateUrl: './hsla-hostbinding.component.html',
  styleUrls: ['./hsla-hostbinding.component.css']
})
export class HslaHostbindingComponent  {
  hue = new FormControl(280);
  saturation = new FormControl(100);
  lightness = new FormControl(40);
  opacity = new FormControl(1);

  mode = new FormControl('overlay');
  blendMode = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  
  @HostBinding('style.--user-selected-color') get hslaColor() {
    return `hsla(${this.hue.value}, ${this.saturation.value}%, ${this.lightness.value}%, ${this.opacity.value})`;
  }

}
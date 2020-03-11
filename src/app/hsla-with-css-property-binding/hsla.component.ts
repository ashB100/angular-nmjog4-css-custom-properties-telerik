import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsla',
  templateUrl: './hsla.component.html',
  styleUrls: ['./hsla.component.css']
})
export class HslaComponent {
  hue = new FormControl(180);
  saturation = new FormControl('100');
  lightness = new FormControl('40');
  opacity = new FormControl(1);

  getColor() {
    return `hsla(${this.hue.value},
      ${this.saturation.value}%,
      ${this.lightness.value}%,
      ${this.opacity.value})`;
  }

}
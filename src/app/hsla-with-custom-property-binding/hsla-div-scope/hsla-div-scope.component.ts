import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsla-div-scope',
  templateUrl: './hsla-div-scope.component.html',
  styleUrls: ['./hsla-div-scope.component.css']
})
export class HslaDivScopeComponent implements OnInit {
  hue = new FormControl(320);
  saturation = new FormControl(100);
  lightness = new FormControl(40);
  opacity = new FormControl(1);
  constructor() { }

  ngOnInit() {
  }

}
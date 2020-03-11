import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsla-main-scope',
  templateUrl: './hsla-main-scope.component.html',
  styleUrls: ['./hsla-main-scope.component.css']
})
export class HslaMainScopeComponent implements OnInit {
  hue = new FormControl(240);
  saturation = new FormControl(100);
  lightness = new FormControl(40);
  opacity = new FormControl(1);
  
  constructor() { }

  ngOnInit() {
  }

}
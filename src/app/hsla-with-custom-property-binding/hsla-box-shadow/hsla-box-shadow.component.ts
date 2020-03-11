import { Component, OnInit, HostBinding } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-hsla-box-shadow",
  templateUrl: "./hsla-box-shadow.component.html",
  styleUrls: ["./hsla-box-shadow.component.css"]
})
export class HslaBoxShadowComponent {
  hue = new FormControl(0);
  saturation = new FormControl(100);
  lightness = new FormControl(40);
  opacity = new FormControl(1);


  constructor() {}
}

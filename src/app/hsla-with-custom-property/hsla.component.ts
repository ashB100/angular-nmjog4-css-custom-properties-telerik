import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hsla',
  templateUrl: './hsla.component.html',
  styleUrls: ['./hsla.component.css']
})
export class HslaComponent implements OnInit {
  hslaForm = this.fb.group({
    hue: [40],
    saturation: [100],
    lightness: [50],
    opacity: [1]
  });

  @ViewChild('mainRef', {static: true}) mainRef;

  get hue() {
    return this.hslaForm.get('hue');
  }

  get saturation() {
    return this.hslaForm.get('saturation');
  }

  get lightness() {
    return this.hslaForm.get('lightness');
  }

  get opacity() {
    return this.hslaForm.get('opacity');
  }
  
  subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setCssProperties({
      hue: this.hue.value,
      saturation: this.saturation.value,
      lightness: this.lightness.value,
      opacity: this.opacity.value
    });

    this.subscription = this.hslaForm.valueChanges.subscribe(value => this.setCssProperties(value));
  }

  setCssProperties(value) {
    const style = this.mainRef.nativeElement.style;
    style.setProperty('--hue', value.hue);
    style.setProperty('--saturation', `${value.saturation}%`);
    style.setProperty('--lightness', `${value.lightness}%`);
    style.setProperty('--opacity', value.opacity);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
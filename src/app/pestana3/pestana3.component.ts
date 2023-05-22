import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pestana3',
  templateUrl: './pestana3.component.html',
  styleUrls: ['./pestana3.component.css']

})
export class Pestana3Component implements OnInit {
    currencyForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
      this.currencyForm = this.formBuilder.group({
        euros: 0,
        pounds: 0,
        poundsToEuros: 0,
        eurosToPounds: 0
      });
    }
  
    ngOnInit() {
      this.currencyForm = this.formBuilder.group({
        euros: 0,
        pounds: 0,
        poundsToEuros: 0,
        eurosToPounds: 0
      });
    }
  
    convertToPounds() {
      const euros = this.currencyForm.value.euros;
      const pounds = euros * 0.86; 
      this.currencyForm.patchValue({ pounds: pounds.toFixed(2) }, { emitEvent: false });
    }
  
    convertToEuros() {
      const pounds = this.currencyForm.value.pounds;
      const euros = pounds / 0.86; 
      this.currencyForm.patchValue({ euros: euros.toFixed(2) }, { emitEvent: false });
    }
  
    convertToPoundsFromEuros() {
      const euros = this.currencyForm.value.eurosToPounds;
      const pounds = euros * 0.86; 
      this.currencyForm.patchValue({ poundsToEuros: pounds.toFixed(2) }, { emitEvent: false });
    }
  
    convertToEurosFromPounds() {
      const pounds = this.currencyForm.value.poundsToEuros;
      const euros = pounds / 0.86; 
      this.currencyForm.patchValue({ eurosToPounds: euros.toFixed(2) }, { emitEvent: false });
    }
  }
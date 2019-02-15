import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  myForm: FormGroup;

  
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([Validators.required, this.skuValidator])]
    });

    this.myForm.valueChanges.subscribe((form: any)=> {
      console.log('form changed to', form);
    });

    this.myForm.controls.sku.valueChanges.subscribe((value: string) => {
      console.log('value changed to : ', value);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log('form submitted: ', form);
  }

  skuValidator(control: FormControl): {[s: string]: boolean}{
    if(!control.value.match(/^123/))
      return {invalidSku: true};

    return null;
  }

}

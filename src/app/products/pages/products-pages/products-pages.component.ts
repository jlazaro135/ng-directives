import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './products-pages.component.html',
  styleUrls: ['./products-pages.component.css']
})
export class ProductsPagesComponent {

  private _fb = inject(FormBuilder);

  public get fb() {
    return this._fb;
  }
  public set fb(value) {
    this._fb = value;
  }
    // constructor(private fb:FormBuilder){}

  public color: string = 'green';

  public myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}

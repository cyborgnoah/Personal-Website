import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit
{
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit()
  {
    this.formGroup= this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({          
       }),
       this._formBuilder.group({
       }),
       this._formBuilder.group({
       }),
       this._formBuilder.group({
       })
      ])
    });
  }


}

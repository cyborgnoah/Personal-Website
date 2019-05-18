import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
          fullName:'',
          designation:'',
          mobile_number:'',
          email:''
       }),
       this._formBuilder.group({
         company_name:'',
         company_url:''
       }),
       this._formBuilder.group({
         role:'',
         skill:'',
         ctc:'',
         brief:''
       })
      ])
    });
  }

  submitHireMe(data)
  {
  /*this.db.collections('contact-hire-me').add({
    name: data.formArray[0].fullName,
    designation: data.formArray[0].designation,
    mobile_number: data.formArray[0].mobile_number,
    email: data.formArray[0].email,
    company_name: data.formArray[1].company_name,
    company_url: data.formArray[1].company_url,
    role: data.formArray[2].role,
    skill: data.formArray[2].skill,
    ctc: data.formArray[2].ctc,
    brief: data.formArray[2].brief
  });*/
  }

}

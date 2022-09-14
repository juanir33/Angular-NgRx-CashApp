import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  classValid: string = 'valid'
  registerForm: FormGroup;
  constructor( private form: FormBuilder) {

    this.registerForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {


  }

  createUser(){
    console.log(this.registerForm.valid);
    
  }

}

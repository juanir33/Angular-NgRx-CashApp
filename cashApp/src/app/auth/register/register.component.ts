import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  classValid: string = 'valid'
  registerForm: FormGroup;
  constructor( private form: FormBuilder, private router: Router, private authService: AuthService) {

    this.registerForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {


  }

  createUser(){
    const {name, email, password} = this.registerForm.value;
    this.authService.createUser(name, email, password)
    .then( credentials => {
      console.log(credentials);
      
    })
    .catch( err => console.error(err));     
    
  }

}

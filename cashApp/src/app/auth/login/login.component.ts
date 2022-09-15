import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor( private form: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    

  }

  loginUser(){
    if(this.loginForm.invalid){return ;}

    Swal.fire({
      title: 'Espere por favor...',
      didOpen: () => {
        Swal.showLoading()
      }
    })
    const {email, password} = this.loginForm.value;

    this.auth.loginUser(email, password)
    .then( user => {
      console.log(user);
      Swal.close();
      this.router.navigate(['/'])     
    })
    .catch( err => Swal.fire({title: 'Erro', icon: 'error', text: err.message})
        
      );


  }

}

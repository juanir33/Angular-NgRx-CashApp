import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { isLoading } from 'src/app/shared/ui.actions';
import { stopLoading } from '../../shared/ui.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginForm: FormGroup;
  loading: boolean = false;
  loadSubs!: Subscription;
  constructor(private store: Store<AppState>, private form: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  

  ngOnInit(): void {

    this.loadSubs = this.store.select('ui')
       .subscribe( state => {
        this.loading = state.isLoading;
       })

  }
  
  ngOnDestroy(): void {
    this.loadSubs.unsubscribe();
  }


  loginUser(){
    if(this.loginForm.invalid){return ;}

    this.store.dispatch(isLoading());
    const {email, password} = this.loginForm.value;

    this.auth.loginUser(email, password)
    .then( user => {
      console.log(user);
      setTimeout(()=> { 
        this.store.dispatch(stopLoading());
        this.router.navigate(['/']) ;
      }, 2000);
      
    })
    .catch( err => Swal.fire({title: 'Erro', icon: 'error', text: err.message})
        
      );


  }

}

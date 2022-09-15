import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { isLoading, stopLoading } from '../../shared/ui.actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  classValid: string = 'valid'
  registerForm: FormGroup;
  loading!: boolean;
  loadSubscription!: Subscription;
  constructor( private store: Store<AppState>, private form: FormBuilder, private router: Router, private authService: AuthService) {

    this.registerForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }
  

  ngOnInit(): void {

   this.loadSubscription =   this.store.select('ui')
      .subscribe( state => {
        this.loading = state.isLoading
      })


  }

  ngOnDestroy(): void {
    this.loadSubscription.unsubscribe()
  }

  createUser(){
    this.store.dispatch(isLoading())
    const {name, email, password} = this.registerForm.value;
    this.authService.createUser(name, email, password)
    .then( credentials => {
      this.store.dispatch(stopLoading())
      console.log(credentials);
      
    })
    .catch( err => { setTimeout(()=>{ this.store.dispatch(stopLoading())}, 2000);  console.error(err)});     
    
  }

}

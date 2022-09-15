import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { setUser, unSetUser } from '../auth/auth.actions';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $userSubs!: Subscription;

  constructor( public auth: AngularFireAuth, public firestore: AngularFirestore, private store: Store<AppState>) { }


  createUser(name: string, email: string, password:string){

    
    return this.auth.createUserWithEmailAndPassword( email, password)
    .then( ({user}) => {return this.saveData(name, email, user!.uid)} )

  }

  loginUser(email: string, password:string){

    return this.auth.signInWithEmailAndPassword(email, password)
  }

  activeUser(){

    this.auth.authState.subscribe( user =>{
      console.log(user);
      if(user){
      this.$userSubs = this.firestore.doc<User>(`${user?.uid}/users`)
        .valueChanges().subscribe( userData  => {        
          this.store.dispatch(setUser({user: userData!}))
        })}
      else{
        this.store.dispatch(unSetUser())
        this.$userSubs.unsubscribe()
      }
      
    })

  }

  logOut(){
   return this.auth.signOut();
    
  }

  isAuth(){
    return this.auth.authState.pipe(
      map( user => user!== null)
    )
  }

  saveData(name: string, email: string, uid: string){
    return  this.firestore.doc(`${uid}/users`)
    .set({
      name: name,
      email: email,
      uid: uid
    })
  }

}

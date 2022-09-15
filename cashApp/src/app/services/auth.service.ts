import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) { }


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
      
    })

  }

  logOut(){
    this.auth.signOut();
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

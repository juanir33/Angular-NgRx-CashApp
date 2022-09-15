import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { User } from '../../auth/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User;
  email!: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe( user => {
      console.log (user);
      this.user = user.user!;
      
      console.log (this.user.email)
     })
  }

}

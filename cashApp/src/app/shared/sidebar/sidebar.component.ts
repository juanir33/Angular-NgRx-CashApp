import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userAct!: User;
  constructor(private store: Store<AppState>,private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.store.select('user').subscribe( user => {
      this.userAct = user.user!
    })
  }

  logOut(){
    this.authService.logOut().then(
      () =>  Swal.fire({
        
        title: 'Nos vemos pronto ' + this.userAct.name,
        timer: 2000,
        didOpen: () => {
          Swal.showLoading()
        },
        didClose:() => {this.router.navigate(['/login'])}
        
      })
    )
  }

}

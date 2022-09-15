import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService ){}
  canActivate(
    ): Observable<boolean>{

    return  this.authService.isAuth().pipe(
        tap( user => {
          if(!user){
            Swal.fire({title: 'Sin Permisos!!', text: 'Volviendo login', timer: 2000, didOpen: ()=> Swal.showLoading()}).then(()=> {
            this.router.navigate(['/login'])})
          }
        })
      )


    
  }
  
}

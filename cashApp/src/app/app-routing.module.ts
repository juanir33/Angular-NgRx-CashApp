import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { childrenRoutes } from './pages/dashboard/childroutes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [{path: '', component: DashboardComponent, children: childrenRoutes},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

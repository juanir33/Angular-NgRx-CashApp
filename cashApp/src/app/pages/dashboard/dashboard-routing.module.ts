import { Route, Routes, RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { childrenRoutes } from './childroutes';


const routes: Routes = [
    {path:'', component: DashboardComponent, children: childrenRoutes}



]

@NgModule({
	declarations:[],
	imports:[RouterModule.forChild( routes)],
	exports:[RouterModule]
})

export class DashboardRoutesModule{}
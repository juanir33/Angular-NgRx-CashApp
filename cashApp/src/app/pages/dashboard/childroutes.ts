import { Routes } from "@angular/router";
import { DetailsComponent } from "src/app/components/details/details.component";
import { IncomeOutflowComponent } from "src/app/components/income-outflow/income-outflow.component";
import { StatisticsComponent } from "src/app/components/statistics/statistics.component";


export const childrenRoutes : Routes = [
	{path: 'details', component: DetailsComponent},
	{path: 'income-outflow', component: IncomeOutflowComponent},
	{path: '', component: StatisticsComponent}
]
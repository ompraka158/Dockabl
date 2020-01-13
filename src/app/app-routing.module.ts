import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectiveComponent } from './core/components/objective/objective.component';
import { CreateObjectiveComponent } from './core/components/create-objective/create-objective.component';
import { appConstants } from './core/constants/appConstants';


const routes: Routes = [
  {
    path: '',
    component: ObjectiveComponent
  },
  {
    path: 'objective',
    component: ObjectiveComponent,
  },
  {
    path: 'objective/create-objective',
    component: CreateObjectiveComponent,
    data: {
      routeLink: appConstants.messages.createObjective
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

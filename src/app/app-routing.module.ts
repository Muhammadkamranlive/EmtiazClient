import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MycoursesComponent } from './Components/mycourses/mycourses.component';
import { SchoolclassesComponent } from './Components/schoolclasses/schoolclasses.component';
import { MySubjectsComponent } from './Components/my-subjects/my-subjects.component';
import { MychapterComponent } from './Components/mychapter/mychapter.component';
import { MyexercisesComponent } from './Components/myexercises/myexercises.component';
import { MyquizeaComponent } from './Components/myquizea/myquizea.component';
import { MyquizresultComponent } from './Components/myquizresult/myquizresult.component';
import { SignOutComponent } from './Components/sign-out/sign-out.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SocialProfileComponent } from './Components/social-profile/social-profile.component';
import { SequirtyComponent } from './Components/sequirty/sequirty.component';
import { LoginComponent } from './Components/login/login.component';
import { LinkedAccountsComponent } from './Components/linked-accounts/linked-accounts.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"class",
    component:SchoolclassesComponent
  },
  {
    path:"subject",
    component:MySubjectsComponent
  },
  {
    path:"chapter",
    component:MychapterComponent
  },
  {
    path:"course",
    component:MycoursesComponent
  },
  {
    path:"exercise",
    component:MyexercisesComponent
  },
  {
    path:"quiz",
    component:MyquizeaComponent
  },
  {
    path:"result",
    component:MyquizresultComponent
  },
  {
    path:"logout",
    component:SignOutComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"social",
    component:SocialProfileComponent
  },
  {
    path:"sequirty",
    component:SequirtyComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"linked",
    component:LinkedAccountsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

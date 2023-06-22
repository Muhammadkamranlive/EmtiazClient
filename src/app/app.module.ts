import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { BottomNavComponent } from './Components/bottom-nav/bottom-nav.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { LinkedAccountsComponent } from './Components/linked-accounts/linked-accounts.component';
import { LoginComponent } from './Components/login/login.component';
import { MySubjectsComponent } from './Components/my-subjects/my-subjects.component';
import { MycoursesComponent } from './Components/mycourses/mycourses.component';
import { MychapterComponent } from './Components/mychapter/mychapter.component';
import { MyquizeaComponent } from './Components/myquizea/myquizea.component';
import { MyquizresultComponent } from './Components/myquizresult/myquizresult.component';
import { MyexercisesComponent } from './Components/myexercises/myexercises.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SocialProfileComponent } from './Components/social-profile/social-profile.component';
import { SignOutComponent } from './Components/sign-out/sign-out.component';
import { SchoolclassesComponent } from './Components/schoolclasses/schoolclasses.component';
import { SequirtyComponent } from './Components/sequirty/sequirty.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BottomNavComponent,
    DashboardComponent,
    HeaderComponent,
    LinkedAccountsComponent,
    LoginComponent,
    MySubjectsComponent,
    MycoursesComponent,
    MychapterComponent,
    MyquizeaComponent,
    MyquizresultComponent,
    MyexercisesComponent,
    ProfileComponent,
    SocialProfileComponent,
    SignOutComponent,
    SchoolclassesComponent,
    SequirtyComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { allIcons } from 'ngx-bootstrap-icons';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { AddComponent } from './student/add/add.component';
import { ModifyComponent } from './student/modify/modify.component';
import { RemoveComponent } from './student/remove/remove.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { ModifyFacultyComponent } from './faculty/modify-faculty/modify-faculty.component';
import { RemoveFacultyComponent } from './faculty/remove-faculty/remove-faculty.component';
import { OtpComponent } from './faculty/add-faculty/otp/otp.component';
import { ProChildComponent } from './profile/pro-child/pro-child.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page404/page404.component';
import { WelcomeSlideComponent } from './welcome-slide/welcome-slide.component';
import { redColorDirective } from './Directives/redColor.directive';
import { DropdownDirective } from './dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    StudentComponent,
    FacultyComponent,
    AboutComponent,
    ContactUsComponent,
    ProfileComponent,
    ExperimentComponent,
    AddComponent,
    ModifyComponent,
    RemoveComponent,
    AddFacultyComponent,
    ModifyFacultyComponent,
    RemoveFacultyComponent,
    OtpComponent,
    ProChildComponent,
    Page404Component,
    WelcomeSlideComponent,
    redColorDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

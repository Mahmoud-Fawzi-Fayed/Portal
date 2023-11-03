import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarMediumComponent } from './navbar-medium/navbar-medium.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarTopComponent,
    NavbarMediumComponent,
    NavbarBottomComponent,
    LoginComponent,
    StudentDetailsComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, DividerModule, CarouselModule, TagModule, InputTextModule,
    ButtonModule, FormsModule, ReactiveFormsModule, HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

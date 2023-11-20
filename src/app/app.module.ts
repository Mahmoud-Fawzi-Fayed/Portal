import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FooterComponent } from './footer/footer.component';
import { ClassificationDrawingsComponent } from './classification-chart/classification-drawings.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { VisionComponent } from './vision/vision.component';
import { GetMailComponent } from './get-mail/get-mail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarTopComponent,
    NavbarBottomComponent,
    LoginComponent,
    StudentDetailsComponent,
    FooterComponent,
    ClassificationDrawingsComponent,
    VisionComponent,
    GetMailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    CarouselModule,
    TagModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SelectButtonModule,
    CanvasJSAngularChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { LoginComponent } from './login/login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VisionComponent} from './vision/vision.component'
import { GetMailComponent } from './get-mail/get-mail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar-top', component: NavbarTopComponent },
  { path: 'navbar-bottom', component: NavbarBottomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'Vision', component: VisionComponent },
  { path: 'get_mail', component: GetMailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

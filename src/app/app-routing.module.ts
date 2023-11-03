import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarMediumComponent } from './navbar-medium/navbar-medium.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar-top', component: NavbarTopComponent },
  { path: 'navbar-medium', component: NavbarMediumComponent },
  { path: 'navbar-bottom', component: NavbarBottomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";



export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  {path:'signup', component:SignupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'courses', component:CoursesComponent},
  {path:'courses/:id', component:CoursesComponent}


]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  
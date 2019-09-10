import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: '',

  
    children: [

       { path: '', component: LoginComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register-user', component: RegisterUserComponent}

    ]
  },
  { path: '**', redirectTo: 'login' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    RegisterUserComponent,

    
  ],
  imports: [
    AppRoutingModule,
     BrowserModule,
 


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

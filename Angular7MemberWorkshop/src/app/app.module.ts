import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedsModule } from './authentication/shareds/shareds.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    AppRouting,
    BrowserModule,
   SharedsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { kum } from './login/home.component';
import { counts } from './login/count.component';




const routes: Routes = [
  {path:'' , component: AppComponent},
  {path:'home' , component: kum}
  
  ];

@NgModule({
  declarations: [
    AppComponent,kum,counts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { GuidesComponent } from './components/guides/guides.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { PricecardintroComponent } from './components/pricecardintro/pricecardintro.component';
import { PricecardEditorComponent } from './components/pricecard-editor/pricecard-editor.component';
import { PricecardTemplateComponent } from './components/pricecard-template/pricecard-template.component';
import { PricecardPreviousComponent } from './components/pricecard-previous/pricecard-previous.component';
import { HomewelkomComponent } from './components/homewelkom/homewelkom.component';
import { PrintPageComponent } from './components/print-page/print-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    IndexComponent,
    NavbarComponent,
    RegisterComponent,
    UsersComponent,
    GuidesComponent,
    PricecardintroComponent,
    PricecardEditorComponent,
    PricecardTemplateComponent,
    PricecardPreviousComponent,
    HomewelkomComponent,
    PrintPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

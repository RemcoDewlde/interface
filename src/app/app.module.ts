import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule} from 'ngx-quill';

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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { GuidesComponent } from './components/guidesComponents/guides/guides.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { PricecardintroComponent } from './components/PriceCardMaker/pricecardintro/pricecardintro.component';
import { PricecardEditorComponent } from './components/PriceCardMaker/pricecard-editor/pricecard-editor.component';
import { PricecardTemplateComponent } from './components/PriceCardMaker/pricecard-template/pricecard-template.component';
import { PricecardPreviousComponent } from './components/PriceCardMaker/pricecard-previous/pricecard-previous.component';
import { HomewelkomComponent } from './components/homewelkom/homewelkom.component';
import { PrintPageComponent } from './components/PriceCardMaker/print-page/print-page.component';
import { AccountComponent } from './pages/account/account.component';
import { GuideEditorComponent } from './components/guidesComponents/guide-editor/guide-editor.component';
import { ReadGuideComponent } from './components/guidesComponents/read-guide/read-guide.component';
import { PricecardComponent } from './components/PriceCardMaker/pricecard/pricecard.component';
import { CommentComponent } from './components/guidesComponents/comment/comment.component';
import { GuideManualComponent } from './components/guidesComponents/guide-manual/guide-manual.component';
import { AdminUserComponent } from './components/admin-user-edit/admin-user-edit.component';
import { SearchComponent } from './components/search/search.component';

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
    PrintPageComponent,
    AccountComponent,
    GuideEditorComponent,
    ReadGuideComponent,
    PricecardComponent,
    CommentComponent,
    GuideManualComponent,
    AdminUserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

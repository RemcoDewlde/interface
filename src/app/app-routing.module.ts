import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent} from './pages/login-page/login-page.component';
import {MenuComponent} from './pages/menu/menu.component';
import {IndexComponent} from './pages/index/index.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from './helpers/auth.guard';
import {UsersComponent} from './components/users/users.component';
import {GuidesComponent} from './components/guides/guides.component';
import {PricecardintroComponent} from './components/pricecardintro/pricecardintro.component';
import {PricecardEditorComponent} from './components/pricecard-editor/pricecard-editor.component';
import {PricecardTemplateComponent} from './components/pricecard-template/pricecard-template.component';
import {PricecardPreviousComponent} from './components/pricecard-previous/pricecard-previous.component';
import {HomewelkomComponent} from './components/homewelkom/homewelkom.component';
import {PrintPageComponent} from './components/print-page/print-page.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'welcome', component: HomewelkomComponent},
      {path: 'users', component: UsersComponent},
      {path: 'guides', component: GuidesComponent},
      {path: 'pricecard', component: PricecardintroComponent},
      {path: 'editor', component: PricecardEditorComponent},
      {path: 'pricetemplate', component: PricecardTemplateComponent},
      {path: 'pricecardprev', component: PricecardPreviousComponent},
      {path: 'printpage', component: PrintPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

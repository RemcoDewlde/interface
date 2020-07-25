import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent} from './layout/login-page/login-page.component';
import {MenuComponent} from './layout/menu/menu.component';
import {RegisterComponent} from './layout/register/register.component';
import {AuthGuard} from './helpers/auth.guard';
import {UsersComponent} from './components/users/users.component';
import {GuidesComponent} from './components/guidesComponents/guides/guides.component';
import {PricecardintroComponent} from './components/PriceCardMaker/pricecardintro/pricecardintro.component';
import {PricecardEditorComponent} from './components/PriceCardMaker/pricecard-editor/pricecard-editor.component';
import {PricecardTemplateComponent} from './components/PriceCardMaker/pricecard-template/pricecard-template.component';
import {PricecardPreviousComponent} from './components/PriceCardMaker/pricecard-previous/pricecard-previous.component';
import {HomewelkomComponent} from './components/homewelkom/homewelkom.component';
import {PrintPageComponent} from './components/PriceCardMaker/print-page/print-page.component';
import {AccountComponent} from './layout/account/account.component';
import {GuideEditorComponent} from './components/guidesComponents/guide-editor/guide-editor.component';
import {ReadGuideComponent} from './components/guidesComponents/read-guide/read-guide.component';
import {GuideManualComponent} from './components/guidesComponents/guide-manual/guide-manual.component';
import {AdminUserComponent} from './components/admin-user-edit/admin-user-edit.component';
import {AdminChangeUserInfoComponent} from './components/admin-change-user-info/admin-change-user-info.component';
import {FeatureRequestComponent} from './components/FeatureRequest/feature-request/feature-request.component';
import {BugreportComponent} from './components/BugReportComponents/bugreport/bugreport.component';
import {BugReportOverviewComponent} from './components/BugReportComponents/bug-report-overview/bug-report-overview.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'home', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'welcome', component: HomewelkomComponent, canActivate: [AuthGuard]},
      {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
      {path: 'feature', component: FeatureRequestComponent, canActivate: [AuthGuard]},
      {path: 'bug', component: BugreportComponent, canActivate: [AuthGuard]},
      {path: 'bug/:id', component: BugReportOverviewComponent, canActivate: [AuthGuard]},

    ]},
  {path: 'admin', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'users', component: AdminUserComponent, canActivate: [AuthGuard]},
      {path: 'users/:id', component: AdminChangeUserInfoComponent, canActivate: [AuthGuard]}
    ]},
  {path: 'pricecard', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'pricecard', component: PricecardintroComponent, canActivate: [AuthGuard]},
      {path: 'editor', component: PricecardEditorComponent, canActivate: [AuthGuard]},
      {path: 'pricetemplate', component: PricecardTemplateComponent, canActivate: [AuthGuard]},
      {path: 'pricecardprev', component: PricecardPreviousComponent, canActivate: [AuthGuard]},
      {path: 'printpage', component: PrintPageComponent, canActivate: [AuthGuard]},
    ]},
  {path: 'guides', component: MenuComponent, canActivate: [AuthGuard], children: [
      {path: 'guides', component: GuidesComponent, canActivate: [AuthGuard]},
      {path: 'guide/editor', component: GuideEditorComponent, canActivate: [AuthGuard]},
      {path: 'guide/editor/:id', component: GuideEditorComponent, canActivate: [AuthGuard]},
      {path: 'guide/manual', component: GuideManualComponent, canActivate: [AuthGuard]},
      {path: 'guides/:id', component: ReadGuideComponent, canActivate: [AuthGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

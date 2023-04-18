import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { BodyComponent } from './body/body.component';
import { ItemsComponent } from './items/items.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    SidenavbarComponent,
    BodyComponent,
    ItemsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'settings', component: SettingsComponent},
      {path: 'items', component: ItemsComponent},

    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

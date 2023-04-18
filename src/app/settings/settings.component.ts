import { Component } from '@angular/core';
import {SettingsService} from "../services/settings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public istaogle : boolean= false;

  constructor(private settingsService : SettingsService , private router :Router) {

  }

  updatedata() {
  this.settingsService.setBoolean(true)
    console.log("jai envoyer true")
    this.router.navigate(['items'])
    localStorage.setItem('myValue', JSON.stringify(true));
  }

  update2() {
    this.settingsService.setBoolean(false)
    console.log("jai envoyer false")
    this.router.navigate(['items'])
    localStorage.setItem('myValue', JSON.stringify(false));


  }
}

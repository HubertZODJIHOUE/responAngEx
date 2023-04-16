import { Component } from '@angular/core';
import {sideNavToggle} from "./sidenavbar/navData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'si';
  public isSidebarCollapsed : boolean = false
  public screenWidth  : number= 0;

  ontoggleSideNav(data: sideNavToggle):void {
    this.screenWidth = data.screenWidth;
    this.isSidebarCollapsed = data.collapsed;


  }
}

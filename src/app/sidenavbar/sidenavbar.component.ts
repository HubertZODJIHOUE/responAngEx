import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {navData, sideNavToggle} from "./navData";

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements  OnInit{

  @Output() ontoggleSideNav : EventEmitter<sideNavToggle> = new EventEmitter();
  public screenWidth: number = 0;
  public collapsed: boolean = false
  public  navdata = navData;
  constructor() {
  }

  togglecolapse() {
    this.collapsed= !this.collapsed;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
  closeSidebar() {
    this.collapsed=false;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }


}

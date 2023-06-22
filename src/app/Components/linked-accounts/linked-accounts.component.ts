
import { Component } from '@angular/core';


@Component({
  selector: 'app-linked-accounts',
  templateUrl: './linked-accounts.component.html',
  styleUrls: ['./linked-accounts.component.css']
})
export class LinkedAccountsComponent {
  title = 'Client';

  showSidebar = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  isMobileScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 768; // Adjust the breakpoint as per your needs
  }


 





}

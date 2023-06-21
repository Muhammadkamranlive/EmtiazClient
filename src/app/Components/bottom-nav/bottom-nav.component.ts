import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent {
 
  activeIcon: number = 1;

  change(iconNumber: number) {
    this.activeIcon = iconNumber;
  }
 
  isActive(): boolean {
    const activeIcon = document.querySelector('.icon.active');
    return activeIcon !== null;
  }
}

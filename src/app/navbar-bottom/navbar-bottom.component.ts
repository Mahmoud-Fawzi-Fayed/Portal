import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent {
  isMenuOpen = false;
  public showSubitems: { [key: string]: boolean } = {};

  toggleSubitems(item: string) {
    if (this.showSubitems[item]) {
      this.showSubitems[item] = false;
    } else {
      Object.keys(this.showSubitems).forEach(key => {
        if (key !== item) {
          this.showSubitems[key] = false;
        }
      });

      this.showSubitems[item] = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
import { Component, ElementRef, HostListener } from '@angular/core';
// import { SharedService } from '../shared-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent {
  isMenuOpen = false;
  public showSubitems: { [key: string]: boolean } = {};

  // constructor(private elRef: ElementRef, priva: SharedService, private location: Location) {}

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

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: Event) {
  //   if (!this.elRef.nativeElement.contains(event.target)) {
  //     this.closeMenu();
  //   }
  // }

  // goBack() {
  //   this.location.back();
  // }

  // selectProgram(program: string) {
  //   this.sharedService.setSelectedProgram(program);
  // }

  // toggleEmailActivation() {
  //   this.sharedService.toggleEmailActivation();
  // }

  // togglePlatformExplanation() {
  //   this.sharedService.togglePlatformExplanation();
  // }

  // toggleUniversityHousing() {
  //   this.sharedService.toggleStudentHousing();
  // }
}
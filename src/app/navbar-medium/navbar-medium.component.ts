import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-medium',
  templateUrl: './navbar-medium.component.html',
  styleUrls: ['./navbar-medium.component.scss']
})
export class NavbarMediumComponent implements OnInit {
  dynamicTextOptions: string[] = [
    "مرحباً بكم فى جامعة المنوفية",
    "منارة العلم في قلب الدلتا",
    "منبع القادة وأصحاب الفكر",
    ];

  dynamicText: string = this.dynamicTextOptions[0];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.updateDynamicText(), 2000);
  }

  updateDynamicText() {
    const currentIndex = this.dynamicTextOptions.indexOf(this.dynamicText);
    const nextIndex = (currentIndex + 1) % this.dynamicTextOptions.length;
    this.dynamicText = this.dynamicTextOptions[nextIndex];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})

export class NavbarTopComponent implements OnInit {
  dynamicTextOptions: string[] = [
    "مرحباً بكم فى جامعة المنوفية",
    "منارة العلم في قلب الدلتا",
    "منبع القادة وأصحاب الفكر",
  ];

  selectedLanguages: string;
  languageOptions = [
    { label: 'AR', value: 'ar' },
    { label: 'EN', value: 'en' },
    { label: 'FR', value: 'fr' }
  ];

  dynamicText: string = this.dynamicTextOptions[0];

  constructor() {
    this.selectedLanguages = 'ar';
  }

  ngOnInit(): void {
    setInterval(() => this.updateDynamicText(), 2000);
  }

  updateDynamicText() {
    const currentIndex = this.dynamicTextOptions.indexOf(this.dynamicText);
    const nextIndex = (currentIndex + 1) % this.dynamicTextOptions.length;
    this.dynamicText = this.dynamicTextOptions[nextIndex];
  }
}

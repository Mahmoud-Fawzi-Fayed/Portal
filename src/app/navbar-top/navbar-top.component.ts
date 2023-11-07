import { Component, OnInit, NgZone, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})

export class NavbarTopComponent implements OnInit {
  isFixed: boolean = false;


  @HostListener('window:scroll', ['$event'])
  onScroll(_event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const threshold = 100;

    if (scrollPosition > threshold) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
  
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

  dynamicText: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.typeNextText();
  }

  constructor(private zone: NgZone) {
    this.selectedLanguages = 'ar';
  }

  typeNextText() {
    if (this.currentIndex < this.dynamicTextOptions.length) {
      const currentText = this.dynamicTextOptions[this.currentIndex];
      const typingDelay = 100;
      const erasingDelay = 50;

      this.zone.run(() => {
        let i = 0;
        const intervalId = setInterval(() => {
          if (i < currentText.length) {
            this.dynamicText = currentText.substr(0, i + 1);
          } else {
            clearInterval(intervalId);
            setTimeout(() => {
              let j = currentText.length;
              const eraseIntervalId = setInterval(() => {
                if (j > 0) {
                  this.dynamicText = currentText.substr(0, j - 1);
                } else {
                  clearInterval(eraseIntervalId);
                  this.currentIndex++;
                  setTimeout(() => {
                    this.dynamicText = '';
                    this.typeNextText();
                  }, 1000);
                }
                j--;
              }, erasingDelay);
            }, 1000);
          }
          i++;
        }, typingDelay);
      });
    } else {
      this.currentIndex = 0;
      this.typeNextText();
    }
  }
}

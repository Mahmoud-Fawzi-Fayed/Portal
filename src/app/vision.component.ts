
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  sdgData = [
    { imageUrl: 'assets/images/SDG-1.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-2.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-3.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-4.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-5.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-6.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-7.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-8.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-9.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-10.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-11.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-12.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-13.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-14.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-15.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-16.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-17.jpg', link: 'https://example.com/goal' },
    { imageUrl: 'assets/images/SDG-18.jpg', link: '' },
  ];

  openLink(link: string) {
    window.open(link, '_blank'); // Open link in a new tab
  }

  addHoverEffect(goal: any) {
    goal.hovered = true; // Add a property to track hover state
  }

  removeHoverEffect(goal: any) {
    goal.hovered = false; // Set hover state to false when mouse leaves
  }
}

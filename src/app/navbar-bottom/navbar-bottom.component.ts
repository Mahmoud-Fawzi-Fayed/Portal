// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar-bottom',
//   templateUrl: './navbar-bottom.component.html',
//   styleUrls: ['./navbar-bottom.component.scss']
// })
// export class NavbarBottomComponent {
//   isMenuOpen = false;
//   public showSubitems: { [key: string]: boolean } = {};

//   toggleSubitems(item: string) {
//     if (this.showSubitems[item]) {
//       this.showSubitems[item] = false;
//     } else {
//       Object.keys(this.showSubitems).forEach(key => {
//         if (key !== item) {
//           this.showSubitems[key] = false;
//         }
//       });

//       this.showSubitems[item] = true;
//     }
//   }

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   closeMenu() {
//     this.isMenuOpen = false;
//   }
// }




import { Component } from '@angular/core';

interface Subsubitem {
  label: string;
  link?: string; // Add this line
  subsubitems?: Subsubitem[];
}

interface Column {
  label: string;
  subsubitems: Subsubitem[];
}

interface MenuItem {
  label: string;
  columns: Column[];
}

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'] // This should be an array
})
export class NavbarBottomComponent {
  isMenuOpen = false;
  public showSubitems: { [key: string]: boolean } = {};

  menuItems: MenuItem[] = [
    {
      label: 'Keyword 1',
      columns: [
        {
          label: 'Column 1',
          subsubitems: [
            {
              label: 'Subsubitem 1',
              link: '/subsubitem1'
            },
            {
              label: 'Subsubitem 2',
              subsubitems: [
                {
                  label: 'Subsubitem 2.1',
                  link: '/subsubitem2_1'
                },
                {
                  label: 'Subsubitem 2.2',
                  link: '/subsubitem2_2'
                }
              ]
            },
          ]
        },
        {
          label: 'Column 2',
          subsubitems: [
            {
              label: 'Subsubitem 1',
              link: '/subsubitem1'
            },
            {
              label: 'Subsubitem 2',
              link: '/subsubitem2'
            }
            // Add more subsubitems as needed
          ]
        }
        // Add more columns as needed
      ]
    },
    {
      label: 'Keyword 2',
      columns: [
        {
          label: 'Column 1',
          subsubitems: [
            {
              label: 'Subsubitem 1',
              link: '/subsubitem1'
            },
            {
              label: 'Subsubitem 2',
              subsubitems: [
                {
                  label: 'Subsubitem 2.1',
                  link: '/subsubitem2_1'
                },
                {
                  label: 'Subsubitem 2.2',
                  link: '/subsubitem2_2'
                }
                // Add more subsubitems as needed
              ]
            }
            // Add more subsubitems as needed
          ]
        },
        {
          label: 'Column 2',
          subsubitems: [
            {
              label: 'Subsubitem 1',
              link: '/subsubitem1'
            },
            {
              label: 'Subsubitem 2',
              link: '/subsubitem2'
            }
            // Add more subsubitems as needed
          ]
        }
        // Add more columns as needed
      ]
    },
  ];

  // toggleSubsubitems(subsubitemLabel: string) {
  //   this.showSubitems[subsubitemLabel] = !this.showSubitems[subsubitemLabel];
  // }

  toggleSubsubitems(subsubitemLabel: string) {
    this.showSubitems[subsubitemLabel] = true;
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getSubsubsubitems(subsubitems: Subsubitem[]): Subsubitem[] {
    const result: Subsubitem[] = [];
    subsubitems.forEach(subsubitem => {
      if (subsubitem.subsubitems) {
        result.push(...subsubitem.subsubitems);
      }
    });
    return result;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-classification-drawings',
  templateUrl: './classification-drawings.component.html',
  styleUrls: ['./classification-drawings.component.scss'],
})
export class ClassificationDrawingsComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Publication share by Subject Area',
    },
    data: [
      {
        type: 'doughnut',
        indexLabel: '{name}: {y}',
        innerRadius: '65%',
        yValueFormatString: "#,##0.00'%'",
        dataPoints: [
          {
            y: 22.5,
            name: 'Computer Since',
            toolTipContent: '1,636 Publications',
          },
          { y: 11.8, name: 'Mathematics', toolTipContent: '860 Publications' },
          {
            y: 15.3,
            name: 'Physics and Astronomy',
            toolTipContent: '1,113 Publications',
          },
          { y: 9.5, name: 'Chemistry', toolTipContent: '690 Publications' },
          {
            y: 5.6,
            name: 'Chemical Engineering',
            toolTipContent: '406 Publications',
          },
          { y: 14.8, name: 'Materials Science', toolTipContent: '1073 Publications' },
          { y: 30.4, name: 'Engineering', toolTipContent: '2213 Publications' },
          { y: 4.7, name: 'Energy', toolTipContent: '342 Publications' },
          { y: 6, name: 'Environmental Science', toolTipContent: '435 Publications' },
          { y: 6.5, name: 'Agricultural and Biological Sciences', toolTipContent: '472 Publications' },
          { y: 11.7, name: 'Biochemistry, Genetics and Molecular Biology', toolTipContent: '849 Publications' },
          { y: 27.9, name: 'Medicine', toolTipContent: '2026 Publications' },
          { y: 4.3, name: 'Pharmacology, Toxicology and Pharmaceutics', toolTipContent: '309 Publications' },
        ],
      },
    ],
  };
}

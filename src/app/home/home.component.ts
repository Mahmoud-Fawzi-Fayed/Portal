import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  highlights = [
    {
      image: 'assets/images/placeholder.jpg',
      title: 'جامعة المنوفية تختتم المهرجان الثقافى وتعلن الكليات الفائزة في مسابقات الدورى الثقافى ومجلات الحائط والشعر',
      date: '2023-11-02',
      description: 'تحت رعاية الدكتور احمد القاصد رئيس الجامعة......',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'رئيس جامعة المنوفية يلتقي رئيس محكمة شبين الكوم الكلية والمحامي العام لنيابات المنوفية',
      date: '2023-11-01',
      description: 'التقي الدكتور أحمد القاصد رئيس جامعة المنوفية..........',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'جامعة المنوفية تحرز تقدما جديدا في تصنيف شنغهاي لعام ٢٠٢٣',
      date: '2023-11-01',
      description: 'أعلن الدكتور أحمد القاصد رئيس جامعة المنوفية......',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'رئيس جامعة المنوفية يستهل الاجتماع الدورى لمجلس الجامعة بالوقوف دقيقة حداد على أرواح شهداء غزه',
      date: '2023-10-31',
      description: 'ويؤكد دعم المجلس لقرارات رئيس الجمهورية ويكرم عميد طب الأسنان السابق...........',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'مؤتمر بعنوان "المستقبل الاخضر والتوجه نحو التحول لجامعه صديقه للبيئه"',
      date: '2023-08-24',
      description: 'ينظم قطاع خدمه المجتمع وتنميه البيئة المؤتمرالسنوى بعنوان',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'القاصد يؤكد :زيارات للمستشفيـات الجامعـيـة ووحدات جامعة المنوفية المختلفة لتقديم خدمات للطلاب والمجتمع بجودةعالية',
      date: '2023-01-26',
      description: 'أكد الدكتور أحمد القاصد رئيس جامعة المنوفية.....',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'شرف يفتتح فعاليات اليوم الوطني البيئي بالاقتصاد المنزلي',
      date: '2023-01-25',
      description: 'تحت رعاية الدكتور أحمد القاصد رئيس جامعة المنوفية........',
    },
    {
      image: 'assets/images/placeholder.jpg',
      title: 'زراعة المنوفية تناقش التحديات الأمنية والتنموية للأمن المائي المصري',
      date: '2023-01-25',
      description: 'زراعة المنوفية تناقش التحديات الأمنية والتنموية للأمن المائي المصري',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '375px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}


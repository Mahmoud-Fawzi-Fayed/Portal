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

  cardRows = [
    [{ image: 'assets/images/medicine.jpg', link: '#', name: 'كلية الطب' }],
    [{ image: 'assets/images/ai.png', link: '#', name: 'كلية الذكاء الاصطناعي' }],
    [{ image: 'assets/images/computers.jpg', link: '#', name: 'كلية الحاسبات والمعلومات' }],
    [{ image: 'assets/images/education.png', link: '#', name: 'كلية التربية' }],
    [{ image: 'assets/images/engineering.png', link: '#', name: 'كلية الهندسة' }],
    [{ image: 'assets/images/literature.jpg', link: '#', name: 'كلية الآداب' }],
    [{ image: 'assets/images/nursing.jpg', link: '#', name: 'كلية التمريض' }],
    [{ image: 'assets/images/pharmacy.jpg', link: '#', name: 'كلية الصيدلة' }],
    [{ image: 'assets/images/vet.png', link: '#', name: 'كلية الطب البيطري' }],
    [{ image: 'assets/images/commerce.png', link: '#', name: 'كلية التجارة' }],
    [{ image: 'assets/images/education_kids.jpg', link: '#', name: 'كلية التربية للطفولة المبكرة' }],
    [{ image: 'assets/images/laws.jpg', link: '#', name: 'كليةالحقوق' }],
    [{ image: 'assets/images/mass.jpg', link: '#', name: 'كلية الإعلام' }],
    [{ image: 'assets/images/physical_education.png', link: '#', name: 'كلية التربية الرياضية' }],
    [{ image: 'assets/images/agriculture.jpg', link: '#', name: 'كلية الزراعة' }],
    [{ image: 'assets/images/dentistry.png', link: '#', name: 'كلية طب الأسنان' }],
    [{ image: 'assets/images/menof.png', link: '#', name: 'كلية الهندسة الإلكترونية' }],
    [{ image: 'assets/images/economics.png', link: '#', name: 'كلية الاقتصاد المنزلي' }],
    [{ image: 'assets/images/applied_health.jpg', link: '#', name: 'كلية تكنولوجيا العلوم التطبيقية' }],
    [{ image: 'assets/images/science.jpg', link: '#', name: 'كلية العلوم' }],
  ];

}
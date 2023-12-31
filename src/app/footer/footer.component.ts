import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerData = [
    {
      title: 'خدمات جامعية',
      items: [
        { label: 'خدمات أعضاء هيئة التدريس', link: '#' },
        { label: 'خدمات طلاب مرحلة البكالوريوس', link: '#' },
        { label: 'التسجيل للدراسات العليا', link: '#' },
        { label: 'خدمات طلاب مرحلة الدراسات العليا', link: '#' },
        { label: 'الدعم الفنى لاعضاء هيئة التدريس', link: '#' },
        { label: 'شكاوى العاملين بالجامعة', link: '#' },
        { label: 'استبيان العاملين بالجامعة', link: '#' },
        { label: 'المقترحات والشكاوى (مشاريع التطوير)', link: '#' },
        { label: 'اللجنة العليا لإعداد استراتيجية الجامعة', link: '#' },
        { label: 'التربية العسكرية', link: '#' },
        { label: 'التكافل', link: '#' },
        { label: 'الادارة العامة لرعاية الشباب', link: '#' },
        { label: 'استبيان الرعاية الصحية', link: '#' },
        { label: 'المدن الجامعية', link: '#' }
      ]
    },
    {
      title: 'برامج مميزة',
      items: [
        { label: 'الموقع الرسمى لمركز المعلومات', link: '#' },
        { label: 'برامج تعليمية خاصة مقدمة من كلية التجارة', link: '#' },
        { label: 'برنامج التعليم القانونى المفتوح', link: '#' },
        { label: 'نظام التعليم المدمج في كلية الآداب', link: '#' },
        { label: 'برنامج الطب و الجراحة التكاملي بنظام الساعات المعتمدة', link: '#' },
        { label: 'التقديم للمدن الجامعية', link: '#' },
        { label: 'استعلام الطلاب عن الكلية المرشح لها', link: '#' },
        { label: 'برنامج الهندسه الكهربيه والحاسبات', link: '#' },
        { label: 'مراكز التميز بالجامعة', link: '#' },
        { label: 'مركز القياس والتقويم', link: '#' },
        { label: 'مركز الدراسات الاستراتيجيه واعداد القادة', link: '#' },
        { label: 'الدورات التدريبية لنظام إدارة الجودة ISO 9001:2015', link: '#' },
        { label: 'المكتبه الرقميه بكليه الهندسة', link: '#' }
      ]
    },
    {
      title: 'مواقع هامة',
      items: [
        { label: 'renewable energy', link: '#' },
        { label: 'Literacy', link: '#' },
        { label: 'تنمية قدرات أعضاء هيئة التدريس', link: '#' },
        { label: 'المكتبة الرقمية', link: '#' },
        { label: 'مركز توكيد الجودة', link: '#' },
        { label: 'الوحدات ذات طابع خاص', link: '#' },
        { label: 'صندوق تأمين العاملين بالجامعة', link: '#' },
        { label: 'خدمات الشهر العقاري', link: '#' },
        { label: 'القوافل الجامعية', link: '#' },
        { label: 'مركز التعليم الإلكترونى', link: '#' },
        { label: 'لجنة أخلاقيات البحث العلمي واستخدام حيوانات التجارب', link: '#' },
        { label: 'لجنة ادارة الازمات', link: '#' },
        { label: 'التربية العسكرية', link: '#' },
        { label: 'منظومه الشكاوي الحكوميه الموحده', link: '#' },
        { label: 'مجلة البحوث الهندسيه ERJ', link: '#' }
      ]
    }
  ];
}
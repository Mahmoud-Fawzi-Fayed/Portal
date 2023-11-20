import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Subsubitem {
  label: string;
  link?: string;
  icon?: string;
  subsubitems?: Subsubitem[];
}

interface Column {
  label: string;
  subsubitems: Subsubitem[];
}

interface MenuItem {
  label: string;
  columns: Column[];
  link?: string;
}

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent {
  
  
  constructor(private router: Router) { }
  
  
  navigateTo(label: string) {
    if (label === 'الرئيسية') {
      this.router.navigate(['/']);
    }
  }
  
  menuItems: MenuItem[] = [

    {
      label: 'الرئيسية',
      columns: [],
      link : '/'
    },

    {
      label: 'الجامعة',
      columns: [
        {
          label: 'إدارة الجامعة',
          subsubitems: [
            {label: 'قطاع رئيس الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'قطاع نائب شئون التعليم والطلاب', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'قطاع نائب شئون خدمة المجتمع', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'قطاع نائب شئون الدراسات العٌليا', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'قطاع أمين عام الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' }
          ]
        },
        {
          label: 'عن الجامعة',
          subsubitems: [
            {label: 'نشأة الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'رؤية الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'رسالة الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'أهداف الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'رؤساء  الجامعة السابقين', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'تشكيل مجلس الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'استراتيجية الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'ميثاق الطالب الجامعي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'مدونة سلوك وأخلاقيات الوظيفة العامة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        }
      ]
    },

    {
      label: 'أعضاء هيئة التدريس',
      columns: [
        {
          label: '',
          subsubitems: [
            {label: 'بيانات الموقع الشخصي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'السيرة الذاتية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'بحث عن عضو هيئة تدريس', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'تسجيل البيانات', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {
              label: 'البريد الإلكتروني',
              subsubitems: [
                {label: 'الحصول على البريد الإلكتروني', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'تسجيل الدخول على بريد الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'تسجيل الدخول على بريد الكلية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            }
          ]
        },
      ]
    },

    {
      label: 'الكليات',
      columns: [
        {
          label: 'القطاع الهندسي',
          subsubitems: [
            {label: 'كلية الهندسة بشبين الكوم', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الهندسة الإلكترونية بمنوف', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الحاسبات والمعلومات', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الذكاء الإصطناعي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
        {
          label: 'القطاع الطبي',
          subsubitems: [
            {label: 'كلية الطب البشري', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الأسنان', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الصيدلة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الطب البيطري', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية التمريض', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'معهد الكبد', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'المستشفيات الجامعية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية تكنولوجيا العلوم الصحية التطبيقية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },        {
          label: 'قطاع التربية',
          subsubitems: [
            {label: 'كلية التربية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية التربية النوعية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية التربية للطفولة المبكرة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية التربية الرياضية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },        {
          label: 'القطاعات الأخرى',
          subsubitems: [
            {label: 'كلية التجارة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الآداب', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الحقوق', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الإقتصاد المنزلي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'كلية الإعلام', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
      ]
    },

    {
      label: 'الطلاب',
      columns: [
        {
          label: '',
          subsubitems: [
            {label: 'التقديم للمدن الجامعية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {
              label: 'مرحلة البكالوريوس والليسانس',
              subsubitems: [
                {label: 'نظام الدراسة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'التعليم المفتوح', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'خدمات إلكترونية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {
              label: 'مرحلة الدراسات العُليا',
              subsubitems: [
                {label: 'شروط القيد', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'خدمات لإلكترونية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {
              label: 'الخريجين',
              subsubitems: [
                {label: 'جمعية رعاية الخريجين', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'قاعدة بيانات الخريجين', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'بحث عن خريج', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {label: 'الطلاب الوافدين', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
        {
          label: '',
          subsubitems: [
            {
              label: 'الخدمات الطلابية',
              subsubitems: [
                {label: 'التقديم الإلكترومي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'الخدمات الطبية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'استاد الجامعة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'التكافل الطبي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'دليل الطالب', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'التقديم للمدن الجامعية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'التربية العسكرية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'التدريب الصيفي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'نادى تك المعلومات', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'المصروفات المدرسية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'المدن الجامعية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {label: 'أنشطة طلابية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'نتائج الدراسات العُليا', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'رعاية الشباب', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'نتائج الامتحانات', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'الحصول على البريد الالكتروني', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'تسجيل الطلاب الأجانب', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        }
      ]
    },

    {
      label: 'الأبحاث والأنشطة العلمية',
      columns: [
        {
          label: '',
          subsubitems: [
            {label: 'اتحاد مكتبات الجامعات المصرية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'بروتوكولات التعاون والاتفاقات الدولية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {
              label: 'الأنشطة العلمية',
              subsubitems: [
                {label: 'تقارير العلمية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {label: 'مستودع النشر الطبي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
      ]
    },
    
    {
      label: 'الجامعات المصرية',
      columns: [
        {
          label: '',
          subsubitems: [
            {
              label: 'ترتيب الجامعات المصرية',
              subsubitems: [
                {label: 'International Coleges and Universities', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'Webometrics Ranking of World Universities', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
                {label: 'Alexa Ranking of African Universities', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
              ]
            },
            {label: 'جامعة جنوب الوادي', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة المنصورة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة الفيوم', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة الزقازيق', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعةالقاهرة', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
        {
          label: '',
          subsubitems: [
            {label: 'جامعة الإسكندرية', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة كفر الشيخ', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة عين شمس', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة طنطا', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة المنيا', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة أسيوط', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة حلوان', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
        {
          label: '',
          subsubitems: [
            {label: 'جامعة بورسعيد', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة قناة السويس', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة سوهاج', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة دمنهور', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة دمياط', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة السادات', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'جامعة السويس', link: '/' , icon: 'pi pi-fw pi-arrow-circle-left' },   
          ]
        }
      ]
    },

    {
      label: 'الخدمات',
      columns: [
        {
          label: '',
          subsubitems: [
            {label: 'تصنيف الجامعة', link: '/Vision' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'الحصول على الايميل الاكاديمي', link: '/get_mail' , icon: 'pi pi-fw pi-arrow-circle-left' },
            {label: 'منصة بن الهيثم', link: 'https://stdch.menofia.education/static/index.html' , icon: 'pi pi-fw pi-arrow-circle-left' },
          ]
        },
      ]
    },
  ];

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
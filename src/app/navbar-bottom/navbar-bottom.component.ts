import { Component } from '@angular/core';

interface Subsubitem {
  label: string;
  link?: string;
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
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent {
  isMenuOpen = false;
  public showSubitems: { [key: string]: boolean } = {};
  public hoveredSubitem: Subsubitem | null = null;
  public showSubsubitemContainer: { [key: string]: boolean } = {};


  // ادارة الجامعةقطاع نائب شئون التعليم الطلابقطاع نائب شئون خدمة المجتمع وتنمية البيئةقطاع نائب شئون الدراسات العليا والبحوثقطاع امين عام الجامعةعن الجامعة
  // إدارة الجامعة
  // رئيس الجامعةنائب رئيس الجامعه لشئون التعليم والطلابنائب رئيس الجامعه للدراسات العليا والبحوث العلميةنــائـب رئيــس الجامعــة لشئون خدمة المجتمع وتنمية البيئةأمين الجامعهنشأة الجامعةرؤية الجامعةرسالة الجامعةاهداف الجامعةرؤساء الجامعة السابقينتشكيل مجلس الجامعةاستراتيجية الجامعةميثاق الطالب الجامعىمدونة سلوك وأخلاقيات الوظيفة العامةأعضاء هيئة التدريس
  // بيانات الموقع الشخصيالسيرة الذاتيةبحث عن عضو هيئة تدريسخدمات الكترونيةتسجيل البياناتالبريد الالكترونى
  // الحصول على البريد الالكترونىالحصول على البريد الالكترونىتسجيل الدخول علي بريد الجامعةتسجيل الدخول على بريد الكليةالبريد الألكترونى
  // الحصول على البريد الألكترونىتسجيل الدخول على بريد الجامعهتسجيل الدخول على بريد الكليهالكليات
  // كلية الزراعةكلية الهندسة بشبين الكومكلية الهندسة الالكترونية بمنوفكلية التربيةكلية العلومكليه الذكاء الاصطناعيكلية التجارةكلية الطبكلية الآدابكلية الحقوقكلية الإقتصاد المنزلىكلية التمريضكلية التربية النوعيةمعهد الكبدكلية الحاسبات والمعلوماتكلية الاعلامكلية التربية الرياضيةكلية تكنولوجيا العلوم الصحية التطبيقيةكلية التربية للطفولة المبكرةكلية الصيدلةكلية الطب البيطرىالمستشفيات الجامعيةطب الاسنانالطلاب
  // التقديم للمدن الجامعيةمرحلة البكالوريوس والليسانس
  // نظام الدراسةالتعليم المفتوحخدمات إلكترونيةمرحلة الدراسات العليا
  // شروط القيدخدمات الكترونيةالخريجين
  // جمعية رعاية الخريجينقاعدة بيانات الخريجينبحث عن خريجالطلاب الوافدينالخدمات الطلابية
  // التقديم الالكترونىالخدمات الطبيةاستاد الجامعةالتكافل الطلابىدليل الطالبالتقديم للمدن الجامعيةالتربية العسكريةالتدريب الصيفىنادى تك المعلوماتالمصروفات الدراسيةالمدن الجامعيةأنشطة طلابيةنتائج الدراسات العليارعاية الشبابنتائج الامتحاناتالحصول على البريد الالكترونىتسجيل الطلاب الاجانبالابحاث والانشطة العلمية
  // اتحاد مكتبات الجامعات المصريةبروتوكولات التعاون والاتفاقيات الدوليةالانشطة العلمية
  // تقارير علميةمستودع النشرالعلمىالجامعات المصرية
  // اخبار جامعة المنوفية
  // اخبار علميةاخبار الجامعه على صفحه الجامعات المصريهترتيب الجامعات المصرية
  // International Colleges and UniversitiesWebometrics Ranking of World UniversitiesAlexa Ranking of African Universitiesجامعة جنوب الواديجامعة المنصورةجامعة الفيومجامعة الزقازيقجامعة القاهرةجامعة الاسكندريةجامعة كفر الشيخجامعة عين شمسجامعة طنطاجامعة المنياجامعة اسيوطجامعة حلوانجامعة بورسعيدجامعة قناة السويسجامعة سوهاججامعة دمنهورجامعة دمياطجامعة الساداتجامعة السويساﻹعلام الجامعي
  // قناه الجامعه على Youtubeنشرات الجامعه
  // نشرة العلاقات الثقافيهنشرة الدراسات العليانشرة شئون التعليم والطلابنشرات البيئة والمجتمعنشرات مركز المعلومات
  // النشرة الاحصائيةجامعه المنوفيه على الشاشه الصغيرةجامعه المنوفيه فى عيون الصحافهمؤتمر التحول نحو الأخضرالمتدربينالتحول الرقميارشيف الاخبارارشيف الاخبار
  // Facebook
  // Youtube
  

  menuItems: MenuItem[] = [
    {
      label: 'الجامعة',
      columns: [
        {
          label: 'إدارة الجامعة',
          subsubitems: [
            {label: 'قطاع رئيس الجامعة', link: '/'},
            {label: 'قطاع نائب شئون التعليم والطلاب', link: '/'},
            {label: 'قطاع نائب شئون خدمة المجتمع وتنمية البيئة', link: '/'},
            {label: 'قطاع نائب شئون الدراسات العٌليا والبحوث', link: '/'},
            {label: 'قطاع أمين عام الجامعة', link: '/'}
          ]
        },
        {
          label: 'عن الجامعة',
          subsubitems: [
            {label: 'نشأة الجامعة', link: '/'},
            {label: 'رؤية الجامعة', link: '/'},
            {label: 'رسالة الجامعة', link: '/'},
            {label: 'أهداف الجامعة', link: '/'},
            {label: 'رؤساء  الجامعة السابقين', link: '/'},
            {label: 'تشكيل مجلس الجامعة', link: '/'},
            {label: 'استراتيجية الجامعة', link: '/'},
            {label: 'ميثاق الطالب الجامعي', link: '/'},
            {label: 'مدونة سلوك وأخلاقيات الوظيفة العامة', link: '/'},
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
            {label: 'بيانات الموقع الشخصي', link: '/'},
            {label: 'السيرة الذاتية', link: '/'},
            {label: 'بحث عن عضو هيئة تدريس', link: '/'},
            {label: 'تسجيل البيانات', link: '/'},
            {
              label: 'البريد الإلكتروني',
              subsubitems: [
                {label: 'الحصول على البريد الإلكتروني', link: '/'},
                {label: 'تسجيل الدخول على بريد الجامعة', link: '/'},
                {label: 'تسجيل الدخول على بريد الكلية', link: '/'},
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
            {label: 'كلية الهندسة بشبين الكوم', link: '/'},
            {label: 'كلية الهندسة الإلكترونية بمنوف', link: '/'},
            {label: 'كلية الحاسبات والمعلومات', link: '/'},
            {label: 'كلية الذكاء الإصطناعي', link: '/'},
            {label: '', link: '/'},
          ]
        },
        {
          label: 'القطاع الطبي',
          subsubitems: [
            {label: 'كلية الطب البشري', link: '/'},
            {label: 'كلية الأسنان', link: '/'},
            {label: 'كلية الصيدلة', link: '/'},
            {label: 'كلية الطب البيطري', link: '/'},
            {label: 'كلية التمريض', link: '/'},
            {label: 'معهد الكبد', link: '/'},
            {label: 'المستشفيات الجامعية', link: '/'},
            {label: 'كلية تكنولوجيا العلوم الصحية التطبيقية', link: '/'},
          ]
        },        {
          label: 'قطاع التربية',
          subsubitems: [
            {label: 'كلية التربية', link: '/'},
            {label: 'كلية التربية النوعية', link: '/'},
            {label: 'كلية التربية للطفولة المبكرة', link: '/'},
            {label: 'كلية التربية الرياضية', link: '/'},
          ]
        },        {
          label: 'القطاعات الأخرى',
          subsubitems: [
            {label: 'كلية التجارة', link: '/'},
            {label: 'كلية الآداب', link: '/'},
            {label: 'كلية الحقوق', link: '/'},
            {label: 'كلية الإقتصاد المنزلي', link: '/'},
            {label: 'كلية الإعلام', link: '/'},
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
            {label: 'التقديم للمدن الجامعية', link: '/'},
            {
              label: 'مرحلة البكالوريوس والليسانس',
              subsubitems: [
                {label: 'نظام الدراسة', link: '/'},
                {label: 'التعليم المفتوح', link: '/'},
                {label: 'خدمات إلكترونية', link: '/'},
              ]
            },
            {
              label: 'مرحلة الدراسات العُليا',
              subsubitems: [
                {label: 'شروط القيد', link: '/'},
                {label: 'خدمات لإلكترونية', link: '/'},
              ]
            },
            {
              label: 'الخريجين',
              subsubitems: [
                {label: 'جمعية رعاية الخريجين', link: '/'},
                {label: 'قاعدة بيانات الخريجين', link: '/'},
                {label: 'بحث عن خريج', link: '/'},
              ]
            },
            {label: 'الطلاب الوافدين', link: '/'},
          ]
        },
        {
          label: '',
          subsubitems: [
            {
              label: 'الخدمات الطلابية',
              subsubitems: [
                {label: '', link: '/'},
                {label: '', link: '/'},
                {label: '', link: '/'},
                {label: '', link: '/'},
                {label: '', link: '/'},
              ]
            },
            {label: 'أنشطة طلابية', link: '/'},
            {label: 'نتائج الدراسات العُليا', link: '/'},
            {label: 'رعاية الشباب', link: '/'},
            {label: 'نتائج الامتحانات', link: '/'},
            {label: 'الحصول على البريد الالكتروني', link: '/'},
            {label: 'تسجيل الطلاب الأجانب', link: '/'},
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
            {label: 'اتحاد مكتبات الجامعات المصرية', link: '/'},
            {label: 'بروتوكولات التعاون والاتفاقات الدولية', link: '/'},
            {
              label: 'الأنشطة العلمية',
              subsubitems: [
                {label: 'تقارير العلمية', link: '/'},
              ]
            },
            {label: 'مستودع النشر الطبي', link: '/'},
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
                {label: 'International Coleges and Universities', link: '/'},
                {label: 'Webometrics Ranking of World Universities', link: '/'},
                {label: 'Alexa Ranking of African Universities', link: '/'},   
              ]
            },
            {label: 'جامعة جنوب الوادي', link: '/'},
            {label: 'جامعة المنصورة', link: '/'},
            {label: 'جامعة الفيوم', link: '/'},
            {label: 'جامعة الزقازيق', link: '/'},
            {label: 'جامعةالقاهرة', link: '/'},  
          ]
        },
        {
          label: '',
          subsubitems: [
            {label: 'جامعة الإسكندرية', link: '/'},
            {label: 'جامعة كفر الشيخ', link: '/'},
            {label: 'جامعة عين شمس', link: '/'},
            {label: 'جامعة طنطا', link: '/'},
            {label: 'جامعة المنيا', link: '/'},
            {label: 'جامعة أسيوط', link: '/'},
            {label: 'جامعة حلوان', link: '/'},
          ]
        },
        {
          label: '',
          subsubitems: [
            {label: 'جامعة بورسعيد', link: '/'},
            {label: 'جامعة قناة السويس', link: '/'},
            {label: 'جامعة سوهاج', link: '/'},
            {label: 'جامعة دمنهور', link: '/'},
            {label: 'جامعة دمياط', link: '/'},
            {label: 'جامعة السادات', link: '/'},
            {label: 'جامعة السويس', link: '/'},   
          ]
        }
      ]
    },

    {
      label: 'أخرى',
      columns: [
        {
          label: '',
          subsubitems: [
            {
              label: 'Subsubitem 2',
              subsubitems: [
                {label: 'قناة الجامعة على YouTube', link: '/'},
                {label: 'نشرات الجامعة', link: '/'},
                {label: 'جامعة المنوفية على الشاشة الصغيرة', link: '/'},
                {label: 'جامعة المنوفية فى ', link: '/'},
              ]
            },
            {label: 'مؤتمر التحول نحو الأخضر', link: '/'},
            {label: 'المتدربين', link: '/'},
            {label: 'التحول الرقمي', link: '/'},
            {label: 'أرشيف الأخبار', link: '/'},
          ]
        },
      ]
    },
  ];

  
  private hideSubsubitemsTimeout: any;

  toggleSubsubitems(subsubitemLabel: string, subsubitem: Subsubitem) {
    if (this.hideSubsubitemsTimeout) {
      clearTimeout(this.hideSubsubitemsTimeout);
    }
    this.showSubitems[subsubitemLabel] = !this.showSubitems[subsubitemLabel];
    this.hoveredSubitem = this.showSubitems[subsubitemLabel] ? subsubitem : null;

    if (!this.showSubitems[subsubitemLabel]) {
      // Delay hiding the subsubitems container to allow the user to move the mouse into it
      this.hideSubsubitemsTimeout = setTimeout(() => {
        this.hoveredSubitem = null;
      }, 300);
    }
  }

  toggleSubsubitemContainer(subsubitemLabel: string) {
    this.showSubsubitemContainer[subsubitemLabel] = !this.showSubsubitemContainer[subsubitemLabel];
  }

  isSubsubitemActive(subsubitemLabel: string): boolean {
    return this.hoveredSubitem !== null && this.hoveredSubitem.label === subsubitemLabel;
  }
  
  setHoveredSubitem(subsubitem: Subsubitem) {
    this.hoveredSubitem = subsubitem;
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


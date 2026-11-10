export type Locale = 'en' | 'ar';

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  href: string;
};

export type SiteContent = {
  brand: { short: string; full: string };
  tagline: string;
  nav: { label: string; href: string }[];
  services: Service[];
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroCtaSecondary: string;
    introTitle: string;
    introBody: string;
    servicesTitle: string;
    servicesBody: string;
    approachTitle: string;
    approachItems: { title: string; body: string }[];
    contactTitle: string;
    contactBody: string;
    contactCta: string;
  };
  about: {
    title: string;
    body: string[];
    valuesTitle: string;
    values: { title: string; body: string }[];
  };
  portfolio: {
    title: string;
    body: string;
    note: string;
    items: { title: string; category: string; year: string; summary: string }[];
  };
  caseStudies: { title: string; body: string; note: string };
  pricing: {
    title: string;
    body: string;
    plans: {
      name: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      featured?: boolean;
    }[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    whatsappLabel: string;
    phoneLabel: string;
    phoneNumber: string;
    facebookUrl: string;
    formTitle: string;
    formBody: string;
  };
  quote: {
    title: string;
    body: string;
    formTitle: string;
    formBody: string;
  };
  blog: { title: string; body: string; note: string; posts: { title: string; excerpt: string; date: string }[] };
  legalTitle: string;
  privacy: { title: string; body: string[] };
  terms: { title: string; body: string[] };
  footer: { blurb: string; servicesLabel: string; companyLabel: string; legalLabel: string; rights: string };
  cta: { title: string; body: string; label: string };
};

export const content: Record<Locale, SiteContent> = {
  en: {
    brand: { short: 'Waraq & Hekaya', full: 'Waraq & Hekaya — Ideas Into Digital Experiences.' },
    tagline: 'Ideas Into Digital Experiences.',
    nav: [
      { label: 'Home', href: '/en' },
      { label: 'About', href: '/en/about' },
      { label: 'Services', href: '/en/services' },
      { label: 'Portfolio', href: '/en/portfolio' },
      { label: 'Pricing', href: '/en/pricing' },
      { label: 'Blog', href: '/en/blog' },
      { label: 'Contact', href: '/en/contact' }
    ],
    services: [
      {
        id: 'creative-studio',
        title: 'Creative Studio',
        tagline: 'Visual identity and storytelling that people remember.',
        description: 'From social media design to full brand systems, we craft visuals that communicate clearly and consistently across every touchpoint.',
        deliverables: ['Social media design', 'Brand identity', 'Advertising creatives', 'Video editing'],
        href: '/en/services/creative-studio'
      },
      {
        id: 'web-development',
        title: 'Web Development',
        tagline: 'Fast, accessible websites built to convert.',
        description: 'Business websites, e-commerce, landing pages, dashboards, and API integrations engineered for performance and clarity.',
        deliverables: ['Business websites', 'E-commerce & Shopify', 'WordPress & landing pages', 'Dashboards & API integrations'],
        href: '/en/services/web-development'
      },
      {
        id: 'ai-solutions',
        title: 'AI & Automation',
        tagline: 'Put AI to work on your workflows.',
        description: 'Chatbots, customer-support automation, WhatsApp integrations, and AI agents that free your team for higher-value work.',
        deliverables: ['AI chatbots', 'Customer support automation', 'WhatsApp integrations', 'Business workflows'],
        href: '/en/services/ai-solutions'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        tagline: 'Own the channels that matter to your audience.',
        description: 'Social media management, content strategy, SEO, and advertising campaigns built on a clear measurement plan.',
        deliverables: ['Social media management', 'Content strategy', 'SEO', 'Advertising campaigns'],
        href: '/en/services/digital-marketing'
      },
      {
        id: 'content-translation',
        title: 'Content & Translation',
        tagline: 'Words that travel across languages with intent.',
        description: 'Copywriting and Arabic–English translation that preserve tone, meaning, and brand voice.',
        deliverables: ['Copywriting', 'Arabic–English translation', 'Ebook translation', 'Product descriptions'],
        href: '/en/services/content-translation'
      },
      {
        id: 'digital-products',
        title: 'Digital Products',
        tagline: 'Ready-made tools that save you time.',
        description: 'Templates, themes, ebooks, and prompt packs built from the same craft we apply to client work.',
        deliverables: ['Templates', 'Shopify themes', 'Ebooks', 'Prompt packs & resources'],
        href: '/en/services/digital-products'
      }
    ],
    home: {
      heroTitle: 'Ideas Into Digital Experiences.',
      heroSubtitle: 'Waraq & Hekaya is an AI-powered digital agency from Egypt helping brands worldwide design, build, and grow.',
      heroCta: 'Request a quote',
      heroCtaSecondary: 'Explore services',
      introTitle: 'A partner for the whole journey',
      introBody: 'We combine creative design, engineering, and AI to deliver work that is beautiful, functional, and measurable. Whether you need a single campaign or a long-term retainer, we build with your goals in mind.',
      servicesTitle: 'What we do',
      servicesBody: 'Six focused practices, one integrated team.',
      approachTitle: 'How we work',
      approachItems: [
        { title: 'Listen first', body: 'We start by understanding your audience, goals, and constraints before any design or code.' },
        { title: 'Build in the open', body: 'You see progress early and often, with time to steer before we finalize.' },
        { title: 'Measure and refine', body: 'We define what success looks like and iterate against it.' }
      ],
      contactTitle: 'Let’s talk about your project',
      contactBody: 'Tell us what you are building and we will reply within one business day.',
      contactCta: 'Contact us'
    },
    about: {
      title: 'About Waraq & Hekaya',
      body: [
        'Waraq & Hekaya — "paper and story" — is an AI-powered digital agency based in Egypt serving clients worldwide. We believe every brand has a story worth telling, and every story deserves thoughtful design and reliable technology.',
        'Our team blends creative direction, engineering, and AI to deliver websites, campaigns, content, and digital products that are honest, functional, and built to last.'
      ],
      valuesTitle: 'What we stand for',
      values: [
        { title: 'Honesty', body: 'We only claim what we can show. No invented results, no fabricated clients.' },
        { title: 'Craft', body: 'We sweat the details in design, code, and copy.' },
        { title: 'Partnership', body: 'We measure success by your outcomes, not our deliverables.' }
      ]
    },
    portfolio: {
      title: 'Portfolio',
      body: 'Selected work across design, development, and AI. We publish only real projects with client permission.',
      note: 'This section will be populated with real case studies as they are completed and approved for publication.',
      items: [
        { title: 'Brand identity', category: 'Creative Studio', year: '2025', summary: 'A complete visual identity for a regional food brand.' },
        { title: 'E-commerce build', category: 'Web Development', year: '2025', summary: 'A Shopify store designed and built from scratch.' },
        { title: 'Support automation', category: 'AI & Automation', year: '2025', summary: 'A WhatsApp support flow that answers common questions instantly.' }
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      body: 'Detailed write-ups of recent client projects, including the challenge, approach, and outcomes.',
      note: 'Case studies will be published here as projects are completed and approved for public release.'
    },
    pricing: {
      title: 'Pricing',
      body: 'Simple, transparent packages. Every project is scoped individually — contact us for a precise quote.',
      plans: [
        {
          name: 'Starter',
          price: '$500',
          period: 'per project',
          features: ['Landing page or campaign design', 'One revision round', 'Email support', 'Delivery in 2 weeks'],
          cta: 'Request a quote'
        },
        {
          name: 'Growth',
          price: '$1,500',
          period: 'per project',
          features: ['Multi-page website or full campaign', 'Content & copy support', 'SEO basics', 'Priority support', 'Delivery in 4 weeks'],
          cta: 'Request a quote',
          featured: true
        },
        {
          name: 'Business',
          price: '$3,000',
          period: 'per project',
          features: ['E-commerce or custom web app', 'AI chatbot integration', 'Full SEO setup', 'Priority support', 'Delivery in 6-8 weeks'],
          cta: 'Request a quote'
        },
        {
          name: 'Retainer',
          price: 'Custom',
          period: 'monthly',
          features: ['Ongoing design or development', 'Marketing & content support', 'Monthly strategy call', 'Slack or email access'],
          cta: 'Request a quote'
        }
      ]
    },
    contact: {
      title: 'Contact',
      body: 'We would love to hear about your project. Reach out by email or WhatsApp, or use the form below.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Phone',
      phoneNumber: '+20 100 833 8490',
      facebookUrl: 'https://www.facebook.com/share/1DfynNtrSf/',
      formTitle: 'Send us a message',
      formBody: 'We reply within one business day.'
    },
    quote: {
      title: 'Request a Quote',
      body: 'Tell us about your project and we will send you a detailed, no-obligation quote.',
      formTitle: 'Project details',
      formBody: 'The more you share, the more accurate your quote will be.'
    },
    blog: {
      title: 'Blog',
      body: 'Notes on design, technology, and building digital products.',
      note: 'Articles will be published here as the team writes them.',
      posts: [
        { title: 'Coming soon', excerpt: 'Our first article is in the works.', date: '2025' }
      ]
    },
    legalTitle: 'Legal',
    privacy: {
      title: 'Privacy Policy',
      body: [
        'Waraq & Hekaya collects only the information you provide through our forms: your name, email, and any details you choose to share about your project.',
        'We use this information solely to respond to your inquiry and to provide the services you request. We do not sell your data.',
        'Form submissions are stored securely and are accessible only to authorized team members.',
        'You may request deletion of your personal data at any time by contacting us.'
      ]
    },
    terms: {
      title: 'Terms of Service',
      body: [
        'By using this website, you agree to provide accurate information in our forms and to use the site for lawful purposes.',
        'Quotes provided through this website are estimates and are not binding until a written agreement is signed.',
        'All content on this site is the property of Waraq & Hekaya unless otherwise noted. You may not reproduce it without permission.',
        'We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.'
      ]
    },
    footer: {
      blurb: 'An AI-powered digital agency from Egypt, building digital experiences for brands worldwide.',
      servicesLabel: 'Services',
      companyLabel: 'Company',
      legalLabel: 'Legal',
      rights: 'All rights reserved.'
    },
    cta: { title: 'Have a project in mind?', body: 'Let’s build something great together.', label: 'Request a quote' }
  },
  ar: {
    brand: { short: 'ورق وحكاية', full: 'ورق وحكاية — نحول أفكارك إلى تجارب رقمية تصنع الفرق.' },
    tagline: 'نحول أفكارك إلى تجارب رقمية تصنع الفرق.',
    nav: [
      { label: 'الرئيسية', href: '/ar' },
      { label: 'من نحن', href: '/ar/about' },
      { label: 'خدماتنا', href: '/ar/services' },
      { label: 'أعمالنا', href: '/ar/portfolio' },
      { label: 'الأسعار', href: '/ar/pricing' },
      { label: 'المدونة', href: '/ar/blog' },
      { label: 'تواصل معنا', href: '/ar/contact' }
    ],
    services: [
      {
        id: 'creative-studio',
        title: 'الاستوديو الإبداعي',
        tagline: 'هوية بصرية وقصص يتذكرها الناس.',
        description: 'من تصميم وسائل التواصل إلى أنظمة الهوية الكاملة، نصنع تصاميم تتواصل بوضوح واتساق عبر كل نقطة تواصل.',
        deliverables: ['تصميم وسائل التواصل', 'الهوية البصرية', 'إعلانات إبداعية', 'مونتاج الفيديو'],
        href: '/ar/services/creative-studio'
      },
      {
        id: 'web-development',
        title: 'تطوير المواقع',
        tagline: 'مواقع سريعة وسهلة الاستخدام مصممة للتحويل.',
        description: 'مواقع أعمال، تجارة إلكترونية، صفحات هبوط، لوحات تحكم، وتكاملات برمجية مبنية على الأداء والوضوح.',
        deliverables: ['مواقع أعمال', 'تجارة إلكترونية وShopify', 'ووردبريس وصفحات هبوط', 'لوحات تحكم وتكاملات'],
        href: '/ar/services/web-development'
      },
      {
        id: 'ai-solutions',
        title: 'الذكاء الاصطناعي والأتمتة',
        tagline: 'اجعل الذكاء الاصطناعي يعمل لصالحك.',
        description: 'روبوتات محادثة، أتمتة خدمة العملاء، تكامل واتساب، ووكلاء أذكياء يحررون وقت فريقك للأعمال الأهم.',
        deliverables: ['روبوتات محادثة', 'أتمتة خدمة العملاء', 'تكامل واتساب', 'سير عمل تجاري'],
        href: '/ar/services/ai-solutions'
      },
      {
        id: 'digital-marketing',
        title: 'التسويق الرقمي',
        tagline: 'أمتلك القنوات التي تهم جمهورك.',
        description: 'إدارة وسائل التواصل، استراتيجية المحتوى، تحسين محركات البحث، وحملات إعلانية مبنية على خطة قياس واضحة.',
        deliverables: ['إدارة وسائل التواصل', 'استراتيجية المحتوى', 'تحسين محركات البحث', 'حملات إعلانية'],
        href: '/ar/services/digital-marketing'
      },
      {
        id: 'content-translation',
        title: 'المحتوى والترجمة',
        tagline: 'كلمات تنتقل بين اللغات بمعناها الكامل.',
        description: 'كتابة محتوى وترجمة عربية–إنجليزية تحافظ على النبرة والمعنى وصوت العلامة التجارية.',
        deliverables: ['كتابة المحتوى', 'ترجمة عربية–إنجليزية', 'ترجمة الكتب الإلكترونية', 'وصف المنتجات'],
        href: '/ar/services/content-translation'
      },
      {
        id: 'digital-products',
        title: 'المنتجات الرقمية',
        tagline: 'أدوات جاهزة توفر لك الوقت.',
        description: 'قوالب وثيمات وكتب إلكترونية وحزم أوامر مبنية بنفس الحرفية التي نطبقها في مشاريع العملاء.',
        deliverables: ['قوالب', 'ثيمات Shopify', 'كتب إلكترونية', 'حزم أوامر وموارد'],
        href: '/ar/services/digital-products'
      }
    ],
    home: {
      heroTitle: 'نحول أفكارك إلى تجارب رقمية تصنع الفرق.',
      heroSubtitle: 'ورق وحكاية وكالة رقمية مدعومة بالذكاء الاصطناعي من مصر تساعد العلامات التجارية حول العالم على التصميم والبناء والنمو.',
      heroCta: 'اطلب عرض سعر',
      heroCtaSecondary: 'استكشف الخدمات',
      introTitle: 'شريك لك في الرحلة كاملة',
      introBody: 'نجمع بين الإبداع والهندسة والذكاء الاصطناعي لتقديم عمل جميل ووظيفي وقابل للقياس. سواء كنت بحاجة لحملة واحدة أو عقد شهري، نبني بفكر أهدافك.',
      servicesTitle: 'ماذا نقدم',
      servicesBody: 'ستة تخصصات مركّزة، وفريق واحد متكامل.',
      approachTitle: 'كيف نعمل',
      approachItems: [
        { title: 'نستمع أولًا', body: 'نبدأ بفهم جمهورك وأهدافك وقيودك قبل أي تصميم أو برمجة.' },
        { title: 'نبني بشفافية', body: 'ترى التقدم مبكرًا وبشكل متكرر، مع مساحة للتوجيه قبل الإطلاق.' },
        { title: 'نقيس ونحسّن', body: 'نحدد معنى النجاح ونكرر بناءً عليه.' }
      ],
      contactTitle: 'لنتحدث عن مشروعك',
      contactBody: 'أخبرنا بما تبنيه وسنرد خلال يوم عمل واحد.',
      contactCta: 'تواصل معنا'
    },
    about: {
      title: 'عن ورق وحكاية',
      body: [
        'ورق وحكاية — "الورق والحكاية" — هي وكالة رقمية مدعومة بالذكاء الاصطناعي مقرها مصر وتخدم عملاء حول العالم. نؤمن أن لكل علامة تجارية قصة تستحق أن تُروى، ولكل قصة تصميمًا مدروسًا وتقنية موثوقة.',
        'يجمع فريقنا بين الإخراج الإبداعي والهندسة والذكاء الاصطناعي لتقديم مواقع وحملات ومحتوى ومنتجات رقمية صادقة ووظيفية ومصممة لتدوم.'
      ],
      valuesTitle: 'نقف خلف',
      values: [
        { title: 'الصدق', body: 'لا ندّعي إلا ما يمكننا إثباته. لا نتائج مختلقة ولا عملاء وهميون.' },
        { title: 'الإتقان', body: 'نهتم بالتفاصيل في التصميم والبرمجة والمحتوى.' },
        { title: 'الشراكة', body: 'نقيس النجاح بنتائجك، لا بمخرجاتنا فقط.' }
      ]
    },
    portfolio: {
      title: 'أعمالنا',
      body: 'مختارات من أعمالنا في التصميم والتطوير والذكاء الاصطناعي. ننشر فقط المشاريع الحقيقية بإذن العملاء.',
      note: 'سيُملأ هذا القسم بدراسات حالة حقيقية فور اكتمالها والموافقة على نشرها.',
      items: [
        { title: 'هوية بصرية', category: 'الاستوديو الإبداعي', year: '2025', summary: 'هوية بصرية متكاملة لعلامة غذائية محلية.' },
        { title: 'متجر إلكتروني', category: 'تطوير المواقع', year: '2025', summary: 'متجر Shopify تم تصميمه وبناؤه من الصفر.' },
        { title: 'أتمتة خدمة العملاء', category: 'الذكاء الاصطناعي والأتمتة', year: '2025', summary: 'تدفق واتساب يجيب على الأسئلة الشائعة فورًا.' }
      ]
    },
    caseStudies: {
      title: 'دراسات الحالة',
      body: 'تفاصيل كاملة عن مشاريع حديثة، تشمل التحدي والمنهج والنتائج.',
      note: 'ستُنشر دراسات الحالة هنا فور اكتمال المشاريع والموافقة على نشرها.'
    },
    pricing: {
      title: 'الأسعار',
      body: 'باقات بسيطة وشفافة. كل مشروع يُحدد سعره بشكل فردي — تواصل معنا للحصول على عرض دقيق.',
plans: [
        {
          name: 'ابتدائي',
          price: '500$',
          period: 'لكل مشروع',
          features: ['صفحة هبوط أو تصميم حملة', 'جولة مراجعة واحدة', 'دعم عبر البريد', 'ال entrega خلالسبوعين'],
          cta: 'اطلب عرض سعر'
        },
        {
          name: 'نمو',
          price: '1500$',
          period: 'لكل مشروع',
          features: ['موقع متعدد الصفحات أو حملة كاملة', 'دعم المحتوى والكتابة', 'أساسيات SEO', 'دعم ذو أولوية', 'ال entrega خلال أربعة أسابيع'],
          cta: 'اطلب عرض سعر',
          featured: true
        },
        {
          name: 'أعمال',
          price: '3000$',
          period: 'لكل مشروع',
          features: ['متجر إلكتروني أو تطبيق ويب مخصص', 'تكامل روبوت م(calculation) ذكي', 'تحسين محركات Searches completo', 'دعم ذو أولوية', 'ال entrega خلال 6-8 أسابيع'],
          cta: 'اطلب عرض سعر'
        },
        {
          name: 'gency شهري',
          price: 'حسب الطلب',
          period: 'شهريًا',
          features: [' تصميم أو تطوير مستمر', 'دعم تسويق ومحتوى', 'اجتماع strategies شهري', 'وصول عبر Slack أو البريد'],
          cta: 'اطلب عرض سعر'
        }
      ]
    },
    contact: {
      title: 'تواصل معنا',
      body: 'يسعدنا سماع فكرة مشروعك. تواصل عبر البريد أو واتساب، أو استخدم النموذج أدناه.',
      emailLabel: 'البريد الإلكتروني',
      whatsappLabel: 'واتساب',
      phoneLabel: 'الهاتف',
      phoneNumber: '+20 100 833 8490',
      facebookUrl: 'https://www.facebook.com/share/1DfynNtrSf/',
      formTitle: 'أرسل لنا رسالة',
      formBody: 'نرد خلال يوم عمل واحد.'
    },
    quote: {
      title: 'اطلب عرض سعر',
      body: 'أخبرنا عن مشروعك وسنرسل لك عرض سعر مفصّل ودون أي التزام.',
      formTitle: 'تفاصيل المشروع',
      formBody: 'كلما شاركت أكثر، كان عرض السعر أدق.'
    },
    blog: {
      title: 'المدونة',
      body: 'ملاحظات حول التصميم والتقنية وبناء المنتجات الرقمية.',
      note: 'ستُنشر المقالات هنا فور كتابتها من الفريق.',
      posts: [
        { title: 'قريبًا', excerpt: 'مقالنا الأول قيد الإعداد.', date: '2025' }
      ]
    },
    legalTitle: 'قانوني',
    privacy: {
      title: 'سياسة الخصوصية',
      body: [
        'تجمع ورق وحكاية فقط المعلومات التي تقدمها عبر نماذجنا: اسمك وبريدك الإلكتروني وأي تفاصيل تختار مشاركتها عن مشروعك.',
        'نستخدم هذه المعلومات حصريًا للرد على استفسارك وتقديم الخدمات التي تطلبها. لا نبيع بياناتك.',
        'تُخزن إرسالات النماذج بأمان ولا يصل إليها إلا أعضاء الفريق المصرح لهم.',
        'يمكنك طلب حذف بياناتك الشخصية في أي وقت بالتواصل معنا.'
      ]
    },
    terms: {
      title: 'شروط الخدمة',
      body: [
        'باستخدامك لهذا الموقع، توافق على تقديم معلومات دقيقة في نماذجنا واستخدام الموقع لأغراض مشروعة.',
        'عروض الأسعار المقدمة عبر هذا الموقع هي تقديرات وغير ملزمة حتى توقيع اتفاقية مكتوبة.',
        'جميع محتويات هذا الموقع ملك لورق وحكاية ما لم يُذكر خلاف ذلك. لا يجوز إعادة إنتاجها دون إذن.',
        'قد نحدّث هذه الشروط في أي وقت. استمرار استخدام الموقع يعني قبولك للشروط المحدثة.'
      ]
    },
    footer: {
      blurb: 'وكالة رقمية مدعومة بالذكاء الاصطناعي من مصر، تبني تجارب رقمية للعلامات التجارية حول العالم.',
      servicesLabel: 'الخدمات',
      companyLabel: 'الشركة',
      legalLabel: 'قانوني',
      rights: 'جميع الحقوق محفوظة.'
    },
    cta: { title: 'لديك مشروع في بالك؟', body: 'لنبنِ شيئًا رائعًا معًا.', label: 'اطلب عرض سعر' }
  }
};

export const locales: Locale[] = ['en', 'ar'];

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ar';
}

export type Language = "ro" | "ru";

export interface Translations {
  site: {
    title: string;
    siteName: string;
    siteNameFull: string;
    description: string;
    copyright: string;
  };
  theme: {
    dark: string;
    light: string;
  };
  navigation: {
    items: { label: string; href: string }[];
    footerLinks: { label: string; href: string }[];
  };
  hero: {
    badge: string;
    heading: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    highlights: string[];
    card: {
      formatTitle: string;
      formats: { label: string; value: string }[];
      audienceTitle: string;
      audiences: { label: string; value: string }[];
      cardCta: string;
    };
  };
  despre: {
    sectionLabel: string;
    heading: string;
    description: string;
    cardTitle: string;
    cardItems: string[];
  };
  servicii: {
    sectionLabel: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  pregatire: {
    sectionLabel: string;
    heading: string;
    items: { title: string; description: string; features: string[] }[];
  };
  dictie: {
    sectionLabel: string;
    heading: string;
    description: string;
    steps: { number: string; title: string; description: string }[];
  };
  testimoniale: {
    sectionLabel: string;
    heading: string;
    items: {
      name: string;
      role: string;
      text: string;
      image: string;
      rating: number;
    }[];
  };
  tarife: {
    sectionLabel: string;
    heading: string;
    description: string;
    recommended: string;
    discount: string;
    items: {
      title: string;
      price: string;
      oldPrice: string;
      hasDiscount: boolean;
      subtitle: string;
      features: string[];
      cta: string;
      ctaStyle: string;
      recommended: boolean;
      draft: boolean;
    }[];
  };
  faq: {
    sectionLabel: string;
    heading: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    mascotMessage: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      packageLabel: string;
      packagePlaceholder: string;
      packageOther: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
  };
}

export const ro: Translations = {
  site: {
    title: "Meditații la română",
    siteName: "Meditații la Română",
    siteNameFull: "Meditații la Română • Nisporeni",
    description:
      "Pregătire pentru clasa a 9-a, Bacalaureat și lecții curente. Online și offline în Nisporeni.",
    copyright: "© 2026 Meditații la Română. Toate drepturile rezervate.",
  },
  theme: {
    dark: "Mod întunecat",
    light: "Mod luminos",
  },
  navigation: {
    items: [
      { label: "Acasă", href: "#hero" },
      { label: "Despre", href: "#despre" },
      { label: "Servicii", href: "#servicii" },
      { label: "Pregătire examene", href: "#pregatire" },
      { label: "Dicție", href: "#dictie" },
      { label: "Contact", href: "#contact" },
    ],
    footerLinks: [
      { label: "Despre", href: "#despre" },
      { label: "Servicii", href: "#servicii" },
      { label: "Tarife", href: "#tarife" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    badge: "Profesor de limbă și literatură română",
    heading:
      "Meditații în Nisporeni, online și offline, pentru rezultate sigure la română",
    description:
      "Pregătire clară și structurată pentru clasa a 9-a, Bacalaureat și lecții curente. Lucrăm pe texte, argumentare, gramatică și exprimare corectă, cu feedback personalizat după fiecare ședință.",
    ctaPrimary: "Rezervă o ședință",
    ctaSecondary: "Vezi serviciile",
    highlights: [
      "Plan de lucru pe obiective și nivel",
      "Corectare detaliată a eseurilor",
      "Exerciții de dicție și expresivitate",
    ],
    card: {
      formatTitle: "Format de lucru",
      formats: [
        { label: "Online", value: "Zoom / Meet" },
        { label: "Offline", value: "Nisporeni" },
      ],
      audienceTitle: "Pentru cine",
      audiences: [
        { label: "Clasa a 9-a", value: "Evaluare națională" },
        { label: "Clasa a 12-a", value: "Bacalaureat" },
        { label: "Lecții", value: "Consolidare" },
      ],
      cardCta: "Solicită detalii",
    },
  },
  despre: {
    sectionLabel: "Despre",
    heading: "Lucrăm cu răbdare, claritate și obiective măsurabile",
    description:
      "Sunt profesor de limbă și literatură română, cu focus pe comunicare corectă, argumentare și înțelegerea profundă a textelor. Meditațiile sunt practice și orientate spre rezultate, fie că vrei să iei o notă mare, fie că vrei să vorbești și să scrii corect.",
    cardTitle: "Ce primești în fiecare ședință",
    cardItems: [
      "Explicații simple, pe înțelesul tău",
      "Corectare și rescriere ghidată a eseurilor",
      "Teme personalizate și plan de învățare",
      "Feedback clar, pas cu pas",
    ],
  },
  servicii: {
    sectionLabel: "Servicii",
    heading: "Totul într-un singur loc",
    items: [
      {
        title: "Meditații individuale",
        description:
          "Ședințe 1:1, online sau în Nisporeni. Avem timp pentru întrebări și pentru clarificări punctuale.",
      },
      {
        title: "Plan de recapitulare",
        description:
          "Structurăm materia pe săptămâni, cu testări periodice și teme corectate detaliat.",
      },
      {
        title: "Eseu și argumentare",
        description:
          "Învățăm structura eseului, tehnici de argumentare și exprimare clară, cu exemple reale.",
      },
    ],
  },
  pregatire: {
    sectionLabel: "Pregătire examene",
    heading: "Clasa a 9-a și Bacalaureat",
    items: [
      {
        title: "Clasa a 9-a",
        description:
          "Recapitulare gramatică, texte literare, analiză și exerciții tip evaluare. Te ajut să înțelegi cerințele și să răspunzi clar.",
        features: [
          "Teste simulative și corectare pe loc",
          "Scheme rapide pentru subiecte",
        ],
      },
      {
        title: "Bacalaureat",
        description:
          "Plan complet pentru subiectele de Bacalaureat, cu accent pe eseu, argumentare și interpretare de text.",
        features: [
          "Eseuri model și rescrieri ghidate",
          "Metode rapide de învățare",
        ],
      },
    ],
  },
  dictie: {
    sectionLabel: "Dicție",
    heading: "Vorbește clar, sigur și expresiv",
    description:
      "Cursurile de dicție te ajută să îți îmbunătățești pronunția, ritmul și încrederea în exprimare. Lucrăm pe respirație, accent, articulare și intonație.",
    steps: [
      {
        number: "01",
        title: "Evaluare rapidă",
        description:
          "Identificăm sunetele și obiceiurile care îți afectează claritatea.",
      },
      {
        number: "02",
        title: "Exerciții ghidate",
        description: "Lucrăm cu texte scurte, fraze și jocuri de articulare.",
      },
      {
        number: "03",
        title: "Aplicare practică",
        description: "Simulăm prezentări și răspunsuri, cu feedback instant.",
      },
    ],
  },
  testimoniale: {
    sectionLabel: "Testimoniale",
    heading: "Rezultate și încredere de la elevi",
    items: [
      {
        name: "Irina M.",
        role: "Clasa a 12-a, Bac",
        text: "Am început pregătirea pentru Bac cu emoții, dar fiecare ședință a fost clară și pe obiectiv. Am reușit să structurez eseurile și să îmi cresc nota.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
      {
        name: "Andrei P.",
        role: "Curs dicție",
        text: "Exercițiile de dicție m-au ajutat să vorbesc mai clar și să am încredere la prezentări. Feedbackul a fost exact ce aveam nevoie.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
      {
        name: "Daria C.",
        role: "Clasa a 9-a",
        text: "Pregătirea pentru clasa a 9-a a fost organizată pe săptămâni, cu teste și corectări. Am înțeles gramatica mult mai bine.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
    ],
  },
  tarife: {
    sectionLabel: "Tarife",
    heading: "Pachete simple și transparente",
    description:
      "Alege formatul care ți se potrivește. Ședințele pot fi online sau offline în Nisporeni.",
    recommended: "Recomandat",
    discount: "Reducere",
    items: [
      {
        title: "Ședință individuală",
        price: "150 MDL",
        oldPrice: "",
        hasDiscount: false,
        subtitle: "60 minute, online sau offline",
        features: [
          "Analiză nivelului curent",
          "Exerciții personalizate",
          "Feedback imediat",
        ],
        cta: "Rezervă",
        ctaStyle: "ghost",
        recommended: false,
        draft: false,
      },
      {
        title: "Pachet 4 ședințe",
        price: "520 MDL",
        oldPrice: "600 MDL",
        hasDiscount: true,
        subtitle: "4 x 60 minute, economisești timp",
        features: [
          "Plan de învățare săptămânal",
          "Corectare eseu inclusă",
          "Suport între ședințe",
        ],
        cta: "Rezervă pachet",
        ctaStyle: "cta",
        recommended: true,
        draft: false,
      },
      {
        title: "Pachet examen",
        price: "980 MDL",
        oldPrice: "",
        hasDiscount: false,
        subtitle: "8 ședințe pentru examen",
        features: [
          "Simulări cu barem",
          "Eseuri model și rescrieri",
          "Strategii de timp",
        ],
        cta: "Rezervă",
        ctaStyle: "ghost",
        recommended: false,
        draft: false,
      },
    ],
  },
  faq: {
    sectionLabel: "FAQ",
    heading: "Întrebări frecvente",
    description:
      "Răspunsuri clare pentru cele mai comune întrebări despre ședințe, programări și pregătire.",
    items: [
      {
        question: "Cât durează o ședință?",
        answer:
          "O ședință standard durează 60 de minute, cu pauze scurte dacă este nevoie. Pentru pachete se poate ajusta durata.",
      },
      {
        question: "Se poate face pregătire doar online?",
        answer:
          "Da. Lucrăm online prin Zoom sau Google Meet, cu materiale partajate și explicații în timp real.",
      },
      {
        question: "Ce materiale trebuie să aduc?",
        answer:
          "Pentru început este suficient caietul și manualul. Eu ofer teste, modele de eseu și fișe de lucru.",
      },
      {
        question: "Cum se face programarea?",
        answer:
          "Programarea se face prin mesaj sau apel. Stabilim ziua, ora și formatul, apoi primești confirmarea.",
      },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    heading: "Programează o ședință",
    description:
      "Scrie-mi pentru a stabili un program potrivit. Răspund rapid și te ajut să alegi formatul potrivit: online sau offline în Nisporeni.",
    phone: "+373 600 00 000",
    email: "meditatii.romana@email.com",
    location: "Nisporeni, Republica Moldova",
    mascotMessage:
      "Bine ai venit! Rezervă o ședință și hai să lucrăm împreună.",
    phoneLabel: "Telefon / WhatsApp",
    emailLabel: "Email",
    locationLabel: "Locație",
    form: {
      nameLabel: "Nume și prenume",
      namePlaceholder: "Numele tău",
      phoneLabel: "Telefon",
      phonePlaceholder: "Număr de telefon",
      packageLabel: "Pachet de interes",
      packagePlaceholder: "Alege un pachet (opțional)",
      packageOther: "Altă opțiune",
      messageLabel: "Mesaj",
      messagePlaceholder: "Spune-mi ce obiectiv ai",
      submit: "Trimite mesaj",
      submitting: "Se trimite…",
      success: "Mesaj trimis! Vă vom contacta în curând. Mulțumim!",
      error:
        "Eroare la trimitere. Încearcă din nou sau scrie direct la {phone}.",
    },
  },
};

export const ru: Translations = {
  site: {
    title: "Репетитор по румынскому",
    siteName: "Репетитор по Румынскому",
    siteNameFull: "Репетитор по Румынскому • Ниспорень",
    description:
      "Подготовка к 9 классу, Бакалавреату и текущим урокам. Онлайн и офлайн в Ниспоренах.",
    copyright: "© 2026 Репетитор по Румынскому. Все права защищены.",
  },
  theme: {
    dark: "Тёмная тема",
    light: "Светлая тема",
  },
  navigation: {
    items: [
      { label: "Главная", href: "#hero" },
      { label: "О нас", href: "#despre" },
      { label: "Услуги", href: "#servicii" },
      { label: "Подготовка к экзаменам", href: "#pregatire" },
      { label: "Дикция", href: "#dictie" },
      { label: "Контакт", href: "#contact" },
    ],
    footerLinks: [
      { label: "О нас", href: "#despre" },
      { label: "Услуги", href: "#servicii" },
      { label: "Тарифы", href: "#tarife" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  hero: {
    badge: "Преподаватель румынского языка и литературы",
    heading:
      "Репетиторство в Ниспоренах, онлайн и офлайн, для уверенных результатов по румынскому",
    description:
      "Чёткая и структурированная подготовка к 9 классу, Бакалавреату и текущим урокам. Работаем с текстами, аргументацией, грамматикой и правильным выражением, с персонализированной обратной связью после каждого занятия.",
    ctaPrimary: "Записаться на занятие",
    ctaSecondary: "Посмотреть услуги",
    highlights: [
      "Рабочий план по целям и уровню",
      "Детальная проверка сочинений",
      "Упражнения по дикции и выразительности",
    ],
    card: {
      formatTitle: "Формат работы",
      formats: [
        { label: "Онлайн", value: "Zoom / Meet" },
        { label: "Офлайн", value: "Ниспорень" },
      ],
      audienceTitle: "Для кого",
      audiences: [
        { label: "9 класс", value: "Национальная оценка" },
        { label: "12 класс", value: "Бакалавреат" },
        { label: "Уроки", value: "Закрепление" },
      ],
      cardCta: "Запросить детали",
    },
  },
  despre: {
    sectionLabel: "О нас",
    heading: "Работаем с терпением, ясностью и измеримыми целями",
    description:
      "Я преподаватель румынского языка и литературы, с фокусом на правильную коммуникацию, аргументацию и глубокое понимание текстов. Занятия практические и ориентированы на результат — хотите ли вы получить высокую оценку или просто говорить и писать правильно.",
    cardTitle: "Что вы получите на каждом занятии",
    cardItems: [
      "Простые объяснения, понятные вам",
      "Проверка и управляемое переписывание сочинений",
      "Персонализированные задания и план обучения",
      "Чёткая обратная связь, шаг за шагом",
    ],
  },
  servicii: {
    sectionLabel: "Услуги",
    heading: "Всё в одном месте",
    items: [
      {
        title: "Индивидуальные занятия",
        description:
          "Занятия 1:1, онлайн или в Ниспоренах. Есть время для вопросов и точечных разъяснений.",
      },
      {
        title: "План повторения",
        description:
          "Структурируем материал по неделям, с периодическим тестированием и детальной проверкой заданий.",
      },
      {
        title: "Сочинение и аргументация",
        description:
          "Изучаем структуру сочинения, техники аргументации и чёткого выражения, с реальными примерами.",
      },
    ],
  },
  pregatire: {
    sectionLabel: "Подготовка к экзаменам",
    heading: "9 класс и Бакалавреат",
    items: [
      {
        title: "9 класс",
        description:
          "Повторение грамматики, литературных текстов, анализ и упражнения типа оценивания. Помогаю понять требования и отвечать чётко.",
        features: [
          "Пробные тесты и проверка на месте",
          "Быстрые схемы для тем",
        ],
      },
      {
        title: "Бакалавреат",
        description:
          "Полный план по темам Бакалавреата, с акцентом на сочинение, аргументацию и интерпретацию текста.",
        features: [
          "Образцы сочинений и управляемые переписывания",
          "Быстрые методы обучения",
        ],
      },
    ],
  },
  dictie: {
    sectionLabel: "Дикция",
    heading: "Говорите чётко, уверенно и выразительно",
    description:
      "Курсы дикции помогут вам улучшить произношение, ритм и уверенность в выражении. Работаем с дыханием, ударением, артикуляцией и интонацией.",
    steps: [
      {
        number: "01",
        title: "Быстрая оценка",
        description:
          "Определяем звуки и привычки, которые влияют на вашу чёткость.",
      },
      {
        number: "02",
        title: "Управляемые упражнения",
        description:
          "Работаем с короткими текстами, фразами и артикуляционными играми.",
      },
      {
        number: "03",
        title: "Практическое применение",
        description:
          "Моделируем презентации и ответы с мгновенной обратной связью.",
      },
    ],
  },
  testimoniale: {
    sectionLabel: "Отзывы",
    heading: "Результаты и доверие от учеников",
    items: [
      {
        name: "Ирина М.",
        role: "12 класс, Бакалавреат",
        text: "Я начала подготовку к Баку с волнением, но каждое занятие было чётким и целенаправленным. Мне удалось структурировать сочинения и повысить оценку.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
      {
        name: "Андрей П.",
        role: "Курс дикции",
        text: "Упражнения по дикции помогли мне говорить чётче и увереннее на презентациях. Обратная связь была именно тем, что мне нужно.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
      {
        name: "Дарья С.",
        role: "9 класс",
        text: "Подготовка к 9 классу была организована по неделям, с тестами и проверками. Я гораздо лучше поняла грамматику.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80",
        rating: 5,
      },
    ],
  },
  tarife: {
    sectionLabel: "Тарифы",
    heading: "Простые и прозрачные пакеты",
    description:
      "Выберите подходящий формат. Занятия могут быть онлайн или офлайн в Ниспоренах.",
    recommended: "Рекомендуемый",
    discount: "Скидка",
    items: [
      {
        title: "Индивидуальное занятие",
        price: "150 MDL",
        oldPrice: "",
        hasDiscount: false,
        subtitle: "60 минут, онлайн или офлайн",
        features: [
          "Анализ текущего уровня",
          "Персонализированные упражнения",
          "Мгновенная обратная связь",
        ],
        cta: "Записаться",
        ctaStyle: "ghost",
        recommended: false,
        draft: false,
      },
      {
        title: "Пакет 4 занятия",
        price: "520 MDL",
        oldPrice: "600 MDL",
        hasDiscount: true,
        subtitle: "4 x 60 минут, экономия времени",
        features: [
          "Еженедельный план обучения",
          "Проверка сочинения включена",
          "Поддержка между занятиями",
        ],
        cta: "Записаться на пакет",
        ctaStyle: "cta",
        recommended: true,
        draft: false,
      },
      {
        title: "Пакет для экзамена",
        price: "980 MDL",
        oldPrice: "",
        hasDiscount: false,
        subtitle: "8 занятий для экзамена",
        features: [
          "Пробные экзамены по схеме",
          "Образцы сочинений и переписывания",
          "Стратегии тайм-менеджмента",
        ],
        cta: "Записаться",
        ctaStyle: "ghost",
        recommended: false,
        draft: false,
      },
    ],
  },
  faq: {
    sectionLabel: "FAQ",
    heading: "Часто задаваемые вопросы",
    description:
      "Чёткие ответы на самые распространённые вопросы о занятиях, записи и подготовке.",
    items: [
      {
        question: "Сколько длится занятие?",
        answer:
          "Стандартное занятие длится 60 минут, с короткими паузами при необходимости. Для пакетов продолжительность можно скорректировать.",
      },
      {
        question: "Можно ли заниматься только онлайн?",
        answer:
          "Да. Мы работаем онлайн через Zoom или Google Meet, с общими материалами и объяснениями в реальном времени.",
      },
      {
        question: "Какие материалы нужно принести?",
        answer:
          "Для начала достаточно тетради и учебника. Я предоставляю тесты, образцы сочинений и рабочие листы.",
      },
      {
        question: "Как записаться на занятие?",
        answer:
          "Запись осуществляется через сообщение или звонок. Мы определяем день, время и формат, после чего вы получаете подтверждение.",
      },
    ],
  },
  contact: {
    sectionLabel: "Контакт",
    heading: "Записаться на занятие",
    description:
      "Напишите мне, чтобы составить удобное расписание. Отвечу быстро и помогу выбрать подходящий формат: онлайн или офлайн в Ниспоренах.",
    phone: "+373 600 00 000",
    email: "meditatii.romana@email.com",
    location: "Ниспорень, Республика Молдова",
    mascotMessage:
      "Добро пожаловать! Запишитесь на занятие и давайте работать вместе.",
    phoneLabel: "Телефон / WhatsApp",
    emailLabel: "Эл. почта",
    locationLabel: "Местоположение",
    form: {
      nameLabel: "Имя и фамилия",
      namePlaceholder: "Ваше имя",
      phoneLabel: "Телефон",
      phonePlaceholder: "Номер телефона",
      packageLabel: "Интересующий пакет",
      packagePlaceholder: "Выберите пакет (необязательно)",
      packageOther: "Другой вариант",
      messageLabel: "Сообщение",
      messagePlaceholder: "Расскажите о своей цели",
      submit: "Отправить сообщение",
      submitting: "Отправка…",
      success:
        "Сообщение отправлено! Мы свяжемся с вами в ближайшее время. Спасибо!",
      error:
        "Ошибка при отправке. Попробуйте снова или напишите напрямую на {phone}.",
    },
  },
};

export const translations: Record<Language, Translations> = { ro, ru };

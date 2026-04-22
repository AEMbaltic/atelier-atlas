export type Lang = "lv" | "en" | "de" | "ru";

export const LANGS: Lang[] = ["lv", "en", "de", "ru"];

export const LANG_LABELS: Record<Lang, string> = {
  lv: "LV",
  en: "EN",
  de: "DE",
  ru: "RU",
};

type Dict = {
  nav: {
    home: string;
    work: string;
    atelier: string;
    collaborations: string;
    contact: string;
  };
  home: {
    heroHeadline: string;
    heroSub: string;
    heroCta: string;
    statement: string;
    disciplinesEyebrow: string;
    disciplines: { label: string; title: string; desc: string; cta: string }[];
    selectedEyebrow: string;
    selectedTitle: string;
    selectedCta: string;
    materialsEyebrow: string;
    materialsTitle: string;
    materialsCols: { title: string; body: string }[];
    partnersEyebrow: string;
    partnersTitle: string;
    partnersBody: string;
    partnersCta: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    filters: { all: string; furniture: string; kitchens: string; staircases: string; doors: string; exterior: string };
    next: string;
    backToWork: string;
    location: string;
    year: string;
  };
  atelier: {
    eyebrow: string;
    title: string;
    body: string[];
    statsLabels: { founded: string; markets: string; team: string };
  };
  collab: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; place: string; body: string; url: string }[];
    closing: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    studio: string;
    address: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    submit: string;
    submitted: string;
  };
  footer: {
    rights: string;
    crafted: string;
  };
  common: {
    selectLanguage: string;
  };
};

const lv: Dict = {
  nav: { home: "Sākums", work: "Darbi", atelier: "Ateljē", collaborations: "Sadarbība", contact: "Kontakti" },
  home: {
    heroHeadline: "Masīvkoks, kas dzīvo līdzi mājai.",
    heroSub: "Pasūtījuma mēbeles, galdniecība un arhitektūras elementi — radīti ar rokām Rīgā kopš 2007. gada.",
    heroCta: "Skatīt darbus",
    statement:
      "Mēs strādājam ar masīvkoku — ozolu, osi, riekstkoku — savienojot tradicionālo galdniecību ar mūsdienīgu dizainu. Katrs darbs tiek zīmēts, izgatavots un apdarināts mūsu darbnīcā.",
    disciplinesEyebrow: "Disciplīnas",
    disciplines: [
      { label: "01", title: "Mēbeles", desc: "Sērijveida kolekcijas un individuāli pasūtījumi.", cta: "Skatīt" },
      { label: "02", title: "Virtuves", desc: "Pasūtījuma virtuves, tostarp angļu stilā.", cta: "Skatīt" },
      { label: "03", title: "Kāpnes & durvis", desc: "Iekštelpu kāpnes, durvis un ieejas ansambļi.", cta: "Skatīt" },
      { label: "04", title: "Arhitektūras elementi", desc: "Logi, slēģi un eksterjera detaļas.", cta: "Skatīt" },
    ],
    selectedEyebrow: "Izlase",
    selectedTitle: "Atlasīti darbi",
    selectedCta: "Visi darbi",
    materialsEyebrow: "Darbnīca",
    materialsTitle: "Materiāli, amats, apdare",
    materialsCols: [
      { title: "Materiāli", body: "Ozols, osis, riekstkoks, priede. Masīvkoks tīrā veidā vai kombinācijā ar finierējumu un tekstilijām." },
      { title: "Amats", body: "Tradicionāli savienojumi, finierēšana, kokgriezumi. Rokas darbs uz katra detaļa." },
      { title: "Apdare", body: "Beicēšana, lakošana, krāsošana, eļļošana, pulēšana. Furnitūra ikdienas lietošanai gadu desmitiem." },
    ],
    partnersEyebrow: "Eksports",
    partnersTitle: "Strādājam Latvijā un ārpus tās",
    partnersBody: "Sadarbībā ar Luxoise (Berlīne), Bespoke Kitchens (Lielbritānija) un Unolik (Igaunija) mūsu darbi sasniedz pasūtītājus visā Eiropā.",
    partnersCta: "Sadarbība",
  },
  work: {
    eyebrow: "Darbi",
    title: "Atlasīti projekti",
    intro: "Privātinterjeri, viesnīcas un komercobjekti. Katrs projekts tiek izstrādāts no skices līdz uzstādīšanai.",
    filters: { all: "Visi", furniture: "Mēbeles", kitchens: "Virtuves", staircases: "Kāpnes", doors: "Durvis", exterior: "Eksterjers" },
    next: "Nākamais projekts",
    backToWork: "Atpakaļ uz darbiem",
    location: "Atrašanās vieta",
    year: "Gads",
  },
  atelier: {
    eyebrow: "Ateljē",
    title: "Ateljē Rīgā, kopš 2007. gada.",
    body: [
      "SEL RA ART tika dibināts 2007. gadā. Mēs veidojam sērijveida mēbeļu kolekcijas un individuālus pasūtījumus, kā arī izgatavojam kāpnes, durvis, logus, slēģus un eksterjera elementus.",
      "Strādājam ar masīvkoku — gan tīrā veidā, gan kombinācijā ar finierējumiem un tekstilijām. Apdarē izmantojam beicēšanu, lakošanu, krāsošanu, eļļošanu un pulēšanu. Augstas klases furnitūra nodrošina ērtu lietošanu.",
      "Komandu veido administrācija, dizaineri, projektētāji un kokapstrādes meistari. Strādājam Latvijā un eksporta tirgos — Vācijā, Igaunijā un Apvienotajā Karalistē.",
    ],
    statsLabels: { founded: "Dibināts", markets: "Tirgi", team: "Komanda" },
  },
  collab: {
    eyebrow: "Sadarbība",
    title: "Partneri Eiropā",
    intro: "Strādājam tieši ar arhitektiem, interjera dizaineriem un zīmoliem.",
    items: [
      { name: "Luxoise", place: "Berlīne, Vācija", body: "Pasūtījuma mēbeles, kāpnes un durvis modernam luksusa viesnīcas interjeram Berlīnē.", url: "luxoise.de" },
      { name: "Bespoke Kitchens", place: "Apvienotā Karaliste", body: "Angļu stila virtuves, kāpnes, durvis, mēbeles un interjera elementi pēc pasūtījuma.", url: "bespokekitchens.uk.com" },
      { name: "Unolik", place: "Igaunija", body: "SEL RA ART mēbeļu kolekcijas pieejamas Igaunijā caur Unolik.", url: "unolik.ee" },
    ],
    closing: "Jaunām sadarbībām, lūdzu, sazinieties ar mums.",
    cta: "Sazināties",
  },
  contact: {
    eyebrow: "Kontakti",
    title: "Sazinieties ar ateljē.",
    intro: "Atbildam darbdienās. Aicinām apmeklēt darbnīcu pēc iepriekšējas vienošanās.",
    studio: "Studija",
    address: "Aptiekas iela 13-35, Rīga, LV-1005",
    phone: "+371 29354067 · +371 26150665",
    email: "info@selraart.lv",
    formName: "Vārds",
    formEmail: "E-pasts",
    formMessage: "Ziņa",
    submit: "Nosūtīt ziņu",
    submitted: "Paldies. Sazināsimies drīzumā.",
  },
  footer: {
    rights: "Visas tiesības aizsargātas.",
    crafted: "Māksla dzīvot skaisti un radoši.",
  },
  common: { selectLanguage: "Valoda" },
};

const en: Dict = {
  nav: { home: "Home", work: "Work", atelier: "Atelier", collaborations: "Collaborations", contact: "Contact" },
  home: {
    heroHeadline: "Solid wood that lives with the home.",
    heroSub: "Bespoke furniture, joinery, and architectural elements — handmade in Riga since 2007.",
    heroCta: "View work",
    statement:
      "We work in solid timber — oak, ash, walnut — combining traditional joinery with contemporary design. Every piece is drawn, made, and finished in our workshop.",
    disciplinesEyebrow: "Disciplines",
    disciplines: [
      { label: "01", title: "Furniture", desc: "Serial collections and bespoke commissions.", cta: "Explore" },
      { label: "02", title: "Kitchens", desc: "Made-to-measure kitchens, including English style.", cta: "Explore" },
      { label: "03", title: "Staircases & Doors", desc: "Interior staircases, doors, and entrance ensembles.", cta: "Explore" },
      { label: "04", title: "Architectural Elements", desc: "Windows, shutters, and exterior detail.", cta: "Explore" },
    ],
    selectedEyebrow: "Selected",
    selectedTitle: "Selected work",
    selectedCta: "All projects",
    materialsEyebrow: "Workshop",
    materialsTitle: "Materials, craft, finish",
    materialsCols: [
      { title: "Materials", body: "Oak, ash, walnut, pine. Solid timber on its own or combined with veneer and textile." },
      { title: "Craft", body: "Traditional joinery, veneering, woodcarving. Hand work on every detail." },
      { title: "Finish", body: "Staining, lacquering, painting, oiling, polishing. Hardware chosen for daily use over decades." },
    ],
    partnersEyebrow: "Export",
    partnersTitle: "Working in Latvia and abroad",
    partnersBody: "Through partnerships with Luxoise (Berlin), Bespoke Kitchens (UK), and Unolik (Estonia), our work reaches clients across Europe.",
    partnersCta: "Collaborations",
  },
  work: {
    eyebrow: "Work",
    title: "Selected projects",
    intro: "Private interiors, hotels, and commercial spaces. Each project is developed from sketch to install.",
    filters: { all: "All", furniture: "Furniture", kitchens: "Kitchens", staircases: "Staircases", doors: "Doors", exterior: "Exterior" },
    next: "Next project",
    backToWork: "Back to work",
    location: "Location",
    year: "Year",
  },
  atelier: {
    eyebrow: "Atelier",
    title: "An atelier in Riga, since 2007.",
    body: [
      "SEL RA ART was founded in Riga in 2007. We design and craft serial furniture collections, bespoke commissions, and architectural woodwork — staircases, doors, windows, shutters, and exterior elements.",
      "We work with solid timber, on its own and in combination with veneers and textiles. Finishing includes staining, lacquering, painting, oiling, and polishing. Hardware is selected for daily use over decades.",
      "Our team is made up of designers, draftsmen, and master joiners. We work across Latvia and in export markets — Germany, Estonia, and the United Kingdom.",
    ],
    statsLabels: { founded: "Founded", markets: "Markets", team: "Team" },
  },
  collab: {
    eyebrow: "Collaborations",
    title: "Partners across Europe",
    intro: "We work directly with architects, interior designers, and brands.",
    items: [
      { name: "Luxoise", place: "Berlin, Germany", body: "Bespoke furniture, staircases, and doors for a modern luxury hotel interior in Berlin.", url: "luxoise.de" },
      { name: "Bespoke Kitchens", place: "United Kingdom", body: "English-style kitchens, staircases, doors, furniture, and interior elements crafted to commission.", url: "bespokekitchens.uk.com" },
      { name: "Unolik", place: "Estonia", body: "SEL RA ART furniture collections available through Unolik in Estonia.", url: "unolik.ee" },
    ],
    closing: "For new collaborations, please get in touch.",
    cta: "Contact",
  },
  contact: {
    eyebrow: "Contact",
    title: "Speak with the atelier.",
    intro: "We respond on weekdays. Workshop visits by appointment.",
    studio: "Studio",
    address: "Aptiekas iela 13-35, Riga, LV-1005",
    phone: "+371 29354067 · +371 26150665",
    email: "info@selraart.lv",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    submit: "Send message",
    submitted: "Thank you. We will be in touch shortly.",
  },
  footer: {
    rights: "All rights reserved.",
    crafted: "The art of living beautifully and creatively.",
  },
  common: { selectLanguage: "Language" },
};

const de: Dict = {
  nav: { home: "Startseite", work: "Arbeiten", atelier: "Atelier", collaborations: "Zusammenarbeit", contact: "Kontakt" },
  home: {
    heroHeadline: "Massivholz, das mit dem Haus lebt.",
    heroSub: "Maßgefertigte Möbel, Tischlerarbeiten und Architekturelemente — handgefertigt in Riga seit 2007.",
    heroCta: "Arbeiten ansehen",
    statement:
      "Wir arbeiten mit Massivholz — Eiche, Esche, Nussbaum — und verbinden traditionelle Tischlerei mit zeitgenössischem Design. Jedes Stück wird in unserer Werkstatt entworfen, gefertigt und veredelt.",
    disciplinesEyebrow: "Disziplinen",
    disciplines: [
      { label: "01", title: "Möbel", desc: "Serien­kollektionen und Einzelanfertigungen.", cta: "Entdecken" },
      { label: "02", title: "Küchen", desc: "Maßgefertigte Küchen, auch im englischen Stil.", cta: "Entdecken" },
      { label: "03", title: "Treppen & Türen", desc: "Innentreppen, Türen und Eingangsensembles.", cta: "Entdecken" },
      { label: "04", title: "Architekturelemente", desc: "Fenster, Läden und Außendetails.", cta: "Entdecken" },
    ],
    selectedEyebrow: "Auswahl",
    selectedTitle: "Ausgewählte Arbeiten",
    selectedCta: "Alle Projekte",
    materialsEyebrow: "Werkstatt",
    materialsTitle: "Material, Handwerk, Oberfläche",
    materialsCols: [
      { title: "Material", body: "Eiche, Esche, Nussbaum, Kiefer. Massivholz pur oder kombiniert mit Furnier und Textil." },
      { title: "Handwerk", body: "Traditionelle Verbindungen, Furnieren, Holzschnitzerei. Handarbeit an jedem Detail." },
      { title: "Oberfläche", body: "Beizen, Lackieren, Lasieren, Ölen, Polieren. Beschläge für jahrzehntelange Nutzung." },
    ],
    partnersEyebrow: "Export",
    partnersTitle: "Arbeit in Lettland und im Ausland",
    partnersBody: "In Zusammenarbeit mit Luxoise (Berlin), Bespoke Kitchens (UK) und Unolik (Estland) erreichen unsere Arbeiten Kunden in ganz Europa.",
    partnersCta: "Zusammenarbeit",
  },
  work: {
    eyebrow: "Arbeiten",
    title: "Ausgewählte Projekte",
    intro: "Privatinterieurs, Hotels und Gewerberäume. Jedes Projekt wird von der Skizze bis zur Montage entwickelt.",
    filters: { all: "Alle", furniture: "Möbel", kitchens: "Küchen", staircases: "Treppen", doors: "Türen", exterior: "Außen" },
    next: "Nächstes Projekt",
    backToWork: "Zurück zu den Arbeiten",
    location: "Ort",
    year: "Jahr",
  },
  atelier: {
    eyebrow: "Atelier",
    title: "Ein Atelier in Riga, seit 2007.",
    body: [
      "SEL RA ART wurde 2007 in Riga gegründet. Wir entwerfen und fertigen Serien­möbel­kollektionen, Einzelanfertigungen und architektonische Tischlerarbeiten — Treppen, Türen, Fenster, Läden und Außenelemente.",
      "Wir arbeiten mit Massivholz, pur und in Kombination mit Furnier und Textil. Zur Veredelung gehören Beizen, Lackieren, Lasieren, Ölen und Polieren. Beschläge werden für den täglichen Gebrauch über Jahrzehnte ausgewählt.",
      "Unser Team besteht aus Designern, Konstrukteuren und Tischlermeistern. Wir arbeiten in ganz Lettland sowie in den Exportmärkten Deutschland, Estland und Vereinigtes Königreich.",
    ],
    statsLabels: { founded: "Gegründet", markets: "Märkte", team: "Team" },
  },
  collab: {
    eyebrow: "Zusammenarbeit",
    title: "Partner in Europa",
    intro: "Wir arbeiten direkt mit Architekten, Innenarchitekten und Marken.",
    items: [
      { name: "Luxoise", place: "Berlin, Deutschland", body: "Maßgefertigte Möbel, Treppen und Türen für ein modernes Luxushotel in Berlin.", url: "luxoise.de" },
      { name: "Bespoke Kitchens", place: "Vereinigtes Königreich", body: "Englische Küchen, Treppen, Türen, Möbel und Interieurelemente nach Auftrag.", url: "bespokekitchens.uk.com" },
      { name: "Unolik", place: "Estland", body: "SEL RA ART Möbelkollektionen in Estland erhältlich über Unolik.", url: "unolik.ee" },
    ],
    closing: "Für neue Kooperationen nehmen Sie bitte Kontakt auf.",
    cta: "Kontakt",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit dem Atelier.",
    intro: "Wir antworten an Werktagen. Werkstattbesuche nach Vereinbarung.",
    studio: "Studio",
    address: "Aptiekas iela 13-35, Riga, LV-1005",
    phone: "+371 29354067 · +371 26150665",
    email: "info@selraart.lv",
    formName: "Name",
    formEmail: "E-Mail",
    formMessage: "Nachricht",
    submit: "Nachricht senden",
    submitted: "Vielen Dank. Wir melden uns in Kürze.",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    crafted: "Die Kunst, schön und kreativ zu leben.",
  },
  common: { selectLanguage: "Sprache" },
};

const ru: Dict = {
  nav: { home: "Главная", work: "Работы", atelier: "Ателье", collaborations: "Сотрудничество", contact: "Контакты" },
  home: {
    heroHeadline: "Массив, который живёт вместе с домом.",
    heroSub: "Мебель на заказ, столярные и архитектурные элементы — ручной работы в Риге с 2007 года.",
    heroCta: "Смотреть работы",
    statement:
      "Мы работаем с массивом — дуб, ясень, орех — соединяя традиционное столярное дело с современным дизайном. Каждое изделие чертится, изготавливается и отделывается в нашей мастерской.",
    disciplinesEyebrow: "Направления",
    disciplines: [
      { label: "01", title: "Мебель", desc: "Серийные коллекции и индивидуальные заказы.", cta: "Смотреть" },
      { label: "02", title: "Кухни", desc: "Кухни на заказ, в том числе в английском стиле.", cta: "Смотреть" },
      { label: "03", title: "Лестницы и двери", desc: "Внутренние лестницы, двери и входные ансамбли.", cta: "Смотреть" },
      { label: "04", title: "Архитектурные элементы", desc: "Окна, ставни и элементы экстерьера.", cta: "Смотреть" },
    ],
    selectedEyebrow: "Избранное",
    selectedTitle: "Избранные работы",
    selectedCta: "Все проекты",
    materialsEyebrow: "Мастерская",
    materialsTitle: "Материалы, ремесло, отделка",
    materialsCols: [
      { title: "Материалы", body: "Дуб, ясень, орех, сосна. Массив отдельно или в сочетании со шпоном и тканью." },
      { title: "Ремесло", body: "Традиционные соединения, фанерование, резьба. Ручная работа в каждой детали." },
      { title: "Отделка", body: "Морение, лакирование, окраска, масло, полировка. Фурнитура — для десятилетий ежедневного использования." },
    ],
    partnersEyebrow: "Экспорт",
    partnersTitle: "Работаем в Латвии и за её пределами",
    partnersBody: "Благодаря партнёрству с Luxoise (Берлин), Bespoke Kitchens (Великобритания) и Unolik (Эстония) наши работы доходят до клиентов по всей Европе.",
    partnersCta: "Сотрудничество",
  },
  work: {
    eyebrow: "Работы",
    title: "Избранные проекты",
    intro: "Частные интерьеры, отели и коммерческие пространства. Каждый проект — от эскиза до монтажа.",
    filters: { all: "Все", furniture: "Мебель", kitchens: "Кухни", staircases: "Лестницы", doors: "Двери", exterior: "Экстерьер" },
    next: "Следующий проект",
    backToWork: "Назад к работам",
    location: "Место",
    year: "Год",
  },
  atelier: {
    eyebrow: "Ателье",
    title: "Ателье в Риге с 2007 года.",
    body: [
      "SEL RA ART основано в Риге в 2007 году. Мы создаём серийные коллекции мебели, индивидуальные заказы и архитектурные столярные изделия — лестницы, двери, окна, ставни и элементы экстерьера.",
      "Работаем с массивом — самостоятельно и в сочетании со шпоном и тканью. В отделке: морение, лакирование, окраска, масло и полировка. Фурнитура подбирается для десятилетий ежедневного использования.",
      "В команде — дизайнеры, проектировщики и мастера-столяры. Работаем в Латвии и на экспортных рынках — в Германии, Эстонии и Великобритании.",
    ],
    statsLabels: { founded: "Основано", markets: "Рынки", team: "Команда" },
  },
  collab: {
    eyebrow: "Сотрудничество",
    title: "Партнёры в Европе",
    intro: "Работаем напрямую с архитекторами, дизайнерами интерьера и брендами.",
    items: [
      { name: "Luxoise", place: "Берлин, Германия", body: "Мебель, лестницы и двери на заказ для современного люксового отеля в Берлине.", url: "luxoise.de" },
      { name: "Bespoke Kitchens", place: "Великобритания", body: "Кухни в английском стиле, лестницы, двери, мебель и элементы интерьера на заказ.", url: "bespokekitchens.uk.com" },
      { name: "Unolik", place: "Эстония", body: "Коллекции мебели SEL RA ART доступны в Эстонии через Unolik.", url: "unolik.ee" },
    ],
    closing: "По вопросам новых сотрудничеств, пожалуйста, свяжитесь с нами.",
    cta: "Связаться",
  },
  contact: {
    eyebrow: "Контакты",
    title: "Свяжитесь с ателье.",
    intro: "Отвечаем в будние дни. Посещение мастерской — по предварительной договорённости.",
    studio: "Студия",
    address: "Aptiekas iela 13-35, Рига, LV-1005",
    phone: "+371 29354067 · +371 26150665",
    email: "info@selraart.lv",
    formName: "Имя",
    formEmail: "E-mail",
    formMessage: "Сообщение",
    submit: "Отправить сообщение",
    submitted: "Спасибо. Мы свяжемся с вами в ближайшее время.",
  },
  footer: {
    rights: "Все права защищены.",
    crafted: "Искусство жить красиво и творчески.",
  },
  common: { selectLanguage: "Язык" },
};

export const DICT: Record<Lang, Dict> = { lv, en, de, ru };

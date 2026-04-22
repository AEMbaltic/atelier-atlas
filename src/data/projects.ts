export type ProjectCategory = "furniture" | "kitchens" | "staircases" | "doors" | "exterior";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  client?: string;
  cover: string;
  gallery: string[];
  description: {
    lv: string;
    en: string;
    de: string;
    ru: string;
  };
};

// All images flagged with data-replace="true" via the <ProjectImage> component.
export const PROJECTS: Project[] = [
  {
    slug: "oak-residence-jurmala",
    title: "Oak Residence",
    category: "furniture",
    location: "Jūrmala, Latvia",
    year: 2024,
    cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Privāta dzīvojamā māja Jūrmalā. Pasūtījuma mēbeles galvenajām telpām masīvajā ozolā ar eļļotu apdari.",
      en: "A private residence in Jūrmala. Bespoke furniture for the principal rooms in solid oak with an oiled finish.",
      de: "Privatresidenz in Jūrmala. Maßgefertigte Möbel für die Haupträume aus massiver Eiche, geölt.",
      ru: "Частный дом в Юрмале. Мебель на заказ для основных комнат — массив дуба, отделка маслом.",
    },
  },
  {
    slug: "english-kitchen-london",
    title: "English Kitchen, Hampstead",
    category: "kitchens",
    location: "London, United Kingdom",
    year: 2023,
    client: "Bespoke Kitchens",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Angļu stila virtuve Londonas centrā. Krāsotas frēzētas frontes, masīva ozola darba virsmas.",
      en: "An English-style kitchen in central London. Hand-painted shaker fronts and solid oak work surfaces.",
      de: "Englische Küche im Zentrum Londons. Handgemalte Shaker-Fronten und Arbeitsplatten aus massiver Eiche.",
      ru: "Кухня в английском стиле в центре Лондона. Крашеные фасады шейкер, столешницы из массива дуба.",
    },
  },
  {
    slug: "ash-staircase-riga",
    title: "Ash Staircase",
    category: "staircases",
    location: "Riga, Latvia",
    year: 2024,
    cover: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Konsoles tipa kāpnes ošā ar plieram nemanāmu balsta sistēmu. Beicēta apdare.",
      en: "A cantilevered ash staircase with a concealed steel support system and stained finish.",
      de: "Freitragende Eschentreppe mit verdecktem Stahlträger­system und gebeizter Oberfläche.",
      ru: "Консольная лестница из ясеня со скрытой стальной опорной системой и морёной отделкой.",
    },
  },
  {
    slug: "entrance-doors-berlin",
    title: "Entrance Ensemble",
    category: "doors",
    location: "Berlin, Germany",
    year: 2023,
    client: "Luxoise",
    cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Ieejas ansamblis luksusa viesnīcai Berlīnē. Masīva ozols, pulēta misiņa furnitūra.",
      en: "Entrance ensemble for a luxury hotel in Berlin. Solid oak with polished brass hardware.",
      de: "Eingangsensemble für ein Luxushotel in Berlin. Massive Eiche mit polierten Messingbeschlägen.",
      ru: "Входной ансамбль для люксового отеля в Берлине. Массив дуба, фурнитура из полированной латуни.",
    },
  },
  {
    slug: "shutters-saulkrasti",
    title: "Exterior Shutters",
    category: "exterior",
    location: "Saulkrasti, Latvia",
    year: 2022,
    cover: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Eksterjera slēģi un logu detaļas piekrastes mājai. Eļļota priede ar UV aizsardzību.",
      en: "Exterior shutters and window detailing for a coastal house. Oiled pine with UV protection.",
      de: "Außenläden und Fensterdetails für ein Küstenhaus. Geölte Kiefer mit UV-Schutz.",
      ru: "Наружные ставни и оконные детали для прибрежного дома. Сосна, масло с УФ-защитой.",
    },
  },
  {
    slug: "walnut-library-tallinn",
    title: "Walnut Library",
    category: "furniture",
    location: "Tallinn, Estonia",
    year: 2024,
    client: "Unolik",
    cover: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "No grīdas līdz griestiem riekstkoka bibliotēka ar slēptu apgaismojumu un slīdošām kāpnēm.",
      en: "A floor-to-ceiling walnut library with concealed lighting and a sliding ladder.",
      de: "Eine raumhohe Nussbaumbibliothek mit verdeckter Beleuchtung und Schiebeleiter.",
      ru: "Библиотека из ореха от пола до потолка со скрытой подсветкой и подвижной лестницей.",
    },
  },
  {
    slug: "shaker-kitchen-riga",
    title: "Country Kitchen",
    category: "kitchens",
    location: "Riga, Latvia",
    year: 2023,
    cover: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909211-d5b6b1ed8e89?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Lauku virtuve Vidzemē. Krāsoti masīva korpusi, marmora plāksne, masīva osis.",
      en: "A country kitchen in Vidzeme. Painted solid carcasses, marble slab, and solid ash.",
      de: "Landhausküche in Vidzeme. Lackierte Massivkorpusse, Marmorplatte und massive Esche.",
      ru: "Деревенская кухня в Видземе. Окрашенные массивные корпуса, мраморная плита, массив ясеня.",
    },
  },
  {
    slug: "oak-doors-tallinn",
    title: "Interior Door Set",
    category: "doors",
    location: "Tallinn, Estonia",
    year: 2024,
    cover: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Iekšdurvju komplekts dzīvoklim Tallinas vecpilsētā. Ozola masīvs ar matētu apdari.",
      en: "A set of interior doors for an apartment in Tallinn's old town. Solid oak with a matt finish.",
      de: "Innentüren-Set für eine Wohnung in der Tallinner Altstadt. Massive Eiche, matte Oberfläche.",
      ru: "Комплект межкомнатных дверей для квартиры в Старом городе Таллина. Массив дуба, матовая отделка.",
    },
  },
  {
    slug: "spiral-staircase-cesis",
    title: "Spiral Staircase",
    category: "staircases",
    location: "Cēsis, Latvia",
    year: 2022,
    cover: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba66?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Spirālveida koka kāpnes vēsturiskai mājai Cēsīs. Pakāpieni masīvā ozolā.",
      en: "A wooden spiral staircase for a historic house in Cēsis. Treads in solid oak.",
      de: "Hölzerne Wendeltreppe für ein historisches Haus in Cēsis. Stufen aus massiver Eiche.",
      ru: "Деревянная винтовая лестница для исторического дома в Цесисе. Ступени — массив дуба.",
    },
  },
  {
    slug: "facade-elements-jurmala",
    title: "Facade Detailing",
    category: "exterior",
    location: "Jūrmala, Latvia",
    year: 2023,
    cover: "https://images.unsplash.com/photo-1600573472556-e636c2acda88?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Fasādes elementi un eksterjera detaļas vasarnīcai. Termiski apstrādāts osis.",
      en: "Facade elements and exterior detailing for a summer house. Thermally treated ash.",
      de: "Fassadenelemente und Außendetails für ein Sommerhaus. Thermisch behandelte Esche.",
      ru: "Элементы фасада и наружные детали для летнего дома. Термически обработанный ясень.",
    },
  },
  {
    slug: "dining-table-collection",
    title: "Dining Table Collection",
    category: "furniture",
    location: "Riga, Latvia",
    year: 2024,
    cover: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Pusdienu galda kolekcija sērijveida ražošanai. Trīs izmēri, divas finiša opcijas.",
      en: "A dining table collection for serial production. Three sizes, two finish options.",
      de: "Eine Esstischkollektion für die Serienfertigung. Drei Größen, zwei Oberflächen.",
      ru: "Коллекция обеденных столов для серийного производства. Три размера, две отделки.",
    },
  },
  {
    slug: "kitchen-island-tartu",
    title: "Kitchen Island",
    category: "kitchens",
    location: "Tartu, Estonia",
    year: 2024,
    cover: "https://images.unsplash.com/photo-1556909195-4e5d12330a59?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566752734-d1d8b2c7bce4?auto=format&fit=crop&w=1400&q=80",
    ],
    description: {
      lv: "Brīvi stāvoša virtuves sala ar integrētu vīna plauktu. Masīvs riekstkoks, akmens.",
      en: "A freestanding kitchen island with integrated wine storage. Solid walnut and stone.",
      de: "Freistehende Kücheninsel mit integriertem Weinregal. Massiver Nussbaum und Stein.",
      ru: "Отдельностоящий кухонный остров со встроенным винным хранилищем. Массив ореха и камень.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}

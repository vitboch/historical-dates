interface Fact {
  id: number
  year: number
  description: string
}

interface HistoricalDate {
  id: number
  years: Array<number>
  category: string
  facts: Facts
}

type Facts = Fact[]
type HistoricalDates = HistoricalDate[]

const DATA: HistoricalDates = [
  {
    id: 0,
    years: [1982, 1986],
    category: 'Авиация',
    facts: [
      {
        id: 0,
        year: 1982,
        description: 'Первый полёт советского ударного вертолёта Ми-28',
      },
      {
        id: 1,
        year: 1983,
        description: 'Начало деятельности авиакомпании Sun Country Airlines',
      },
      {
        id: 2,
        year: 1984,
        description:
          'Авиакомпания Virgin Atlantic Airways начала коммерческие полёты',
      },
      {
        id: 3,
        year: 1985,
        description:
          'Первый полёт самолёта Ил-80 воздушного командного пункта созданного на базе пассажирского самолёта Ил-86',
      },
      {
        id: 4,
        year: 1986,
        description: 'Первый полёт советского разведывательного БПЛА Пчела',
      },
    ],
  },
  {
    id: 1,
    years: [1987, 1991],
    category: 'Кино',
    facts: [
      {
        id: 0,
        year: 1987,
        description: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
      },
      {
        id: 1,
        year: 1988,
        description:
          '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
      },
      {
        id: 2,
        year: 1989,
        description:
          '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
      },
      {
        id: 3,
        year: 1990,
        description: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Халин)',
      },
      {
        id: 4,
        year: 1991,
        description:
          '«Семейка Аддамс»/The Addam Family, США (реж. Барри Зонненфельд )',
      },
    ],
  },
  {
    id: 2,
    years: [1992, 1997],
    category: 'Литература',
    facts: [
      {
        id: 0,
        year: 1992,
        description:
          'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах»',
      },
      {
        id: 1,
        year: 1993,
        description: 'Нобелевская премия по литературе — Тони Моррисон',
      },
      {
        id: 2,
        year: 1994,
        description: '«Бессоница» - роман Стивена Кинга',
      },
      {
        id: 3,
        year: 1995,
        description: 'Нобелевская премия по литературе - Шеймас Хини',
      },
      {
        id: 4,
        year: 1996,
        description: 'Букеровская премия — Грэм Свифт',
      },
      {
        id: 5,
        year: 1997,
        description: 'Гонкуровская премия — Патрик Рамбо',
      },
    ],
  },
  {
    id: 3,
    years: [1999, 2004],
    category: 'Театр',
    facts: [
      {
        id: 0,
        year: 1999,
        description:
          'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
      },
      {
        id: 1,
        year: 2000,
        description:
          'На конкурсе «Окно в Россию» «театром года» назван новосибирский «Глобус»',
      },
      {
        id: 2,
        year: 2001,
        description:
          'Танцовщик Дэвид Макалистер занял пост руководителя труппы «Австралийский балет»',
      },
      {
        id: 3,
        year: 2002,
        description:
          'Премьера трилогии тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
      },
      {
        id: 4,
        year: 2003,
        description:
          'В Венеции после восьмилетней реставрации постановкой оперы Джузеппе Верди «Травиата» открылся театр «Ла Фениче»',
      },
      {
        id: 5,
        year: 2004,
        description:
          'В Театре на покровке состоялась премьера спектакля «Последние страницы из дневника женщины»',
      },
    ],
  },
  {
    id: 4,
    years: [2005, 2015],
    category: 'Музыка',
    facts: [
      {
        id: 0,
        year: 2005,
        description:
          'В Швеции распалась легендарная рок-группа Nationalteatern в связи со смертью музыканта Тотто Няслунда',
      },
      {
        id: 1,
        year: 2006,
        description:
          'Солист группы Linkin Park Майк Шинода выпускает свой сольный проект — Fort Minor',
      },
      {
        id: 2,
        year: 2007,
        description:
          'Испанская рок-группа Héroes del Silencio спустя десять лет после своего официального расформирования объединилась вновь и приняла участие в мировом турне из 10 концертов',
      },
      {
        id: 3,
        year: 2008,
        description:
          'Шведская симфо-метал группа Therion объявляет о роспуске текущего состава по окончании тура',
      },
      {
        id: 4,
        year: 2009,
        description: 'Воссоединение группы Rhapsody',
      },
      {
        id: 5,
        year: 2010,
        description:
          'В Лондоне состоялась премьера нового мюзикла Эндрю Ллойда Уэббера, сиквела мюзикла «Призрак Оперы» — «Любовь не умрёт никогда»',
      },
      {
        id: 6,
        year: 2011,
        description:
          'На церемонии BRIT Awards по две награды получили Тайни Темпа и Arcade Fire',
      },
      {
        id: 7,
        year: 2012,
        description:
          'В Архангельске (Россия) прошёл первый рок-фестиваль «Остров»',
      },
      {
        id: 8,
        year: 2013,
        description: 'Pori Jazz международный джаз-фестиваль в Пори',
      },
      {
        id: 9,
        year: 2014,
        description: 'Группа «Король и Шут» прекратила существование',
      },
    ],
  },
  {
    id: 5,
    years: [2015, 2022],
    category: 'Наука',
    facts: [
      {
        id: 0,
        year: 2015,
        description:
          '13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 1,
        year: 2016,
        description:
          'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 2,
        year: 2017,
        description:
          'Компания Telsa официально представила первый в мире электический грузовик Tesla Semi',
      },
      {
        id: 3,
        year: 2018,
        description:
          'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
      },
      {
        id: 4,
        year: 2019,
        description:
          'Google объявил о создании кубитного квантового компьютера',
      },
      {
        id: 5,
        year: 2020,
        description:
          'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта',
      },
      {
        id: 6,
        year: 2021,
        description:
          'В Китае развёрнута первая в мире интегрированная сеть квантовой связи',
      },
      {
        id: 7,
        year: 2022,
        description:
          'В США совершена первая пересадка сердца, взятого из генетически модифицированной свиньи',
      },
    ],
  },
]

export default DATA

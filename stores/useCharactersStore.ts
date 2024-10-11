import { defineStore } from 'pinia'

const defaultCharactersList = [
  {
    id: 21,
    name: 'Цезарь',
    description:
      'Цезарь — лидер Сынов Калидона, глава байкерской колонны, а также будущая «королева». Сильная и прямолинейная, она пользуется уважением и любовью среди жителей Объездной. Несмотря на своенравие и независимость, она охотно прислушивается к мнению других. Если кто-то предлагает дельную идею, Цезарь старается воплотить её в жизнь. Она безоговорочно доверяет людям из своего близкого окружения. Это те люди, которые сумели каким-либо образом добиться её признания. (Предположение: в настоящее время Цезарь относится к вам именно так.) Отец Цезарь пропал без вести, а мать умерла от болезни. С самого детства её растил Папаша. Воспитание Папаши по большей части заключалось в том, чтобы дать Цезарь делать, что она пожелает. Это во многом повлияло на становление её независимого характера. Кроме того, похоже, Цезарь проявляет особый интерес ко всему, что связано с романтическими отношениями. Если вы хотите сблизиться с Цезарь, попробуйте поговорить с ней на эту тему.',
    gender: 'Женский',
    dateOfBirth: '16 марта',
    height: '176 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Цезарь',
        link: '/wiki/characters/caesar'
      }
    ],
    link: '/wiki/characters/caesar',
    image: 'caesar/caesar-card-image.webp',
    smallImage: 'caesar/caesar-small-card-image.webp',
    bannerImage: 'caesar/caesar-character-page-image.jpeg',
    videoList: [
      {
        id: 1,
        youtubeCode: 'd17pewXhrI8?si=VYUWODJD7kbZKYrs'
      },
      {
        id: 2,
        youtubeCode: '-8zsNS5FNEI?si=lRpqj42Oxo2HdM0P'
      }
    ],
    slug: 'caesar',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'defense-specialty.webp',
      faction: 'calydon-faction.webp'
    },
    rarity: 'S',
    attribute: 'physical',
    specialty: 'defense',
    faction: 'calydon'
  },
  {
    id: 1,
    name: 'Цинъи',
    description:
      'Цинъи — новая сотрудница в группе особого реагирования уголовного розыска. Она искусственное существо, её личность создана на основе древних текстов старой цивилизации, а тело представляет собой разумный конструкт из биологических материалов. По рекомендации института Уайтстар она была направлена в Службу общественной безопасности в качестве офицера-новичка в пару к Чжу Юань. Цинъи всегда ведёт себя непринуждённо, не связывая себя правилами. Поскольку Цинъи не связана условностями современного общества, она часто предлагает неожиданные решения проблем. Цинъи всегда носит с собой горячую воду и время от времени пьёт её по глоточку. «Пить горячую воду полезно для здоровья». Совет: сближение с Цинъи крайне опасно, не теряйте бдительности. Помните, что вы — прокси.',
    gender: 'Женский',
    dateOfBirth: '1 января',
    height: '142 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Цинъи',
        link: '/wiki/characters/qingyi'
      }
    ],
    link: '/wiki/characters/qingyi',
    image: 'qingyi/qingyi-card-image.webp',
    smallImage: 'qingyi/qingyi-small-card-image.webp',
    bannerImage: 'qingyi/qinqyi-character-page-image.jpeg',
    videoList: [
      {
        id: 1,
        youtubeCode: 'JxLDHWq9sAc?si=JHaRZfSAgHau-Czd'
      },
      {
        id: 2,
        youtubeCode: 'AO-QnJ-NvKA?si=Cd470DvqXMShCXzT'
      }
    ],
    slug: 'qingyi',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'stun',
    faction: 'criminal'
  },
  {
    id: 2,
    name: 'Чжу Юань',
    description:
      'Чжу Юань — лучшая из лучших в Службе общественной безопасности. Считается, что в будущем она обязательно станет комиссаром, поэтому она проходит особо интенсивную подготовку. Сейчас она занимает должность начальника группы особого реагирования угрозыска Службы общественной безопасности по району Януса Нью-Эриду. Другие известные агенты группы: Цинъи, Сет и *засекречено*.\n' +
      'Примечание: для доступа к документам с более высоким уровнем защиты в системе Службы общественной безопасности требуется пройти дополнительную проверку, приоритет задачи: низкий.\n' +
      '\n' +
      'Обладает выдающимися навыками расследования уголовных дел, ведения боя и самоорганизации (включая сверхурочную работу). С момента вступления в должность закрывает все порученные дела.\n' +
      'Совет: сближение с Чжу Юань крайне опасно, не теряйте бдительности, помните, что вы прокси.',
    gender: 'Женский',
    dateOfBirth: '1 сентября',
    height: '175 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Чжу Юань',
        link: '/wiki/characters/zhuyuan'
      }
    ],
    link: '/wiki/characters/zhuyuan',
    image: 'zhu-yuan/zhu-yuan-card-image.webp',
    smallImage: 'zhu-yuan/zhu-yuan-small-card-image.webp',
    bannerImage: 'zhu-yuan/zhu-yuan-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: '0AMqJU4SNhE?si=xYb9m4ZjqAvgXLKa'
      },
      {
        id: 2,
        youtubeCode: '0JmdwCmuA0I?si=bRZETK7SCmgTEUAz'
      }
    ],
    slug: 'zhuyuan',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ether-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'ether',
    specialty: 'attack',
    faction: 'criminal'
  },
  {
    id: 3,
    name: 'Эллен',
    description:
      'Эллен — горничная в «Виктории» и последняя присоединившаяся к агентству домашнего персонала сотрудница.\n' +
      'Она глубоко чтит принцип энергосбережения и не любит заниматься делами, требующими больших усилий, однако при необходимости может продемонстрировать невероятную силу.\n' +
      'Поскольку её стиль боя требует больших энергозатрат, она часто не расстаётся с леденцами, чтобы вовремя восполнять недостаток сахара в организме.\n' +
      'Она частенько поговаривает, что хотела бы сменить эту работу из-за связанных с ней хлопот, но на самом деле искренне ценит своих товарищей из «Виктории».\n' +
      '\n' +
      'Эллен учится в одной из школ Нью-Эриду, и у неё есть друзья среди простых людей.\n' +
      'Когда она не занята работой в «Виктории», то проводит много времени с друзьями и живёт простой и счастливой студенческой жизнью.',
    gender: 'Женский',
    dateOfBirth: '4 января',
    height: '161 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Эллен',
        link: '/wiki/characters/ellen'
      }
    ],
    link: '/wiki/characters/ellen',
    image: 'ellen/ellen-card-image.webp',
    smallImage: 'ellen/ellen-small-card-image.webp',
    bannerImage: 'ellen/ellen-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'eURuH5-boxo?si=UlNyfC74b2C73cYC'
      },
      {
        id: 2,
        youtubeCode: 'iOW8XhUce38?si=cNrHETC8Snm11IRc'
      }
    ],
    slug: 'ellen',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'ice',
    specialty: 'attack',
    faction: 'victoria'
  },
  {
    id: 4,
    name: 'Ликаон',
    description:
      'Ликаон, фактический руководитель агентства домашнего персонала «Виктория» и его специалист по внешним связям, отвечает за управление работой всех сотрудников агентства.\n' +
      'Надёжный, рациональный и элегантный Ликаон, кажется, способен решить любую проблему. Он — надёжный щит, хранящий покой соратников.\n' +
      'Ликаон немного слишком одержим чистотой, он во всём старается поддерживать порядок и терпеть не может грязи.\n' +
      '\n' +
      'Несмотря на элегантность и сдержанность, иногда его животная натура берёт своё: в особенно счастливые моменты он неосознанно двигает ушами и хвостам. Похоже, ему об этом известно, и такие реакции не слишком его радуют.\n' +
      'Кроме того, как и большинство пушистых тиренов, Ликаон придаёт большое значение уходу за мехом.',
    gender: 'Мужской',
    dateOfBirth: '4 октября',
    height: '198 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Ликаон',
        link: '/wiki/characters/lycaon'
      }
    ],
    link: '/wiki/characters/lycaon',
    image: 'lycaon/lycaon-card-image.webp',
    smallImage: 'lycaon/lycaon-small-card-image.png',
    bannerImage: 'lycaon/lycaon-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: '8OqyvAXbgiQ?si=1LFs5oWqLV9ppsb9'
      }
    ],
    slug: 'lycaon',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'ice',
    specialty: 'stun',
    faction: 'victoria'
  },
  {
    id: 5,
    name: 'Джейн Доу',
    description:
      'Джейн — эксперт по поведению преступников, и её резюме поистине впечатляет. Уже много лет она сотрудничает со Службой общественной безопасности в качестве консультанта.\n' +
      'Владеет навыками маскировки, работы под прикрытием и разведки.\n' +
      'Нездоровые пристрастия: любит дразнить других, может устраивать безобидные розыгрыши.\n' +
      'Хорошо умеет подражать другим и изменять свои внешний вид и поведение. Но это заставляет людей задаваться вопросом «какая же она на самом деле?»\n' +
      '\n' +
      'У Джейн богатый жизненный опыт, она хорошо вписывается в любую обстановку. Кажется, будто она немного знакома с любой темой.\n' +
      'Но если расспрашивать её подробнее, она каждый раз даёт разные ответы.\n' +
      'Никто не знает, какой ответ верный и есть ли он вообще.\n' +
      '\n',
    gender: 'Женский',
    dateOfBirth: '16 февраля',
    height: '170 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Джейн Доу',
        link: '/wiki/characters/janedoe'
      }
    ],
    link: '/wiki/characters/janedoe',
    image: 'jane-doe/jane-doe-card-image.webp',
    smallImage: 'jane-doe/jane-doe-small-card-image.webp',
    bannerImage: 'jane-doe/jane-doe-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'RmX29U4V8Gk?si=tSRYfWFIBoci21Jy'
      },
      {
        id: 2,
        youtubeCode: '5WCl2mtL4eE?si=AI_lAwRv-WmaYa0G'
      }
    ],
    slug: 'janedoe',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'physical',
    specialty: 'anomaly',
    faction: 'criminal'
  },
  {
    id: 6,
    name: 'Энби',
    description:
      'Энби, первая (и несравненная) сотрудница «Заячьей норы».\n' +
      'Согласно записям о жителях Нью-Эриду, она стала зваться Энби Демарой только после присоединения к «Заячьей норе». Фамилия, очевидно, была взята у Николь. Данные о Энби до регистрации в качестве сотрудницы «Заячьей норы» отсутствуют, что вызывает подозрения.\n' +
      'Несмотря на недостаток знаний в обыденных вопросах, Энби отлично сражается и является одной из сильнейших сотрудниц «Хитрых зайцев».\n' +
      '\n' +
      'Больше всего Энби интересуют фильмы, причём любит она самые разные жанры. Из-за чрезмерной вовлечённости склонна воспринимать истории из фильмов как реальность.\n' +
      'Энби кажется бесчувственной, однако она глубоко сопереживает персонажам в фильмах.\n' +
      'Её любимая еда — бургеры. Потому что «они содержат белок, углеводы и зелень, а ещё они вкусные и дешёвые — лучше бургеров нет ничего».',
    gender: 'Женский',
    dateOfBirth: '20 февраля',
    height: '156 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Энби',
        link: '/wiki/characters/anby'
      }
    ],
    link: '/wiki/characters/anby',
    image: 'anby/anby-card-image.webp',
    smallImage: 'anby/anby-small-card-image.webp',
    bannerImage: 'anby/anby-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'ILLiFFHEXvw?si=tO5Q0WFUkHrZJjmS'
      },
      {
        id: 2,
        youtubeCode: 'Y2HTc9JZvwc?si=6iScIhLhRHdJ1BIP'
      }
    ],
    slug: 'anby',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'stun',
    faction: 'cunning-hares'
  },
  {
    id: 7,
    name: 'Корин',
    description:
      'Корин — одна из горничных агентства домашнего персонала «Виктория».\n' +
      'Она очень послушна, но ей не хватает уверенности в себе, и она очень уж боится не понравиться другим. От волнения может немного заикаться.\n' +
      'Что бы ни случилось, Корин всегда извиняется.\n' +
      '«П-прошу прощения! От меня никакого толку...»\n' +
      '\n' +
      'Несмотря на то, что Корин всегда выполняет задания, она сомневается в своих способностях и беспокоится о том, что станет обузой для остальных. Это иногда выводит Ликаона из себя.\n' +
      'К размышлению: особенности личности Корин возникли при рождении или сформировались под воздействием среды?',
    gender: 'Женский',
    dateOfBirth: '2 июня',
    height: '141 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Корин',
        link: '/wiki/characters/corin'
      }
    ],
    link: '/wiki/characters/corin',
    image: 'corin/corin-card-image.webp',
    smallImage: 'corin/corin-small-card-image.webp',
    bannerImage: 'corin/corin-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'XIRSZV86CKs?si=xq87TCgZ20bLrAoA'
      }
    ],
    slug: 'corin',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'victoria'
  },
  {
    id: 8,
    name: 'Сет',
    description:
      'Сет, инспектор-стажёр из Службы общественной безопасности, в основном занимается обеспечением безопасности следственно-розыскных мероприятий.\n' +
      'Выпустился из училища с отличием и мог получить более высокую должность, но предпочёл более тяжёлую службу в группе особого реагирования угрозыска.\n' +
      'Глядя на его впечатляющий послужной список, может сложиться впечатление, что Сет — гений, но на самом деле он очень трудолюбивый сотрудник, которому далеко не всё удаётся с лёгкостью. Временами, занимаясь предметами, которые ему тяжело давались, Сет даже плакал.\n' +
      'Сет довольно умён, но простодушен и, следовательно, легко может стать жертвой обмана преступников или даже сослуживцев (?).\n' +
      'Тяжелее всего ему даётся внедрение и работа под прикрытием. Ходят слухи, что на тренировках внедрения его разоблачали быстрее всех его товарищей по училищу.\n' +
      'Судя по имеющимся видеоматериалам, Сет довольно медленно соображает. В частности, ему требуется немалое время, чтобы понять, что собеседник говорит с сарказмом.',
    gender: 'Мужской',
    dateOfBirth: '2 апреля',
    height: '174 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Сет',
        link: '/wiki/characters/seth'
      }
    ],
    link: '/wiki/characters/seth',
    image: 'seth/seth-card-image.webp',
    smallImage: 'seth/seth-small-card-image.webp',
    bannerImage: 'seth/seth-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'DFyRWqRsl84?si=WkQbQHLn3m5zIgdf'
      }
    ],
    slug: 'seth',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'defense-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'defense',
    faction: 'criminal'
  },
  {
    id: 9,
    name: 'Нэкомата',
    description:
      'Нэкомия Мана. Называет себя «Нэкомата».\n' +
      'Тирен-кошка, невероятно ловкая в охоте и крайне любопытная.\n' +
      'Иногда озорничает и устраивает безобидные шалости. Но если ей нужно что-то, у неё хватает кошачьей ловкости и сосредоточенности, чтобы внушить страх окружающим.\n' +
      'Больше всего её интересуют чужие кошельки.\n' +
      'Рекомендация: всегда следите за кошельком, если рядом Нэкомата.\n' +
      '\n' +
      'В прошлом она была членом банды Красных клыков. Главарь Мигель Сильвер был для Нэкоматы кем-то вроде отца. Тем не менее, из-за разногласий она решила уйти из банды и жить самостоятельно.\n' +
      'После нескольких приключений с Николь и остальными она решила присоединиться к «Хитрым зайцам», став третьим их сотрудником.',
    gender: 'Женский',
    dateOfBirth: '30 июля',
    height: '148 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Нэкомата',
        link: '/wiki/characters/nekomata'
      }
    ],
    link: '/wiki/characters/nekomata',
    image: 'nekomata/nekomata-card-image.webp',
    smallImage: 'nekomata/nekomata-small-card-image.webp',
    bannerImage: 'nekomata/nekomata-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'G8-xr1_Xidc?si=Ia70E2yO7I0B1dZq'
      },
      {
        id: 2,
        youtubeCode: 'Q2jboOEMt9I?si=MsgPioLO5UBOCfFJ'
      }
    ],
    slug: 'nekomata',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'S',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'cunning-hares'
  },
  {
    id: 10,
    name: 'Антон',
    description:
      'Антон — один из ключевых членов команды строительно-производственного комбината «Белобог» и доверенный помощник Коляды.\n' +
      '«Есть работа, с которой ты не можешь справиться? Предоставь это мне!»\n' +
      'Всегда полный сил, Антон сначала делает, а потом уже думает. Он один из лучших сотрудников «Белобога», нанятый ещё бывшим президентом Хорсом, поэтому все зовут его «старейшиной».\n' +
      'Искренний и честный человек, всегда поднимающий настроение коллег своим энтузиазмом.\n' +
      '\n' +
      'Антон разговаривает с отбойным молотком, который носит в руках, называя его братюней.',
    gender: 'Мужской',
    dateOfBirth: '2 мая',
    height: '190 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Антон',
        link: '/wiki/characters/anton'
      }
    ],
    link: '/wiki/characters/anton',
    image: 'anton/anton-card-image.webp',
    smallImage: 'anton/anton-small-card-image.webp',
    bannerImage: 'anton/anton-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: '5W-uACbpZso?si=j-NlnjBOt7QBgHEu'
      }
    ],
    slug: 'anton',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'attack',
    faction: 'belobog'
  },
  {
    id: 11,
    name: 'Солдат 11',
    description:
      'Солдат 11 — член Вооружённых сил Нью-Эриду.\n' +
      'В настоящее время она служит в отряде Обол Обсидиановой дивизии. Солдат 11 — позывной, её настоящее имя остаётся неизвестным.\n' +
      '«...Моё имя? Я отказалась от него давным-давно.\n' +
      'Оно лишь напоминает о прошлом, а прошлое делает человека слабее».\n' +
      '\n' +
      'Солдат 11 — любительница острой пищи. Ей нравится суперострая лапша, которую подают в «Водопаде супа».\n' +
      'Стоит отметить, что сейчас она зовёт нас разными именами каждый раз, когда приветствует.\n' +
      'Дополнительная информация о Солдате 11 ещё выясняется.',
    gender: 'Женский',
    dateOfBirth: 'Неизвестно',
    height: '160 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Солдат 11',
        link: '/wiki/characters/soldier11'
      }
    ],
    link: '/wiki/characters/soldier11',
    image: 'soldier11/soldier11-card-image.webp',
    smallImage: 'soldier11/soldier11-small-card-image.webp',
    bannerImage: 'soldier11/soldier11-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'cdjl01vqjEQ?si=CB0-SQSVqqqg0fsO'
      },
      {
        id: 2,
        youtubeCode: 'RsK0hyllsaY?si=yXzQpbUHcRUnoTa5'
      }
    ],
    slug: 'soldier11',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'obols-squad-faction.webp'
    },
    rarity: 'S',
    attribute: 'fire',
    specialty: 'attack',
    faction: 'obols-squad'
  },
  {
    id: 12,
    name: 'Бен',
    description:
      'Он директор по финансам и управлению активами в строительно-производственном комбинате «Белобог», один из доверенных помощников Коляды.\n' +
      '«Я люблю математику, но бить лица негодяям это мне не мешает».\n' +
      'Бен — рослый и крепкий тирен. Несмотря на суровую внешность, он удивительно чувствителен и внимателен к деталям, особенно когда речь идёт о цифрах.\n' +
      'Изначально он работал механиком в «Белобоге», но Коляда заметила талант Бена и повысила его до руководящей должности.\n' +
      'Бен благодарен за оказанное доверие, поэтому крайне ей предан.\n' +
      'Его любимая еда — чёрная икра, а вот рыбу он не любит.\n' +
      '\n' +
      'Однажды мне довелось увидеть, как он, едва втиснувшись в тесное офисное кресло, надел маленькие очки и занялся тщательной сверкой записей об активах «Белобога», примеряясь огромными пальцами к кнопочкам калькулятора.\n' +
      'Вопрос: это таких людей в Интерноте называют «сигмами»?',
    gender: 'Мужской',
    dateOfBirth: '23 декабря',
    height: '192 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Бен',
        link: '/wiki/characters/ben'
      }
    ],
    link: '/wiki/characters/ben',
    image: 'ben/ben-card-image.webp',
    smallImage: 'ben/ben-small-card-image.webp',
    bannerImage: 'ben/ben-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'OSupmDb2aQQ?si=3XfXYFkVtuQthRzb'
      }
    ],
    slug: 'ben',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'defense-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'A',
    attribute: 'fire',
    specialty: 'defense',
    faction: 'belobog'
  },
  {
    id: 13,
    name: 'Грейс',
    description:
      'Грейс — главный инженер комбината «Белобог» и основная сила компании в разработке и патентовании механизмов для работы в кавернах.\n' +
      'Грейс одержима шестерёнками, металлом и проводами — настоящий гик-механик. Она охотно разбирает и изучает любое оборудование и механизмы, которые покажутся ей интересными: «Такие чёткие и прямые линии, истинная красота... Не могу удержаться, чтобы не вскрыть и не посмотреть».\n' +
      '\n' +
      'Грейс всегда проявляет необычайное терпение в обращении с механизмами, ухаживая за сложными металлическими конструкциями так, словно это её собственные дети.\n' +
      'Согласно имеющейся информации, Грейс, вероятно, единственная, кто может в шутку звать Коляду малышкой, не получив при этом пинок в голень.',
    gender: 'Женский',
    dateOfBirth: '14 апреля',
    height: '170 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Грейс',
        link: '/wiki/characters/grace'
      }
    ],
    link: '/wiki/characters/grace',
    image: 'grace/grace-card-image.webp',
    smallImage: 'grace/grace-small-card-image.webp',
    bannerImage: 'grace/grace-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'tpHEWFnS1jQ?si=qOfs3HlmDD7ECTYS'
      },
      {
        id: 2,
        youtubeCode: 'xNOv-L0slJI?si=AwiRiHW4_su1h7yO'
      }
    ],
    slug: 'grace',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'anomaly',
    faction: 'belobog'
  },
  {
    id: 14,
    name: 'Николь',
    description:
      'Поиск по базе данных: Николь. Полученные результаты:\n' +
      '«Руководитель агентства деликатных поручений "Хитрые зайцы"», «Настоящая специалистка по жизни на улицах», «Сирота, родители неизвестны».\n' +
      'Изначально агентство Николь называлось «Заячья нора», но из-за изворотливости хозяйки оно получило прозвище «Хитрые зайцы».\n' +
      '«Она очень любит деньги! Не знаю, что она с ними делает. Кажется, что ничего».\n' +
      'Это цитата из популярного поста в Интерноте: «Её агентство — просто сущий кошмар. Никогда не видел руководителя, который бы так пытался заработать вообще на всём!»\n' +
      'На что объект обсуждений заявляет: «Ложь и клевета! Я, Николь, никогда не умела зарабатывать деньги! У меня их вообще никогда нет!»\n' +
      'Согласно достоверным источникам, «Хитрые зайцы» постоянно в долгах, а их «тщательное планирование бюджета», похоже, никак не влияет на ситуацию.',
    gender: 'Женский',
    dateOfBirth: '11 ноября',
    height: '165 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Николь',
        link: '/wiki/characters/nicole'
      }
    ],
    link: '/wiki/characters/nicole',
    image: 'nicole/nicole-card-image.webp',
    smallImage: 'nicole/nicole-small-card-image.webp',
    bannerImage: 'nicole/nicole-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'AHya9H4w5IA?si=sCLfH1ApZWzSZOco'
      },
      {
        id: 2,
        youtubeCode: 'BA5eUSejUiQ?si=Ylhkpgc4JbBvAzbA'
      }
    ],
    slug: 'nicole',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'ether-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'ether',
    specialty: 'support',
    faction: 'cunning-hares'
  },
  {
    id: 15,
    name: 'Сокаку',
    description:
      'Не просто член Секции 6, но и один из её «очень ценных активов». Враги, которые её недооценивают, имеют свойство исчезать. В буквальном смысле слова. Она обожает покушать и очень сердится, когда еда пропадает зря. В силу некоторых причин ей немного не хватает образования, и она часто неправильно произносит слова, что порой приводит к милым оговоркам. Хотя она очень наивна, но благодаря этому часто высказывает вслух истины, которые другие не могут или стесняются озвучить.',
    gender: '',
    dateOfBirth: '',
    height: '',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Сокаку',
        link: '/wiki/characters/soukaku'
      }
    ],
    link: '/wiki/characters/soukaku',
    image: 'soukaku/soukaku-card-image.webp',
    smallImage: 'soukaku/soukaku-small-card-image.webp',
    bannerImage: 'soukaku/soukaku-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'N34DVVD7XLg?si=bRYfeVSwX_5YnCTM'
      }
    ],
    slug: 'soukaku',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'section6-faction.png'
    },
    rarity: 'A',
    attribute: 'ice',
    specialty: 'support',
    faction: 'section6'
  },
  {
    id: 16,
    name: 'Билли',
    description:
      'Билли Кид, разумный конструкт, прошедший испытание «Запретный плод». Проще говоря, это андроид, обладающий собственным сознанием.\n' +
      'Имя ему подходит, ведь несмотря на облик робота, характером он похож на ребёнка.\n' +
      'Большой поклонник фильмов о Звёздных рыцарях, мечтает стать героем, как они. Часто называет себя Звёздным рыцарям [sic] и повторяет реплики из сериала.\n' +
      'Правда, выглядит это не столько пафосно, сколько нелепо.\n' +
      '«Нечего выставлять меня придурком! Ума мне не занимать!» — золотые цитаты Билли.',
    gender: 'Мужской',
    dateOfBirth: '5 ноября',
    height: '188 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Билли',
        link: '/wiki/characters/billy'
      }
    ],
    link: '/wiki/characters/billy',
    image: 'billy/billy-card-image.webp',
    smallImage: 'billy/billy-small-card-image.webp',
    bannerImage: 'billy/billy-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'WaPLKuWWahg?si=Lwch2LH0Qx4W3xhb'
      },
      {
        id: 2,
        youtubeCode: '76qtvw4xwQY?si=Nf-RvVLtIUeRe_8U'
      }
    ],
    slug: 'billy',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'cunning-hares'
  },
  {
    id: 17,
    name: 'Пайпер',
    description:
      'Пайпер водит грузовики для Сынов Калидона. Также она ремонтирует машины и байки и заведует обслуживанием прочей техники.\n' +
      'За миниатюрностью, нежным голоском, полусонным видом и очаровательно безобидной внешностью (которая как-то сочетается с ленью, неряшливостью и отсутствием социальной жизни) скрывается опытная дальнобойщица с совершенно безбашенным стилем вождения. к тому моменту, когда она наконец протянет «де-ержитесь кре-епче», грузовик обычно уже несётся по дороге на жуткой скорости.\n' +
      'Про таких, как Пайпер, на Объездной говорят: «водитель, которому не нужны тормоза».\n' +
      'Ездить с ней - испытание не для слабонервных, но будьте уверены: она обязательно довезёт вас до места назначения в кратчайшие сроки, в целости, сохранности и без травм (не считая психологических).\n' +
      'У Пайпер много хобби, плохо сочетающихся с её возрастом: чтение газет, покупка лотерейных билетов, коллекционирование автожурналов...\n' +
      'Её мечта - прожить жизнь расслабленно и не напрягаясь.',
    gender: 'Женский',
    dateOfBirth: '21 октября',
    height: '151 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Пайпер',
        link: '/wiki/characters/piper'
      }
    ],
    link: '/wiki/characters/piper',
    image: 'piper/piper-card-image.webp',
    smallImage: 'piper/piper-small-card-image.webp',
    bannerImage: 'piper/piper-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'GUiZ7XUs3lg?si=e2Doy9AperjIWSQ9'
      }
    ],
    slug: 'piper',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'calydon-faction.webp'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'anomaly',
    faction: 'calydon'
  },
  {
    id: 18,
    name: 'Коляда',
    description:
      'Коляда — нынешняя глава комбината «Белобог» и родная дочь основателя компании Хорса.\n' +
      'Её отец Хорс исчез, сбежав после скандала с растратой. Это сильно ударило по компании, едва не поставив её на грань краха. Достигнув совершеннолетия, Коляда с рвением взялась за решение проблем компании, используя оставшиеся рабочие силы и ресурсы, чтобы возродить уязвимый в финансовом и репутационном плане «Белобог».\n' +
      'С помощью новых бесценных членов команды компания «Белобог» в конце концов сумела восстановить своё положение в соответствующих отраслях. Хотя комбинат «Белобог» уже не так процветает, как в прежние времена, в нынешнем состоянии он всё ещё является важным игроком в своей области.\n' +
      'На протяжении всего жизненного пути Коляда накапливала практический опыт и профессиональные знания, создав круг коллег, которые поддерживают её, как семья. Однако Коляда не забывает о том, что она лидер, и поэтому намеренно строга в общении с другими.\n' +
      'Столь специфические детство и юность также способствовали тому, что Коляда в некоторых аспектах стала более зрелой, нежели сверстники.\n' +
      'Тем не менее на некоторые вещи она всё ещё смотрит по-детски.',
    gender: 'Женский',
    dateOfBirth: '10 августа',
    height: '150 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Коляда',
        link: '/wiki/characters/koleda'
      }
    ],
    link: '/wiki/characters/koleda',
    image: 'koleda/koleda-card-image.webp',
    smallImage: 'koleda/koleda-small-card-image.webp',
    bannerImage: 'koleda/koleda-character-page-image.webp',
    videoList: [
      {
        id: 1,
        youtubeCode: 'O23kAaqFAeA?si=UXK2sOG-WpdNS0k0'
      }
    ],
    slug: 'koleda',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'S',
    attribute: 'fire',
    specialty: 'stun',
    faction: 'belobog'
  },
  {
    id: 19,
    name: 'Люси',
    description:
      'В настоящее время Люси отвечает в Сынах Калидона за внешние контакты и менеджмент кабанов.\n' +
      'На Объездной она называет себя просто «Люси» - из-за длины её полного имени и нежелания ассоциироваться со своей семьёй.\n' +
      'Её безгранично преданных кабанов зовут Соломка, Дубинка и Кирпичик.\n' +
      'В общении она чередует грубость с изысканностью, но манеры всё равно выдают в ней образованную девушку высокого происхождения.\n' +
      'Люси росла в фантастически богатой семье. В детстве она могла получить все, что только пожелает... кроме свободы.\n' +
      'Получив результаты анализов на устойчивость к эфиру, люси решила стать исследовательницей каверн. Родители оказались против, ответив на желания дочери холодной жестокостью и изоляцией.\n' +
      'Тюсиана де Монтефио\n' +
      '«Пф! Я ни за что к ним не вернусь! Если меня найдут... я никогда больше не увижу звёздного неба, и вместо этого мне придется продолжать семейное дело!»\n' +
      'Для Люси всё - соревнование. Она обожает побеждать и ненавидит проигрывать.\n' +
      'Пока еще никто не побеждал её так часто, как Цезарь, и потому Люси продолжает вызывать её на поединки, раз за разом проигрывая и бросая новые вызовы.\n' +
      'История о том, как Люси попала к Сынам Калидона - комедия и драма в одном флаконе.Люсиана де Монтефио\n' +
      'Чтобы сбежать из дома, она наняла актёров, которые должны были её «похитить». Однако этот план провалился из-за Сынов Калидона:\n' +
      'Цезарь раскидала всех «похитителей» и спасла несчастную «жертву».\n' +
      'Очевидцы утверждают, что вид Цезарь, в лучах солнца въезжающей на своём байке прямо в дверь, произвёл на Люси неизгладимое впечатление. «Тогда-то я и увидела настоящую свободу».\n' +
      'С тех самых пор Люси и осталась с Цезарь, решив, что хочет присоединиться к банде.',
    gender: 'Женский',
    dateOfBirth: '14 августа',
    height: '152 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Люси',
        link: '/wiki/characters/lucy'
      }
    ],
    link: '/wiki/characters/lucy',
    image: 'lucy/lucy-card-image.webp',
    smallImage: 'lucy/lucy-small-card-image.webp',
    bannerImage: 'lucy/lucy-character-page-image.jpg',
    videoList: [
      {
        id: 1,
        youtubeCode: 'JgKwS8cQMrE?si=6MnLei13N-y6Jhpl'
      }
    ],
    slug: 'lucy',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'calydon-faction.webp'
    },
    rarity: 'A',
    attribute: 'fire',
    specialty: 'support',
    faction: 'calydon'
  },
  {
    id: 20,
    name: 'Рина',
    description:
      'Рина — старшая горничная агентства домашнего персонала «Виктория» и самая опытная его сотрудница.\n' +
      'Она элегантна и безупречна с головы до пят, обладает идеальными манерами и всегда держит на лице приветливую улыбку.\n' +
      'Придаёт большое значение тому, что о ней думают окружающие.\n' +
      '\n' +
      'Рину всегда сопровождают банбу — Анастелла (шатенка) и Дризелла (блондинка), каждая со своим характером.\n' +
      'Дризелла — давняя спутница Рины с высоким уровнем интеллекта, способна различать мысли и эмоции Рины.\n' +
      'Анастелла присоединилась к ним недавно и редко сама начинает разговор. Дризелла часто её дразнит.\n' +
      '\n' +
      'Рина очень любит готовить, но лишь немногие способны выдержать её стряпню.',
    gender: 'Женский',
    dateOfBirth: '23 сентября',
    height: '173 см',
    breadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      },
      {
        name: 'Рина',
        link: '/wiki/characters/rina'
      }
    ],
    link: '/wiki/characters/rina',
    image: 'rina/rina-card-image.webp',
    smallImage: 'rina/rina-small-card-image.webp',
    bannerImage: 'rina/rina-character-page-image.jpg',
    videoList: [
      {
        id: 1,
        youtubeCode: 'vUEUNAzts-0?si=DX0pwOkEqzFyEZHc'
      }
    ],
    slug: 'rina',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'support',
    faction: 'victoria'
  }
]

export const useCharactersStore = defineStore('CharactersStore', {
  state: () => ({
    charactersList: defaultCharactersList,
    filteredCharactersList: defaultCharactersList,
    charactersPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
      }
    ],
    selectedFaction: 'Выберите фракцию',
    filterParams: {
      rarity: '',
      attribute: '',
      specialty: '',
      faction: ''
    },
    charactersReadMoreArray: []
  }),
  actions: {
    getCharacterByRouteSlug(slug: string) {
      return this.charactersList.find(character => character.slug === slug)
    },
    updateCharactersReadMoreArray() {
      const result = []
      const route = useRoute()

      for (let i = 0; result.length !== 4; i++) {
        let randomChoice = this.charactersList[Math.floor(Math.random() * this.charactersList.length)]

        if (result.some(item => item.id === randomChoice.id) || randomChoice.slug === route.params.characterSlug) {
          continue
        } else {
          result.push(randomChoice)
        }
      }
      this.charactersReadMoreArray = result
    },
    selectFaction(faction) {
      this.selectedFaction = faction.name
    },
    resetFilters() {
      this.filterParams = {
        rarity: '',
        attribute: '',
        specialty: '',
        faction: ''
      }
      this.selectedFaction = 'Выберите фракцию'
      this.filteredCharactersList = defaultCharactersList
    },
    setRarityFilterParam(rarity) {
      this.filterParams.rarity = rarity.name
    },
    setAttributeFilterParam(attribute) {
      this.filterParams.attribute = attribute.name
    },
    setSpecialtyFilterParam(specialty) {
      this.filterParams.specialty = specialty.name
    },
    setFactionFilterParam(faction) {
      this.filterParams.faction = faction.filterName
    },
    filterCharactersList() {
      this.filteredCharactersList = this.charactersList.filter(character => {
        const { rarity, attribute, specialty, faction } = this.filterParams
        return (
          (rarity === '' || character.rarity === rarity) &&
          (attribute === '' || character.attribute === attribute) &&
          (specialty === '' || character.specialty === specialty) &&
          (faction === '' || character.faction === faction)
        )
      })
    }
  },
  getters: {
    getCharactersReadMoreArray: state => state.charactersReadMoreArray,
    getBelobogCharactersList() {
      return this.charactersList.filter(character => character.faction === 'belobog')
    },
    getCalydonCharactersList() {
      return this.charactersList.filter(character => character.faction === 'calydon')
    },
    getCriminalCharactersList() {
      return this.charactersList.filter(character => character.faction === 'criminal')
    },
    getCunningHaresCharactersList() {
      return this.charactersList.filter(character => character.faction === 'cunning-hares')
    },
    getObolCharactersList() {
      return this.charactersList.filter(character => character.faction === 'obols-squad')
    },
    getSection6CharactersList() {
      return this.charactersList.filter(character => character.faction === 'section6')
    },
    getVictoriaCharactersList() {
      return this.charactersList.filter(character => character.faction === 'victoria')
    },
    getAllAttackCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'attack') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllDefenseCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'defense') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllAnomalyCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'anomaly') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllSupportCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'support') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllStunCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'stun') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    }
  }
})

const defaultBangboosList = [
  {
    id: 27,
    name: 'Агент Гулливер',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Агент Гулливер',
        link: '/wiki/bangboos/agent-gulliver'
      }
    ],
    description: 'Открывайте! Проверка безопасности!',
    commonDescription: '',
    stats: {
      hp: '4210',
      atk: '8380',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Экстренные меры',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> Банбу выполняет три этапа проникающих атак, нанося <span style="color: #2eb6ff">электрический урон</span> и накапливая у врага аномалию <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      },
      b: {
        name: 'Штурмовой отряд банбу',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Активируется, если в отряде есть хотя бы <b style="color: #eec554">2 агента из Секции 6 Службы спецопераций в кавернах.</b> Когда активный навык и цепочка атак банбу попадают по врагам в состоянии <span style="color: #2eb6ff">Шока</span>, наносимый врагам урон повышается на <b style="color: #eec554">60%.</b> Когда банбу атакует врагов с аномалией любого атрибута, кроме <span style="color: #2eb6ff">электрического</span>, атаки накапливают на <b style="color: #eec554">120%</b> больше аномалии атрибута.</p>'
      },
      c: {
        name: 'Момент штурма',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу один раз стреляет (выполняет мощную проникающую атаку), нанося <span style="color: #2eb6ff">электрический урон</span> и значительно увеличивая накопление аномалии <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      }
    },
    slug: 'agent-gulliver',
    link: '/wiki/bangboos/agent-gulliver',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'agent-gulliver/bangboo-agent-gulliver.webp',
    rarity: 'S'
  },
  {
    id: 26,
    name: 'Борьбу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Борьбу',
        link: '/wiki/bangboos/brawlerboo'
      }
    ],
    description: 'Десять тысяч энне-ударов в день!',
    commonDescription: '',
    stats: {
      hp: '4632',
      atk: '5826',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Удар-метеор!',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> При использовании приёма накапливает силы и взлетает вверх, переходя в состояние <b style="color: #eec554">«Взлёт».</b> Если агент попадает по врагу тяжёлым ударом, когда Борьбу находится в состоянии <b style="color: #eec554">«Взлёт»,</b> то Борьбу совершает пикирующую атаку и наносит цели <span style="color: #ff5521">огненный урон.</span></p>'
      },
      b: {
        name: 'Открывающий удар',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Активируется, если в отряде есть агент со специальностью <b style="color: #eec554">Нападение</b> или <b style="color: #eec554">Аномалия:</b> когда бой начинается, Борьбу заранее переходит в состояние <b style="color: #eec554">«Взлёт».</b> Первая запущенная пикирующая атака наносит на  <b style="color: #eec554">240%</b> больше урона.</p>'
      },
      c: {
        name: 'Шторм ударов',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Подпрыгивает вверх и производит серию ударов по врагам в большой области впереди, нанося <span style="color: #ff5521">огненный урон.</span></p>'
      }
    },
    slug: 'brawlerboo',
    link: '/wiki/bangboos/brawlerboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'brawlerboo/bangboo-brawlerboo.webp',
    rarity: 'A'
  },
  {
    id: 25,
    name: 'Рыцарьбу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Рыцарьбу',
        link: '/wiki/bangboos/knightboo'
      }
    ],
    description: 'Скакать могу и я, и мой скакун!',
    commonDescription: '',
    stats: {
      hp: '4632',
      atk: '5826',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Рыцарь, заряжайся!',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> Несколько раз подпрыгивает на Коняшке и призывает <b style="color: #eec554">3 рыцарские звёздочки</b>, которые восстанавливают энергию персонажу, <b style="color: #eec554">коснувшемуся их.</b></p>'
      },
      b: {
        name: 'Рыцарственность',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Поддержка»:</b> когда персонаж касается рыцарской звёздочки, его сила атаки повышается на <b style="color: #eec554">40 + уровень банбу ×2 ед. на 10 сек.</b></p>'
      },
      c: {
        name: 'Рыцарь, прыг-скок в бой!',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу призывает <b style="color: #eec554">3 Коняшек</b>, которые до <b style="color: #eec554">10 раз</b> топчут врагов в области перед собой, нанося им <span style="color: #fe437e">эфирный урон.</span></p>'
      }
    },
    slug: 'knightboo',
    link: '/wiki/bangboos/knightboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'knightboo/bangboo-knightboo.webp',
    rarity: 'A'
  },
  {
    id: 24,
    name: 'Злобнобу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Злобнобу',
        link: '/wiki/bangboos/baddieboo'
      }
    ],
    description: 'Не связывайся с ним. Когда он не в духе, он не посмотрит, человек перед ним или банбу!',
    commonDescription: '',
    stats: {
      hp: '3828',
      atk: '6570',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '94'
    },
    skills: {
      a: {
        name: 'Ракетный обстрел',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> Банбу выпускает по врагу ракеты и метает коктейли Молотова, нанося <span style="color: #ff5521">огненный урон.</span></p>'
      },
      b: {
        name: 'Исключительная взрывоопасность',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Активируется, если в отряде есть хотя бы один агент со специальностью <b style="color: #eec554">Аномалия.</b>\n' +
          'Цепочки атак банбу наносят на <b style="color: #eec554">40%</b> больше урона врагам и дополнительно на <b style="color: #eec554">30%</b> больше урона, если враг — <b style="color: #eec554">биоорганизм.</b></p>'
      },
      c: {
        name: 'Ракетный удар!',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу прыгает вперёд и выпускает ракету, нанося <span style="color: #ff5521">огненный урон</span> врагам в большой области перед собой.</p>'
      }
    },
    slug: 'baddieboo',
    link: '/wiki/bangboos/baddieboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'baddieboo/bangboo-baddieboo.webp',
    rarity: 'A'
  },
  {
    id: 23,
    name: 'Красный Моккус',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Красный Моккус',
        link: '/wiki/bangboos/red-moccus'
      }
    ],
    description: 'Буду ждать тебя на перекрёстке у съезда с Объездной!',
    commonDescription: '',
    stats: {
      hp: '4210',
      atk: '8863',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Полный привод',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу на мотоцикле подтягивает самого дальнего врага к агенту, нанося при этом <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Объездная-дрифт',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента из <span style="color: #ff5521">«Сынов Калидона».</span> Повышает урон, наносимый активным навыком, на <b style="color: #eec554">72%.</b> После того как активный навык наносит врагу урон, когда этот враг погибает, откат навыка уменьшается на <b style="color: #eec554">8 сек.</b></p>'
      },
      c: {
        name: 'Порыв бури',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу налетает на врага на мотоцикле и вызывает взрыв, нанося <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'red-moccus',
    link: '/wiki/bangboos/red-moccus',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'red-moccus/bangboo-red-moccus.webp',
    rarity: 'S'
  },
  {
    id: 1,
    name: 'Амиллион',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Амиллион',
        link: '/wiki/bangboos/amillion'
      }
    ],
    description: 'Миллион денни в одном банбу.',
    commonDescription:
      'Этот банбу, наносящий огромный физический урон, будет полезен как на ранних, так и на поздних этапах игры. Доп. способность привязана к фракции «Хитрых зайцев», трех агентов которой вы итак получаете по сюжету.',
    stats: {
      hp: '4210',
      atk: '8863',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Портативный пулемёт: Ликвидатор долгов',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу устанавливает пулемёт и выпускает во врагов очередь, нанося им <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Уличный кодекс',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть 2 и более агентов из <span style="color: #fe437e">«Хитрых зайцев».</span> Урон цепочки атак банбу увеличивается тем больше, чем меньше врагов на поле боя, до максимума в <b style="color: #eec554">90%.</b></p>'
      },
      c: {
        name: 'Портативная пушка: огонь расплаты',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу открывает по врагу огонь на подавление с помощью пулемётов и пушек, нанося большой <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'amillion',
    link: '/wiki/bangboos/amillion',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'amillion/bangboo-amillion.webp',
    rarity: 'S'
  },
  {
    id: 2,
    name: 'Авокабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Авокабу',
        link: '/wiki/bangboos/avocaboo'
      }
    ],
    description: 'Крайне популярен среди любителей салатов.',
    commonDescription:
      'Банбу-саппорт, ориентированный на подхил отряда. На наш вкус лучше отдать предпочтение Искателю, если хотите взять с собой банбу с лечением.',
    stats: {
      hp: '4632',
      atk: '5826',
      def: '781',
      critRate: '5%',
      critDmg: '50%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Сочная сладость',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу стреляет снарядами с фруктовым соком. Если снаряд не попадает в цель, он падает на землю, временно оставляя вокруг себя лужу из сока. Если персонаж наступит в лужу, это восстановит его HP. Исцеление доступно не более <b style="color: #eec554">15 раз</b> за бой.</p>'
      },
      b: {
        name: 'Уличный кодекс',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Поддержка».</b> Увеличивает восстановленные активным навыком HP на <b style="color: #eec554">40%.</b> Увеличивает число раз, когда агент может применить активный навык, на <b style="color: #eec554">3.</b></p>'
      },
      c: null
    },
    slug: 'avocaboo',
    link: '/wiki/bangboos/avocaboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'avocaboo/bangboo-avocaboo.webp',
    rarity: 'A'
  },
  {
    id: 3,
    name: 'Пакетник',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Пакетник',
        link: '/wiki/bangboos/bagboo'
      }
    ],
    description: 'Под этим пакетом сокрыто пугающее прошлое...',
    commonDescription:
      'Бесплатный банбу, которого вы получаете по сюжету. Рекомендуем заменить его на более подходящего при первой возможности.',
    stats: {
      hp: '4341',
      atk: '3259',
      def: '430',
      critRate: '50%',
      critDmg: '100%',
      impact: '94'
    },
    skills: {
      a: {
        name: 'Ближе и ближе...',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу рубит врага двумя клинками, нанося <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Боевая готовность',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Нападение».</b> Урон от цепочки атак банбу увеличивается на <b style="color: #eec554">60%.</b></p>'
      },
      c: {
        name: 'Не подходи!',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу атакует врага серией рубящих ударов, нанося большой <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'bagboo',
    link: '/wiki/bangboos/bagboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'bagboo/bangboo-bagboo.webp',
    rarity: 'A'
  },
  {
    id: 4,
    name: 'Револьвербу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Револьвербу',
        link: '/wiki/bangboos/bangvolver'
      }
    ],
    description: 'Предсказания на сегодня: Большая удача!',
    commonDescription:
      'Этот банбу уступает своим товарищам S-ранга из-за элемента случайности, возможного при использовании активного навыка, а также сложности составления сбалансированной физической команды. На данный момент все персонажи этого атрибута, кроме Пайпер, относятся к Нападению.',
    stats: {
      hp: '4210',
      atk: '8057',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Барабан фортуны',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу производит выстрел одного из следующих типов по случайному выбору.\n' +
          'Мощный фейерверк: делает мощный выстрел по врагу, нанося большой <span style="color: #f0d12b">физический урон</span> и накапливая много аномалии <span style="color: #f0d12b">физического атрибута.</span>\n' +
          'Обычный фейерверк: делает выстрел по врагу, нанося физический урон и накапливая аномалию <span style="color: #f0d12b">физического атрибута.</span>\n' +
          'Осечка: выстрела не происходит, из дула разлетаются лепестки.</p>'
      },
      b: {
        name: 'Удача — разновидность силы',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #f0d12b">физическим атрибутом.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">200%.</b></p>'
      },
      c: {
        name: 'Спусковой механизм удачи',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу запускает по цели серию выстрелов, нанося <span style="color: #f0d12b">физический урон</span> и накапливая много аномалии <span style="color: #f0d12b">физического атрибута.</span></p>'
      }
    },
    slug: 'bangvolver',
    link: '/wiki/bangboos/bangvolver',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'bangvolver/bangboo-bangvolver.webp',
    rarity: 'S'
  },
  {
    id: 5,
    name: 'Яблочкобу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Яблочкобу',
        link: '/wiki/bangboos/boollseye'
      }
    ],
    description: 'В яблочко!',
    commonDescription:
      'Банбу, привязанный к наличию агентов с проникающими ударами в отряде. Можно поставить в пару к Билли при отсутствии более подходящих вариантов.',
    stats: {
      hp: '3828',
      atk: '6570',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '94'
    },
    skills: {
      a: {
        name: 'Прямо в сердце',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу бросает дротик во врага, нанося <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Пересечение траекторий',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент, наносящий проникающие удары.\n' +
          'Урон от цепочки атак банбу увеличивается на <b style="color: #eec554">60%.</b></p>'
      },
      c: {
        name: 'Бросок камикадзе',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу запускает себя из рогатки в направлении врага и атакует серией рубящих ударов, нанося большой <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'boollseye',
    link: '/wiki/bangboos/boollseye',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'boollseye/bangboo-boollseye.webp',
    rarity: 'A'
  },
  {
    id: 6,
    name: 'Баробу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Баробу',
        link: '/wiki/bangboos/booressure'
      }
    ],
    description: 'Мастерство общения банбу заключается в том, чтобы уловить общую атмосферу беседы.',
    commonDescription:
      'Бюджетный аналог Мажордома, который может работать батарейкой для вашего отряда. Для максимальной эффективности требует наличия агента Поддержки в отряде.',
    stats: {
      hp: '4632',
      atk: '5826',
      def: '781',
      critRate: '5%',
      critDmg: '50%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Эфирный пузырь',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу пускает эфирные пузыри.\n' +
          'Персонажи, коснувшиеся эфирных пузырей, восстанавливают энергию.</p>'
      },
      b: {
        name: 'Стабилизация давления',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Поддержка».</b>\n' +
          'Когда эфирный пузырь касается агента, увеличивается восстановление энергии агентов, находящихся в запасе, на <b style="color: #eec554">100%</b> от начального значения.</p>'
      },
      c: null
    },
    slug: 'booressure',
    link: '/wiki/bangboos/booressure',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'booressure/bangboo-booressure.webp',
    rarity: 'A'
  },
  {
    id: 7,
    name: 'Мажордом',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Мажордом',
        link: '/wiki/bangboos/butler'
      }
    ],
    description: 'Идеальный помощник по хозяйству под стать вам.',
    commonDescription:
      'Банбу-саппорт, который может работать для вашего отряда батарейкой и оказывать таким образом заметную помощь в бою. На момент запуска игры имеет высокий приоритет как компаньон к Эллен из первого баннера. ',
    stats: {
      hp: '5095',
      atk: '7896',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '110'
    },
    skills: {
      a: {
        name: 'Время чаепития',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу заботливо подаёт угощение к чаю.\n' +
          'У получившего угощение агента восстанавливается энергия.</p>'
      },
      b: {
        name: 'Личный дворецкий',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть 2 и более агентов из агентства домашнего персонала <span style="color: #C6C091">«Виктория».</span>\n' +
          'При срабатывании активного навыка восстановление энергии увеличивается на <b style="color: #eec554">40%.</b></p>'
      },
      c: {
        name: 'Послеобеденный десерт',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу атакует цели на дальнем расстоянии с помощью сковороды и блинов, нанося большой <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'butler',
    link: '/wiki/bangboos/butler',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'butler/bangboo-butler.webp',
    rarity: 'S'
  },
  {
    id: 8,
    name: 'Плаксабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Плаксабу',
        link: '/wiki/bangboos/cryboo'
      }
    ],
    description: 'Кто поймёт все горести юного банбу?',
    commonDescription: 'Бюджетный аналог банбу Ракетабу, который станет отличным дополнением огненных моноотрядов.',
    stats: {
      hp: '3828',
      atk: '6198',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '90'
    },
    skills: {
      a: {
        name: 'Граната',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу метает гранату во врага, нанося <span style="color: #ff5521">огненный урон</span> и накапливая аномалию <span style="color: #ff5521">огненного атрибута.</span></p>'
      },
      b: {
        name: 'Накопление теплоты',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с  <span style="color: #ff5521">огненными атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">120%.</b></p>'
      },
      c: {
        name: 'Неожиданный подарок',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу бросает во врага гранату, нанося <span style="color: #ff5521">огненный урон,</span> и вызывает мощное накопление аномалии <span style="color: #ff5521">атрибута огня.</span></p>'
      }
    },
    slug: 'cryboo',
    link: '/wiki/bangboos/cryboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'cryboo/bangboo-cryboo.webp',
    rarity: 'A'
  },
  {
    id: 9,
    name: 'Вельзебу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Вельзебу',
        link: '/wiki/bangboos/devilboo'
      }
    ],
    description: 'Коварнее демона может быть только... Вельзебу!',
    commonDescription: 'Бюджетный аналог банбу Резонабу, который станет отличным дополнением эфирных моноотрядов.',
    stats: {
      hp: '3828',
      atk: '6570',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '90'
    },
    skills: {
      a: {
        name: 'Поцелуй искушения',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу взлетает и непрерывно стреляет во врага самонаводящимися пулями, наносящими <span style="color: #fe437e">эфирный урон</span> и повышающими накопление <span style="color: #fe437e">эфирной аномалии.</span></p>'
      },
      b: {
        name: 'Повышение активности эфира',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Дополнительная способность: активируется, если в отряде есть хотя бы 2 агента с <span style="color: #fe437e">эфирными атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время использования цепочки атак банбу на <b style="color: #eec554">80%.</b>\n' +
          'При запуске цепочки атак банбу состояние Синергии длится на <b style="color: #eec554">9 сек.</b> дольше и может быть использовано на <b style="color: #eec554">8 р.</b> чаще.</p>'
      },
      c: {
        name: 'Поцелуй смятения',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу стреляет по врагу из лазера, а затем входит в состояние Синергии: когда персонаж атакует цель, лазер наводится на неё, наносит <span style="color: #fe437e">эфирный урон</span> и повышает накопленное значение <span style="color: #fe437e">эфирной аномалии.</span> Эффект действует в течение <b style="color: #eec554">30 сек.</b> или срабатывает <b style="color: #eec554">10 раз.</b></p>'
      }
    },
    slug: 'devilboo',
    link: '/wiki/bangboos/devilboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'devilboo/bangboo-devilboo.webp',
    rarity: 'A'
  },
  {
    id: 10,
    name: 'Электробу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Электробу',
        link: '/wiki/bangboos/electroboo'
      }
    ],
    description: 'Бзз... Не забудьте надеть защитные перчатки, если хотите погладить.',
    commonDescription:
      'Бюджетный аналог банбу Штекербу, который станет отличным дополнением электрических моноотрядов.',
    stats: {
      hp: '3828',
      atk: '6198',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '90'
    },
    skills: {
      a: {
        name: 'Максимальное напряжение!',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу несётся на врага, непрерывно нанося ему <span style="color: #2eb6ff">электрический урон</span> и накапливая аномалию <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      },
      b: {
        name: 'Индукционный ток',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #2eb6ff">электрическим атрибутом.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">120%.</b></p>'
      },
      c: {
        name: 'Максимальное напряжение!',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу атакует врага серией электрических разрядов, нанося <span style="color: #2eb6ff">электрический урон</span>, и значительно увеличивает накопление аномалии <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      }
    },
    slug: 'electroboo',
    link: '/wiki/bangboos/electroboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'electroboo/bangboo-electroboo.webp',
    rarity: 'A'
  },
  {
    id: 11,
    name: 'Искатель',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Искатель',
        link: '/wiki/bangboos/exploreboo'
      }
    ],
    description: 'Бип-бип-бип-бип. Это значит, что рядом сокровища, или у него просто садится батарейка?',
    commonDescription:
      'Универсальный банбу-саппорт, который может удачно дополнить любую команду, особенно при наличии нескольких ядер.',
    stats: {
      hp: '4632',
      atk: '6074',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Детектор эфира',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу сканирует местность и проводит раскопки.\n' +
          'После этого он накладывает на персонажа случайное усиление в зависимости от собственных параметров.\n' +
          'Усиление 1: восстановление HP;\n' +
          'Усиление 2: создание щита;\n' +
          'Усиление 3: повышение восстановления энергии.</p>'
      },
      b: {
        name: 'Специалист по обнаружению эфира',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент специальности <b style="color: #eec554">«Поддержка».</b>\n' +
          'Увеличивает усиления, накладываемые на агента с помощью активного навыка.\n' +
          'Усиление 1: восстановленное HP увеличивается на <b style="color: #eec554">30%.</b>\n' +
          'Усиление 2: накладываемый щит усиливается на <b style="color: #eec554">30%.</b>\n' +
          'Усиление 3: восстановление энергии увеличивается на <b style="color: #eec554">0.08 ед/сек.</b></p>'
      },
      c: null
    },
    slug: 'exploreboo',
    link: '/wiki/bangboos/exploreboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'exploreboo/bangboo-exploreboo.webp',
    rarity: 'A'
  },
  {
    id: 12,
    name: 'Счастливчик',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Счастливчик',
        link: '/wiki/bangboos/luckyboo'
      }
    ],
    description: 'Займёт немало места, если поставить на прилавок.',
    commonDescription:
      'Этот банбу отлично дополнит физические отряды с Нэкоматой в основе, помогая накапливать аномалию физичекого атрибута. По сути это бесплатный аналог банбу S-ранга Револьвербу.',
    stats: {
      hp: '3828',
      atk: '6198',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '94'
    },
    skills: {
      a: {
        name: 'Большие расходы',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу метает во врага монеты, нанося <span style="color: #f0d12b">физический урон</span> и накапливая аномалию <span style="color: #f0d12b">физического атрибута.</span></p>'
      },
      b: {
        name: 'Нет силы без удачи',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #f0d12b">физическими атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время использования активного навыка на <b style="color: #eec554">40%.</b>\n' +
          'Увеличивает время действия активного навыка на <b style="color: #eec554">1.6 сек.</b></p>'
      },
      c: null
    },
    slug: 'luckyboo',
    link: '/wiki/bangboos/luckyboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'luckyboo/bangboo-luckyboo.webp',
    rarity: 'A'
  },
  {
    id: 13,
    name: 'Магнитобу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Магнитобу',
        link: '/wiki/bangboos/magnetiboo'
      }
    ],
    description:
      'Страдает от тревожного расстройства привязанности. Для лечения хозяину необходимо воздержаться от металлических украшений.',
    commonDescription:
      'Ситуативный банбу, который может собирать пачки врагов вокруг себя. Для максимальной эффективности требует наличия агента Аномалии в отряде.',
    stats: {
      hp: '3828',
      atk: '6570',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '94'
    },
    skills: {
      a: {
        name: 'Магнитная фиксация',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу непрерывно притягивает врагов вокруг, нанося всем задетым противникам <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Магнетическое притяжение\n',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Аномалия».</b>\n' +
          'Урон от активного навыка банбу увеличивается на <b style="color: #eec554">30%.</b></p>'
      },
      c: null
    },
    slug: 'magnetiboo',
    link: '/wiki/bangboos/magnetiboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'magnetiboo/bangboo-magnetiboo.webp',
    rarity: 'A'
  },
  {
    id: 14,
    name: 'Офицер Цуй',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Офицер Цуй',
        link: '/wiki/bangboos/officer-cui'
      }
    ],
    description: 'Хоть он и банбу, но видом он грознее любого сторожевого пса!',
    commonDescription:
      'Станет отличным выбором, если собираетесь выбить из баннеров хотя бы двух агентов фракции ГОРУ. Не накапливает аномалию атрибута, но наносит высокий урон сам по себе.',
    stats: {
      hp: '4210',
      atk: '8863',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Гав! Гав! Гав!',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> Банбу выполняет атаку в два приёма, непрерывно кусая врагов перед собой и нанося <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'И. о. сторожевого пса',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> Активируется, если в отряде есть не менее 2 агентов из <b style="color: #eec554">группы особого реагирования угрозыска.</b> После применения активного навыка с вероятностью <b style="color: #eec554">50%</b> банбу кусает врага ещё раз (срабатывает максимум до 3 раз подряд).\n' +
          'Урон от цепочки атак банбу увеличивается на <b style="color: #eec554">70%.</b></p>'
      },
      c: {
        name: 'Гав-гав! Гав!',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу непрерывно кусает врагов впереди, нанося им огромный <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'officer-cui',
    link: '/wiki/bangboos/officer-cui',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'officer-cui/bangboo-officer-cui.webp',
    rarity: 'S'
  },
  {
    id: 15,
    name: 'Бумабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Бумабу',
        link: '/wiki/bangboos/paperboo'
      }
    ],
    description: 'Банбу часто вспоминает, как вылупился на свет.',
    commonDescription: 'Банбу, которого можно взять в пару к Бену, если у команды есть проблемы с выживаемостью.',
    stats: {
      hp: '4632',
      atk: '5826',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '100'
    },
    skills: {
      a: {
        name: 'Бумажная броня-приманка',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу маскируется с помощью обёрточной бумаги, привлекая на себя атаки врагов.\n' +
          'Если банбу атакуют, пока он замаскирован, или если заканчивается время маскировки, происходит взрыв, который наносит <span style="color: #f0d12b">физический урон</span> по области.</p>'
      },
      b: {
        name: 'Бумажная броня',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Оборона».</b>\n' +
          'Когда Цепочка атак банбу поражает цель, это обеспечивает щит для всех агентов отряда. Чем больше врагов будет повержено данной способностью, тем сильнее будет созданный щит. Максимальный доступный щит равен <b style="color: #eec554">21%</b> от максимума HP Бумабу.</p>'
      },
      c: {
        name: 'Бумажная броня: Штурмовой режим',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу маскируется с помощью обёрточной бумаги и прыгает на врага. При приземлении вызывает взрыв, нанося <span style="color: #f0d12b">физический урон</span> по обширной площади.</p>'
      }
    },
    slug: 'paperboo',
    link: '/wiki/bangboos/paperboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'paperboo/bangboo-paperboo.webp',
    rarity: 'A'
  },
  {
    id: 16,
    name: 'Пингвибу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Пингвибу',
        link: '/wiki/bangboos/penguinboo'
      }
    ],
    description: 'Шатко да валко, холодно да зябко.',
    commonDescription:
      'Бюджетный вариант Акулабу, подойдет для ледяных монокоманд. На старте может составить компанию Эллен при отсутствии более удачных вариантов.',
    stats: {
      hp: '3828',
      atk: '6198',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '90'
    },
    skills: {
      a: {
        name: 'Ледяной танец',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу атакует врага серией рубящих ударов, нанося <span style="color: #98eff0">ледяной урон</span> и накапливая аномалию <span style="color: #98eff0">ледяного атрибута.</span></p>'
      },
      b: {
        name: 'Сухой лёд',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #98eff0">ледяными атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">120%.</b></p>'
      },
      c: {
        name: 'Ледяной смерч',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу выполняет долгий шквальный удар по врагу, нанося <span style="color: #98eff0">ледяной урон</span>, и вызывает мощное накопление аномалии <span style="color: #98eff0">атрибута льда.</span></p>'
      }
    },
    slug: 'penguinboo',
    link: '/wiki/bangboos/penguinboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'penguinboo/bangboo-penguinboo.webp',
    rarity: 'A'
  },
  {
    id: 17,
    name: 'Штекербу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Штекербу',
        link: '/wiki/bangboos/plugboo'
      }
    ],
    description: '«Бип-бип-бип... Бип... Би-бип...»',
    commonDescription: 'Сильный банбу, который станет удачным дополнением электрической монокоманды.',
    stats: {
      hp: '4210',
      atk: '8057',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '99'
    },
    skills: {
      a: {
        name: 'Удар током',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу стреляет по врагу из электромагнитной пушки, нанося <span style="color: #2eb6ff">электрический урон</span> и накапливая аномалию <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      },
      b: {
        name: 'Электромант',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #2eb6ff">электрическим атрибутом.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">200%.</b></p>'
      },
      c: {
        name: 'Мощный скачок напряжения',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу атакует мощным электрическим ударом врагов в большой области вокруг себя, нанося <span style="color: #2eb6ff">электрический урон,</span> и значительно увеличивает накопление аномалии <span style="color: #2eb6ff">электрического атрибута.</span></p>'
      }
    },
    slug: 'plugboo',
    link: '/wiki/bangboos/plugboo',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'plugboo/bangboo-plugboo.webp',
    rarity: 'S'
  },
  {
    id: 18,
    name: 'Резонабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Резонабу',
        link: '/wiki/bangboos/resonaboo'
      }
    ],
    description: 'Накапливается эфирная энергия...',
    commonDescription:
      'Этот банбу станет отличным дополнением для команды, ориентированной на эфирный урон. Однако брать его имеет смысл только в том случае, если получилось выкрутить Чжу Юань из баннера.',
    stats: {
      hp: '4210',
      atk: '8057',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '99'
    },
    skills: {
      a: {
        name: 'Маленькая чёрная дыра',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу призывает чёрную дыру, которая непрерывно притягивает врагов вокруг, нанося всем задетым противникам <span style="color: #fe437e">эфирный урон</span> и накапливая аномалию <span style="color: #fe437e">атрибута эфира.</span></p>'
      },
      b: {
        name: 'Радиационное воздействие',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #fe437e">эфирным атрибутом.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">200%.</b></p>'
      },
      c: {
        name: 'Изначальная чёрная дыра',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Банбу бросает во врага эфирную гранату, нанося <span style="color: #fe437e">эфирный урон</span> и вызывая мощное накопление аномалии <span style="color: #fe437e">эфирного атрибута.</span></p>'
      }
    },
    slug: 'resonaboo',
    link: '/wiki/bangboos/resonaboo',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'resonaboo/bangboo-resonaboo.webp',
    rarity: 'S'
  },
  {
    id: 19,
    name: 'Ракетабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Ракетабу',
        link: '/wiki/bangboos/rocketboo'
      }
    ],
    description: 'Этот банбу разгоняется на 17,5 шага за километр.',
    commonDescription: 'Сильный банбу, который станет отличным дополнением для огненных команд.',
    stats: {
      hp: '4210',
      atk: '8541',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '99'
    },
    skills: {
      a: {
        name: 'Бум!',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу атакует врага верхом на ракете.\n' +
          'При попадании в цель ракета взрывается, нанося врагам в области действия <span style="color: #ff5521">огненный урон,</span> и вызывает накопление аномалии <span style="color: #ff5521">атрибута огня.</span></p>'
      },
      b: {
        name: 'Вливание горючего',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #ff5521">огненными атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">200%.</b></p>'
      },
      c: {
        name: 'Взрывная доставка',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> Ракетабу атакует врага верхом на ракете.\n' +
          'При попадании в цель ракета взрывается, нанося врагам в обширной области действия <span style="color: #ff5521">огненный урон,</span> и вызывает мощное накопление аномалии <span style="color: #ff5521">атрибута огня.</span></p>'
      }
    },
    slug: 'rocketboo',
    link: '/wiki/bangboos/rocketboo',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'rocketboo/bangboo-rocketboo.webp',
    rarity: 'S'
  },
  {
    id: 20,
    name: 'Прорабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Прорабу',
        link: '/wiki/bangboos/safety'
      }
    ],
    description: 'Сначала безопасность, а уж потом эн-на!',
    commonDescription:
      'Этот банбу — отличный выбор для команды, состоящей из персонажей фракции «Белобога». Наносит мощный физический урон и имеет дополнительный бафф от Горения и шока.',
    stats: {
      hp: '4210',
      atk: '8863',
      def: '666',
      critRate: '50%',
      critDmg: '100%',
      impact: '103'
    },
    skills: {
      a: {
        name: 'Бурильный спринт',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу переходит в режим пилотирования и несётся к противнику. При успешном попадании запускается многоступенчатая атака буром, которая наносит <span style="color: #f0d12b">физический урон.</span></p>'
      },
      b: {
        name: 'Запуск бура',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть 2 и более агентов из <span style="color: #D17D45">комбината «Белобог».</span>\n' +
          'Цепочки атак банбу наносят на <b style="color: #eec554">40%</b> больше урона. Данный навык дополнительно усиливается на <b style="color: #eec554">40%</b>, когда цель находится в состоянии <span style="color: #ff5521">Горения</span> или <span style="color: #2eb6ff">Шока.</span></p>'
      },
      c: {
        name: 'Сверлящее лезвие',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу берёт на себя управление и несётся к противнику. При успешном попадании запускается многоступенчатая Атака буром, которая наносит большой <span style="color: #f0d12b">физический урон.</span></p>'
      }
    },
    slug: 'safety',
    link: '/wiki/bangboos/safety',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'safety/bangboo-safety.webp',
    rarity: 'S'
  },
  {
    id: 21,
    name: 'Акулабу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Акулабу',
        link: '/wiki/bangboos/sharkboo'
      }
    ],
    description: 'Можно найти в открытом океане и на рыбном рынке.',
    commonDescription:
      'Банбу очень хорош, однако для полного раскрытия потенциала в команде должно быть хотя бы два агента с ледяными атаками.',
    stats: {
      hp: '4210',
      atk: '8057',
      def: '724',
      critRate: '50%',
      critDmg: '100%',
      impact: '99'
    },
    skills: {
      a: {
        name: 'Сухопутная акула',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> на поле боя устанавливается ловушка. При активации она вгрызается в противника и атакует его торпедой, нанося <span style="color: #98eff0">ледяной урон</span> и накапливая аномалию <span style="color: #98eff0">ледяного атрибута.</span></p>'
      },
      b: {
        name: 'Холодное течение',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть хотя бы 2 агента с <span style="color: #98eff0">ледяными атаками.</span>\n' +
          'Повышает накопление аномалии атрибута во время цепочки атак банбу на <b style="color: #eec554">200%.</b></p>'
      },
      c: {
        name: 'Погоня без устали',
        description:
          '<p class="bangboo-description-text"><b>Цепочка атак:</b> банбу ставит ловушку и прыгает к цели, производя взрыв при приземлении. Наносится  <span style="color: #98eff0">ледяной урон</span>, и значительно увеличивается накопленное значение аномалии <span style="color: #98eff0">атрибута льда.</span></p>'
      }
    },
    slug: 'sharkboo',
    link: '/wiki/bangboos/sharkboo',
    icons: {
      rarity: 'rarity-s.webp'
    },
    image: 'sharkboo/bangboo-sharkboo.webp',
    rarity: 'S'
  },
  {
    id: 22,
    name: 'Сумобу',
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
        name: 'Банбу',
        link: '/wiki/bangboos'
      },
      {
        name: 'Сумобу',
        link: '/wiki/bangboos/sumoboo'
      }
    ],
    description: 'Силач, держись!',
    commonDescription:
      'Ситуативный бамбу с физическим уроном и способностью к прерыванию, который хорошо дополнит отряды с Колядой, Ликаоном и Энби.',
    stats: {
      hp: '3828',
      atk: '5826',
      def: '781',
      critRate: '50%',
      critDmg: '100%',
      impact: '112'
    },
    skills: {
      a: {
        name: 'Победная техника: Обвал',
        description:
          '<p class="bangboo-description-text"><b>Активный навык:</b> банбу прыгает к врагу и выполняет удар сверху вниз, нанося <span style="color: #f0d12b">физический урон</span> по площади.\n' +
          'Этот навык обладает хорошей способностью к прерыванию.</p>'
      },
      b: {
        name: 'Все преграды нипочём',
        description:
          '<p class="bangboo-description-text"><b>Дополнительная способность:</b> активируется, если в отряде есть агент со специальностью <b style="color: #eec554">«Устрашение».</b>\n' +
          'Когда оглушение цели превышает <b style="color: #eec554">50%</b>, оглушение, наносимое активным навыком, увеличивается на <b style="color: #eec554">36%.</b></p>'
      },
      c: null
    },
    slug: 'sumoboo',
    link: '/wiki/bangboos/sumoboo',
    icons: {
      rarity: 'rarity-a.webp'
    },
    image: 'sumoboo/bangboo-sumoboo.webp',
    rarity: 'A'
  }
]

export const useBangboosStore = defineStore('BangboosStore', {
  state: () => ({
    bangboosList: defaultBangboosList,
    filteredBangboosList: defaultBangboosList,
    bangboosPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Банбу',
        link: '/wiki/bangboos'
      }
    ],
    filterParams: {
      rarity: ''
    },
    bangbooReadMoreArray: []
  }),

  actions: {
    resetFilters() {
      this.filteredBangboosList = defaultBangboosList
      this.filterParams = {
        rarity: ''
      }
    },
    setRarityFilterParam(rarity: any) {
      this.filterParams.rarity = rarity.name
    },
    filterBangboosList() {
      this.filteredBangboosList = this.bangboosList.filter((bangboo: any) => {
        const { rarity } = this.filterParams

        return rarity === bangboo.rarity
      })
    },
    getBangbooBySlug(slug: string) {
      return this.bangboosList.find((bangboo: any) => bangboo.slug === slug)
    },
    updateBangbooReadMoreArray() {
      const result: any[] = []
      const route = useRoute()

      for (let i = 0; result.length !== 4; i++) {
        let randomChoice = this.bangboosList[Math.floor(Math.random() * this.bangboosList.length)]

        if (result.some(item => item.id === randomChoice.id) || randomChoice.slug === route.params.bangbooSlug) {
          continue
        } else {
          result.push(randomChoice)
        }
      }
      this.bangbooReadMoreArray = result
    }
  },

  getters: {
    getBangbooReadMoreArray: state => state.bangbooReadMoreArray
  }
})

export const useDiskDrivesStore = defineStore('DiskDrivesStore', {
  state: () => ({
    diskDrivesList: [
      {
        id: 1,
        name: 'Хаос-Метал',
        description:
          'Драйв-диск, записанный с использованием особой эфирной технологии, позволяет повысить эфирный атрибут.',
        slug: 'chaos-metal',
        link: '/wiki/disk-drives/chaos-metal',
        image: 'chaos-metal.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> <span style="color: #fe437e">Эфирный урон</span> <b style="color: #eec554">+10%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Крит. урон агента с этим предметом увеличивается на <b style="color: #eec554">20%</b>. Если любой член отряда применяет эффект <span style="color: #fe437e">Заражение</span>, этот эффект дополнительно увеличивается на <b style="color: #eec554">5.5%</b> (максимум до <b style="color: #eec554">6 р.</b>). Длится <b style="color: #eec554">8 сек</b>, повторные запуски обнуляют время действия.</p>'
      },
      {
        id: 2,
        name: 'Свирепый хэви-метал',
        description:
          'Драйв-диск, записанный с использованием особой эфирной технологии, позволяет повысить физический атрибут.',
        slug: 'fanged-metal',
        link: '/wiki/disk-drives/fanged-metal',
        image: 'fanged-metal.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> <span style="color: #f0d12b">Физический урон</span> <b style="color: #eec554">+10%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Когда член отряда выполняет <span style="color: #f0d12b">Натиск</span> на врага, агент с этим предметом наносит на <b style="color: #eec554">35%</b> больше урона в течение <b style="color: #eec554">12 сек.</b></p>'
      },
      {
        id: 3,
        name: 'Фридом-блюз',
        description:
          'Эта серия драйв-дисков пользуется постоянным спросом и заслужила уважение исследователей и рейдеров каверн.',
        slug: 'freedom-blues',
        link: '/wiki/disk-drives/freedom-blues',
        image: 'freedom-blues.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Знание аномалий <b style="color: #eec554">+30</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> При попадании по врагу усиленной особой атакой, сопротивление врага накоплению аномалии атрибута агента с этим предметом понижается на <b style="color: #eec554">20%</b> на <b style="color: #eec554">8 сек.</b> Эффекты для одного атрибута не складываются.</p>'
      },
      {
        id: 4,
        name: 'Гормон-панк',
        description:
          'Ассоциация исследователей каверн рекомендует применять этот драйв-диск с осторожностью. Согласно неполной статистике, исследователи, использующие этот диск, чаще ищут сражений.',
        slug: 'hormone-punk',
        link: '/wiki/disk-drives/hormone-punk',
        image: 'hormone-punk.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Сила атаки <b style="color: #eec554">+30</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Когда агент с этим предметом входит в состояние боевой готовности или выходит на замену, его сила атаки повышается на <b style="color: #eec554">25%</b> на <b style="color: #eec554">10 сек</b>. Срабатывает раз в <b style="color: #eec554">20 сек.</b></p>'
      },
      {
        id: 5,
        name: 'Инферно-метал',
        description:
          'Драй-диск, записанный с использованием особой эфирной технологии, позволяет повысить огненный атрибут.',
        slug: 'inferno-metal',
        link: '/wiki/disk-drives/inferno-metal',
        image: 'inferno-metal.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> <span style="color: #ff5521">Огненный урон</span> <b style="color: #eec554">+10%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> При попадании по <span style="color: #ff5521">горящему</span> врагу шанс крит. попадания агента с этим предметом повышается на <b style="color: #eec554">28%</b> на <b style="color: #eec554">8 сек.</b></p>'
      },
      {
        id: 6,
        name: 'Полярный хэви-метал',
        description:
          'Драйв-диск, записанный с использованием особой эфирной технологии, позволяет повысить ледяной атрибут.',
        slug: 'polar-metal',
        link: '/wiki/disk-drives/polar-metal',
        image: 'polar-metal.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> <span style="color: #98eff0">Ледяной урон</span> <b style="color: #eec554">+10%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Базовые атаки и атаки в рывке наносят на <b style="color: #eec554">20%</b> больше урона. Когда любой член отряда накладывает на противника <span style="color: #98eff0">Заморозку</span> или запускает <span style="color: #98eff0">Раскалывание</span>, эффект усиливается на <b style="color: #eec554">20%</b> на <b style="color: #eec554">12 сек.</b></p>'
      },
      {
        id: 7,
        name: 'Фугу-электро',
        description:
          'Эта надежная серия драйв-дисков популярна среди исследователей каверн благодаря стабильности, который он дает. Не стоит недооценивать его эффективность – как-никак рыба фугу ядоваита.',
        slug: 'puffer-electro',
        link: '/wiki/disk-drives/puffer-electro',
        image: 'puffer-electro.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Процент пробивания <b style="color: #eec554">+8%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Суперспособность наносит на <b style="color: #eec554">20%</b> больше урона. При запуске суперспособности сила атаки агента с этим предметом повышается на <b style="color: #eec554">15%</b> на <b style="color: #eec554">12 сек.</b></p>'
      },
      {
        id: 8,
        name: 'Шокстар-диско',
        description:
          'Драйв-диск, созданный для алгоритмической оптимизации совместимости с амплификатором и улучшения вспомогательной производительности.',
        slug: 'shockstar-disco',
        link: '/wiki/disk-drives/shockstar-disco',
        image: 'shockstar-disco.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Импульс <b style="color: #eec554">+6%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Базовые атаки, атаки в рывке и контратаки после уклонения наносят главной цели атаки на <b style="color: #eec554">20%</b> больше оглушения.</p>'
      },
      {
        id: 9,
        name: 'Соул-рок',
        description:
          'Это – загадочный драйв-диск Его автор неизвестен, мастер-копия не найдена. У рейдеров каверн можно встретить множество разных версий записи, однако происхождение оригинала покрыто тайной.',
        slug: 'soul-rock',
        link: '/wiki/disk-drives/soul-rock',
        image: 'soul-rock.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Защита <b style="color: #eec554">+16%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Получив урон от атаки врага, агент с этим предметом получает на <b style="color: #eec554">40%</b> меньше урона в течение <b style="color: #eec554">2.5 сек.</b> Срабатывает один раз в <b style="color: #eec554">15 сек.</b></p>'
      },
      {
        id: 10,
        name: 'Свинг-джаз',
        description:
          'Этот драйв-диск популярен среди исследователей-универсалов, ориентирован на совместимость и поддержку сотрудничества.',
        slug: 'swing-jazz',
        link: '/wiki/disk-drives/swing-jazz',
        image: 'swing-jazz.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Восстановление энергии <b style="color: #eec554">+20%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> После активации цепочки атак или суперспособности все члены отряда наносят на <b style="color: #eec554">15%</b> больше урона в течение <b style="color: #eec554">12 сек.</b> Одинаковые пассивные эффекты не складываются.</p>'
      },
      {
        id: 11,
        name: 'Грозовой хэви-метал',
        description:
          'Драйв-диск, записанный с использованием особой эфирной технологии, позволяет повысить электрический атрибут.',
        slug: 'thunder-metal',
        link: '/wiki/disk-drives/thunder-metal',
        image: 'thunder-metal.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> <span style="color: #2eb6ff">Электрический урон</span> <b style="color: #eec554">+10%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Если на поле боя есть враг в состоянии <span style="color: #2eb6ff">Шока</span>, сила атаки агента с этим предметом повышается на <b style="color: #eec554">28%.</b></p>'
      },
      {
        id: 12,
        name: 'Дятлокор-электро',
        description:
          'Этот драйв-диск настолько популярен, что стал своего рода мемом. Даже рядовые граждане, предпочитающие держаться подальше от каверн, пойдут на что угодно, лишь бы заполучить его. Записанные на нем мелодии буквально завораживают.',
        slug: 'woodpecker-electro',
        link: '/wiki/disk-drives/woodpecker-electro',
        image: 'woodpecker-electro.webp',
        features:
          '<p class="disk-drive-description-text"><b>2 предмета:</b> Шанс крит. попадания поднимается на <b style="color: #eec554">8%</b></p>' +
          '<p class="disk-drive-description-text"><b>4 предмета:</b> Каждый раз, когда базовая атака, контратака после уклонения или усиленная особая атака наносят критический урон, агент с этим предметом получает <b style="color: #eec554">1</b> уровень усиления. За каждый уровень усиления атаки агента с этим предметом повышается на <b style="color: #eec554">9%</b> на <b style="color: #eec554">6 сек.</b> Продолжительность усиления для разных навыков отличается.</p>'
      }
    ],
    diskDrivesPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Драйв диски',
        link: '/wiki/disk-drives'
      }
    ]
  })
})

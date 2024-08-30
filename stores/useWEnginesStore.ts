import { defineStore } from 'pinia'

const defaultWEnginesList = [
  {
    id: 1,
    name: 'Гость из глубин',
    description:
      '<p class="wengine-description-text">Этот мощный амплификатор способен менять температуру окружающей среды, что позволяет ему мгновенно замораживать близлежащие объекты. Хотя это отличный тактический амплификатор, способный создавать лед и наносить высокий урон, <nuxt-link class="wengine-agent-link" to="/wiki/characters/ellen">Эллен</nuxt-link></p> использует его в основном для приготовления холодных десертов.',
    slug: 'deep-sea-visitor',
    link: '/wiki/wengines/deep-sea-visitor',
    image: 'deep-sea-visitor.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '48',
        lastLvl: '714'
      },
      mainStat: {
        name: 'Шанс крит.попадания',
        firstLvl: '9.6%',
        lastLvl: '24%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает <span style="color: #98eff0">ледяной урон</span> на <b style="color: #eec554">25/31.5/38/44.5/50%.</b> При попадании по врагу базовой атакой шанс крит. попадания агента с этим предметом увеличивается на <b style="color: #eec554">10/12.5/15/17.5/20%</b> в течение <b style="color: #eec554">8 сек.</b> При нанесении <span style="color: #98eff0">ледяного урона</span> атакой в рывке шанс крит. попадания агента с этим предметом дополнительно увеличивается на <b style="color: #eec554">10/12.5/15/17.5/20%</b> в течение <b style="color: #eec554">15 сек.</b> Время действия каждого эффекта рассчитывается отдельно.</p>',
    rarity: 'S',
    specialty: 'attack'
  },
  {
    id: 2,
    name: 'Чайник нефритовой чистоты',
    description:
      '<p class="wengine-description-text">Этот амплификатор типа Устрашение был изготовлен по особому заказу для некоего автоматона. Конструкция отражает стиль и характеристики заказчицы. Хранящаяся в амплификаторе энергия может быть преобразована и направлена наружу мощным импульсом. Внешне амплификатор стилизован под шедевры старой цивилизации: чтобы получить плавные и изящные формы, нефрит оплавляли; чтобы получить резкие и угловатые – обтесывали. Этот жаропрочный сосуд выполнен в форме феникса, а трещины, подобные тем, что образуются на льду, свидетельствуют, что его оплавляли в печи… но на самом деле это просто нанесенный вручную рисунок.</p>' +
      '<p class="wengine-description-text">“Эта штука отлично сохраняет тепло, так что я могу использовать ее как термос, чтобы в каверне всегда пить горячую воду”, – искренний и взвешенный отзыв <nuxt-link class="wengine-agent-link" to="/wiki/characters/qingyi">Цинъи</nuxt-link></p>',
    slug: 'ice-jade-teapot',
    link: '/wiki/wengines/ice-jade-teapot',
    image: 'ice-jade-teapot.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '48',
        lastLvl: '714'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '7.2%',
        lastLvl: '18%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда базовая атака попадает по врагу, даётся <b style="color: #eec554">1 ур.</b> «Силы чая». Каждый уровень «Силы чая» увеличивает импульс агента с этим предметом на <b style="color: #eec554">0.7/0.88/1.05/1.22/1.4%</b> Эффект складывается до <b style="color: #eec554">30 ур.</b>, длится <b style="color: #eec554">8 сек.</b>, длительность каждого уровня считается отдельно.При получении эффекта «Сила чая», если у агента с этим предметом накоплено <b style="color: #eec554">15 ур.</b> «Силы чая» или больше, наносимый всеми членами отряда урон увеличивается на <b style="color: #eec554">20/23/26/29/32%</b> Эффект длится <b style="color: #eec554">10 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'S',
    specialty: 'stun'
  },
  {
    id: 3,
    name: 'Встроенный компилятор',
    description:
      '<p class="wengine-description-text">Новейшая модель амплификатора, оснащённая высокопроизводительным вычислительным ядром, способна в кратчайшие сроки написать операционный код для функционирования механизмов, собрать боевые данные и оказать отряду поддержку в бою. Разумеется, для <nuxt-link class="wengine-agent-link" to="/wiki/characters/grace">Грейс</nuxt-link> это устройство — всего лишь игрушка, которой она развлекает своих «малышей».</p>',
    slug: 'fusion-compiler',
    link: '/wiki/wengines/fusion-compiler',
    image: 'fusion-compiler.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Шанс пробивания',
        firstLvl: '9.6%',
        lastLvl: '24%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Сила атаки увеличивается на <b style="color: #eec554">12/15/18/21/24%.</b> При запуске особой атаки или усиленной особой атаки знание аномалии агента с этим предметом увеличивается на <b style="color: #eec554">25/31/37/43/50 ед.</b> Эффект складывается до <b style="color: #eec554">3 раз,</b> длится <b style="color: #eec554">8 сек.</b> Время действия каждого уровня рассчитывается отдельно.</p>',
    rarity: 'S',
    specialty: 'anomaly'
  },
  {
    id: 4,
    name: 'Шестерни адского пламени',
    description:
      '<p class="wengine-description-text">Этот амплификатор славится своей невероятной мощностью. После модификации <nuxt-link class="wengine-agent-link" to="/wiki/characters/koleda">Коляды</nuxt-link> уровень его энергии почти превышает безопасный предел. Хотя этот амплификатор спроектирован исключительно для нанесения урона, и даже функции ускорения и поджигания в его конструкции пришлось объединить — именно этого <nuxt-link class="wengine-agent-link" to="/wiki/characters/koleda">Коляда</nuxt-link> и добивалась.</p>',
    slug: 'hellfire-gears',
    link: '/wiki/wengines/hellfire-gears',
    image: 'hellfire-gears.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '7.2%',
        lastLvl: '18%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Агент с этим предметом восстанавливает энергию вне поля боя на <b style="color: #eec554">0.6/0.75/0.9/1.05/1.2</b> ед/сек быстрее. При запуске усиленной особой атаки импульс агента с этим предметом увеличивается на <b style="color: #eec554">10/12.5/15/17.5/20%.</b> Эффект складывается до <b style="color: #eec554">2 раз,</b> длится <b style="color: #eec554">10 сек.</b> Время действия каждого уровня рассчитывается отдельно.</p>',
    rarity: 'S',
    specialty: 'stun'
  },
  {
    id: 5,
    name: 'Усмиритель беспорядков VI',
    description:
      '<p class="wengine-description-text">Новейший тактический амплификатор, используемый для вооружения элитных отрядов Службы общественной безопасности. Его мощной эфирной энергии достаточно, чтобы оперативно обеспечить взрывную силу для всех боевых устройств. Зачастую амплификаторы членов элитных отрядов усеяны царапинами, полученными в ходе схваток. Однако <nuxt-link class="wengine-agent-link" to="/wiki/characters/zhuyuan">Чжу Юань</nuxt-link> очень бережно относится к своему амплификатору, поэтому он выглядит совсем как новый.</p>',
    slug: 'riot-suppressor-mark',
    link: '/wiki/wengines/riot-suppressor-mark',
    image: 'riot-suppressor-mark.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '48',
        lastLvl: '714'
      },
      mainStat: {
        name: 'Крит. урон',
        firstLvl: '19.2%',
        lastLvl: '48%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает шанс крит. попадания на <b style="color: #eec554">15/18.8/22.6/26.4/30%.</b> Активация усиленной особой атаки даёт агенту с этим предметом <b style="color: #eec554">8 зарядов (это максимум).</b> Когда агент с этим предметом наносит <span style="color: #fe437e">эфирный урон</span> своей базовой атакой, это потребляет <b style="color: #eec554">1 заряд</b> и повышает урон на <b style="color: #eec554">35/43.5/52/60.5/70%.</b></p>',
    rarity: 'S',
    specialty: 'attack'
  },
  {
    id: 6,
    name: 'Стальная лапа',
    description:
      '<p class="wengine-description-text">Суперамплификатор, оснащённый функцией отслеживания движений. Он идеально соответствует быстрым рефлексам и скорости тиренов-кошек. <nuxt-link class="wengine-agent-link" to="/wiki/characters/nekomata">Нэкомата</nuxt-link> добавила к корпусу складной нож. Она утверждает, что такая конструкция помогает ей в бою. Правда, на ноже до сих пор остался рыбный запах после разделки скумбрии.</p>',
    slug: 'steel-cushion',
    link: '/wiki/wengines/steel-cushion',
    image: 'steel-cushion.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Шанс крит.попадания',
        firstLvl: '9.6%',
        lastLvl: '24%'
      }
    },
    skill:
      '<p class="wengine-skill-text"><span style="color: #f0d12b">Физический урон</span> повышается на <b style="color: #eec554">20/25/30/35/40%.</b> Наносимый агентом с этим предметом урон дополнительно повышается на <b style="color: #eec554">25/31.5/38/44/50%</b> при атаке врага сзади.</p>',
    rarity: 'S',
    specialty: 'attack'
  },
  {
    id: 7,
    name: 'Сера',
    description:
      '<p class="wengine-description-text">Этот амплификатор — жестокое оружие Обсидиановой дивизии, закалённое огнём и работающее на запрещённом топливе, которое было переработано с применением эфирных технологий. Способен зачистить поле боя, нагрев его до предельных температур. По слухам, создатель этого устройства обсуждал возможные технические решения за ужином с  <nuxt-link class="wengine-agent-link" to="/wiki/characters/soldier11">Солдатом 11</nuxt-link>. Спустя час трапезы обжигающий вкус острейшей лапши вдохновил создателя на разработку амплификатора, который мог бы заставить врагов ощутить на себе самые жгучие страдания.</p>',
    slug: 'the-brimstone',
    link: '/wiki/wengines/the-brimstone',
    image: 'the-brimstone.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '12%',
        lastLvl: '30%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Если базовая атака, атака в рывке или контратака после уклонения попадает по врагу, сила атаки агента с этим предметом повышается на <b style="color: #eec554">3.5/4.4/5.2/6/7%</b> на <b style="color: #eec554">8 сек.</b> Складывается до <b style="color: #eec554">8 раз,</b> срабатывает один раз в <b style="color: #eec554">0.5 сек.</b> Длительность каждого уровня эффекта считается отдельно.</p>',
    rarity: 'S',
    specialty: 'attack'
  },
  {
    id: 8,
    name: 'Сдержанность',
    description:
      '<p class="wengine-description-text">Этот особый амплификатор способен вызывать экстремально низкую температуру. Отверстие радиатора было обрамлено жутким узором в виде клыков животных, и с него часто капал конденсат. После улучшений, проведённых <nuxt-link class="wengine-agent-link" to="/wiki/characters/lycaon">Ликаоном</nuxt-link>, грубый облик амплификатора сменился на более стильный, а отверстие теперь используется для хранения конвертов и других ценных вещей.</p>',
    slug: 'the-restrained',
    link: '/wiki/wengines/the-restrained',
    image: 'the-restrained.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '7.2%',
        lastLvl: '18%'
      }
    },
    skill:
      '<p class="wengine-skill-text">При попадании по врагу наносимые базовой атакой урон и оглушение увеличиваются на <b style="color: #eec554">6/7.5/9/10.5/12%.</b> Эффект складывается до <b style="color: #eec554">5 раз,</b> длится <b style="color: #eec554">8 сек.</b> Запускается не более одного раза за один приём. Длительность каждого уровня эффекта рассчитывается отдельно.</p>',
    rarity: 'S',
    specialty: 'stun'
  },
  {
    id: 9,
    name: 'Колыбель плача',
    description:
      '<p class="wengine-description-text">Многоуровневый амплификатор, на одном из уровней которого установлено эфирное зарядное устройство, подходящее для быстрой зарядки особых моделей банбу и уникального боевого оборудования. Хоть этот амплификатор и напоминает суровую камеру заключения, банбу <nuxt-link class="wengine-agent-link" to="/wiki/characters/rina">Рины</nuxt-link> ,кажется, очень нравится пробираться внутрь, чтобы подзарядиться. Так что время, проведённое «взаперти», банбу воспринимают как награду.</p>',
    slug: 'weeping-cradle',
    link: '/wiki/wengines/weeping-cradle',
    image: 'weeping-cradle.webp',
    icons: {
      rarity: 'rarity-s.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '46',
        lastLvl: '684'
      },
      mainStat: {
        name: 'Шанс пробивания',
        firstLvl: '9.6%',
        lastLvl: '24%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Агент с этим предметом восстанавливает энергию на <b style="color: #eec554">0.6/0.75/0.9/1.05/1.2 ед/сек</b> быстрее. Когда агент с этим предметом попадает по врагу, все члены отряда наносят этой цели на <b style="color: #eec554">10/12.5/15/17.5/20%</b> больше урона в течение <b style="color: #eec554">3 сек.</b> Во время действия эффекта его значение дополнительно повышается на <b style="color: #eec554">1.7/2/2.5/3/3.3% раз</b> в <b style="color: #eec554">0,5 сек.</b> Максимальное дополнительное повышение составляет  <b style="color: #eec554">10.2/12/15/18/19.8%.</b> Повторный запуск эффекта обновляет продолжительность самого эффекта, но не возрастания его урона. Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'S',
    specialty: 'support'
  },
  {
    id: 10,
    name: 'Застенчивый монстр',
    description:
      '<p class="wengine-description-text">Этот мастерски выполненный амплификатор был разработан специально для членов Секции 6, а затем модифицирован с помощью технологий, перенятых у одного клана мастеров боевых искусств. Это устройство способно сформировать энергетическое поле из эфирных частиц. Устрашающий вид этого амплификатора заставляет дрожать детей и взрослых, а если вы вдруг поймаете на себе его разъярённый взгляд, он обнажит свои клыки, а затем... Что смешного? Эта маленькая штуковина действительно может больно ударить!</p>' +
      '<p class="wengine-description-text"><b>«Мне бы коробочку для еды, а не крутую маску... Спрошу Янаги, можно ли положить внутрь печенье!» — <nuxt-link class="wengine-agent-link" to="/wiki/characters/soukaku">Сокаку</nuxt-link> на бегу к офису Секции 6.</b></p>',
    slug: 'bashful-demon',
    link: '/wiki/wengines/bashful-demon',
    image: 'bashful-demon.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает <span style="color: #98eff0">ледяной урон</span> на <b style="color: #eec554">15/17.5/20/22/24%.</b> При запуске усиленной особой атаки сила атаки всех членов отряда увеличивается на <b style="color: #eec554">2/2.3/2.6/2.9/3.2%.</b> Эффект складывается до <b style="color: #eec554">4 раз</b> и длится <b style="color: #eec554">12 сек.</b> Повторные запуски обнуляют время действия. Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'support'
  },
  {
    id: 11,
    name: 'Большой цилиндр',
    description:
      '<p class="wengine-description-text">Внутри этого мощного оборонительного амплификатора установлены рокочущие двигатели на густом топливе, которые могут обеспечить достаточно движущей силы для тяжёлой техники. Хотя устройство настолько тяжёлое, что обычные люди не могут его даже поднять, <nuxt-link class="wengine-agent-link" to="/wiki/characters/ben">Бену</nuxt-link> оно как раз подходит в качестве противовеса для его бетонного блока.</p>',
    slug: 'big-cylinder',
    link: '/wiki/wengines/big-cylinder',
    image: 'big-cylinder.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Защита',
        firstLvl: '16%',
        lastLvl: '40%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Получаемый урон снижается на <b style="color: #eec554">7.5/8.5/9.5/10.5/12%.</b> Когда агент атакован, его следующая попавшая по врагу атака наносит критический урон, а также дополнительно урон в размере <b style="color: #eec554">600/690/780/870/960%</b> от собственной защиты. Срабатывает не чаще чем раз в <b style="color: #eec554">7.5 сек.</b></p>',
    rarity: 'A',
    specialty: 'defense'
  },
  {
    id: 12,
    name: 'Заячья корзинка',
    description:
      '<p class="wengine-description-text">Оригинальный амплификатор, украшенный пушистым зайцем. Хоть заяц и ненастоящий, даже самый суровый рейдер каверн будет рад сбросить напряжение после очередного задания и настроиться на новое сражение, погладив эту мягкую шёрстку. Для этой серии амплификаторов было создано множество моделей: портативный зайчик, складной зайчик, лысый зайчик... Хотя бы одна из этих моделей точно покорит ваше сердце!</p>',
    slug: 'bunny-band',
    link: '/wiki/wengines/bunny-band',
    image: 'bunny-band.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Защита',
        firstLvl: '16%',
        lastLvl: '40%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает максимум HP на <b style="color: #eec554">8/9.2/10.4/11.6/12.8%.</b> Когда агент с этим предметом защищён щитом, сила атаки этого агента повышается на <b style="color: #eec554">10/11.5/13/14.5/16%.</b></p>',
    rarity: 'A',
    specialty: 'defense'
  },
  {
    id: 13,
    name: 'Артиллерийский ротор',
    description:
      '<p class="wengine-description-text">Этот высокопроизводительный вычислительный амплификатор способен в режиме реального времени собирать боевые данные и оказывать тактическую поддержку своему пользователю. Кроме того, устройство оснащено мини-пушками, а в критические моменты его можно использовать как автоматическую боевую единицу. В таких ситуациях пользователь ему только мешается.</p>',
    slug: 'cannon-rotor',
    link: '/wiki/wengines/cannon-rotor',
    image: 'cannon-rotor.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Шанс крит.попадания',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Сила атаки увеличивается на <b style="color: #eec554">7.5/8.6/9.7/10.8/12%.</b> При нанесении врагу критического удара дополнительно наносится урон в размере <b style="color: #eec554">200%</b> силы атаки. Срабатывает не чаще чем раз в <b style="color: #eec554">8/7.5/7/6.5/6 сек.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 14,
    name: 'Аккумулятор Демары II',
    description:
      '<p class="wengine-description-text">Особая модель амплификатора с упором на эффективность накопления энергии: функция работы аккумулятора оптимизирована, что может значительно повысить мощность электрического оружия. Настоящий шедевр из магазина игрушек. Вскоре после приобретения <nuxt-link class="wengine-agent-link" to="/wiki/characters/anby">Энби</nuxt-link> внесла в него некоторые корректировки, связанные с её привычками. Наверняка это безопасно, она ведь каждый раз была предельно осторожна.</p>',
    slug: 'demara-battery-mark',
    link: '/wiki/wengines/demara-battery-mark',
    image: 'demara-battery-mark.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '6%',
        lastLvl: '15%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает <span style="color: #2eb6ff">электрический урон</span> на <b style="color: #eec554">15/17.5/20/22/24%.</b> Если агент с этим предметом наносит врагу урон контратакой после уклонения или помощью в атаке, его генерация энергии повышается на <b style="color: #eec554">18/20.5/23/25/27.5%</b> в течение <b style="color: #eec554">8 сек.</b></p>',
    rarity: 'A',
    specialty: 'stun'
  },
  {
    id: 15,
    name: 'Бур — красная ось',
    description:
      '<p class="wengine-description-text">Изначально это был самый обычный амплификатор, но <nuxt-link class="wengine-agent-link" to="/wiki/characters/anton">Антон</nuxt-link> модифицировал его, используя самые дорогие детали для бура. Эти модификации позволяют двигателю временно превышать предельную мощность и потому лучше служить «братюне» <nuxt-link class="wengine-agent-link" to="/wiki/characters/anton">Антона</nuxt-link>. <nuxt-link class="wengine-agent-link" to="/wiki/characters/anton">Антон</nuxt-link> не жалеет средств на всё, что связано с его «братюней».</p>',
    slug: 'drill-rig-red-axis',
    link: '/wiki/wengines/drill-rig-red-axis',
    image: 'drill-rig-red-axis.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '20%',
        lastLvl: '50%'
      }
    },
    skill:
      '<p class="wengine-skill-text">При запуске усиленной особой атаки или цепочки атак базовые атаки и атаки в рывке наносят на <b style="color: #eec554">50/57.5/65/72.5/80%</b> больше <span style="color: #2eb6ff">электрического урона</span> в течение <b style="color: #eec554">10 сек.</b> Срабатывает не чаще чем раз в <b style="color: #eec554">15 сек.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 16,
    name: 'Электроблеск для губ',
    description:
      '<p class="wengine-description-text">Этот боевой амплификатор может похвастаться встроенным трансформатором тока, а его выпускающая разряд часть выполнена в виде накрашенных губ. Он автоматически притягивает чувствительные к электричеству объекты, находящиеся вокруг пользователя, и наносит им дополнительный урон. Это не сила любви, а сила Лоренца электрического поля с напряжением в 1000 вольт.</p>',
    slug: 'electro-lip-gloss',
    link: '/wiki/wengines/electro-lip-gloss',
    image: 'electro-lip-gloss.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Знание аномалии',
        firstLvl: '30',
        lastLvl: '75'
      }
    },
    skill:
      '<p class="wengine-skill-text">Если на поле боя есть враги с аномалией атрибута, сила атаки агента с этим предметом повышается на <b style="color: #eec554">10/11.5/13/14.5/16%,</b> а урон агента цели — на <b style="color: #eec554">15/17.5/20/22.5/25%.</b></p>',
    rarity: 'A',
    specialty: 'anomaly'
  },
  {
    id: 17,
    name: 'Златоцвет',
    description:
      '<p class="wengine-description-text">Искусно выполненный амплификатор, чья красота подобна роскошным благоухающим цветам. Однако опытный вор, которому после долгих усилий в конце концов удастся снять хитроумное эфирное противоугонное устройство, обнаружит к своему ужасу, что весь блеск — лишь позолота.</p>',
    slug: 'iris-enigma',
    link: '/wiki/wengines/iris-enigma',
    image: 'iris-enigma.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Атака увеличивается на <b style="color: #eec554">6%/6,9%/7,8%/8,7%/9,6%</b>, а урон <b style="color: #eec554">наносимый особой атакой,</b> увеличивается на <b style="color: #eec554">15%/17,2%/19,5%/21,8%/24%.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 18,
    name: 'Домработница',
    description:
      '<p class="wengine-description-text">Усовершенствованный амплификатор с высокой скоростью вращения. <nuxt-link class="wengine-agent-link" to="/wiki/characters/corin">Корин</nuxt-link> соединила его вал с циркулярной пилой, чтобы обеспечить дополнительную режущую способность своему приспособлению для «уборки». Чтобы «уборка» прошла гладко, а боль, причиняемая цели, была минимальной, <nuxt-link class="wengine-agent-link" to="/wiki/characters/corin">Корин</nuxt-link> предусмотрительно увеличила скорость вращения до максимума.</p>',
    slug: 'housekeeper',
    link: '/wiki/wengines/housekeeper',
    image: 'housekeeper.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Агент с этим предметом ускоряет восстановление вне боя на <b style="color: #eec554">0.45/0.52/0.58/0.65/0.72 ед. энергии/сек.</b> Когда усиленная особая атака попадает по врагу, <span style="color: #f0d12b">физический урон</span> агента с этим предметом увеличивается на <b style="color: #eec554">3/3.5/4/4.4/4.8%.</b> Складывается до <b style="color: #eec554">15 раз,</b> длится <b style="color: #eec554">1 сек.</b> Повторные запуски обнуляют время действия.</p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 19,
    name: 'Бум-пушка',
    description:
      '<p class="wengine-description-text">Амплификатор поддержки, сочетающий в себе продвинутый внешний вид, мобильность и ударную силу. Может перемещаться по всему полю боя, обеспечивая поддержку. Это не только надёжный амплификатор, но и лучший воображаемый противник и опасный партнёр в спарринге для Травинки, Дубинки и Кирпичика.</p>' +
      '<p class="wengine-description-text"><b>«Кто не справится, пойдёт тренироваться с Пушечкой!» — <nuxt-link class="wengine-agent-link" to="/wiki/characters/lucy">Люси</nuxt-link>, обращаясь к трём верным защитникам-поросятам на тренировке.</b></p>',
    slug: 'kaboom-the-cannon',
    link: '/wiki/wengines/kaboom-the-cannon',
    image: 'kaboom-the-cannon.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '20%',
        lastLvl: '50%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда атака союзника по отряду (агента или другого существа) попадает по врагу, сила атаки всего отряда увеличивается на <b style="color: #eec554">2.5/2.8/3.2/3.6/4%,</b> эффект суммируется до <b style="color: #eec554">4 ур.</b>, длится <b style="color: #eec554">8 сек.</b> Длительность каждого уровня эффекта рассчитывается отдельно. Каждый союзник даёт только <b style="color: #eec554">1 ур.</b> положительного эффекта. Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'support'
  },
  {
    id: 20,
    name: 'Оригинальный трансформатор',
    description:
      '<p class="wengine-description-text">Фантастический амплификатор, пользующийся популярностью среди фанатов Звёздного рыцаря. Правообладатели утверждают, что пиратские копии устройства могут превратить тебя лишь в одного из второстепенных отрицательных персонажей. Только полюбуйтесь, как злодеи взлетают в воздух от одного пинка — такова мощь лицензионной версии.</p>',
    slug: 'original-transmorpher',
    link: '/wiki/wengines/original-transmorpher',
    image: 'original-transmorpher.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'HP',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Повышает максимум HP на <b style="color: #eec554">8/9/10/11/12.5%.</b> Когда агента с этим предметом атакуют, импульс этого агента повышается на <b style="color: #eec554">10/11.5/13/14.5/16%</b> на <b style="color: #eec554">12 сек.</b></p>',
    rarity: 'A',
    specialty: 'defense'
  },
  {
    id: 21,
    name: 'Драгоценная окаменелость',
    description:
      '<p class="wengine-description-text">Особый амплификатор, поверхность которого изготовлена из композитных эфирных материалов, позволяющих поглощать входящие импульсы и направлять их против врагов. По слухам, его прототип был создан легендарным исследователем каверн. Амплификатор выглядит древним, но продолжает исправно работать. Это в буквальном смысле классика в области амплификаторов.</p>',
    slug: 'precious-fossilized-core',
    link: '/wiki/wengines/precious-fossilized-core',
    image: 'precious-fossilized-core.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '6%',
        lastLvl: '15%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Если HP врага не ниже <b style="color: #eec554">50%,</b> агент с этим предметом наносит этому врагу на <b style="color: #eec554">10/11.5/13/14.5/16%</b> больше оглушения. Если HP врага не ниже <b style="color: #eec554">75%,</b> этот бонус дополнительно повышается на <b style="color: #eec554">10/11.5/13/14.5/16%.</b></p>',
    rarity: 'A',
    specialty: 'stun'
  },
  {
    id: 22,
    name: 'Тропический гурман',
    description:
      '<p class="wengine-description-text">Амплификатор массового производства, активно продвигаемый любителями экзотических домашних питомцев. Эта модель пользовалась популярностью, пока Гурман не проглотил пальцы троих покупателей, одного продавца целиком и половину банбу. Куски эфира, формируемые в ротовом модуле аппарата, молниеносно поглощают материю, с которой взаимодействуют. Крайне не рекомендуется засовывать голову или конечности в устройство.</p>',
    slug: 'rainforest-gourmet',
    link: '/wiki/wengines/rainforest-gourmet',
    image: 'rainforest-gourmet.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Знание аномалии',
        firstLvl: '30',
        lastLvl: '75'
      }
    },
    skill:
      '<p class="wengine-skill-text">За каждые израсходованные <b style="color: #eec554">10 ед. энергии</b> агент с этим предметом получает повышение атаки на <b style="color: #eec554">2.5/2.8/3.2/3.6/4%</b> на <b style="color: #eec554">10 сек.</b>   Эффект суммируется до <b style="color: #eec554">10 раз,</b> длительность каждого уровня считается отдельно.</p>',
    rarity: 'A',
    specialty: 'anomaly'
  },
  {
    id: 23,
    name: 'Ревущая тачка',
    description:
      '<p class="wengine-description-text">Это амплификатор энергетического типа, собранный из деталей двигателя грузовика. Цилиндры были переделаны в энергомодули, что обеспечивает огромную мощность. Эта штуковина заняла первое место в соревновании «Тётуцумосин», опередив различные тяжёлые мотоциклы и даже грузовик, которым управляла сама <nuxt-link class="wengine-agent-link" to="/wiki/characters/piper">Пайпер</nuxt-link>.</p>',
    slug: 'roaring-ride',
    link: '/wiki/wengines/roaring-ride',
    image: 'roaring-ride.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда усиленная особая атака попадает по врагу, на <b style="color: #eec554">5 сек.</b> запускается один случайный эффект из трёх. Срабатывает один раз в <b style="color: #eec554">0.3 сек.</b>, одинаковые эффекты не складываются, повторные запуски обнуляют время действия. Разные эффекты могут существовать одновременно. Возможные эффекты:</p>' +
      '<p class="wengine-skill-text">- сила атаки агента с этим предметом повышается на <b style="color: #eec554">8/9.2/10.4/11.6/12.8%,</b></p>' +
      '<p class="wengine-skill-text">- знание аномалии агента с этим предметом увеличивается на <b style="color: #eec554">40/46/52/58/64 ед,</b></p>' +
      '<p class="wengine-skill-text">- эффективность накопления аномалии атрибута повышается на <b style="color: #eec554">25/28/32/36/40%.</b></p>',
    rarity: 'A',
    specialty: 'anomaly'
  },
  {
    id: 24,
    name: 'Шестизарядник',
    description:
      '<p class="wengine-description-text">Амплификатор в форме револьвера. Может быть заряжен шестью концентрированными эфирными батареями в форме патронов, стреляет мощным залпом. Говорят, что хозяин такого устройства непроизвольно научится насвистывать и напевать мелодии из старых ковбойских фильмов.</p>',
    slug: 'six-shooter',
    link: '/wiki/wengines/six-shooter',
    image: 'six-shooter.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '6%',
        lastLvl: '15%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Агент с этим предметом получает <b style="color: #eec554">1</b> уровень заряда раз в <b style="color: #eec554">3 сек.</b> Может складываться до <b style="color: #eec554">6 раз.</b> Использование усиленной особой атаки расходует все заряды. Каждый эффект заряда повышает оглушение, наносимое навыком, на <b style="color: #eec554">4/4.6/5.2/5.8/6.4%.</b></p>',
    rarity: 'A',
    specialty: 'stun'
  },
  {
    id: 25,
    name: 'Кадр на память',
    description:
      '<p class="wengine-description-text">Уникальный амплификатор со встроенным скоростным фотомодулем — отличный выбор для любителей делать снимки в кавернах. Это устройство поможет запечатлеть каждое мгновение вашей расправы над эфириалами, стоит только найти возможность освободить руку, чтобы нажать на затвор.</p>',
    slug: 'slice-of-time',
    link: '/wiki/wengines/slice-of-time',
    image: 'slice-of-time.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Шанс пробивания',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Активация контратаки после уклонения, усиленной особой атаки, помощи в атаке или цепочки атак дополнительно даёт <b style="color: #eec554">от 20 до 55</b> децибелов и восстанавливает агенту с этим предметом <b style="color: #eec554">0.7/0.8/0.9/1/1.1</b> ед. энергии. Срабатывает один раз в <b style="color: #eec554">12 сек.</b> Время отката для разных типов атак рассчитывается отдельно. Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'support'
  },
  {
    id: 26,
    name: 'Весеннее тепло',
    description:
      '<p class="wengine-description-text">Этот амплификатор оснащён терморегулирующим устройством. Получаемое от интенсивной работы устройства тепло концентрируется в «горячем источнике» на поверхности амплификатора. Это позволяет вам наслаждаться весенним теплом, попивая горячий суп из источника, пока ваши враги дрожат от холода. Однако стоит отметить, что некоторые пользователи не употребляют суп в пищу, считая это чем-то таким же странным, как пить воду из ванной, в которой моешься.</p>',
    slug: 'spring-embrace',
    link: '/wiki/wengines/spring-embrace',
    image: 'spring-embrace.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Снижает получаемый урон на <b style="color: #eec554">7.5/8.5/9.5/10.5/12%.</b> Если агент с этим предметом атакован, его генерация энергии повышается на <b style="color: #eec554">10/11.5/13/14.5/16%</b> на <b style="color: #eec554">12 сек.</b> Если агент с этим предметом уходит с поля боя, этот эффект передаётся активному персонажу и обнуляет длительность. Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'defense'
  },
  {
    id: 27,
    name: 'Звёздный двигатель',
    description:
      '<p class="wengine-description-text">Этот боевой амплификатор сделан из особых эфирных материалов. Когда пользователя атакуют, амплификатор накапливает энергию, быстро увеличивая урон. Этот амплификатор не поможет превратиться в Звёздного рыцаря, но в сложном положении может придать мужества.</p>',
    slug: 'starlight-engine',
    link: '/wiki/wengines/starlight-engine',
    image: 'starlight-engine.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">При выполнении контратаки после уклонения или быстрой помощи сила атаки агента с этим предметом увеличивается на <b style="color: #eec554">12/13.8/15.6/17.4/19.2%</b> на <b style="color: #eec554">12 сек.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 28,
    name: 'Реплика Звёздного двигателя',
    description:
      '<p class="wengine-description-text">Усовершенствованный суперамплификатор, предназначенный для помощи в прицеливании и баллистических расчетов. Когда <nuxt-link class="wengine-agent-link" to="/wiki/characters/billy">Билли</nuxt-link> доработал его, этот амплификатор стал похож на фигурку Звёздного рыцаря. Обнаружив врага, она вспыхивает и выкрикивает запрограммированную реплику. Это наверняка созовёт врагов со всей округи, но <nuxt-link class="wengine-agent-link" to="/wiki/characters/billy">Билли</nuxt-link> всё равно — главное, что выглядит круто.</p>',
    slug: 'starlight-engine-replica',
    link: '/wiki/wengines/starlight-engine-replica',
    image: 'starlight-engine-replica.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда агент с этим предметом наносит своей базовой атакой или атакой в рывке урон врагу, находящемуся от него не ближе чем в <b style="color: #eec554">6 м,</b> <span style="color: #f0d12b">физический урон</span> этого агента повышается на <b style="color: #eec554">36/41/46.5/52/57.5%</b> в течение <b style="color: #eec554">8 сек.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 29,
    name: 'Пароварка',
    description:
      '<p class="wengine-description-text">Этот амплификатор оснащён передовым преобразователем энергии, который поглощает тепло из окружающей среды и передаёт его в паровую печь, облегчая пользователю процесс готовки или нагрев предметов. Отличный выбор для исследователей каверн. Пожалуйста, соблюдайте осторожность во время его использования, чтобы не получить ожог.</p>',
    slug: 'steam-oven',
    link: '/wiki/wengines/steam-oven',
    image: 'steam-oven.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '20%',
        lastLvl: '50%'
      }
    },
    skill:
      '<p class="wengine-skill-text">За каждые израсходованные <b style="color: #eec554">10 ед.</b> энергии импульс агента с этим предметом повышается на <b style="color: #eec554">2/2.3/2.6/2.9/3.2%.</b> Эффект суммируется до <b style="color: #eec554">8 раз.</b> Эффект действует <b style="color: #eec554">8 сек.</b> после расходования энергии. Длительность каждого эффекта считается отдельно.</p>',
    rarity: 'A',
    specialty: 'stun'
  },
  {
    id: 30,
    name: 'Звезда улиц',
    description:
      '<p class="wengine-description-text">Усовершенствованный амплификатор, разработанный специально для любителей уличной музыки. Создатели пожертвовали охладительными модулями, чтобы освободить драгоценное пространство для мощного звука. Всё, чтобы ваши фанаты среди людей и эфириалов могли отчётливо услышать каждое ваше слово!</p>',
    slug: 'street-superstar',
    link: '/wiki/wengines/street-superstar',
    image: 'street-superstar.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда член отряда запускает цепочку атак, агент с этим предметом получает <b style="color: #eec554">1</b> уровень заряда. Может складываться до <b style="color: #eec554">3 раз.</b> Использование суперспособности расходует все заряды. Каждый эффект заряда повышает урон, наносимый навыком, на <b style="color: #eec554">15/17.2/19.5/21.7/24%.</b></p>',
    rarity: 'A',
    specialty: 'attack'
  },
  {
    id: 31,
    name: 'Сундук сокровищ',
    description:
      '<p class="wengine-description-text">Экономичный амплификатор, ориентированный на накопление энергии. После того как <nuxt-link class="wengine-agent-link" to="/wiki/characters/nicole">Николь</nuxt-link> изменила внутреннее пространство этого амплификатора, его можно использовать как ящик для хранения. Хотя золотые монеты, хранящиеся внутри, фальшивые, они могут отвлечь жадных рейдеров каверн. Или же пользователь может ими бросаться.</p>',
    slug: 'the-vault',
    link: '/wiki/wengines/the-vault',
    image: 'the-vault.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '42',
        lastLvl: '624'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '20%',
        lastLvl: '50%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда агент с этим предметом наносит <span style="color: #fe437e">эфирный урон</span> своей усиленной особой атакой, цепочкой атак или суперспособностью, все члены отряда наносят цели на <b style="color: #eec554">15/17.5/20/22/24%</b> больше урона. Восстановление энергии агента с этим предметом при этом повышается на <b style="color: #eec554">0.5/0.58/0.65/0.72/0.8 ед. энергии/сек.</b> в течение <b style="color: #eec554">2 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'support'
  },
  {
    id: 32,
    name: 'Мяч для игры без правил',
    description:
      '<p class="wengine-description-text">Этот амплификатор с высокопроизводительными вычислительными мощностями оснащён передовыми чипами, способен осуществлять динамический мониторинг боевой обстановки и предоставлять пользователю её тактический анализ. Также этот амплификатор может служить портативной консолью, на которой пользователю всегда доступны популярные игры. Вот только во время игры не рекомендуется включать динамики... особенно в кавернах, где появляются эфириалы.</p>',
    slug: 'unfettered-game-ball',
    link: '/wiki/wengines/unfettered-game-ball',
    image: 'unfettered-game-ball.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '20%',
        lastLvl: '50%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Если атака агента с этим предметом вызывает контратаку с атрибутом, шанс крит. попадания всех членов отряда повышается на <b style="color: #eec554">12/13.5/15.5/17.5/20%</b> на <b style="color: #eec554">12 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'A',
    specialty: 'support'
  },
  {
    id: 33,
    name: 'Плачущие близнецы',
    description:
      '<p class="wengine-description-text">Этот амплификатор сделан из выброшенных корпусов банбу. Хотя речь идёт только о переиспользовании старых ненужных деталей, любители банбу всё равно забеспокоились. После множества протестов банбузащитников производителю пришлось поместить на упаковку надпись «При производстве этого амплификатора ни одного банбу не пострадало».</p>',
    slug: 'weeping-gemini',
    link: '/wiki/wengines/weeping-gemini',
    image: 'weeping-gemini.webp',
    icons: {
      rarity: 'rarity-a.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '40',
        lastLvl: '594'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '10%',
        lastLvl: '25%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда член отряда накладывает на врага аномалию атрибута, агент с этим предметом получает <b style="color: #eec554">1</b> уровень эффекта, увеличивающего его знание аномалии на <b style="color: #eec554">30/34/38/42/48 ед.</b> Эффект складывается до <b style="color: #eec554">4 раз</b> и пропадает после выхода цели из состояния оглушения или её уничтожения. Длительность каждого эффекта считается отдельно.</p>',
    rarity: 'A',
    specialty: 'anomaly'
  },
  {
    id: 34,
    name: 'Идентичность: Постоянство',
    description:
      '<p class="wengine-description-text">Алгоритм работы этого амплификатора строго подчинён определённым параметрам, а потому это устройство способно усилить защиту, но исключительно у обладателей определённых боевых привычек. Если хозяин оружия не соответствует условиям, то пользы от амплификатора будет не больше, чем от тяжёлого металлического щита.</p>',
    slug: 'identity-base',
    link: '/wiki/wengines/identity-base',
    image: 'identity-base.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Защита',
        firstLvl: '12.8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">При входящей атаке защита агента с этим предметом увеличивается на <b style="color: #eec554">20/23/26/29/32%</b> на <b style="color: #eec554">8 сек.</b></p>',
    rarity: 'B',
    specialty: 'defense'
  },
  {
    id: 35,
    name: 'Идентичность: Изменчивость',
    description:
      '<p class="wengine-description-text">Амплификатор со специальной возможностью преобразования энергии. Он способен анализировать обстановку во время боя и генерировать уникальный звук для отвлечения атакующего противника. Однако при противостоянии врагу с твёрдой силой воли необходимо выбрать подходящий момент для атаки. К счастью, у большинства эфириалов из-за помутнённого рассудка силы воли нет и в помине.</p>',
    slug: 'identity-inflection',
    link: '/wiki/wengines/identity-inflection',
    image: 'identity-inflection.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'defense-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Защита',
        firstLvl: '12.8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда персонаж находится под атакой, наносимый врагом урон уменьшается на <b style="color: #eec554">6/7/8/9/10%</b> на <b style="color: #eec554">12 сек.</b></p>',
    rarity: 'B',
    specialty: 'defense'
  },
  {
    id: 36,
    name: 'Фаза луны: Убывающая',
    description:
      '<p class="wengine-description-text">Амплификатор с редким сочетанием звуковой и тепловой энергий наносит двойной урон по цели. Пострадавшие от этого оружия с большой вероятностью приобретут снеговую слепоту. Причины этого побочного действия на сегодняшний день не выявлены. По этой причине один несчастный исследователь каверн так и не смог добиться компенсации ущерба от своей страховой компании.</p>',
    slug: 'lunar-decrescent',
    link: '/wiki/wengines/lunar-decrescent',
    image: 'lunar-decrescent.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">После активации цепочки атак или суперспособности агент с этим предметом наносит на <b style="color: #eec554">15/17.5/20/22.5/25%</b> больше урона в течение <b style="color: #eec554">6 сек.</b></p>',
    rarity: 'B',
    specialty: 'attack'
  },
  {
    id: 37,
    name: 'Фаза луны: Новолуние',
    description:
      '<p class="wengine-description-text">Этот мощный портативный амплификатор может вбирать в себя рассеянную энергию из окружающей среды, тем самым повышая боевую эффективность пользователя. Лучший выбор для начинающих исследователей, которые опасаются, что их амплификатор может разрядиться в самый неподходящий момент.</p>',
    slug: 'lunar-noviluna',
    link: '/wiki/wengines/lunar-noviluna',
    image: 'lunar-noviluna.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Шанс крит. попадания',
        firstLvl: '6.4%',
        lastLvl: '16%'
      }
    },
    skill:
      '<p class="wengine-skill-text">При усиленной особой атаке агент с этим предметом восстанавливает <b style="color: #eec554">3/3.5/4/4.5/5</b> ед. энергии. Срабатывает один раз в <b style="color: #eec554">12 сек.</b></p>',
    rarity: 'B',
    specialty: 'attack'
  },
  {
    id: 38,
    name: 'Фаза луны: Полнолуние',
    description:
      '<p class="wengine-description-text">Амплификатор, наносящий мощный урон, но пренебрегающий шумоподавлением. Наносит неприцельный урон по врагам в зоне действия. Создатель этого оружия сравнивает своё творение с ярким лунным светом, что ненароком усиливает страдания полуночников. Но ведь луна никого не старается ослепить, и неспящим остаётся лишь смириться с этим бьющим в глаза светом.</p>',
    slug: 'lunar-pleniluna',
    link: '/wiki/wengines/lunar-pleniluna',
    image: 'lunar-pleniluna.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'attack-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Базовые атаки, атаки в рывке и контратаки после уклонения наносят на <b style="color: #eec554">12/14/16/18/20%</b> больше урона.</p>',
    rarity: 'B',
    specialty: 'attack'
  },
  {
    id: 39,
    name: 'Магнитная буря: Альфа',
    description:
      '<p class="wengine-description-text">Этот особый амплификатор может вычислить слабые места цели с помощью анализа в режиме реального времени. Тяжёлый экзоскелет может причинять пользователю неудобства, но некоторые считают его эффективным средством для мышечных тренировок и похудения, так что отдают ему предпочтение в бою.</p>',
    slug: 'magnetic-storm-alpha',
    link: '/wiki/wengines/magnetic-storm-alpha',
    image: 'magnetic-storm-alpha.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Накопление аномалии атрибута повышает контроль аномалии агента с этим предметом на <b style="color: #eec554">25/28/32/36/40 ед.</b> на <b style="color: #eec554">10 сек.</b> Срабатывает один раз в <b style="color: #eec554">20 сек.</b></p>',
    rarity: 'B',
    specialty: 'anomaly'
  },
  {
    id: 40,
    name: 'Магнитная буря: Браво',
    description:
      '<p class="wengine-description-text">Этот амплификатор оснащён улучшенными модулями распознавания движений, которые могут определять состояние пользователя в режиме реального времени и повышать его боевую мощь в критические моменты боя. Когда пользователь завершает действие, амплификатор испускает ослепительную вспышку и оценивает действие пользователя.</p>',
    slug: 'magnetic-storm-bravo',
    link: '/wiki/wengines/magnetic-storm-bravo',
    image: 'magnetic-storm-bravo.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Знание аномалий',
        firstLvl: '24',
        lastLvl: '60'
      }
    },
    skill:
      '<p class="wengine-skill-text">Накопление аномалии атрибута повышает знание аномалии агента с этим предметом на <b style="color: #eec554">25/28/32/36/40 оч.</b> на <b style="color: #eec554">10 сек.</b> Срабатывает один раз в <b style="color: #eec554">20 сек.</b></p>',
    rarity: 'B',
    specialty: 'anomaly'
  },
  {
    id: 41,
    name: 'Магнитная буря: Чарли',
    description:
      '<p class="wengine-description-text">Этот мощный амплификатор со встроенным генератором постоянно накапливает электроэнергию без каких-либо вмешательств со стороны пользователя. Он исключительно полезен в бою, поскольку электрический ток этого амплификатора способен оглушать сильных врагов.</p>',
    slug: 'magnetic-storm-charlie',
    link: '/wiki/wengines/magnetic-storm-charlie',
    image: 'magnetic-storm-charlie.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'anomaly-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Шанс пробивания',
        firstLvl: '6.4%',
        lastLvl: '16%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Если какой-либо член отряда накладывает на врага аномалию атрибута, агент с этим предметом восстанавливает <b style="color: #eec554">3.5/4/4.5/5/5.5</b> ед. энергии. Срабатывает один раз в <b style="color: #eec554">12 сек.</b></p>',
    rarity: 'B',
    specialty: 'anomaly'
  },
  {
    id: 42,
    name: 'Ревербератор I',
    description:
      '<p class="wengine-description-text">Этот амплификатор оснащён встроенным звуковым генератором, который преобразует собранную энергию в инфразвуковые волны, увеличивающие боевой урон. Но чтобы активировать эту функцию, амплификатор должен быть достаточно заряжен. А для зарядки первым делом нужно потратить уже имеющуюся энергию.</p>',
    slug: 'reverb-mark-1',
    link: '/wiki/wengines/reverb-mark-1',
    image: 'reverb-mark-1.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">После запуска усиленной особой атаки импульс всех членов отряда повышается на <b style="color: #eec554">8/9/10/11/12%</b> в течение <b style="color: #eec554">10 сек.</b>  Срабатывает не чаще чем раз в <b style="color: #eec554">20 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'B',
    specialty: 'support'
  },
  {
    id: 43,
    name: 'Ревербератор II',
    description:
      '<p class="wengine-description-text">Стандартный амплификатор со сбалансированными характеристиками. Несмотря на отсутствие особых качеств, он повышает боевую эффективность своего владельца и его соратников. Этот амплификатор отлично подходит для начинающих исследователей, которые ещё не определились со стилем боя.</p>',
    slug: 'reverb-mark-2',
    link: '/wiki/wengines/reverb-mark-2',
    image: 'reverb-mark-2.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '16%',
        lastLvl: '40%'
      }
    },
    skill:
      '<p class="wengine-skill-text">После запуска усиленной особой атаки или цепочки атак контроль аномалии и знание аномалии всех членов отряда повышаются на <b style="color: #eec554">10/12/13/15/16 ед.</b> в течение <b style="color: #eec554">10 сек.</b> Срабатывает не чаще чем раз в <b style="color: #eec554">20 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'B',
    specialty: 'support'
  },
  {
    id: 44,
    name: 'Ревербератор III',
    description:
      '<p class="wengine-description-text">Этот амплификатор оснащён алгоритмами захвата движений, которые отслеживают состояние товарищей пользователя, позволяя посылать сигналы для координации тактических движений и повышения общей боеспособности отряда. Конечно, при этом предполагается, что каждый в отряде в состоянии отслеживать эти сигналы и не наступать на пятки своим товарищам...</p>',
    slug: 'reverb-mark-3',
    link: '/wiki/wengines/reverb-mark-3',
    image: 'reverb-mark-3.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'support-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'HP',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">После запуска цепочки атак или суперспособности сила атаки всех членов отряда повышается на <b style="color: #eec554">8/9/10/11/12%</b> в течение <b style="color: #eec554">10 сек.</b> Срабатывает не чаще чем раз в <b style="color: #eec554">20 сек.</b> Одинаковые пассивные эффекты не складываются.</p>',
    rarity: 'B',
    specialty: 'support'
  },
  {
    id: 45,
    name: 'Турбулентность: Стрела',
    description:
      '<p class="wengine-description-text">Тактический амплификатор, который обнаруживает врагов с помощью высокочастотных звуковых волн. Отметив цели, он активирует систему прицеливания, чтобы точные атаки пользователя становились ещё более губительными для врагов. Эта особенность повышает эффективность пользователя в боях, но она может издалека привлекать внимание любопытных эфириалов.</p>',
    slug: 'vortex-arrow',
    link: '/wiki/wengines/vortex-arrow',
    image: 'vortex-arrow.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Импульс',
        firstLvl: '4.8%',
        lastLvl: '12%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Агент с этим предметом наносит на <b style="color: #eec554">8/9/10/11/12%</b> больше оглушения главной цели атаки.</p>',
    rarity: 'B',
    specialty: 'stun'
  },
  {
    id: 46,
    name: 'Турбулентность: Топор',
    description:
      '<p class="wengine-description-text">Этот преобразующий частоты амплификатор может мгновенно генерировать огромное количество энергии, эффективно повышая боевую мощь своего пользователя. Однако из-за плохого теплоотвода во время боя он издаёт шум, бьющий по ушам. Из-за этого всем членам отряда приходится носить наушники с шумоподавлением.</p>',
    slug: 'vortex-hatchet',
    link: '/wiki/wengines/vortex-hatchet',
    image: 'vortex-hatchet.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Восстановление энергии',
        firstLvl: '16%',
        lastLvl: '40%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Когда агент с этим предметом переходит в состояние боевой готовности или выходит на замену, его импульс повышается на <b style="color: #eec554">9/10/11/12/13%</b> на <b style="color: #eec554">10 сек.</b> Срабатывает один раз в <b style="color: #eec554">20 сек.</b></p>',
    rarity: 'B',
    specialty: 'stun'
  },
  {
    id: 47,
    name: 'Турбулентность: Револьвер',
    description:
      '<p class="wengine-description-text">Энергоаккумулирующий амплификатор с уникальной схемой работы. Он поглощает рассеянную энергию, а после накопления определённого количества энергии высвобождает её, оказывая дополнительный импульс. Контролировать, когда эта энергия вырвется наружу, невозможно, но когда это случится, вы почувствуете себя так, будто выиграли в лотерею.</p>',
    slug: 'vortex-revolver',
    link: '/wiki/wengines/vortex-revolver',
    image: 'vortex-revolver.webp',
    icons: {
      rarity: 'rarity-b.webp',
      specialty: 'stun-specialty.webp'
    },
    stats: {
      baseStat: {
        name: 'Базовая Атака',
        firstLvl: '32',
        lastLvl: '475'
      },
      mainStat: {
        name: 'Сила атаки',
        firstLvl: '8%',
        lastLvl: '20%'
      }
    },
    skill:
      '<p class="wengine-skill-text">Усиленные особые атаки дают на <b style="color: #eec554">10/11.5/13/14.5/16%</b> больше оглушения.</p>',
    rarity: 'B',
    specialty: 'stun'
  }
]

export const useWEnginesStore = defineStore('WEnginesStore', {
  state: () => ({
    wEnginesList: defaultWEnginesList,
    filteredWEnginesList: defaultWEnginesList,
    wEnginesPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'База знаний',
        link: '/wiki'
      },
      {
        name: 'Амплификаторы',
        link: '/wiki/wengines'
      }
    ],
    filterParams: {
      rarity: '',
      specialty: ''
    }
  }),

  actions: {
    resetFilters() {
      this.filterParams = {
        rarity: '',
        specialty: ''
      }
      this.filteredWEnginesList = defaultWEnginesList
    },
    setRarityFilterParam(rarity) {
      this.filterParams.rarity = rarity.name
    },
    setSpecialtyFilterParam(specialty) {
      this.filterParams.specialty = specialty.name
    },
    filterWEnginesList() {
      this.filteredWEnginesList = this.wEnginesList.filter(wEngine => {
        const { rarity, specialty } = this.filterParams
        return (rarity === '' || wEngine.rarity === rarity) && (specialty === '' || wEngine.specialty === specialty)
      })
    }
  }
})

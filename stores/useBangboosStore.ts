const defaultBangboosList = [
  {
    id: 1,
    name: 'Амиллион',
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
    }
  }),

  actions: {
    resetFilters() {
      this.filteredBangboosList = defaultBangboosList
      this.filterParams = {
        rarity: ''
      }
    },
    setRarityFilterParam(rarity) {
      this.filterParams.rarity = rarity.name
    },
    filterBangboosList() {
      this.filteredBangboosList = this.bangboosList.filter(bangboo => {
        const { rarity } = this.filterParams

        return rarity === bangboo.rarity
      })
    }
  }
})

import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('HeaderStore', {
  state: () => ({
    menu: [
      {
        id: 1,
        title: 'Главная',
        link: '/',
        childrenMenu: []
      },
      {
        id: 2,
        title: 'Тир лист',
        link: '/tier-list',
        childrenMenu: []
      },
      {
        id: 3,
        title: 'База знаний',
        link: '/wiki',
        childrenMenu: [
          {
            id: 1,
            title: 'Персонажи',
            image: 'character-wiki.webp',
            link: '/wiki/characters'
          },
          {
            id: 2,
            title: 'Фракции',
            image: 'faction-wiki.webp',
            link: '/wiki/factions'
          },
          {
            id: 3,
            image: 'wengine-wiki.webp',
            title: 'Амплификаторы',
            link: '/wiki/wengines'
          },
          {
            id: 4,
            image: 'bangboo-wiki.webp',
            title: 'Банбу',
            link: '/wiki/bangboos'
          },
          {
            id: 5,
            image: 'drive-disks-wiki.webp',
            title: 'Драйв диски',
            link: '/wiki/disk-drives'
          }
        ]
      }
    ],
    isMobileMenuOpen: false
  }),
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  getters: {
    getWikiChildMenuList() {
      const wikiMenu = this.menu.filter(menu => menu.link === '/wiki')
      return wikiMenu[0].childrenMenu
    }
  }
})

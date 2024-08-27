import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('HeaderStore', {
  state: () => ({
    menu: [
      {
        id: 1,
        title: 'Главная',
        link: '/'
      },
      {
        id: 2,
        title: 'Персонажи',
        link: '/characters'
      },
      {
        id: 3,
        title: 'Фракции',
        link: '/factions'
      },
      {
        id: 4,
        title: 'Амплификаторы',
        link: '/wengines'
      },
      {
        id: 5,
        title: 'Банбу',
        link: '/bangboos'
      },
      {
        id: 6,
        title: 'Новости',
        link: '/news'
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
  }
})

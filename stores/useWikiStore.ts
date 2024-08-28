import { defineStore } from 'pinia'

export const useWikiStore = defineStore('WikiStore', {
  state: () => ({
    wikiBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'База знаний',
        link: '/wiki'
      }
    ]
  })
})

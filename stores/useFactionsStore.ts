import { defineStore } from 'pinia'

export const useFactionsStore = defineStore('FactionsStore', {
  state: () => ({
    factionsList: [
      {
        id: 1,
        name: 'Комбинат Белобог',
        filterName: 'belobog',
        description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
        link: '/factions/belobog',
        image: 'belobog-faction.png'
      },
      {
        id: 2,
        name: 'Сыны Калидона',
        filterName: 'calydon',
        description: 'Приду, увижу, снесу!',
        link: '/factions/calydon',
        image: 'calydon-faction.webp'
      },
      {
        id: 3,
        name: 'Особая группа отдела угрозыска',
        filterName: 'criminal',
        description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
        link: '/factions/criminal',
        image: 'criminal-faction.webp'
      },
      {
        id: 4,
        name: 'Хитрые зайцы',
        filterName: 'cunning-hares',
        description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
        link: '/factions/cunning-hares',
        image: 'cunning-hares-faction.png'
      },
      {
        id: 5,
        name: 'Отряд ОБОЛ',
        filterName: 'obols-squad',
        link: '/factions/obol',
        description: 'Безопасность граждан превыше всего!',
        image: 'obols-squad-faction.webp'
      },
      {
        id: 6,
        name: 'Секция 6',
        filterName: 'section6',
        description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
        link: '/factions/section6',
        image: 'section6-faction.png'
      },
      {
        id: 7,
        name: 'Агенство домашнего персонала "Виктория"',
        filterName: 'victoria',
        description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
        link: '/factions/victoria',
        image: 'victoria-faction.png'
      }
    ]
  })
})

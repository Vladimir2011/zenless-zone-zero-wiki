import { defineStore } from 'pinia'

export const useNewsStore = defineStore('NewsStore', {
  state: () => ({
    newsList: [
      {
        id: 1,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 2,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 3,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 4,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 5,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 6,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      },
      {
        id: 7,
        title: 'Цинъи, ее любовь к шахматам и оперативная работа в свежем трейлере Zenless Zone Zero',
        link: '/news/1',
        image: 'news-image-1.jpg',
        date: '10.08.2024'
      }
    ],
    newsPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Новости',
        link: '/news'
      }
    ]
  }),
  getters: {
    getNewsListForMainPage: state => state.newsList.slice(0, 3)
  }
})

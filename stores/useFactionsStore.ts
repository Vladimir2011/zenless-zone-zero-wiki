import { defineStore } from 'pinia'
import { useCharactersStore } from '~/stores/useCharactersStore'

export const useFactionsStore = defineStore('FactionsStore', {
  state: () => ({
    factionsList: [
      {
        id: 1,
        name: 'Комбинат Белобог',
        filterName: 'belobog',
        description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
        link: '/wiki/factions/belobog',
        image: 'belobog-faction.png'
      },
      {
        id: 2,
        name: 'Сыны Калидона',
        filterName: 'calydon',
        description: 'Приду, увижу, снесу!',
        link: '/wiki/factions/calydon',
        image: 'calydon-faction.webp'
      },
      {
        id: 3,
        name: 'Особая группа отдела угрозыска',
        filterName: 'criminal',
        description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
        link: '/wiki/factions/criminal',
        image: 'criminal-faction.webp'
      },
      {
        id: 4,
        name: 'Хитрые зайцы',
        filterName: 'cunning-hares',
        description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
        link: '/wiki/factions/cunning-hares',
        image: 'cunning-hares-faction.png'
      },
      {
        id: 5,
        name: 'Отряд ОБОЛ',
        filterName: 'obols-squad',
        link: '/wiki/factions/obol',
        description: 'Безопасность граждан превыше всего!',
        image: 'obols-squad-faction.webp'
      },
      {
        id: 6,
        name: 'Секция 6',
        filterName: 'section6',
        description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
        link: '/wiki/factions/section6',
        image: 'section6-faction.png'
      },
      {
        id: 7,
        name: 'Агенство домашнего персонала "Виктория"',
        filterName: 'victoria',
        description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
        link: '/wiki/factions/victoria',
        image: 'victoria-faction.png'
      }
    ],
    factionsPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Фракции',
        link: '/wiki/factions'
      }
    ],
    factionListForPages: [
      {
        id: 1,
        slug: 'belobog',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Комбинат Белобог',
            link: '/wiki/factions/belobog'
          }
        ],
        title: 'Комбинат "Белобог"',
        image: 'belobog-banner-image.png',
        quote: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
        text: [
          {
            id: 1,
            text:
              'Комбинат «Белобог» – промышленная группа города Нью-Эриду. Основным занятием фракции является промышленность\n' +
              '            в сфере инфраструктуры и строительной техники. У фракции есть патент на специализированную рабочую технику\n' +
              '            для Пустот, а так же группа специально обученных сотрудников. Завершив несколько опасных проектов в Пустотах\n' +
              '            фракция Болобог Индастриз завоевали признание в этой отрасли.'
          },
          {
            id: 2,
            text:
              'Однако после замечательных успехов фракции Комбинат «Белобог» случилась катастрофа, о которой мы узнаем в\n' +
              '            процессе игры и она омрачила их репутацию. В текущий момент фракция очень дружна и в ней царит тихая\n' +
              '            атмосфера.'
          }
        ],
        logo: 'belobog-faction.png',
        characters: useCharactersStore().getBelobogCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 2,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 3,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 4,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 5,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          },
          {
            id: 6,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          }
        ]
      },
      {
        id: 2,
        slug: 'calydon',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Сыны Калидона',
            link: '/wiki/factions/calydon'
          }
        ],
        title: 'Сыны Калидона',
        image: 'calydon-banner-image.png',
        quote: 'Приду, увижу, снесу!',
        text: [
          {
            id: 1,
            text: 'Пока известно не так много, но, судя по описанию и внешнему виду фракции, мы можем предположить, что это какая-то форма байкерского объединения. Похоже, им нравится хаос и экшн!\n'
          },
          {
            id: 2,
            text: 'Эта фракция, возможно, вдохновлена греческой мифологией: Артемида послала Калидонского вепря наказать царя Энея за то, что он не почтил ее память в своих обрядах. Правление уничтожило регион Калидон. Это может указывать на то, что фракция склонна к хаосу и разрушению.'
          }
        ],
        logo: 'calydon-faction.webp',
        characters: useCharactersStore().getCalydonCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 2,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 3,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 4,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 5,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          },
          {
            id: 6,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          }
        ]
      },
      {
        id: 3,
        slug: 'criminal',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Особая группа отдела угрозыска',
            link: '/wiki/factions/criminal'
          }
        ],
        title: 'Особая группа отдела угрозыска',
        image: 'criminal-banner-image.png',
        quote: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
        text: [
          {
            id: 1,
            text: 'Организация, отвечающая за безопасность в городе и готовая прийти на помощь в кавернах или на улицах города.'
          }
        ],
        logo: 'criminal-faction.webp',
        characters: useCharactersStore().getCriminalCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 2,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 3,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 4,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 5,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          },
          {
            id: 6,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          }
        ]
      },
      {
        id: 4,
        slug: 'cunning-hares',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Хитрые зайцы',
            link: '/wiki/factions/cunning-hares'
          }
        ],
        title: 'Хитрые зайцы',
        image: 'cunning-hares-banner-image.png',
        quote: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
        text: [
          {
            id: 1,
            text: 'Фракция «Хитрые зайцы» в игре Zenless Zone Zero была сформирована, как небольшое управляющее агентство, которое принимает различные заказы на связанные с Пустотами. В фракции Хитрых зайцев не так много участников, но каждый из них обладает своим характером и способностями.'
          },
          {
            id: 2,
            text: 'Агентство первоначально называлось «Нежный дом», однако очень быстро получило народное название «Хитрые зайцы».'
          },
          {
            id: 3,
            text: 'Сама Николь предпочитает это прозвище оригинальному, поэтому просто переняла это имя на улицах Нью Эриду.'
          }
        ],
        logo: 'cunning-hares-faction.png',
        characters: useCharactersStore().getCunningHaresCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          },
          {
            id: 2,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 3,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 4,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 5,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 6,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          }
        ]
      },
      {
        id: 5,
        slug: 'obol',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Отряд ОБОЛ',
            link: '/wiki/factions/obol'
          }
        ],
        title: 'Отряд ОБОЛ',
        image: 'obol-banner-image.webp',
        quote: 'Безопасность граждан превыше всего!',
        text: [
          {
            id: 1,
            text: 'Пока что об отряде ОБОЛ известно не так уж много, за исключением того, что это, по-видимому, какой-то отряд обороны.'
          }
        ],
        logo: 'obols-squad-faction.webp',
        characters: useCharactersStore().getObolCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          },
          {
            id: 2,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 3,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 4,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 5,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 6,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          }
        ]
      },
      {
        id: 6,
        slug: 'section6',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Секция 6',
            link: '/wiki/factions/section6'
          }
        ],
        title: 'Секция 6',
        image: 'section6-banner-image.png',
        quote: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
        text: [
          {
            id: 1,
            text: 'Оперативный отдел департамента специальных операций вооруженных сил. Фракция выполняет самые опасные задания. Все члены Секция 6 очень дисциплинированны и хорошо подготовлены.'
          }
        ],
        logo: 'section6-faction.png',
        characters: useCharactersStore().getSection6CharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 2,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 3,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 4,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 5,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 6,
            name: 'Агенство домашнего персонала "Виктория"',
            filterName: 'victoria',
            description: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
            link: '/wiki/factions/victoria',
            image: 'victoria-faction.png'
          }
        ]
      },
      {
        id: 7,
        slug: 'victoria',
        breadcrumbs: [
          {
            name: 'Главная',
            link: '/'
          },
          {
            name: 'Фракции',
            link: '/wiki/factions'
          },
          {
            name: 'Агенство домашнего персонала "Виктория"',
            link: '/wiki/factions/victoria'
          }
        ],
        title: 'Агенство домашнего персонала "Виктория"',
        image: 'victoria-banner-image.png',
        quote: 'Благодарим за обращение в Агентство «Виктория»! Желание клиента для нас закон.',
        text: [
          {
            id: 1,
            text: 'Фракция известна широким спектром услуг для жителей города Нью-Эриду и не только. Команда представляет собой домашних помощников, в какой-то мере это домработницы. У фракции всегда есть большое количество клиентов, несмотря на все трудности в Пустотах.'
          }
        ],
        logo: 'victoria-faction.png',
        characters: useCharactersStore().getVictoriaCharactersList,
        anotherFactions: [
          {
            id: 1,
            name: 'Особая группа отдела угрозыска',
            filterName: 'criminal',
            description: 'Если у вас возникли проблемы, обращайтесь в Службу общественной безопасности Нью-Эриду.',
            link: '/wiki/factions/criminal',
            image: 'criminal-faction.webp'
          },
          {
            id: 2,
            name: 'Комбинат Белобог',
            filterName: 'belobog',
            description: 'Каждая наша постройка — не просто здание, а настоящий уютный дом.',
            link: '/wiki/factions/belobog',
            image: 'belobog-faction.png'
          },
          {
            id: 3,
            name: 'Сыны Калидона',
            filterName: 'calydon',
            description: 'Приду, увижу, снесу!',
            link: '/wiki/factions/calydon',
            image: 'calydon-faction.webp'
          },
          {
            id: 4,
            name: 'Хитрые зайцы',
            filterName: 'cunning-hares',
            description: 'Всегда к вашим услугам, пока вы готовы выложить кругленькую сумму!',
            link: '/wiki/factions/cunning-hares',
            image: 'cunning-hares-faction.png'
          },
          {
            id: 5,
            name: 'Отряд ОБОЛ',
            filterName: 'obols-squad',
            link: '/wiki/factions/obol',
            description: 'Безопасность граждан превыше всего!',
            image: 'obols-squad-faction.webp'
          },
          {
            id: 6,
            name: 'Секция 6',
            filterName: 'section6',
            description: 'Зло должно быть уничтожено — а что такое «зло», решать нам.',
            link: '/wiki/factions/section6',
            image: 'section6-faction.png'
          }
        ]
      }
    ]
  }),
  actions: {
    getFactionByRouteSlug(slug: string) {
      return this.factionListForPages.find(faction => faction.slug === slug)
    }
  }
})

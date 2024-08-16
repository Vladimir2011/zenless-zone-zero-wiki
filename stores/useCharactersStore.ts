import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('CharactersStore', {
  state: () => ({
    charactersList: [
      {
        id: 1,
        name: 'Qingyi',
        link: '/characters/qingyi',
        image: 'qingyi/qingyi-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'stun-specialty.webp',
          faction: 'criminal-faction.webp'
        }
      },
      {
        id: 2,
        name: 'Zhu Yuan',
        link: '/characters/zhuyuan',
        image: 'zhu-yuan/zhu-yuan-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'ether-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'criminal-faction.webp'
        }
      },
      {
        id: 3,
        name: 'Ellen',
        link: '/characters/ellen',
        image: 'ellen/ellen-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'ice-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'victoria-faction.png'
        }
      },
      {
        id: 4,
        name: 'Lycaon',
        link: '/characters/lycaon',
        image: 'lycaon/lycaon-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'ice-attribute.webp',
          specialty: 'stun-specialty.webp',
          faction: 'victoria-faction.png'
        }
      },
      {
        id: 5,
        name: 'Jane Doe',
        link: '/characters/janedoe',
        image: 'jane-doe/jane-doe-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'physical-attribute.webp',
          specialty: 'anomaly-specialty.webp',
          faction: 'criminal-faction.webp'
        }
      },
      {
        id: 6,
        name: 'Anby',
        link: '/characters/anby',
        image: 'anby/anby-doe-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'stun-specialty.webp',
          faction: 'cunning-hares-faction.png'
        }
      },
      {
        id: 7,
        name: 'Corin',
        link: '/characters/corin',
        image: 'corin/corin-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'physical-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'victoria-faction.png'
        }
      },
      {
        id: 8,
        name: 'Seth',
        link: '/characters/seth',
        image: 'seth/seth-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'defense-specialty.webp',
          faction: 'criminal-faction.webp'
        }
      },
      {
        id: 9,
        name: 'Nekomata',
        link: '/characters/nekomata',
        image: 'nekomata/nekomata-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'physical-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'cunning-hares-faction.png'
        }
      },
      {
        id: 10,
        name: 'Anton',
        link: '/characters/anton',
        image: 'anton/anton-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'belobog-faction.png'
        }
      },
      {
        id: 11,
        name: 'Soldier 11',
        link: '/characters/soldier11',
        image: 'soldier11/soldier11-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'fire-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'obols-squad-faction.webp'
        }
      },
      {
        id: 12,
        name: 'Ben',
        link: '/characters/ben',
        image: 'ben/ben-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'fire-attribute.webp',
          specialty: 'defense-specialty.webp',
          faction: 'belobog-faction.png'
        }
      },
      {
        id: 13,
        name: 'Grace',
        link: '/characters/grace',
        image: 'grace/grace-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'anomaly-specialty.webp',
          faction: 'belobog-faction.png'
        }
      },
      {
        id: 14,
        name: 'Nicole',
        link: '/characters/nicole',
        image: 'nicole/nicole-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'ether-attribute.webp',
          specialty: 'support-specialty.webp',
          faction: 'cunning-hares-faction.png'
        }
      },
      {
        id: 15,
        name: 'Soukaku',
        link: '/characters/soukaku',
        image: 'soukaku/soukaku-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'ice-attribute.webp',
          specialty: 'support-specialty.webp',
          faction: 'section6-faction.png'
        }
      },
      {
        id: 16,
        name: 'Billy',
        link: '/characters/billy',
        image: 'billy/billy-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'physical-attribute.webp',
          specialty: 'attack-specialty.webp',
          faction: 'cunning-hares-faction.png'
        }
      },
      {
        id: 17,
        name: 'Piper',
        link: '/characters/piper',
        image: 'piper/piper-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'physical-attribute.webp',
          specialty: 'anomaly-specialty.webp',
          faction: 'calydon-faction.webp'
        }
      },
      {
        id: 18,
        name: 'Koleda',
        link: '/characters/koleda',
        image: 'koleda/koleda-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'fire-attribute.webp',
          specialty: 'stun-specialty.webp',
          faction: 'belobog-faction.png'
        }
      },
      {
        id: 19,
        name: 'Lucy',
        link: '/characters/lucy',
        image: 'lucy/lucy-card-image.webp',
        icons: {
          rarity: 'rarity-a.webp',
          attribute: 'fire-attribute.webp',
          specialty: 'support-specialty.webp',
          faction: 'calydon-faction.webp'
        }
      },
      {
        id: 20,
        name: 'Rina',
        link: '/characters/rina',
        image: 'rina/rina-card-image.webp',
        icons: {
          rarity: 'rarity-s.webp',
          attribute: 'electric-attribute.webp',
          specialty: 'support-specialty.webp',
          faction: 'victoria-faction.png'
        }
      }
    ]
  })
})

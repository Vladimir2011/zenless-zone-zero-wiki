import { defineStore } from 'pinia'

const defaultCharactersList = [
  {
    id: 1,
    name: 'Цинъи',
    link: '/characters/qingyi',
    image: 'qingyi/qingyi-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'stun',
    faction: 'criminal'
  },
  {
    id: 2,
    name: 'Чжу Юань',
    link: '/characters/zhuyuan',
    image: 'zhu-yuan/zhu-yuan-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ether-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'ether',
    specialty: 'attack',
    faction: 'criminal'
  },
  {
    id: 3,
    name: 'Эллен',
    link: '/characters/ellen',
    image: 'ellen/ellen-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'ice',
    specialty: 'attack',
    faction: 'victoria'
  },
  {
    id: 4,
    name: 'Ликаон',
    link: '/characters/lycaon',
    image: 'lycaon/lycaon-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'ice',
    specialty: 'stun',
    faction: 'victoria'
  },
  {
    id: 5,
    name: 'Джейн Доу',
    link: '/characters/janedoe',
    image: 'jane-doe/jane-doe-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'S',
    attribute: 'physical',
    specialty: 'anomaly',
    faction: 'criminal'
  },
  {
    id: 6,
    name: 'Энби',
    link: '/characters/anby',
    image: 'anby/anby-doe-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'stun',
    faction: 'cunning-hares'
  },
  {
    id: 7,
    name: 'Корин',
    link: '/characters/corin',
    image: 'corin/corin-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'victoria'
  },
  {
    id: 8,
    name: 'Сет',
    link: '/characters/seth',
    image: 'seth/seth-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'defense-specialty.webp',
      faction: 'criminal-faction.webp'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'defense',
    faction: 'criminal'
  },
  {
    id: 9,
    name: 'Нэкомата',
    link: '/characters/nekomata',
    image: 'nekomata/nekomata-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'S',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'cunning-hares'
  },
  {
    id: 10,
    name: 'Антон',
    link: '/characters/anton',
    image: 'anton/anton-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'A',
    attribute: 'electric',
    specialty: 'attack',
    faction: 'belobog'
  },
  {
    id: 11,
    name: 'Солдат 11',
    link: '/characters/soldier11',
    image: 'soldier11/soldier11-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'obols-squad-faction.webp'
    },
    rarity: 'S',
    attribute: 'fire',
    specialty: 'attack',
    faction: 'obols-squad'
  },
  {
    id: 12,
    name: 'Бен',
    link: '/characters/ben',
    image: 'ben/ben-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'defense-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'A',
    attribute: 'fire',
    specialty: 'defense',
    faction: 'belobog'
  },
  {
    id: 13,
    name: 'Грейс',
    link: '/characters/grace',
    image: 'grace/grace-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'anomaly',
    faction: 'belobog'
  },
  {
    id: 14,
    name: 'Николь',
    link: '/characters/nicole',
    image: 'nicole/nicole-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'ether-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'ether',
    specialty: 'support',
    faction: 'cunning-hares'
  },
  {
    id: 15,
    name: 'Сокаку',
    link: '/characters/soukaku',
    image: 'soukaku/soukaku-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'ice-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'section6-faction.png'
    },
    rarity: 'A',
    attribute: 'ice',
    specialty: 'support',
    faction: 'section6'
  },
  {
    id: 16,
    name: 'Билли',
    link: '/characters/billy',
    image: 'billy/billy-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'attack-specialty.webp',
      faction: 'cunning-hares-faction.png'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'attack',
    faction: 'cunning-hares'
  },
  {
    id: 17,
    name: 'Пайпер',
    link: '/characters/piper',
    image: 'piper/piper-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'physical-attribute.webp',
      specialty: 'anomaly-specialty.webp',
      faction: 'calydon-faction.webp'
    },
    rarity: 'A',
    attribute: 'physical',
    specialty: 'anomaly',
    faction: 'calydon'
  },
  {
    id: 18,
    name: 'Коляда',
    link: '/characters/koleda',
    image: 'koleda/koleda-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'stun-specialty.webp',
      faction: 'belobog-faction.png'
    },
    rarity: 'S',
    attribute: 'fire',
    specialty: 'stun',
    faction: 'belobog'
  },
  {
    id: 19,
    name: 'Люси',
    link: '/characters/lucy',
    image: 'lucy/lucy-card-image.webp',
    icons: {
      rarity: 'rarity-a.webp',
      attribute: 'fire-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'calydon-faction.webp'
    },
    rarity: 'A',
    attribute: 'fire',
    specialty: 'support',
    faction: 'calydon'
  },
  {
    id: 20,
    name: 'Рина',
    link: '/characters/rina',
    image: 'rina/rina-card-image.webp',
    icons: {
      rarity: 'rarity-s.webp',
      attribute: 'electric-attribute.webp',
      specialty: 'support-specialty.webp',
      faction: 'victoria-faction.png'
    },
    rarity: 'S',
    attribute: 'electric',
    specialty: 'support',
    faction: 'victoria'
  }
]

export const useCharactersStore = defineStore('CharactersStore', {
  state: () => ({
    charactersList: defaultCharactersList,
    filteredCharactersList: defaultCharactersList,
    charactersPageBreadcrumbs: [
      {
        name: 'Главная',
        link: '/'
      },
      {
        name: 'Персонажи',
        link: '/characters'
      }
    ],
    selectedFaction: 'Выберите фракцию',
    filterParams: {
      rarity: '',
      attribute: '',
      specialty: '',
      faction: ''
    }
  }),
  actions: {
    selectFaction(faction) {
      this.selectedFaction = faction.name
    },
    resetFilters() {
      this.filterParams = {
        rarity: '',
        attribute: '',
        specialty: '',
        faction: ''
      }
      this.selectedFaction = 'Выберите фракцию'
      this.filteredCharactersList = defaultCharactersList
    },
    setRarityFilterParam(rarity) {
      this.filterParams.rarity = rarity.name
    },
    setAttributeFilterParam(attribute) {
      this.filterParams.attribute = attribute.name
    },
    setSpecialtyFilterParam(specialty) {
      this.filterParams.specialty = specialty.name
    },
    setFactionFilterParam(faction) {
      this.filterParams.faction = faction.filterName
    },
    filterCharactersList() {
      this.filteredCharactersList = this.charactersList.filter(character => {
        const { rarity, attribute, specialty, faction } = this.filterParams
        return (
          (rarity === '' || character.rarity === rarity) &&
          (attribute === '' || character.attribute === attribute) &&
          (specialty === '' || character.specialty === specialty) &&
          (faction === '' || character.faction === faction)
        )
      })
    }
  }
})

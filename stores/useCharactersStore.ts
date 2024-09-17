import { defineStore } from 'pinia'

const defaultCharactersList = [
  {
    id: 1,
    name: 'Цинъи',
    link: '/wiki/characters/qingyi',
    image: 'qingyi/qingyi-card-image.webp',
    smallImage: 'qingyi/qingyi-small-card-image.webp',
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
    link: '/wiki/characters/zhuyuan',
    image: 'zhu-yuan/zhu-yuan-card-image.webp',
    smallImage: 'zhu-yuan/zhu-yuan-small-card-image.webp',
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
    link: '/wiki/characters/ellen',
    image: 'ellen/ellen-card-image.webp',
    smallImage: 'ellen/ellen-small-card-image.webp',
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
    link: '/wiki/characters/lycaon',
    image: 'lycaon/lycaon-card-image.webp',
    smallImage: 'lycaon/lycaon-small-card-image.png',
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
    link: '/wiki/characters/janedoe',
    image: 'jane-doe/jane-doe-card-image.webp',
    smallImage: 'jane-doe/jane-doe-small-card-image.webp',
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
    link: '/wiki/characters/anby',
    image: 'anby/anby-card-image.webp',
    smallImage: 'anby/anby-small-card-image.webp',
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
    link: '/wiki/characters/corin',
    image: 'corin/corin-card-image.webp',
    smallImage: 'corin/corin-small-card-image.webp',
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
    link: '/wiki/characters/seth',
    image: 'seth/seth-card-image.webp',
    smallImage: 'seth/seth-small-card-image.webp',
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
    link: '/wiki/characters/nekomata',
    image: 'nekomata/nekomata-card-image.webp',
    smallImage: 'nekomata/nekomata-small-card-image.webp',
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
    link: '/wiki/characters/anton',
    image: 'anton/anton-card-image.webp',
    smallImage: 'anton/anton-small-card-image.webp',
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
    link: '/wiki/characters/soldier11',
    image: 'soldier11/soldier11-card-image.webp',
    smallImage: 'soldier11/soldier11-small-card-image.webp',
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
    link: '/wiki/characters/ben',
    image: 'ben/ben-card-image.webp',
    smallImage: 'ben/ben-small-card-image.webp',
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
    link: '/wiki/characters/grace',
    image: 'grace/grace-card-image.webp',
    smallImage: 'grace/grace-small-card-image.webp',
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
    link: '/wiki/characters/nicole',
    image: 'nicole/nicole-card-image.webp',
    smallImage: 'nicole/nicole-small-card-image.webp',
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
    link: '/wiki/characters/soukaku',
    image: 'soukaku/soukaku-card-image.webp',
    smallImage: 'soukaku/soukaku-small-card-image.webp',
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
    link: '/wiki/characters/billy',
    image: 'billy/billy-card-image.webp',
    smallImage: 'billy/billy-small-card-image.webp',
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
    link: '/wiki/characters/piper',
    image: 'piper/piper-card-image.webp',
    smallImage: 'piper/piper-small-card-image.webp',
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
    link: '/wiki/characters/koleda',
    image: 'koleda/koleda-card-image.webp',
    smallImage: 'koleda/koleda-small-card-image.webp',
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
    link: '/wiki/characters/lucy',
    image: 'lucy/lucy-card-image.webp',
    smallImage: 'lucy/lucy-small-card-image.webp',
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
    link: '/wiki/characters/rina',
    image: 'rina/rina-card-image.webp',
    smallImage: 'rina/rina-small-card-image.webp',
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
        name: 'Вики',
        link: '/wiki'
      },
      {
        name: 'Персонажи',
        link: '/wiki/characters'
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
  },
  getters: {
    getBelobogCharactersList() {
      return this.charactersList.filter(character => character.faction === 'belobog')
    },
    getCalydonCharactersList() {
      return this.charactersList.filter(character => character.faction === 'calydon')
    },
    getCriminalCharactersList() {
      return this.charactersList.filter(character => character.faction === 'criminal')
    },
    getCunningHaresCharactersList() {
      return this.charactersList.filter(character => character.faction === 'cunning-hares')
    },
    getObolCharactersList() {
      return this.charactersList.filter(character => character.faction === 'obols-squad')
    },
    getSection6CharactersList() {
      return this.charactersList.filter(character => character.faction === 'section6')
    },
    getVictoriaCharactersList() {
      return this.charactersList.filter(character => character.faction === 'victoria')
    },
    getAllAttackCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'attack') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllDefenseCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'defense') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllAnomalyCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'anomaly') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllSupportCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'support') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    },
    getAllStunCharactersForSmallCardList() {
      const result = []

      for (let i = 0; i < this.filteredCharactersList.length; i++) {
        if (this.filteredCharactersList[i].specialty === 'stun') {
          result.push({
            id: this.filteredCharactersList[i].id,
            name: this.filteredCharactersList[i].name,
            link: this.filteredCharactersList[i].link,
            image: this.filteredCharactersList[i].smallImage,
            icons: {
              attribute: this.filteredCharactersList[i].icons.attribute,
              specialty: this.filteredCharactersList[i].icons.specialty
            },
            rarity: this.filteredCharactersList[i].rarity
          })
        }
      }

      return result
    }
  }
})

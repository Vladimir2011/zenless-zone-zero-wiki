export const useConstants = () => {
  const SOCIAL_LINKS = [
    {
      id: 1,
      name: 'vk',
      icon: 'arcticons:vk',
      link: 'https://vk.com/zenless.zone.zero_ru'
    },
    {
      id: 2,
      name: 'youtube',
      icon: 'arcticons:youtube',
      link: 'https://www.youtube.com/@ZZZ_Official'
    },
    {
      id: 3,
      name: 'discord',
      icon: 'arcticons:discord',
      link: 'https://discord.gg/8qnkgR6wgV'
    },
    {
      id: 4,
      name: 'reddit',
      icon: 'arcticons:reddit',
      link: 'https://www.reddit.com/r/ZZZ_Official/'
    },
    {
      id: 5,
      name: 'hoyolab',
      icon: 'arcticons:hoyolab',
      link: 'https://www.hoyolab.com/accountCenter/postList?id=219270333'
    }
  ]
  const RARITY_CHARACTER_FILTERS = [
    {
      id: 1,
      name: 'A',
      image: 'rarity-a.webp',
      alt: 'rarity-a'
    },
    {
      id: 2,
      name: 'S',
      image: 'rarity-s.webp',
      alt: 'rarity-s'
    }
  ]

  const RARITY_WENGINES_FILTERS = [
    {
      id: 1,
      name: 'B',
      image: 'rarity-b.webp',
      alt: 'rarity-b'
    },
    {
      id: 2,
      name: 'A',
      image: 'rarity-a.webp',
      alt: 'rarity-a'
    },
    {
      id: 3,
      name: 'S',
      image: 'rarity-s.webp',
      alt: 'rarity-s'
    }
  ]

  const ATTRIBUTES_FILTERS = [
    {
      id: 1,
      name: 'electric',
      image: 'electric-attribute.webp',
      alt: 'electric-attribute',
      tooltip: 'Электро'
    },
    {
      id: 2,
      name: 'ether',
      image: 'ether-attribute.webp',
      alt: 'ether-attribute',
      tooltip: 'Эфир'
    },
    {
      id: 3,
      name: 'fire',
      image: 'fire-attribute.webp',
      alt: 'fire-attribute',
      tooltip: 'Огонь'
    },
    {
      id: 4,
      name: 'ice',
      image: 'ice-attribute.webp',
      alt: 'ice-attribute',
      tooltip: 'Лёд'
    },
    {
      id: 5,
      name: 'frost',
      image: 'frost-attribute.webp',
      alt: 'frost-attribute',
      tooltip: 'Мороз'
    },
    {
      id: 6,
      name: 'physical',
      image: 'physical-attribute.webp',
      alt: 'physical-attribute',
      tooltip: 'Физический'
    }
  ]

  const SPECIALTIES_FILTERS = [
    {
      id: 1,
      name: 'anomaly',
      image: 'anomaly-specialty.webp',
      alt: 'anomaly-specialty',
      tooltip: 'Аномалия'
    },
    {
      id: 2,
      name: 'attack',
      image: 'attack-specialty.webp',
      alt: 'attack-specialty',
      tooltip: 'Нападение'
    },
    {
      id: 3,
      name: 'defense',
      image: 'defense-specialty.webp',
      alt: 'defense-specialty',
      tooltip: 'Оборона'
    },
    {
      id: 4,
      name: 'stun',
      image: 'stun-specialty.webp',
      alt: 'stun-specialty',
      tooltip: 'Устрашение'
    },
    {
      id: 5,
      name: 'support',
      image: 'support-specialty.webp',
      alt: 'support-specialty',
      tooltip: 'Поддержка'
    }
  ]

  return {
    SOCIAL_LINKS,
    RARITY_CHARACTER_FILTERS,
    ATTRIBUTES_FILTERS,
    SPECIALTIES_FILTERS,
    RARITY_WENGINES_FILTERS
  }
}

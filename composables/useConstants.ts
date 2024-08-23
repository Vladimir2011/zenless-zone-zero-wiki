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

  const ATTRIBUTES_FILTERS = [
    {
      id: 1,
      name: 'electric',
      image: 'electric-attribute.webp',
      alt: 'electric-attribute'
    },
    {
      id: 2,
      name: 'ether',
      image: 'ether-attribute.webp',
      alt: 'ether-attribute'
    },
    {
      id: 3,
      name: 'fire',
      image: 'fire-attribute.webp',
      alt: 'fire-attribute'
    },
    {
      id: 4,
      name: 'ice',
      image: 'ice-attribute.webp',
      alt: 'ice-attribute'
    },
    {
      id: 5,
      name: 'physical',
      image: 'physical-attribute.webp',
      alt: 'physical-attribute'
    }
  ]

  const SPECIALTIES_FILTERS = [
    {
      id: 1,
      name: 'anomaly',
      image: 'anomaly-specialty.webp',
      alt: 'anomaly-specialty'
    },
    {
      id: 2,
      name: 'attack',
      image: 'attack-specialty.webp',
      alt: 'attack-specialty'
    },
    {
      id: 3,
      name: 'defense',
      image: 'defense-specialty.webp',
      alt: 'defense-specialty'
    },
    {
      id: 4,
      name: 'stun',
      image: 'stun-specialty.webp',
      alt: 'stun-specialty'
    },
    {
      id: 5,
      name: 'support',
      image: 'support-specialty.webp',
      alt: 'support-specialty'
    }
  ]

  return {
    SOCIAL_LINKS,
    RARITY_CHARACTER_FILTERS,
    ATTRIBUTES_FILTERS,
    SPECIALTIES_FILTERS
  }
}

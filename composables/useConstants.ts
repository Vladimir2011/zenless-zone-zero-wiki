export const useConstants = () => {
  const HEADER_NAVIGATION = [
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
      link: '/fractions'
    },
    {
      id: 4,
      title: 'Новости',
      link: '/news'
    }
  ]

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

  return {
    HEADER_NAVIGATION,
    SOCIAL_LINKS
  }
}

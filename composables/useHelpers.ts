export const useHelpers = () => {
  const bodyEnable = () => {
    document.body.style.overflowX = 'hidden'
    document.body.style.position = 'fixed'
    if (process.client) {
      document.body.style.top = `-${window.scrollY}px`
    }
    document.body.style.width = '100%'
  }

  const bodyDisable = () => {
    document.body.style.overflowX = 'auto'
    document.body.style.position = 'static'
    document.body.style.removeProperty('top')
    document.body.style.removeProperty('width')
    if (process.client) {
      window.scrollTo(0, window.scrollY)
    }
  }

  return { bodyEnable, bodyDisable }
}

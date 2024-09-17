export default defineNuxtRouteMiddleware((to, from) => {
  const charactersStore = useCharactersStore()
  const wEnginesStore = useWEnginesStore()
  const bangboosStore = useBangboosStore()

  charactersStore.resetFilters()
  wEnginesStore.resetFilters()
  bangboosStore.resetFilters()
})

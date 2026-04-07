const AppRoutes = (lang: string) => ({
  Home: lang === 'en' ? '/' : `/${lang}`,
  Instructions: lang === 'en' ? '/instructions' : `/${lang}/instructions`,
  FIBAResources: lang === 'en' ? '/fiba-resources' : `/${lang}/fiba-resources`,
  About: lang === 'en' ? '/about' : `/${lang}/about`,
})

export default AppRoutes

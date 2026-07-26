export const hiddenChromeRoutes = [
  '/elephrend/privacy',
  '/elephrend/support',
  '/elephrend/welcome',
] as const;

export const siteNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'About', href: '/about' },
] as const;

const reverse = (value: string) => value.split('').reverse().join('');

const obfuscatedContactLinks = {
  email: 'moc.liamg@39nosreviretrop',
  linkedin: 'nosreviretrop/ni/moc.nideknil//:sptth',
  github: 'nosreviretrop/moc.buhtig//:sptth',
} as const;

export const siteContactLinks = {
  email: `mailto:${reverse(obfuscatedContactLinks.email)}`,
  linkedin: reverse(obfuscatedContactLinks.linkedin),
  github: reverse(obfuscatedContactLinks.github),
  resume: '/Porter_Iverson_Resume_2025.pdf',
} as const;

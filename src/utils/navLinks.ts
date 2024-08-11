export const navLinks = [
  {
    name: 'Accueil',
    path: '/#hero',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#hero',
  },
  {
    name: 'Compétences',
    path: '/#skills',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#skills',
  },
  {
    name: 'Projets',
    path: '/#projects',
    isActive: (pathname: string, hash: string) => pathname === '/' && hash === '#projects',
  }
];
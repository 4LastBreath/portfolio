export const navLinks = [
  {
    name: 'Accueil',
    path: '/#hero',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio' && hash === '#hero',
  },
  {
    name: 'Compétences',
    path: '/#skills',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio' && hash === '#skills',
  },
  {
    name: 'Projets',
    path: '/#projects',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio' && hash === '#projects',
  }
];
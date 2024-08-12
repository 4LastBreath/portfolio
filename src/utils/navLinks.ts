export const navLinks = [
  {
    name: 'Accueil',
    path: '/portfolio/#hero',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio/' && hash === '#hero',
  },
  {
    name: 'Compétences',
    path: '/portfolio/#skills',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio/' && hash === '#skills',
  },
  {
    name: 'Projets',
    path: '/portfolio/#projects',
    isActive: (pathname: string, hash: string) => pathname === '/portfolio/' && hash === '#projects',
  }
];
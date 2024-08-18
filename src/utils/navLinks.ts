import { routes } from "../routes/routes";

export const hashLinks = [
  {
    name: 'Accueil',
    path: '/portfolio/#hero',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#hero',
  },
  {
    name: 'Compétences',
    path: '/portfolio/#skills',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#skills',
  },
  {
    name: 'Projets',
    path: '/portfolio/#projects',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#projects',
  }
];

export const navLinks = [
  {
    name: 'Contact',
    path: routes.contact
  }
]
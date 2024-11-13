import { routes } from "../routes/routes";

export const hashLinks = [
  {
    name: 'Accueil',
    path: '/#hero',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#hero',
  },
  {
    name: 'Compétences',
    path: '/#skills',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#skills',
  },
  {
    name: 'Projets',
    path: '/#projects',
    isActive: (pathname: string, hash: string) => pathname === routes.home && hash === '#projects',
  }
];

export const navLinks = [
  {
    name: 'Contact',
    path: routes.contact
  }
]
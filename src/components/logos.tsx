import react from '../styles/assets/img/react.png'
import expressJS from '../styles/assets/img/expressJS.png'
import mongoDB from '../styles/assets/img/mongoDB.png'
import nextJS from '../styles/assets/img/nextJS.png'
import nodeJS from '../styles/assets/img/nodeJS.png'
import sass from '../styles/assets/img/sass.png'
import typescript from '../styles/assets/img/typescript.png'
import javascript from '../styles/assets/img/javascript.png'
import tailwind from '../styles/assets/img/tailwind.png'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string,
}

export const ReactLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={react || src} alt='react logo' {...props} />
  );
};

export const ExpressJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={expressJS || src} alt='expressJS logo' {...props} />
  );
};

export const MongoDbLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={mongoDB || src} alt='mongoDB logo' {...props} />
  );
};

export const NextJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={nextJS || src} alt='nextJS logo' {...props} />
  );
};

export const NodeJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={nodeJS || src} alt='nodeJS logo' {...props} />
  );
};

export const SassLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={sass || src} alt='sass logo' {...props} />
  );
};

export const TypescriptLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={typescript || src} alt='typescript logo' {...props} />
  );
};

export const JavascriptLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={javascript || src} alt='javascript logo' {...props} />
  );
};

export const TailwindLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={tailwind || src} alt='tailwind logo' {...props} />
  );
};
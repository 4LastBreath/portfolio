import react from '../styles/assets/img/react.webp'
import expressJS from '../styles/assets/img/expressJS.webp'
import mongoDB from '../styles/assets/img/mongoDB.webp'
import nextJS from '../styles/assets/img/nextJS.webp'
import nodeJS from '../styles/assets/img/nodeJS.webp'
import sass from '../styles/assets/img/sass.webp'
import typescript from '../styles/assets/img/typescript.webp'
import javascript from '../styles/assets/img/javascript.webp'
import tailwind from '../styles/assets/img/tailwind.webp'
import redux from '../styles/assets/img/redux.webp'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string,
}

export const ReactLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={react || src} alt='react logo' {...props} loading='lazy'/>
  );
};

export const ExpressJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={expressJS || src} alt='expressJS logo' {...props} loading='lazy'/>
  );
};

export const MongoDbLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={mongoDB || src} alt='mongoDB logo' {...props} loading='lazy'/>
  );
};

export const NextJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={nextJS || src} alt='nextJS logo' {...props} loading='lazy'/>
  );
};

export const NodeJSLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={nodeJS || src} alt='nodeJS logo' {...props} loading='lazy'/>
  );
};

export const SassLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={sass || src} alt='sass logo' {...props} loading='lazy'/>
  );
};

export const TypescriptLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={typescript || src} alt='typescript logo' {...props} loading='lazy'/>
  );
};

export const JavascriptLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={javascript || src} alt='javascript logo' {...props} loading='lazy'/>
  );
};

export const TailwindLogo = ({ src, ...props } : LogoProps) => {
  return (
    <img src={tailwind || src} alt='tailwind logo' {...props} loading='lazy'/>
  );
};

export const ReduxLogo = ({src, ...props} : LogoProps) => {
  return (
    <img src={redux || src} alt='redux logo' {...props} loading='lazy'/>
  )
}
import react from '../styles/assets/img/react.png'
import expressJS from '../styles/assets/img/expressJS.png'
import mongoDB from '../styles/assets/img/mongoDB.png'
import nextJS from '../styles/assets/img/nextJS.png'
import nodeJS from '../styles/assets/img/nodeJS.png'
import sass from '../styles/assets/img/sass.png'
import typescript from '../styles/assets/img/typescript.png'
import javascript from '../styles/assets/img/javascript.png'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string,
  alt?: string
}

export const ReactLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={react || src} alt={'react logo' || alt} {...props} />
  );
};

export const ExpressJSLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={expressJS || src} alt={'expressJS logo' || alt} {...props} />
  );
};

export const MongoDbLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={mongoDB || src} alt={'mongoDB logo' || alt} {...props} />
  );
};

export const NextJSLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={nextJS || src} alt={'nextJS logo' || alt} {...props} />
  );
};

export const NodeJSLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={nodeJS || src} alt={'nodeJS logo' || alt} {...props} />
  );
};

export const SassLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={sass || src} alt={'sass logo' || alt} {...props} />
  );
};

export const TypescriptLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={typescript || src} alt={'typescript logo' || alt} {...props} />
  );
};

export const JavascriptLogo = ({ src, alt, ...props } : LogoProps) => {
  return (
    <img src={javascript || src} alt={'javascript logo' || alt} {...props} />
  );
};
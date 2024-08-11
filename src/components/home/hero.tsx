import { useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import cube from '../../styles/assets/img/cube.png'
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/#skills');
    
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      navigate('/#hero', { replace: true });
    }

  }, [inView, navigate])



return (
<section className="section_hero | even-columns relative f-width" id='hero' ref={ref}>

  <div className="hero_presentation | flex flex-column space-between text-left f-height">

      <div className="flex align-center gap-50">
        <div className='hero_line'/>
        <Plus strokeWidth={2} color="var(--fc-accent)"/>
      </div>

      <div className="hero_presentation-wrapper flex flex-column align-start gap-200">
        <div>
          <h1>Bienvenue</h1>
          <h2>Je suis Frontend Developer</h2>
        </div>
        <p className="mt-100 mb-150">Je m'appelle Brian FRITZ et je suis passionné par le développement web. Je suis un développeur web junior autodidacte, enthousiaste à l'idée de relever de nouveaux défis et de contribuer à des projets innovants.
        </p>

          <Button variant="primary" onClick={handleClick}>En Savoir Plus</Button>

      </div>

      <div className="flex align-center justify-end gap-50">
        <Plus strokeWidth={2} color="var(--fc-accent)"/>
        <div className='hero_line'/>
      </div>

      <img className='presentation_img' src={cube} alt='multicolors cube'/>

  </div>

  <div className="hero_img-container | flex align-center justify-center f-height">
    <img className='hero_img' src={cube} alt='multicolors cube'/>
  </div>

</section>
  );
};

export default Hero;
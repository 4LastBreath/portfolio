import { useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import cube from '../../styles/assets/img/cube.png'
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Hero = () => {

  const lineVariants = {
    initial: {
      width: '0%', 
      opacity: 0
    },
    animate: {
      width: ['0%', '80%', '70%'], 
      opacity: [0, 0.5, 1],
      transition: {
        duration: 1.2, 
        times: [0, 0.6, 1], 
        ease: [0.6, 0.07, 0.47, 1.06],
      }
    }
  }

  const navigate = useNavigate()

  const handleAboutClick = () => {
    navigate('/portfolio/#skills');
    
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:mymail@gmail.com';
  };

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      navigate('/portfolio/#hero', { replace: true });
    }

  }, [inView, navigate])



return (
<section className="section_hero | even-columns relative f-width" id='hero' ref={ref}>

  <div className="hero_presentation | flex flex-column space-between text-left f-height">

      <div className="flex align-center gap-50">
        <motion.div 
          className='hero_line'
          variants={lineVariants}
          initial='initial'
          animate='animate'
        />
        <Plus strokeWidth={2} color="var(--fc-accent)"/>
      </div>

      <div className="hero_presentation-wrapper flex flex-column align-start gap-200">
        <div>
          <h1>Bienvenue</h1>
          <h2>Je suis Frontend Developer</h2>
        </div>
        <p className="mt-100 mb-150">Je m'appelle Brian FRITZ et je suis passionné par le développement web. Je suis un développeur web junior autodidacte, enthousiaste à l'idée de relever de nouveaux défis et de contribuer à des projets innovants.
        </p>

        <div className='flex gap-100'>
          <Button variant="primary" onClick={handleAboutClick}>En Savoir Plus</Button>
          <Button variant="secondary" onClick={handleContactClick}>Contact</Button>
        </div>

      </div>

      <div className="flex align-center justify-end gap-50">
        <Plus strokeWidth={2} color="var(--fc-accent)"/>
        <motion.div 
          className='hero_line'
          variants={lineVariants}
          initial='initial'
          animate='animate'
        />
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
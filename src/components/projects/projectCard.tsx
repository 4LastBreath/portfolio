import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ProjectCardProps {
  children: React.ReactNode,
  cardIndex: number,
}

const ProjectCard = ({children, cardIndex} : ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(cardRef, {once: true, margin: '0px 0px -70px 0px'})

  useEffect(() => {
    const card = cardRef.current

    if (card) {
      card.style.transitionDelay = `${cardIndex * 0.2}s`
      card.style.opacity = isInView ? '1' : '0'
      card.style.transform = isInView ? 'translateY(0)' : `translateY(-40px)`
    }


  }, [isInView, cardRef, cardIndex])

  return (
  <div className='project_card' ref={cardRef}>
      {children}
  </div>
  );
};

export default ProjectCard;
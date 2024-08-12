import React, { useEffect } from 'react';
import { Section } from './section';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

interface SectionHashProps {
  id: string,
  children: React.ReactNode
}

const SectionHash = ({id, children}: SectionHashProps) => {

  const navigate = useNavigate()

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {

    const timeout = setTimeout(() => {
      if (!inView) return
      if (inView) navigate(`/portfolio/#${id}`, { replace: true });
    }, 100)

    return () => {
      clearTimeout(timeout)
    }

  }, [inView, navigate, id])


  return (
<Section id={id} ref={ref}>
    {children}
</Section>
  );
};

export default SectionHash;
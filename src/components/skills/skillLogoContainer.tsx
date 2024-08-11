import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface SkillLogoContainerProps {
  children: React.ReactNode,
  name: string
}

const SkillLogoContainer = ({children, name} : SkillLogoContainerProps) => {

  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, {once: true, margin: '0px 0px -70px 0px'});

  const randomX = Math.round(Math.random() * 50) - 20;

  useEffect(() => {
    const el = ref.current

    if (el) {
      el.style.opacity = isInView ? '1' : '0'
      el.style.transform = isInView ? 'translate(0, 0)' : `translate(${randomX}px, -40px)`
    }

  }, [isInView, randomX])

  return (
<div className='skill_logo' data-name={name} ref={ref}>
      {children}
</div>
  );
};

export default SkillLogoContainer;
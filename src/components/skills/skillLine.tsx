import { useEffect, useRef } from 'react';
import { useInView, useIsomorphicLayoutEffect, animate } from 'framer-motion';


interface SkillsLineProps {
  title: string,
  ratio: number
}

const SkillLine = ({title, ratio} : SkillsLineProps) => {

  const lineRatioRef = useRef<HTMLDivElement | null>(null)
  const ratioRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(lineRatioRef, {once: true, margin: '0px 0px -70px 0px'})


  useEffect(() => {

    if (lineRatioRef.current) {
      lineRatioRef.current.style.width = isInView ? `${ratio}%` : '0%'
    }

    if (ratioRef.current) {
      ratioRef.current.style.left = isInView ? `${ratio}%` : '0%'
      ratioRef.current.style.opacity = isInView ? `100%` : '0%'
    }

  }, [isInView, ratio])

  useIsomorphicLayoutEffect(() => {

    const el = ratioRef.current

    if (!el) return
    if (!isInView) return

    el.textContent = '0'

    const controls = animate(0, ratio, {
      duration: 1,
      onUpdate(value) {
        el.textContent = `${value.toFixed(0)}%`
      }
    })

    return () => {
      controls.stop()
    }
    
  }, [ratioRef, isInView])

  return (

<div className='skill_line-wrapper | relative f-width'>
    <h3>{title.toUpperCase()}</h3>
    <div className='skill_ratio' ref={ratioRef}>{`${ratio}%`}</div>
    <div className='skill_line'>
        <div className='skill_line-ratio | f-height' ref={lineRatioRef}/>
    </div>
</div>
  );
};

export default SkillLine;
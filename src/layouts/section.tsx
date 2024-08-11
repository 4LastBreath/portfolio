import React, { forwardRef } from 'react';

interface SectionProps {
  id: string,
  children: React.ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(({id, children} : SectionProps, ref) => {
  return (
<section className='section relative' id={id} ref={ref}>
    <div className='section_content'>
       {children}
    </div>
</section>
  );
});

export default Section;
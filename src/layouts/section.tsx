import React from 'react';

interface SectionProps {
  id: string,
  children: React.ReactNode
}

const Section = ({id, children} : SectionProps) => {
  return (
<section className='section relative' id={id}>
    <div className='section_content'>
       {children}
    </div>
</section>
  );
};

export default Section;
import React, { forwardRef, PropsWithChildren } from 'react';

interface SectionProps {
  id: string,
  children: React.ReactNode,
  firstSection?: boolean,
}

export const Section = forwardRef<HTMLElement, SectionProps>(({id, firstSection, children} : SectionProps, ref) => {
  return (
<section className={`${firstSection ? 'first_section | relative' : 'relative'}`} id={id} ref={ref}>
    <div className='section_content'>
       {children}
    </div>
</section>
  );
});


export const SectionTitle = ({children} : PropsWithChildren) => {
  return (
    <h2 className='text-center'>{children}</h2>
  )
}

export const SectionParagraph = ({children} : PropsWithChildren) => {
  return (
    <p className='section_p'>{children}</p>
  )
}
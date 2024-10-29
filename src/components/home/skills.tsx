import SkillLine from '../skills/skillLine';
import SkillLogoContainer from '../skills/skillLogoContainer';
import SectionHash from '../../layouts/sectionHash';
import ShapeDivider from '../ui/shapeDivider';
import { SectionParagraph, SectionTitle } from '../../layouts/section';
import { ExpressJSLogo, MongoDbLogo, NodeJSLogo, ReactLogo, SassLogo, TailwindLogo } from '../logos';

const Skills = () => {

  const skillLogoArr = [
    {
      name: 'React',
      element: <ReactLogo />
    },
    {
      name: 'TailwindCSS',
      element: <TailwindLogo />
    },
    {
      name: 'Sass',
      element: <SassLogo />
    },
    {
      name: 'NodeJS',
      element: <NodeJSLogo />
    },
    {
      name: 'MongoDB',
      element: <MongoDbLogo />
    },
    {
      name: 'ExpressJS',
      element: <ExpressJSLogo />
    },
  ]

  return (
<SectionHash id='skills'>

      <ShapeDivider position='top'/>
      
      <SectionTitle>Compétences</SectionTitle>
      <SectionParagraph>
        Grâce à mon apprentissage en auto-formation, j'ai acquis des compétences en HTML, CSS, JavaScript et en frameworks/librairies modernes
      </SectionParagraph>
      
  <div className='skills_container | even-columns f-width'>


        <div className='skill_logo-grid'>

          {skillLogoArr.map((logo) => (
            <SkillLogoContainer name={logo.name} key={logo.name}>
                {logo.element}
            </SkillLogoContainer>
          ))}

        </div>

        <div className='flex flex-column align-center justify-center gap-250'>

          <SkillLine title='HTML' ratio={90}/>
          <SkillLine title='CSS' ratio={70}/>
          <SkillLine title='JavaScript' ratio={40}/>

        </div>


  </div>

    <ShapeDivider position='bottom' />

</SectionHash>
  );
};

export default Skills;
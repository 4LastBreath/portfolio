import SkillLine from '../skills/skillLine';
import nextJS from '../../styles/assets/img/nextJS.png';
import nodeJS from '../../styles/assets/img/nodeJS.png';
import react from '../../styles/assets/img/react.png';
import sass from '../../styles/assets/img/sass.png';
import mongoDb from '../../styles/assets/img/mongoDB.png';
import expressJS from '../../styles/assets/img/expressJS.png';
import SkillLogoContainer from '../skills/skillLogoContainer';
import SectionHash from '../../layouts/sectionHash';
import ShapeDivider from '../../ui/shapeDivider';

const Skills = () => {

  const skillLogoArr = [
    {
      src: react,
      alt: "logo react",
      name: 'React'
    },
    {
      src: nextJS,
      alt: "logo nextJS",
      name: 'NextJS'
    },
    {
      src: sass,
      alt: "logo sass",
      name: 'Sass'
    },
    {
      src: nodeJS,
      alt: "logo nodeJS",
      name: 'NodeJS'
    },
    {
      src: mongoDb,
      alt: "logo mongoDB",
      name: 'MongoDB'
    },
    {
      src: expressJS,
      alt: "logo expressJS",
      name: 'ExpressJS'
    },
  ]

  return (
<SectionHash id='skills'>

      <ShapeDivider position='top'/>
      <h2 className='text-center'>Compétences</h2>
      <p className='text-center mx-auto mt-100'>
        Grâce à mon apprentissage en auto-formation, j'ai acquis des compétences en HTML, CSS, JavaScript et en frameworks/librairies modernes
      </p>
      
  <div className='skills_wrapper | even-columns'>


        <div className='skill_logo-grid'>

          {skillLogoArr.map((logo) => (
            <SkillLogoContainer name={logo.name} key={logo.name}>
              <img src={logo.src} alt={logo.alt}/>
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
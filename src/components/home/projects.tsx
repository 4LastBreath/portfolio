import SectionHash from "../../layouts/sectionHash";
import { Link } from "react-router-dom";
import { SectionTitle, SectionParagraph } from "../../layouts/section";
import { ExpressJSLogo, JavascriptLogo, ReactLogo, SassLogo, TailwindLogo, TypescriptLogo } from "../logos";
import ProjectCard from "../projects/projectCard";

const Projects = () => {

  const projectsArr = [
    {
      title: 'Todo App with Auth',
      link: 'https://4lastbreath.github.io/dozy/',
      logos: [
        <ReactLogo />,
        <ExpressJSLogo />,
        <TailwindLogo />
      ]
    },
    {
      title: 'Space Tourism',
      link: 'https://space-tourism-04.netlify.app/',
      logos: [
        <ReactLogo />,
        <TypescriptLogo />,
        <SassLogo />
      ]
    },
    {
      title: 'Expenses Calculator',
      link: 'https://4lastbreath.github.io/expenses-calculator/',
      logos: [
        <ReactLogo />,
        <TypescriptLogo />,
        <SassLogo />
      ]
    },
    {
      title: 'Landing Page',
      link: 'https://4lastbreath.github.io/Fylo-dark-theme-landing-page-master/',
      logos: [
        <JavascriptLogo />
      ]
    },
    {
      title: 'Interactive Card Form',
      link: 'https://4lastbreath.github.io/Interactive-card-details-form-main/',
      logos: [
        <JavascriptLogo />
      ]
    },
    {
      title: 'Age Calculator',
      link: 'https://4lastbreath.github.io/Age-calculator-app-main/',
      logos: [
        <JavascriptLogo />
      ]
    }
  ]

  return (
<SectionHash id='projects'>

  <SectionTitle>Projets</SectionTitle>
  <SectionParagraph>Vous trouverez ci-joint un aperçu de mes projets réalisés en développement web</SectionParagraph>

  <div className="projects_container | flex align-center justify-center gap-200 wrap">

    {projectsArr.map((project, i) => (
    <ProjectCard cardIndex={i} key={project.title}>
        <Link className="project_link | flex flex-column space-between align-center relative text-center" to={project.link} target="_blank">
          <h3 className="project_title">{project.title}</h3>
          <div className="project_logos-container | flex justify-center gap-200">

            {project.logos.map((logo, i) => (
              <div className="project_logo-wrapper" key={i}>
                {logo}
              </div>
            ))}

          </div>
        </Link>
      </ProjectCard>
    ))}


  </div>
</SectionHash>
  );
};

export default Projects;
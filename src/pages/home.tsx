import Layout from '../layouts';
import Hero from '../components/home/hero';
import Skills from '../components/home/skills';
import Projects from '../components/home/projects';


const Home = () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />

    </Layout>
  );
};

export default Home;
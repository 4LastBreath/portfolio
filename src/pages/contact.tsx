import ContactForm from '../components/contact/contactForm';
import Layout from '../layouts';
import { Section, SectionTitle } from '../layouts/section';

const Contact = () => {

  return (
<Layout>
  <Section id='contact' firstSection>

    <SectionTitle>Contact</SectionTitle>
    <div className='section_p'>
      <p>Vous pouvez me contacter par mail, téléphone ou avec le formulaire ci-dessous:</p>
      <ul className='contact_cord | mt-200'>
        <li>4brian.fritz@gmail.com</li>
        <li>06 48 64 89 77</li>
      </ul>
    </div>
    <ContactForm />

  </Section>
</Layout>
  );
};

export default Contact;
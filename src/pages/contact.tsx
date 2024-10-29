import ContactForm from '../components/contact/contactForm';
import Layout from '../layouts';
import { Section, SectionTitle } from '../layouts/section';

const Contact = () => {

  return (
<Layout>
  <Section id='contact' firstSection>

    <SectionTitle>Contact</SectionTitle>
    <div className='section_p'>
      <p>N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.</p>
    </div>
    <ContactForm />

  </Section>
</Layout>
  );
};

export default Contact;
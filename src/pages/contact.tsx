import ContactForm from '../components/contact/contactForm';
import Layout from '../layouts';
import { Section, SectionParagraph, SectionTitle } from '../layouts/section';

const Contact = () => {

  return (
<Layout>
  <Section id='contact' firstSection>

    <SectionTitle>Contact</SectionTitle>
    <SectionParagraph>
      Vous pouvez me contacter par mail, téléphone ou avec le formulaire ci-dessous:
      <ul className='contact_cord | mt-200'>
        <li>4brian.fritz@gmail.com</li>
        <li>06 48 64 89 77</li>
      </ul>
    </SectionParagraph>
    <ContactForm />

  </Section>
</Layout>
  );
};

export default Contact;
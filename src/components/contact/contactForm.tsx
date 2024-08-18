import React, { useState } from 'react';
import { InputText, TextArea } from '../ui/inputText';
import { Button } from '../ui/button';
import emailjs from '@emailjs/browser'
import { emailRegex } from '../../utils/regex';
import { ErrorMessage } from '../ui/errorMessage';
import { useToast } from '../../providers/toasts/toastContext';

const ContactForm = () => {

  interface IFormErrors {
    [key: string]: string;
  }

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState<IFormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  function resetForm() {
    setFormData({
      ...formData,
      email: '',
      message: ''
    })
  }

  async function sendEmail() {
    setIsLoading(true)

    try {
      await emailjs.send('service_j7mas45', 'template_ilscfhr', formData, 'vJh8fQ3sMNGxQYrZx')
      resetForm()
      toast.success('Message envoyé avec succès!')
    } catch (err) { 
      console.error('Error...', err)
      toast.error('Une erreur est survenue lors de l\'envoi');
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }))

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const isEmailValid = emailRegex.test(formData.email)
  const isMessageValid = formData.message !== ''
  const hasNonEmptyErrors = Object.values(formErrors).some(err => err !== '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors : IFormErrors = {};
    
    if (!formData.email) {
      validationErrors.email = 'Un email est requis'
    } else if (!isEmailValid) {
      validationErrors.email = 'L\'email est incorrect'
    }

    if (!isMessageValid) {
      validationErrors.message = 'Un message est requis'
    }

    setFormErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      sendEmail()
    }

  }

  return (
  <form className='contact_form | relative flex flex-column align-center gap-200' onSubmit={handleSubmit}>

    <InputText 
      label='Email' 
      value={formData.email}
      name='email'
      onChange={handleChange}
      placeholder='Exemple@mail.com'
      valid={isEmailValid}
      invalid={!!formErrors.email}
    />

    <TextArea
      label='Message' 
      value={formData.message}
      name='message' 
      onChange={handleChange}
      placeholder='Votre message...'
      valid={isMessageValid}
      invalid={!!formErrors.message}
    />

    <Button variant='primary' type='submit' style={{width: '100%'}} loading={isLoading}>Envoyer</Button>

    {hasNonEmptyErrors && 
      <div>
        <ErrorMessage message={formErrors.email}/>
        <ErrorMessage message={formErrors.message}/>
      </div>
    }
      
  </form>
  );
};

export default ContactForm;
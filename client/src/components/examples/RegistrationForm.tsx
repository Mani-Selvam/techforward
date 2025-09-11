import RegistrationForm from '../RegistrationForm';

export default function RegistrationFormExample() {
  return <RegistrationForm onSubmit={(data) => console.log('Form submitted:', data)} />;
}
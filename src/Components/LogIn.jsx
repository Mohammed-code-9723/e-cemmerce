import React, { useState } from 'react';
import 'react-phone-number-input/style.css'; // Import styles for the phone number input
import PhoneInput from 'react-phone-number-input'; // Import the phone input component
import '../Styles/LoginForm.css'; // Create a CSS file to style your form

export default function LogIn(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the data to your server here
    console.log('Form submitted:', { firstName, lastName, email, phoneNumber });
  };

  return (
    <div className='login-form' style={{color:props.theme?'black':'black'}}>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Phone Number</label>
          <PhoneInput
            international
            defaultCountry='US'
            placeholder='Enter phone number'
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
        <div className='form-group'>
          <button type='submit'>Log In</button>
        </div>
      </form>
    </div>
  );
}

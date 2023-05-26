import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [message, setMessage] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    axios.post('/api/sendMessage', { message })
      .then(response => {
        alert('Message sent successfully');
        setMessage('');
      })
      .catch(error => {
        alert('Failed to send message');
      });
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;

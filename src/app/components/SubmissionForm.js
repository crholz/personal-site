"use client"

import React from 'react';
import "./SubmissionForm.css";

const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK;

function SubmissionForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const senderName = document.getElementById('nameInput').value;
    const senderDest = document.getElementById('destInput').value;
    const senderPhone = document.getElementById('phoneInput').value;

    const webhookBody = {
      embeds: [{
        title: 'Ride Requested!',
        fields: [
          { name: 'Name', value: senderName },
          { name: 'Destination', value: senderDest},
          { name: 'Phone Number', value: senderPhone }
        ]
      }],
    };


        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('Ride Request Submitted! Please keep your Ringer on.');
        } else {
          alert('There was an error processing your request.');
        }
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Ride Request</h1>
      <div className="email block">
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="Name"
          name="Name"
          autoComplete="name"
          required
        />
      </div>
      <div className="dest block">
        <div>
          <label htmlFor="destInput">Destination</label>
          <input
            id="destInput"
            type="text"
            name="Destination"
            autoComplete="address"
            required
          />
        </div>
      <div className="block phone">
        <label htmlFor="messageInput">Phone</label>
        <input
          id="phoneInput"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      </div>
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SubmissionForm;

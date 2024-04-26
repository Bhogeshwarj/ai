'use client';
import { useState } from 'react';
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [key, setApiKey] = useState('');

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={(e) => handleSubmit(e, key)}> {/* Pass apiKey when submitting */}
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={key}
          placeholder="Enter API key..."
          onChange={handleApiKeyChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

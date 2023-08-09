import React, { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'x',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const chats = async (e, message) => {
    e.preventDefault();
    setChat([...chat, { role: 'user', content: message }]);
    setMessage('');

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are ChatGPT?',
          },
          ...chat,
        ],
      });

      // Process the response or update your chat state with the response
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main>
        <h1>GPT Test</h1>

        <form onSubmit={(e) => chats(e, message)}>
          <input
            type='text'
            name='message'
            value={message}
            placeholder='Type your message...'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit'>Send</button>
        </form>

        <div className='chat'>
          {chat.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

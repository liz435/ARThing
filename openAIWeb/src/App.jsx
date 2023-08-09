import React, { useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import key from './apikey'

const configuration = new Configuration({
  organization: 'org-JL4yJMw7NNCmXUx2MJWyjg04',
  apiKey: key()
});

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  
  const chats = async (e, message) => {
  
    e.preventDefault();
    if (!message) return;
    setIsTyping(true);


    let msgs = chat ;
    msgs.push({ role: 'user', content: message });
    setChat(msgs);
    setMessage('');

    try{
      console.log(await openai.listModels());
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 150,
        message: [
          {
            role: 'system',
            content: 'You are ChatGPT',
            
          },
          ...chat,
        ],
      }); 
      console.log(response.body)
    }catch(e){
      console.log(e)
    }


    
      // const response = await openai.createChatCompletion({
      //   model: 'gpt-3.5-turbo',
      //   max_tokens: 150,
      //   message: [
      //     {
      //       role: 'system',
      //       content: 'You are ChatGPT',
            
      //     },
      //     ...chat,
      //   ],
      // }).then((res) => {
      //   console.log(res);
      // }).catch((error) => {
      //   console.log(error);
      // });
  };

  return (
    <>
      <main>
        <h1>GPT Test</h1>

        <section>
        {chat && chat.length
          ? chat.map((chats, index) => (
              <p key={index} className={chats.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chats.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chats.content}</span>
              </p>
            ))
          : ""}
      </section>


        <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

        <form onSubmit={(e) => chats(e, message)}>
          <input
            type='text'
            name='message'
            value={message}
            placeholder='Type your message...'
            onChange={(e) => setMessage(e.target.value)}
          />
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

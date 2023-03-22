import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.OPENAI_API_KEY,
  });
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const openai = new OpenAIApi(configuration);
  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });

  return (
    <div className="App">
      ihijmd
    </div>
  )
}

export default App

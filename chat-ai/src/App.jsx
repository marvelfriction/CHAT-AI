import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions'

function App() {
  const [option, setOption] = useState({})
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.OPENAI_API_KEY,
  // });
  // console.log(import.meta.env.VITE_Open_AI_Key);
  // const openai = new OpenAIApi(configuration);
  // const response = openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   temperature: 0,
  //   max_tokens: 7,
  // });

  const selectOption = (option) => {
    setOption(option)
  }
  console.log(Object.values(option));

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation />
      )}
    </div>
  );
}

export default App

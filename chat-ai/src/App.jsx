import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions'

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('')

  const selectOption = (option) => {
    setOption(option)
  }

  const doStuff = async () => {
    let object = {...option, prompt: input}
    const response = await openai.createCompletion(object);
    // console.log(response)
    setResult(response.data.choices[0].text);
  }
  console.log(option)

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App

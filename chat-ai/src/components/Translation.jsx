import React from 'react'

const Translation = ({doStuff, setInput, result}) => {
  return (
    <div>
      <textarea
        className="text-area"
        // cols={80}
        // rows={30}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="action-btn" onClick={doStuff}>Do your stuff!</button>

      <h3 className="result-text">{result}</h3>
    </div>
  )
}

export default Translation
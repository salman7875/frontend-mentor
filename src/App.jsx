/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [quote, setQuote] = useState()
  const URL = 'https://api.api-ninjas.com/v1/quotes?category='
  const key = 'S+vKrr3fYhBU5AVk+WxXAw==h6P3SgmztVbzDDLe'

  const fetchQuoteHandler = async () => {
    const res = await fetch(URL, {
      headers: { 'X-Api-Key': key }
    })
    const data = await res.json()
    setQuote(data[0])
  }

  useEffect(() => {
    fetchQuoteHandler()
  }, [])

  return (
    <div className='container'>
      <div className='wrapper'>
        <h2>
          Category: <span>{quote?.category}</span>
        </h2>
        <p>{quote?.quote}</p>
        <span className='author'>{quote?.author}</span>
      </div>
      <button onClick={fetchQuoteHandler}>Generate</button>
    </div>
  )
}

export default App

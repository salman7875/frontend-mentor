/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-labels */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { data } from './data'
import { useReducer } from 'react'
import './App.css'

const initialState = {
  currentQuestion: 0,
  selectedOption: '',
  score: 0
}

const reducer = (state, action) => {
  if (action.type === 'selectedOption') {
    return {
      ...state,
      selectedOption: state.selectedOption + action.option
    }
  }
  if (action.type === 'right-answer') {
    return {
      ...state,
      score: state.score + 1,
      currentQuestion: state.currentQuestion + 1,
      selectedOption: ''
    }
  }
  if (action.type === 'wrong-answer') {
    return {
      ...state,
      selectedOption: '',
      currentQuestion: state.currentQuestion + 1
    }
  }
  if (action.type === 'reset') {
    return {
      ...initialState
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const currentQuizQuestion = data[state.currentQuestion]

  const changeHandler = e => {
    const value = e.target.value
    dispatch({ type: 'selectedOption', option: value })
  }

  const handleData = () => {
    if (!state.selectedOption) return

    if (state.selectedOption === data[state.currentQuestion].answer) {
      dispatch({ type: 'right-answer' })
      console.log(state.selectedOption)
    } else {
      dispatch({ type: 'wrong-answer' })
    }
  }

  const resetHandler = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <div className='container'>
      {state.currentQuestion < data.length ? (
        <div className='inner-container'>
          <h1>
            {currentQuizQuestion.id}. {currentQuizQuestion.question}
          </h1>
          {currentQuizQuestion.option.map((opt, i) => (
            <div className='option' key={opt}>
              <input
                type='radio'
                name='question'
                value={opt}
                onChange={changeHandler}
              />
              <label>{opt}</label>
            </div>
          ))}
          <button onClick={handleData}>Submit</button>
        </div>
      ) : (
        <Result score={state.score} onClick={resetHandler} />
      )}
    </div>
  )
}

const Result = props => {
  return (
    <div className='result-container'>
      <h2>
        Your Score is:
        <span>
          {props.score}/{data.length}
        </span>
      </h2>
      <button onClick={props.onClick}>Restart</button>
    </div>
  )
}

export default App

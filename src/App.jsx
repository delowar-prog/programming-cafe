import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Question from './components/Question/Question'


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <hr></hr>
      <Question></Question>
    </div>
  )
}

export default App

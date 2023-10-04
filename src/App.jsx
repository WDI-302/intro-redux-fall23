import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter";
import Posts from './components/Posts';
function App() {
  

  return (
    <>
      <h2>Intro Redux</h2>
      <Posts />
      <Counter />
    </>
  )
}

export default App

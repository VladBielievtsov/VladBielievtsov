import { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';

function App() {

  return (
    <>
      <div className="bg"></div>
      <div className='relative z-50'>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App

import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <div className="bg"></div>
      <div className='relative z-50'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

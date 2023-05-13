import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/404.webp';

export default function NotFoundPage() {
  return (
    <div className='w-full h-screen bg-orange-200 flex items-center justify-center flex-col'>
      <img src={img} alt="404" className='max-w-[280px] mb-5' />
      <h2 className='text-6xl text font-bold mb-5'>404</h2>
      <p className='text-lg'>Oops… seems like you got lost</p>
      <motion.button 
        className=''
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className='bg-black text-white py-2 px-4 rounded-md mt-4 inline-flex items-center'>Home</Link>
      </motion.button>
    </div>
  )
}

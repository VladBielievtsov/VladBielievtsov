import React, { useState, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion';
import helloImg from '../assets/hello.webp';
import Project from './project'
import { AiFillGithub } from 'react-icons/ai';

export default function Main() {
  const [langIsOpen, setLangIsOpen] = useState<boolean>(false)
  const [scope, animate] = useAnimate()
  const [isOpenProject, setIsOpenProject] = useState<boolean>(false)

  useEffect(() => {
    animate("ul", !langIsOpen ? { opacity: 1, clipPath: "inset(0% 0% 99% 0% round 0px 0px 6px 6px)" } : { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px 0px 6px 6px)" })
    animate("li", !langIsOpen ? { opacity: 0, filter: "blur(20px)" } : { opacity: 1, filter: "blur(0px)" })
  }, [langIsOpen])

  return (
    <main className='px-4 pt-4 pb-12'>
      <div 
        className='relative max-w-[768px] w-full mx-auto bg-white rounded-md border border-black p-[30px]'
      > 
        <div ref={scope} className="absolute -top-[31px] right-4 w-[75px] z-20">
          <motion.button 
            className='w-[75px] h-[30px] bg-white rounded-t-md relative z-10'
            whileHover={{ y: 0.5 }}
            whileTap={{ y: 2.25 }}
            onClick={() => setLangIsOpen(!langIsOpen)}
          >
            En
          </motion.button>
          <ul className='bg-black text-center absolute b-0 w-full z-20'>
            <li className='py-1 cursor-pointer text-white hover:underline'>En</li>
            <li className='py-1 cursor-pointer text-white hover:underline'>Ua</li>
          </ul>
        </div>
        <section className='mb-20'>
          <div className='relative mb-3'>
            <h1 className='text-3xl font-bold helloImage inline'>Hello There <span className='emoji-wave'>👋</span></h1>
            <img 
              src={helloImg}
              alt="Hello there"
              className='w-[300px] absolute left-[50%] transform -translate-x-[50%] hidden'  
            />
          </div>
          <p className='text-xl tracking-wide'>My name is Vlad Bielievtsov, I have experience in front-end development. I can take a design and make it work in a browser. React and Vue are my favorite frameworks for building websites, and I don't just understand how to do it - I can show you my work in action.</p>
          <p className='text-xl tracking-wide mt-4'>You can see my works on my github</p>
          <motion.button 
            className=''
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://github.com/VladBielievtsov" target='_blank' className='bg-black text-white py-2 px-4 rounded-md mt-4 inline-flex items-center'>GitHub <AiFillGithub className="ml-2" /></a>
          </motion.button>
        </section>
        <section className='mb-20'>
          <h2 className='text-2xl font-bold'>Skills</h2>
          <ol className='columns-2 mt-3 list-decimal list-inside'>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Tailwind</li>
            <li>Chakra-ui</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Frame Motion</li>
            <li>Vue</li>
            <li>Vuex</li>
            <li>Pinia.js</li>
            <li>GSAP</li>
            <li>Wow.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>JWT</li>
            <li>MongoDb</li>
            <li>Firebase</li>
          </ol>
        </section>
        <section className='mb-20'>
          <h2 className='text-2xl font-bold mb-4'>Experience</h2>
          <div className='max-w-xs'>
            <h3 className='text-lg'>Freelance & Themeforest</h3>
            <span className='text-gray-500 text-sm'>2019 - 2021</span>
          </div>
          <div className='max-w-xs mt-4'>
            <h3 className='text-lg'>Metamorfosi</h3>
            <span className='text-gray-500 text-sm'>Sep 2021 - Mar 2023</span>
          </div>
        </section>
        <section className='mb-20'>
          <h2 className='text-2xl font-bold'>My works</h2>
          <div className='mt-4'>
            <div className='flex border-b border-black pb-3 mb-3 items-top'>
              <div className='max-w-[30%] w-full'>
                <h3 onClick={() => setIsOpenProject(!isOpenProject)} className='hover:underline inline-block cursor-pointer'>Title of project</h3>
              </div>
              <div className='max-w-[20%] w-full'>
                <p>2022</p>
              </div>
              <div className='max-w-[50%] w-full'>
                <p>Short description</p>
              </div>
            </div>
            <div className='flex border-b border-black pb-3 mb-3 items-top'>
              <div className='max-w-[30%] w-full'>
                <h3 onClick={() => setIsOpenProject(!isOpenProject)} className='hover:underline inline-block cursor-pointer'>Title of project</h3>
              </div>
              <div className='max-w-[20%] w-full'>
                <p>2022</p>
              </div>
              <div className='max-w-[50%] w-full'>
                <p>Short description</p>
              </div>
            </div>
          </div>
        </section>
        <section className=''>
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <a href="mailto:hello@bvlad.com" className='text-3xl mt-8 inline-block hover:underline'>hello@bvlad.com</a>
          <div className="flex mt-6">
            <a href="https://github.com/VladBielievtsov" target='_blank' className='underline mr-[30px]'>GitHub</a>
            <a href="https://www.linkedin.com/in/vlad-bielievtsov/" target='_blank' className='underline'>LinkedIn</a>
          </div>
        </section>
      </div>
      <Project isOpenProject={isOpenProject} setIsOpenProject={setIsOpenProject} />
    </main>
  )
}

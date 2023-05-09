import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimate } from 'framer-motion';

interface ProjectProps {
  isOpenProject: boolean
  setIsOpenProject: React.Dispatch<React.SetStateAction<boolean>>
  openedProject: number | undefined
  myWorks: {
    id: number, 
    title: string, 
    year: number, 
    role: string
  }[]
}

export default function Project({isOpenProject, setIsOpenProject, openedProject, myWorks}: ProjectProps) {
  const [scope, animate] = useAnimate()
  const [currentProject, setCurrentProject] = useState<{
    id: number, 
    title: string, 
    year: number, 
    role: string
  }>()

  useEffect(() => {
    animate(scope.current, isOpenProject ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" });
    setCurrentProject(myWorks?.find(work => work.id === openedProject))
  }, [isOpenProject])

  return (
    <div ref={scope} className='overflow-auto opacity-0 fixed top-0 left-0 right-0 bottom-0 bg-green-200 p-[30px] z-50'>
      <div className='flex space-x-4 justify-between'>
        <h2 className='text-xl'>Case Study</h2>
        <a href="#" className='text-xl hover:underline'>Open live link</a>
        <h2 className='text-xl'>{currentProject?.title}</h2>
        <h2 onClick={() => setIsOpenProject(!isOpenProject)} className='text-xl hover:underline cursor-pointer'>Close</h2>
      </div>
      <div className='flex pt-[80px] h-full'>
        <div className="max-w-md pr-4 flex flex-col h-full">
          <div className='flex-1'>
            <h2 className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quasi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsam.
            </h2>
          </div>
          <div className='border-b border-gray-600 py-5'>
            <h3 className="text-xl">
              Project info
            </h3>
          </div>
          <div className='border-b border-gray-600 py-5 flex justify-between'>
            <h3 className="text-xl">
              Role
            </h3>
            <h3 className="text-xl">
              {currentProject?.role}
            </h3>
          </div>
          <div className='border-b border-gray-600 py-5 flex justify-between mb-[50px]'>
            <h3 className="text-xl">
              Year
            </h3>
            <h3 className="text-xl">
              {currentProject?.year}
            </h3>
          </div>
        </div>
        <div className="flex-1 pl-[30px] flex justify-end items-start">
          <img className='max-h-full' src="https://images.unsplash.com/photo-1683481951374-1d62b42afaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="title" />
        </div>
      </div>
    </div>
  )
}

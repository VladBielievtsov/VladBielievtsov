import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion';

export default function SwitchLang() {
  const [langIsOpen, setLangIsOpen] = useState<boolean>(false)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("ul", !langIsOpen ? { opacity: 1, clipPath: "inset(0% 0% 99% 0% round 0px 0px 6px 6px)" } : { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px 0px 6px 6px)" })
    animate("li", !langIsOpen ? { opacity: 0, filter: "blur(20px)" } : { opacity: 1, filter: "blur(0px)" })
  }, [langIsOpen])

  return (
    <div ref={scope} className="absolute -top-[31px] right-4 w-[75px] z-20">
      <motion.button 
        className='w-[75px] h-[30px] bg-white rounded-t-md relative z-10'
        whileHover={{ y: 0.5 }}
        whileTap={{ y: 2.25 }}
        onClick={() => setLangIsOpen(!langIsOpen)}
      >
        En
      </motion.button>
      <ul className='bg-black text-center absolute b-0 w-full z-20 opacity-0 langs'>
        <li className='py-1 cursor-pointer text-white hover:underline'>En</li>
        <li className='py-1 cursor-pointer text-white hover:underline'>Ua</li>
      </ul>
    </div>
  )
}

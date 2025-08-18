"use client"

import { toast } from "sonner"
import { motion } from "motion/react";
import { ANIM_CONTAINER, ANIM_ITEM } from "@/lib/constants";

export default function ProjectsPage() {
  const PROJECTS = [
    { name: "QueryFlow", desc: "A chat powered by AI, allowing users to interact with multiple LLMs.", link: "#" },
    { name: "ConvImg", desc: "Simple image converter.", link: "https://convimg.bvlad.com/" },
    { name: "Miyuki", desc: "Multipurpose Discord bot designed to enhance your server experience.", link: "https://discord.com/oauth2/authorize?client_id=1251560717417582714&permissions=8&integration_type=0&scope=bot" },
  ]

  return (
    <motion.main
      className="px-7 py-10 overflow-x-hidden"
      variants={ANIM_CONTAINER}
      initial="hidden"
      animate="show"
    >
      <div className="prose max-w-content! mx-auto!">
        <motion.h1 variants={ANIM_ITEM}>Projects</motion.h1>
      </div>
      <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-4 max-w-content! mx-auto!">
        {PROJECTS.map((project) => {
          return project.link !== "#" ? (
            <motion.a
              key={project.link}
              href={project.link}
              variants={ANIM_ITEM}
              target="_blank"
              className="border-surface0 border p-2 md:p-4 rounded-md hover:bg-surface0/40 transition ease-out duration-200"
            >
              <h3 className="mb-2">{project.name}</h3>
              <p className="text-subtext0 text-sm">{project.desc}</p>
            </motion.a>
          ) : (
            <motion.button
              key={project.link}
              variants={ANIM_ITEM}
              className="border-surface0 border p-2 md:p-4 rounded-md hover:bg-surface0/40 transition ease-out duration-200 cursor-pointer text-left"
              onClick={() => toast(<p className="text-[14px] font-sans-serif font-bold">Coming soon.</p>)}
            >
              <h3 className="mb-2">{project.name}</h3>
              <p className="text-subtext0 text-sm">{project.desc}</p>
            </motion.button>
          )
        })}
      </div>
    </motion.main>
  )
}

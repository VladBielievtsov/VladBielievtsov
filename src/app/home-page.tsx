"use client"

import { motion } from "motion/react";
import { ANIM_CONTAINER, ANIM_ITEM, MY_LINK } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="px-7 py-10 overflow-x-hidden">
      <motion.div
        className="prose max-w-article! mx-auto!"
        variants={ANIM_CONTAINER}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={ANIM_ITEM}>Vlad Bielievtsov</motion.h1>
        <motion.p variants={ANIM_ITEM}>Hi! I&apos;m full-stack developer focused on frontend. I mostly spend my time with web development, with Nextjs, Tailwindcss, and Go on backend. I also dabble in other things, like discord bots. I try to learn new things.</motion.p>
        <motion.p variants={ANIM_ITEM}>This website is made using Nextjs, I intend to use this website as a place where I can show my projects and write some blogs about what I do in general.</motion.p>
        <motion.p variants={ANIM_ITEM}>If you want to contact me, you can do so by sending me a DM on <a
          href={MY_LINK.DISCORD}
          target="_blank">Discord</a>, and you can also find me on Twitter <a
            href={MY_LINK.TWITTER}
            target="_blank"
            className="text-mauve hover:underline">@VBelevtsov</a
          > and <a
            href={MY_LINK.GITHUB}
            target="_blank"
            className="text-mauve hover:underline">Github</a
          >.</motion.p>
        <motion.p variants={ANIM_ITEM}>Or mail me at hi@bvlad.com</motion.p>
      </motion.div>
    </main>
  )
}

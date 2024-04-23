import React from "react";
import { TbFileDownload } from "react-icons/tb";
import { motion } from "framer-motion";
import helloImg from "../assets/hello.webp";

export default function Hero() {
  return (
    <section>
      <div className="relative mb-8">
        <h1 className="text-4xl font-bold helloImage inline">
          Vlad Bielievtsov <span className="emoji-wave">👋</span>
        </h1>
        <img
          src={helloImg}
          alt="Hello there"
          className="w-[300px] absolute left-[50%] transform -translate-x-[50%] hidden"
        />
      </div>
      <p className="text-base tracking-wide mb-5">
        Hi, I am Vlad Bielievtsov, a Front-end Developer
      </p>
      <motion.button
        className=""
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-[#b4befe] text-[#1E1E2E] py-2 px-4 rounded-md inline-flex items-center"
          download
        >
          Resume <TbFileDownload className="ml-2 text-lg" />
        </a>
      </motion.button>
    </section>
  );
}

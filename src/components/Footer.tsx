import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <section>
      <h2 className="text-lg mb-5">Find me on</h2>
      <div className="mb-5">
        <a
          href="https://github.com/VladBielievtsov"
          target="_blank"
          className="inline-flex items-center space-x-1 border-b border-[#e5e7eb50] hover:border-[#e5e7eb] transition mr-1"
        >
          <AiFillGithub className="text-xl" />
          <span>GitHub</span>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/vlad-bielievtsov"
          target="_blank"
          className="inline-flex items-center space-x-1 border-b border-[#e5e7eb50] hover:border-[#e5e7eb] transition"
        >
          <IoLogoLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
      </div>
      <p>
        Or mail me at{" "}
        <a href="mailto:hi@bvlad.com" className="inline-block hover:underline">
          hi@bvlad.com
        </a>
      </p>
    </section>
  );
}

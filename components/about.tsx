"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My software engineer career started in 2020, as I was enrolled in a
        internship and after 2 months I was hired as a{" "}
        <span className="font-medium">front-end developer</span>. At the same
        time, I was finishing my Bachelor degree in{" "}
        <span className="font-medium">Information Systems</span>, which I got it
        in mid-2021.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, Node.js, MySQL</span>.
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. About 6 months
        ago I started training swimming regularly and it became a passion.{" "}
      </p>
    </motion.section>
  )
}

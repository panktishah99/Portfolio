"use client";
import Hero from "@/components/Hero/Hero";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="flex-col max-w-full w-full lg:max-w-[750px] lg:w-[80%] lg:flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-hidden lg:overflow-visible p-[80px_0px]  ">
        <Hero />
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="w-full max-w-3xl mx-auto my-12 p-8 rounded-2xl bg-very-dark-gray border border-dark-gray-3 flex flex-col items-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
          <p className="text-lg text-light-gray-2 leading-relaxed text-center font-medium">
            From the vibrant classrooms of Gujarat to the innovative labs of the
            University of Washington, my journey has been defined by curiosity,
            resilience, and a passion for building technology that matters. I am{" "}
            <span className="font-bold text-white">Pankti Bhaskar Shah</span>—a
            software engineer, product builder, and lifelong learner. My
            academic path, crowned by a 3.82 GPA in my MS in Computer Science &
            Software Engineering, has been a launchpad for exploring scalable
            web architectures, AI-driven systems, and cloud-native design.
            <br />
            <br />
            At Oracle, I became a core contributor to the ERP Cloud SaaS
            platform, delivering 150+ code fixes and custom solutions for global
            clients, while leading support and mentoring new engineers. My time
            at Deutsche Bank saw me automate backend infrastructure, reducing
            manual effort and error rates for a 40+ person team.
            <br />
            <br />
            But my true calling lies in building products that blend technical
            excellence with social impact. From Emma—an award-winning AI voice
            therapy platform—to LoveStorying, an AI-powered story crafter for
            children, I strive to create technology that is empathetic,
            accessible, and transformative.
            <br />
            <br />
            Whether collaborating on capstone projects, mentoring peers, or
            pushing the boundaries of AI, I bring intent, clarity, and care to
            every line of code. This is my story—a journey of innovation,
            leadership, and a relentless drive to make a difference.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

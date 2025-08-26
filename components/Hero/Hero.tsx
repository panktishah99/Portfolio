"use client";
import { PanksImage, handGif } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { Calendar1, Mail } from "lucide-react";
import Button from "../ui/Button";

import { motion } from "framer-motion";
import AnimatedImageGrid from "../ui/AnimatedImageGrid";
import CounterContainer from "../CounterContainer/CounterContainer";

export default function Hero() {
  return (
    <div className="flex flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible p-0 relative w-full ">
      {/* top  */}
      <section className="flex flex-col lg:flex-row items-center flex-none flex-nowrap gap-[20px] h-min justify-start overflow-visible p-0 relative w-full ">
        <div className="w-full flex justify-center lg:justify-start md:items-center flex-none flex-nowrap flex-col gap-[10px] h-min p-0 relative md:w-min overflow-hidden">
          <div className="aspect-auto flex-none h-auto w-[300px] relative bg-image-bg mx-auto">
            <figure className="h-full w-full">
              <Image
                src={PanksImage}
                alt="Avatar"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <AnimatedImageGrid image={PanksImage} />
            </figure>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2 p-0 relative w-full h-auto text-center lg:text-left">
          <div className="flex flex-col gap-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-1"
            >
              <span>
                <Image
                  src={handGif}
                  className="waveHand"
                  alt="Hand Gesture"
                  width={25}
                  height={25}
                />
              </span>
              <p className="text-light-gray-2 font-bold leading-[1.2em] text-[20px]">
                Hello, I Am
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="text-4xl leading-[1.2em] font-bold text-white"
            >
              Pankti Bhaskar Shah
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-[18px] text-light-gray-2 font-medium leading-[150%] mb-4"
          >
            Software Engineer | Product Builder | Innovation-Driven Developer.
            MS in CS & SE at University of Washington. Ex-Oracle. Passionate
            about AI, backend, and building products for social impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="flex  items-start flex-none flex-nowrap  w-full gap-5 h-min justify-start p-0 relative"
          >
            <Button
              position="left"
              icon={<Mail size={18} />}
              title="Email Me"
            />
            <Button
              position="left"
              icon={<Calendar1 size={18} />}
              title="Schedule Call"
            />
          </motion.div>
        </div>
      </section>
      {/* middle  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          delay: 0.6,
        }}
        viewport={{ once: true }}
      >
        {/* bottom  */}
        <CounterContainer />
      </motion.div>
    </div>
  );
}

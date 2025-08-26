"use client";

import { PanksImage } from "@/app/assets/assets";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Tooltip from "../ui/Tooltop";
import { pagesLists } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineMail,
} from "react-icons/ai";
import { X } from "lucide-react";

interface SideNavbarProps {
  isMenuOpen?: boolean;
  onClose?: () => void;
}

export default function SideNavbar({ isMenuOpen, onClose }: SideNavbarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Accessibility: Close on Esc
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, onClose]);

  // Focus trap for accessibility
  useEffect(() => {
    if (!isMenuOpen || !sidebarRef.current) return;
    const focusableEls = sidebarRef.current.querySelectorAll(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length) (focusableEls[0] as HTMLElement).focus();
  }, [isMenuOpen]);

  // Mobile: Full-screen drawer
  if (isMenuOpen) {
    return (
      <AnimatePresence>
        <motion.div
          key="mobile-sidebar"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed inset-0 z-[2000] flex lg:hidden"
        >
          {/* Glassy blurred backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
            onClick={onClose}
            aria-label="Close menu background"
          />
          <nav
            ref={sidebarRef}
            className="relative bg-[rgba(18,18,18,0.98)] w-[90vw] max-w-[340px] h-full flex flex-col justify-between shadow-2xl border-r border-dark-gray-4 p-5 animate-slide-in-left"
            tabIndex={-1}
            aria-label="Mobile navigation sidebar"
          >
            {/* Top row: Avatar, Name, Close */}
            <div className="flex items-center justify-between mb-8 mt-2">
              <Link
                href="/"
                className="flex items-center gap-3"
                tabIndex={0}
                onClick={onClose}
              >
                <div className="w-12 h-12 rounded-full bg-darkest-gray border border-zinc-800 overflow-hidden flex items-center justify-center">
                  <Image
                    src={PanksImage}
                    width={48}
                    height={48}
                    alt="Avatar"
                    className="block w-full h-full rounded-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <span className="text-base font-bold text-white">Pankti</span>
              </Link>
              <button
                onClick={onClose}
                className="ml-2 p-2 rounded-full bg-dark-gray-4 hover:bg-dark-gray-7 text-light-gray-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            {/* Nav items */}
            <ul className="flex flex-col gap-5 mt-2">
              {pagesLists.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <li key={page.id}>
                    <Link
                      href={page.href}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400
                        ${
                          isActive
                            ? "bg-almost-black border border-dark-gray-3 text-white dark:text-white text-black"
                            : "hover:bg-very-dark-gray hover:border-dark-gray-3 text-light-gray-3 dark:text-light-gray-3 text-gray-400 border border-transparent"
                        }
                      `}
                      tabIndex={0}
                      onClick={onClose}
                    >
                      {page.title === "Home" && (
                        <AiOutlineHome size={24} color="currentColor" />
                      )}
                      {page.title === "About" && (
                        <AiOutlineUser size={24} color="currentColor" />
                      )}
                      {page.title === "Projects" && (
                        <AiOutlineFolderOpen size={24} color="currentColor" />
                      )}
                      {page.title === "Contact" && (
                        <AiOutlineMail size={24} color="currentColor" />
                      )}
                      <span>{page.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Go to Top */}
            <div className="mt-auto pt-8 flex justify-end">
              <Link
                href="#top"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-light-gray-2 hover:bg-very-dark-gray border border-transparent hover:border-dark-gray-3 transition-all duration-200"
                onClick={onClose}
              >
                <ArrowUp size={20} />
                <span>Go to Top</span>
              </Link>
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Desktop sidebar (unchanged)
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, type: "spring" }}
      className="hidden lg:block max-w-[13%] w-full border-r border-border-color h-screen md:sticky top-0 flex-none z-10"
    >
      <div className="flex items-end justify-between h-full flex-none flex-nowrap relative p-[20px_30px_40px_0px] flex-col">
        {/* top */}
        <Link
          href="/"
          className="bg-border-color rounded-full w-[60px] border border-zinc-800 hover:scale-95 transition-all duration-300 h-auto aspect-square p-[4px] relative overflow-hidden flex items-center justify-center flex-none flex-nowrap gap-[10px]"
        >
          <div className="w-[50px] aspect-square h-auto rounded-full flex-none relative bg-darkest-gray">
            <div className="absolute rounded-full inset-0">
              <Image
                src={PanksImage}
                fill
                quality={100}
                alt="Avatar"
                className="block w-full h-full rounded-full opacity-80 object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </Link>
        {/* middle */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col flex-none flex-nowrap gap-[20px] h-min justify-start p-0 relative w-min z-10 items-start"
        >
          {pagesLists.map((page, index) => {
            const isActive = pathname === page.href;
            return (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{
                  once: true,
                }}
                key={page.id}
              >
                <Link
                  href={page.href}
                  className={`p-3.5 group flex cursor-pointer border border-transparent items-center justify-center transition-all duration-300 h-min w-min  relative rounded-xl
                    ${
                      isActive
                        ? "bg-almost-black border-dark-gray-3 text-white dark:text-white text-black"
                        : "hover:bg-very-dark-gray hover:border-dark-gray-3 text-light-gray-3 dark:text-light-gray-3 text-gray-400"
                    }
                  `}
                >
                  {page.title === "Home" && (
                    <AiOutlineHome size={24} color="currentColor" />
                  )}
                  {page.title === "About" && (
                    <AiOutlineUser size={24} color="currentColor" />
                  )}
                  {page.title === "Projects" && (
                    <AiOutlineFolderOpen size={24} color="currentColor" />
                  )}
                  {page.title === "Contact" && (
                    <AiOutlineMail size={24} color="currentColor" />
                  )}
                  <Tooltip content={page.title} position="right" />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
        {/* bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            type: "spring",
            stiffness: 120,
          }}
          className="relative group items-center w-full flex justify-end max-w-max"
        >
          <Link
            href="#top"
            className={`p-3.5  flex cursor-pointer border border-transparent overflow-hidden items-center justify-center h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3
                        }`}
          >
            <span className="text-light-gray-2">
              <ArrowUp size={24} />
            </span>
          </Link>
          <Tooltip content="Go to Top" position="top" />
        </motion.div>
      </div>
    </motion.div>
  );
}

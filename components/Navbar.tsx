import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const navItems = [
    { name: "Home", id: "header" },
    { name: "About", id: "about" },
    { name: "My Certificate", id: "certificate" },
    { name: "My Project", id: "project" },
    { name: "Contact Me", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: id === "header" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-16rem";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const contactButtonVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const themeButtonVariants = {
    hover: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
  };

  const logoText = "MyPortofolio";

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background image"
          className="w-full"
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20"
            : ""
        }`}
      >
        <motion.div
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 mt-3 font-jakarta"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex">
            {logoText.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
                className="inline-block cursor-default"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              variants={navItemVariants}
              whileHover="hover"
              custom={index}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="font-jakarta relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 dark:bg-white group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            variants={themeButtonVariants}
            whileHover="hover"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="icon dark theme"
              className="w-6"
            />
          </motion.button>

          <motion.a
            variants={contactButtonVariants}
            whileHover="hover"
            href="https://wa.me/6285782786942"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2.5 border border-gray-500 rounded-full font-poppins dark:border-white/50 lg:gap-3 lg:px-10 lg:py-2.5 lg:ml-4"
          >
            {/* Icon tampil di semua ukuran layar */}
            <Phone
              size={24}
              className={isDarkMode ? "text-white" : "text-gray-800"}
            />
            {/* Teks hanya untuk desktop */}
            <span className="hidden lg:block">Contact</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu image"
              className="w-6"
            />
          </motion.button>
        </div>

        <motion.ul
          ref={sideMenuRef}
          initial={{ right: "-16rem" }}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 dark:bg-darkHover dark:text-white"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="absolute right-6 top-6"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer"
            />
          </motion.div>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10, scale: 1.05 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="font-jakarta"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Navbar;

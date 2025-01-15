import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const googleDriveUrl = 'https://drive.google.com/file/d/1WK0QNoHXwdD5f2I_SwutSlW3IlYRMXsJ/view?usp=drive_link';
      window.open(googleDriveUrl, '_blank');
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resume. Please try again later.');
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    }
  };

  return (
    <div 
      id="header" 
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=""
      >
        <Image
          src={assets.Profile}
          alt="profile"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-poppins"
      >
        Hai, I'm Samsul Maarif{" "}
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-poppins"
      >
        Web developer and Tech Enthusiast
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-poppins"
      >
        Tangerang Selatan | Indonesia
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={handleDownload}
          disabled={isDownloading}
          className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black
            ${isDownloading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-50 active:bg-gray-100'}`}
        >
          {isDownloading ? "Downloading..." : "Download My Resume"}{" "}
          <Image 
            src={assets.download_icon} 
            alt="download" 
            className={`w-4 ${isDownloading ? 'animate-bounce' : ''}`} 
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
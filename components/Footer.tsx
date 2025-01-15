import React, { useState } from 'react'; // Pastikan useState di-import
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const emailVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const EmailCopy: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("samsulmaarif1076@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset setelah 2 detik
    });
  };

  return (
    <motion.div
      variants={emailVariants}
      whileHover="hover"
      className="w-max flex items-center gap-3 mx-auto bg-gray-50 dark:bg-gray-800/50 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Image 
        src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
        alt="email icon" 
        className="w-6"
      />
      <span
        className="font-medium select-all cursor-pointer"
        onClick={handleEmailClick}
      >
        {copied ? "Email copied!" : "samsulmaarif1076@gmail.com"}
      </span>
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/Samsulmaarif01', Icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samsul-maarif-2b8867335/', Icon: Linkedin }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const socialLinkVariants = {
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mt-20 pb-8"
    >
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-2xl md:text-3xl font-jakarta font-bold mb-6"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h1>
        
        <EmailCopy isDarkMode={isDarkMode} />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="max-w-6xl mx-auto px-4 mt-16"
      >
        <motion.div 
          className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 font-medium"
          >
            © {new Date().getFullYear()} Samsul Maarif. All rights reserved.
          </motion.p>

          <motion.ul 
            className="flex items-center gap-8"
            variants={itemVariants}
          >
            {socialLinks.map(({ name, url, Icon }) => (
              <motion.li key={name} variants={socialLinkVariants} whileHover="hover">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{name}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

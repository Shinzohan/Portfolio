import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Head from 'next/head';

const Downloading = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      setIsDownloading(false);
      
      const link = document.createElement('a');
      link.href = '/Harshresume.pdf';
      link.download = '/Harshresume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); 
  };

  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        {/* Add any necessary meta tags */}
      </Head>
      <motion.button
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden absolute left-96 bottom-[7.5rem] px-1 py-1 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
        onClick={handleDownload}
        style={{ cursor: 'pointer' }}
      >
        <ul className="p-5">
          <li>
            <span className="text-xl font-semibold text-white">Download Resume</span>
          </li>
        </ul>
      </motion.button>
      <AnimatePresence> 
        {isDownloading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }} 
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
          >
            <p className="text-white text-xl">Downloading...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Downloading;

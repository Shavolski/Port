import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function greetings() {
  return (
    <div class="flex items-center justify-center h-screen static">
      {/* main background */}
  	   <motion.div
         className="bg-black p-10"
         animate={{
           scale: [1, 2, 2, 1, 1],
           rotate: [0, 0, 270, 270, 0],
           borderRadius: ["20%", "20%", "50%", "20%", "0%"],
           width: ['0%', '0%', '0%', '0%', '100%'],
           height: ['0%', '0%', '0%', '0%', '100%'],
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
         }}
       />

       {/* white box */}
       <motion.div
         className="container2 absolute"
         animate={{
           x:[0, 0,0, 0, -90],
           scale: [1, 2, 2, 1, 1],
           rotate: [0, 0, 270, 270, 0],
           borderRadius: ["20%", "50%", "50%", "50%", "20%"]
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
         }}
       />

       {/* greeting text */}
       <motion.div
         className="absolute"
         animate={{
           opacity: [0, 0, 0, 0, 1],
           y:[90, 90, 90, 90, 0]
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
         }}
      >
        <p class="text-5xl text-white">Hello.</p>
      </motion.div>

      {/* link to the main page */}
      <Link to="/home" className="absolute">
        <motion.div
          animate={{
            opacity: [0, 0, 0, 0, 1],
            x:[0, 0,0, 0, -90],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          >
          <svg class="w-5 text-white stroke-2 animate-bounce hover:text-red-700"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </Link>

    </div>
  );
};

export default greetings;

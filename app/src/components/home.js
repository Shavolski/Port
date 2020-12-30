import React from 'react';
import { motion } from "framer-motion"
import Nav from "./navbar"
function home() {
  return (
    <div class="flex items-center justify-center h-screen static bg-black">
      {/* main background */}

       {/* white box */}
       <motion.div
         className="container2 absolute mr-44"
         animate={{
           x:[0, 0, 0, 0, 0],
           borderRadius: ["20%", "20%", "20%", "20%", "20%"]
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
         }}
       />


    </div>
  );
};

export default home;

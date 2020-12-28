import React from 'react';
import { motion } from "framer-motion";

function greetings() {
  return (
    <div className="h-screen bg-black grid grid-rows-2 m-16">
      <div className="grid grid-cols-2">
        <motion.div className="container justify-self-end self-end"/>
        <motion.div className="container self-end"/>
      </div>
      <div className="grid grid-cols-2">
        <motion.div className="container justify-self-end"/>
        <motion.div className="container"/>
      </div>
    </div>
  );
};

export default greetings;

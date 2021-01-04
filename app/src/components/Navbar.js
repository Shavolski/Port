import React from 'react';
import Modal from './miniComponents/modal.js';
function Home() {
  return (
    <div class="bg-black h-screen w-20 grid grid-rows-2">
      <div className="bg-yellow-600 p-6 h-20 outline-none focus:outline-none">
        <svg class="stroke-current stroke-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <div>
        <Modal/>
      </div>
    </div>
  );
};

export default Home;

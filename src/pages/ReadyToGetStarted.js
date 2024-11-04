// ReadyToGetStarted.js
import React from 'react';
import { Link } from 'react-router-dom';

const ReadyToGetStarted = () => {
   return (
      <section className="bg-white text-black py-12">
      <div className="max-w-md mx-auto text-center">
         <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
         <p className="text-lg mb-8">Sign up now and start your journey!</p>
         <Link  
  to="/login" 
  className="inline-block px-6 py-3 bg-[#1320ea] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition duration-300">
  Sign Up Now
</Link>

      </div>
   </section>
   
   );
};

export default ReadyToGetStarted;
    
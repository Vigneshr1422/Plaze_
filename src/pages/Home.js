// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/i.png'; // Update with your image path
import HeaderFooter from './HeaderFooter'; // Import your HeaderFooter component
import ReadyToGetStarted from './ReadyToGetStarted'; // Import the new component

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeaderFooter /> {/* Include HeaderFooter here */}
      <div className="pt-20"> {/* Adjust padding-top for fixed header */}
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">📈🌟 Welcome to the Placement Co-ordination App 🌟📈

</h2>
              <p className="text-xl md:text-2xl mb-6">Building connections, nurturing relationships.</p>
              <Link 
  to="/login" 
  className="inline-block px-6 py-3 bg-[#1320ea] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition duration-300">
  Get Started
</Link>

            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img src={image} alt="Love Project" className="w-full max-w-xs md:max-w-md" />
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Container 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h3>
                <p className="text-gray-600 text-center">
                  Our platform offers an intuitive interface that makes it easy for users to navigate and access features seamlessly.
                </p>
              </div>

              {/* Container 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Robust Security</h3>
                <p className="text-gray-600 text-center">
                  We prioritize your security with advanced encryption and data protection measures to keep your information safe.
                </p>
              </div>

              {/* Container 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">24/7 Customer Support</h3>
                <p className="text-gray-600 text-center">
                  Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Get Started Section */}
        <ReadyToGetStarted /> {/* Add the new component here */}

      </div>
      <footer className="bg-[#6766f5] text-white py-4">
            <div className="container mx-auto text-center">
                <p>© 2024 Plaze . . . All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default Home;

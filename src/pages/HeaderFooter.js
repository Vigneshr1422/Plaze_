// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const HeaderFooter = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-pink-500 text-white py-4 fixed w-full top-0 left-0 z-50">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <h1 className="text-3xl font-bold">Plaze_</h1>

//           {/* Hamburger Icon */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col items-center justify-center focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-6">
//             <ul className="flex flex-row space-x-6">
//               <li>
//                 <Link to="/" className="text-xl hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-xl hover:underline">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-xl hover:underline">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/login" className="text-xl hover:underline">
//                   Admin
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Overlay Menu */}
//         {isMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
//             onClick={toggleMenu} // Clicking outside menu closes it
//           ></div>
//         )}

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-pink-600 p-5 transition-transform duration-300 z-50 ${
//             isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
//           }`}
//         >
//           <button
//             onClick={toggleMenu}
//             className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
//           >
//             &times;
//           </button>
//           <ul className="mt-10 space-y-4 text-white">
//             <li>
//               <Link to="/" className="text-xl" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/services" className="text-xl" onClick={toggleMenu}>
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-xl" onClick={toggleMenu}>
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/login" className="text-xl" onClick={toggleMenu}>
//                 Admin
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default HeaderFooter;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const HeaderFooter = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-pink-500 text-white py-4 fixed w-full top-0 left-0 z-50">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <h1 className="text-3xl font-bold">Plaze_</h1>

//           {/* Hamburger Icon */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col items-center justify-center focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex md:items-center md:space-x-6">
//             <ul className="flex flex-row space-x-6">
//               <li>
//                 <Link to="/" className="text-xl hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#services" className="text-xl hover:underline">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="#about" className="text-xl hover:underline">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/login" className="text-xl hover:underline">
//                   Admin
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Overlay Menu */}
//         {isMenuOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
//             onClick={toggleMenu} // Clicking outside menu closes it
//           ></div>
//         )}

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-pink-600 p-5 transition-transform duration-300 z-50 ${
//             isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
//           }`}
//         >
//           <button
//             onClick={toggleMenu}
//             className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
//           >
//             &times;
//           </button>
//           <ul className="mt-10 space-y-4 text-white">
//             <li>
//               <Link to="/" className="text-xl" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="#services" className="text-xl" onClick={toggleMenu}>
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link to="#about" className="text-xl" onClick={toggleMenu}>
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/login" className="text-xl" onClick={toggleMenu}>
//                 Admin
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default HeaderFooter;















import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderFooter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-pink-500 text-white py-4 fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Plaze_</h1>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center justify-center focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <ul className="flex flex-row space-x-6">
              <li>
                <Link to="/" className="text-xl hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-xl hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-xl hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-xl hover:underline">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={toggleMenu} // Clicking outside menu closes it
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-pink-600 p-5 transition-transform duration-300 z-50 ${
            isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
          >
            &times;
          </button>
          <ul className="mt-10 space-y-4 text-white">
            <li>
              <Link to="/" className="text-xl" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#services" className="text-xl" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="#about" className="text-xl" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-xl" onClick={toggleMenu}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderFooter;

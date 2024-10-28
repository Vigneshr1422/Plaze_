// import React, { useState } from 'react';  25.10.2024 ***** 

// const StudentForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     tenth: '',
//     twelfth: '',
//     ug: '',
//     pg: '',
//     skillSet: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Data saved successfully');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="max-w-lg w-full bg-white p-8 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Student Details</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">Name:</span>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">10th Grade Percentage:</span>
//             <input
//               type="text"
//               name="tenth"
//               value={formData.tenth}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">12th Grade Percentage:</span>
//             <input
//               type="text"
//               name="twelfth"
//               value={formData.twelfth}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">UG Percentage:</span>
//             <input
//               type="text"
//               name="ug"
//               value={formData.ug}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">PG Percentage (if applicable):</span>
//             <input
//               type="text"
//               name="pg"
//               value={formData.pg}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <label className="block">
//             <span className="block text-gray-700 font-medium mb-1">Skill Set:</span>
//             <input
//               type="text"
//               name="skillSet"
//               value={formData.skillSet}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </label>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StudentForm;


// // // Ensure this path is correct
// // import { addDoc, collection } from 'firebase/firestore';
// // import { useAuthContext } from '../context/AuthContext';

// // const StudentEntryForm = () => {
// //   const { user } = useAuthContext(); // Get logged-in user from context
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     tenth: '',
// //     twelfth: '',
// //     ug: '',
// //     pg: '',
// //     skillSet: '',
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!user) {
// //       console.error('User is not authenticated');
// //       return; // Prevent submission if user is not authenticated
// //     }

// //     try {
// //       // Add the student data to the Firestore
// //       await addDoc(collection(db, 'students'), {
// //         ...formData,
// //         userId: user.uid, // Associate student with the logged-in user
// //       });
// //       console.log('Student added:', formData);
// //       // Optionally, reset the form or give feedback to the user
// //       setFormData({
// //         name: '',
// //         tenth: '',
// //         twelfth: '',
// //         ug: '',
// //         pg: '',
// //         skillSet: '',
// //       });
// //     } catch (error) {
// //       console.error('Error adding student:', error);
// //     }
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2>Enter Student Details</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Name:
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <label>
// //           10th Grade Percentage:
// //           <input
// //             type="text"
// //             name="tenth"
// //             value={formData.tenth}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <label>
// //           12th Grade Percentage:
// //           <input
// //             type="text"
// //             name="twelfth"
// //             value={formData.twelfth}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <label>
// //           UG Percentage:
// //           <input
// //             type="text"
// //             name="ug"
// //             value={formData.ug}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <label>
// //           PG Percentage (if applicable):
// //           <input
// //             type="text"
// //             name="pg"
// //             value={formData.pg}
// //             onChange={handleChange}
// //           />
// //         </label>
// //         <label>
// //           Skill Set:
// //           <input
// //             type="text"
// //             name="skillSet"
// //             value={formData.skillSet}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <button type="submit" className="btn">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // export default StudentEntryForm;
// import React from 'react';
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentEntry = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Entry</h2>
          
//           {/* Student Entry Form */}
//           <form>
//             {/* Personal Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter student's full name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
//                 <input
//                   type="date"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//             </div>

//             {/* Academic Details */}
//             <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Academic Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">10th Grade Percentage</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter 10th grade percentage"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">12th Grade Percentage</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter 12th grade percentage"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Undergraduate Percentage</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter UG percentage"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Postgraduate Percentage</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter PG percentage"
//                 />
//               </div>
//             </div>

//             {/* Skill Set */}
//             <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Skill Set</h3>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//                 placeholder="Enter skills (e.g., JavaScript, Python, etc.)"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentEntry;


// working code not addional functionality
// import React, { useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const StudentEntry = () => {
//   const { user } = useAuthContext(); // Get the currently logged-in user
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     tenth: '',
//     twelfth: '',
//     ug: '',
//     pg: '',
//     skillSet: '',
//   });

//   // Handler for input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Ensure percentage fields don't exceed 100
//     if (['tenth', 'twelfth', 'ug', 'pg'].includes(name) && value > 100) {
//       toast.error('Percentage cannot exceed 100');
//       return;
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handler for form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       toast.error('User not authenticated');
//       return;
//     }

//     setLoading(true); // Set loading to true when the form is submitted

//     try {
//       // Add document to Firestore
//       const docRef = await addDoc(collection(db, 'students'), {
//         ...formData,
//         userId: user.uid, // Include userId to link to the current user
//       });
//       toast.success('Data saved successfully!');
//       console.log('Document written with ID: ', docRef.id);
      
//       // Clear the form after submission
//       setFormData({
//         name: '',
//         tenth: '',
//         twelfth: '',
//         ug: '',
//         pg: '',
//         skillSet: '',
//       });
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       toast.error('Error saving data');
//     } finally {
//       setLoading(false); // Stop loading after the form is submitted
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Main Content with increased space between the navigation and form */}
//       <main className="flex-grow bg-gray-100 p-6 mt-24"> {/* mt-24 increases space between navbar and form */}
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Entry</h2>

//           {/* Student Entry Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//                 placeholder="Enter student's full name"
//                 required
//               />
//             </div>

//             {/* Academic Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">10th Grade Percentage</label>
//                 <input
//                   type="number"
//                   name="tenth"
//                   value={formData.tenth}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter 10th grade percentage"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">12th Grade Percentage</label>
//                 <input
//                   type="number"
//                   name="twelfth"
//                   value={formData.twelfth}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter 12th grade percentage"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Undergraduate Percentage</label>
//                 <input
//                   type="number"
//                   name="ug"
//                   value={formData.ug}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter UG percentage"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Postgraduate Percentage</label>
//                 <input
//                   type="number"
//                   name="pg"
//                   value={formData.pg}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="Enter PG percentage"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Skill Set */}
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Skill Set</label>
//               <input
//                 type="text"
//                 name="skillSet"
//                 value={formData.skillSet}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//                 placeholder="Enter skills (e.g., JavaScript, Python, etc.)"
//                 required
//               />
//             </div>

//             {/* Button Container with Flexbox for alignment */}
//             <div className="flex justify-between mt-6">
//               {/* Back Button */}
//               <button
//                 type="button"
//                 onClick={() => window.history.back()} // This will navigate to the previous page
//                 className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
//               >
//                 Back
//               </button>

//               {/* Save Button */}
//               <button
//                 type="submit"
//                 className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={loading}
//               >
//                 {loading ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>

//       {/* Toast Notifications */}
//       <ToastContainer />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentEntry;

import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './HeaderFooter';
import Footer from './Footer';

const StudentEntry = () => {
  const { user } = useAuthContext(); // Get the currently logged-in user
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tenth: '',
    twelfth: '',
    ug: '',
    pg: '',
    skillSet: '',
  });

  // Handler for manual form entry
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure percentage fields don't exceed 100
    if (['tenth', 'twelfth', 'ug', 'pg'].includes(name) && value > 100) {
      toast.error('Percentage cannot exceed 100');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for manual form submission
  const handleManualSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    setLoading(true);

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'students'), {
        ...formData,
        userId: user.uid,
      });
      toast.success('Data saved successfully!');
      console.log('Document written with ID: ', docRef.id);
      
      // Clear the form after submission
      setFormData({
        name: '',
        tenth: '',
        twelfth: '',
        ug: '',
        pg: '',
        skillSet: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error saving data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6 mt-24">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Entry</h2>

          {/* Manual Entry Form */}
          <form onSubmit={handleManualSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter student's full name"
                required
              />
            </div>

            {/* Academic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th Grade Percentage</label>
                <input
                  type="number"
                  name="tenth"
                  value={formData.tenth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter 10th grade percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">12th Grade Percentage</label>
                <input
                  type="number"
                  name="twelfth"
                  value={formData.twelfth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter 12th grade percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Undergraduate Percentage</label>
                <input
                  type="number"
                  name="ug"
                  value={formData.ug}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter UG percentage"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postgraduate Percentage</label>
                <input
                  type="number"
                  name="pg"
                  value={formData.pg}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter PG percentage"
                  required
                />
              </div>
            </div>

            {/* Skill Set */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Set</label>
              <input
                type="text"
                name="skillSet"
                value={formData.skillSet}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter skills (e.g., JavaScript, Python, etc.)"
                required
              />
            </div>

            {/* Button Container */}
            <div className="flex justify-between mt-6">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => window.history.back()} // Navigate to the previous page
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>

              {/* Save Button */}
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentEntry;

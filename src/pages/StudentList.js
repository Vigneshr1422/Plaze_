// import React, { useEffect, useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';

// const StudentList = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) {
//         setError('User not authenticated');
//         setLoading(false);
//         return;
//       }

//       try {
//         const studentsRef = collection(db, "students");
//         const q = query(studentsRef, where("userId", "==", user.uid));
//         const querySnapshot = await getDocs(q);
        
//         if (querySnapshot.empty) {
//           setStudents([]); // No students found
//         } else {
//           const studentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setStudents(studentsData);
//         }
//       } catch (error) {
//         console.error("Error fetching students:", error);
//         setError('Error fetching students');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [user]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="student-list-container">
//       <h2>Student List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {students.length === 0 ? (
//         <p>No students added yet.</p>
//       ) : (
//         <ul>
//           {students.map(student => (
//             <li key={student.id}>
//               {student.name} - 10th: {student.tenth}, 12th: {student.twelfth}, UG: {student.ug}, PG: {student.pg}, Skills: {student.skillSet}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentList;

// //  import React, { useEffect, useState } from 'react';
// // import { db } from '../services/firebase';
// // import { collection, query, where, getDocs } from 'firebase/firestore';
// // import { useAuthContext } from '../context/AuthContext';

// // const StudentList = () => {
// //   const { user } = useAuthContext();
// //   const [students, setStudents] = useState([]);

// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       if (user) {
// //         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
// //         const querySnapshot = await getDocs(q);
// //         const studentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setStudents(studentsData);
// //       }
// //     };

// //     fetchStudents();
// //   }, [user]);

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Student List</h2>

// //         {students.length > 0 ? (
// //           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {students.map(student => (
// //               <li
// //                 key={student.id}
// //                 className="bg-blue-50 border border-gray-300 rounded-lg p-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
// //               >
// //                 <p className="text-lg font-medium text-gray-700">{student.name}</p>
// //                 <p className="text-gray-600">10th Grade: {student.tenth}%</p>
// //                 <p className="text-gray-600">12th Grade: {student.twelfth}%</p>
// //                 <p className="text-gray-600">UG: {student.ug}%</p>
// //                 <p className="text-gray-600">PG: {student.pg ? `${student.pg}%` : 'N/A'}</p>
// //                 <p className="text-gray-600">Skills: {student.skillSet}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-600 text-center">No students found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentList;



// // 25 10 

// // import React, { useEffect, useState } from 'react';
// // import { db } from '../services/firebase';
// // import { collection, query, where, getDocs } from 'firebase/firestore';
// // import { useAuthContext } from '../context/AuthContext';

// // const StudentList = () => {
// //   const { user } = useAuthContext();
// //   const [students, setStudents] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       if (!user) {
// //         setError('User not authenticated');
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         console.log("Fetching students for user:", user.uid);
// //         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
// //         const querySnapshot = await getDocs(q);

// //         if (querySnapshot.empty) {
// //           console.log("No students found for this user.");
// //           setStudents([]); 
// //         } else {
// //           const studentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //           console.log("Fetched students:", studentsData);
// //           setStudents(studentsData);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching students:", error);
// //         setError('Error fetching students');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchStudents();
// //   }, [user]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
// //         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Student List</h2>

// //         {error && <p className="text-red-500 text-center">{error}</p>}
// //         {students.length > 0 ? (
// //           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {students.map(student => (
// //               <li
// //                 key={student.id}
// //                 className="bg-blue-50 border border-gray-300 rounded-lg p-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
// //               >
// //                 <p className="text-lg font-medium text-gray-700">{student.name}</p>
// //                 <p className="text-gray-600">10th Grade: {student.tenth}%</p>
// //                 <p className="text-gray-600">12th Grade: {student.twelfth}%</p>
// //                 <p className="text-gray-600">UG: {student.ug}%</p>
// //                 <p className="text-gray-600">PG: {student.pg ? `${student.pg}%` : 'N/A'}</p>
// //                 <p className="text-gray-600">Skills: {student.skillSet}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-600 text-center">No students found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // export default StudentList;
// import React, { useEffect, useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentList = () => {
//   const { user } = useAuthContext(); // Get the currently logged-in user
//   const [students, setStudents] = useState([]); // State to store student data
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) {
//         return; // Exit if the user is not authenticated
//       }

//       try {
//         // Query to get students added by the current user
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = [];

//         querySnapshot.forEach((doc) => {
//           studentsData.push({ id: doc.id, ...doc.data() }); // Add document data to array
//         });

//         setStudents(studentsData); // Update state with student data
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchStudents(); // Call the fetch function
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//         </div>
//       </div>
//     );
//   }
  
  

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">

//           {/* Back Button */}
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           {students.length === 0 ? (
//             <p className="text-gray-700">No students found for your account.</p>
//           ) : (
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr className="w-full bg-gray-200">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">10th Grade</th>
//                   <th className="py-2 px-4 border-b">12th Grade</th>
//                   <th className="py-2 px-4 border-b">UG</th>
//                   <th className="py-2 px-4 border-b">PG</th>
//                   <th className="py-2 px-4 border-b">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student) => (
//                   <tr key={student.id}>
//                     <td className="py-2 px-4 border-b">{student.name}</td>
//                     <td className="py-2 px-4 border-b">{student.tenth}</td>
//                     <td className="py-2 px-4 border-b">{student.twelfth}</td>
//                     <td className="py-2 px-4 border-b">{student.ug}</td>
//                     <td className="py-2 px-4 border-b">{student.pg}</td>
//                     <td className="py-2 px-4 border-b">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default StudentList;
// above data is og xode ok 

// import React, { useEffect, useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentList = () => {
//   const { user } = useAuthContext(); // Get the currently logged-in user
//   const [students, setStudents] = useState([]); // State to store student data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [deleting, setDeleting] = useState(false); // State to manage deleting status

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) {
//         return; // Exit if the user is not authenticated
//       }

//       try {
//         // Query to get students added by the current user
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = [];

//         querySnapshot.forEach((doc) => {
//           studentsData.push({ id: doc.id, ...doc.data() }); // Add document data to array
//         });

//         setStudents(studentsData); // Update state with student data
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchStudents(); // Call the fetch function
//   }, [user]);

//   const deleteAllStudents = async () => {
//     if (!user) return; // Exit if the user is not authenticated

//     // Create a custom toast for confirmation in the middle of the function
//     const confirmToast = toast(
//       <div>
//         <p>Are you sure you want to delete all students? This action cannot be undone.</p>
//         <div className="flex justify-between mt-2">
//           <button
//             onClick={handleDeleteConfirmed}
//             className="bg-red-500 text-white py-1 px-2 rounded-lg"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => toast.dismiss(confirmToast)}
//             className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg"
//           >
//             No
//           </button>
//         </div>
//       </div>,
//       {
//         position: "top-right",
//         autoClose: false,
//         closeOnClick: false,
//         pauseOnHover: false,
//         draggable: false,
//       }
//     );
//   };

//   const handleDeleteConfirmed = async () => {
//     setDeleting(true); // Set deleting state to true
//     const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//     const querySnapshot = await getDocs(q);

//     const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref)); // Create delete promises for each student

//     try {
//       await Promise.all(deletePromises); // Wait for all deletions to complete
//       setStudents([]); // Clear the local state
//       toast.success('All students deleted successfully!'); // Toast notification for success
//     } catch (error) {
//       console.error('Error deleting students:', error);
//       toast.error('Failed to delete students.'); // Toast notification for error
//     } finally {
//       setDeleting(false); // Reset deleting state
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           {/* Back Button */}
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           {/* Delete All Students Button */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={deleteAllStudents}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
//               disabled={deleting} // Disable the button while deleting
//             >
//               {deleting ? (
//                 <span className="flex items-center">
//                   <svg
//                     className="animate-spin h-5 w-5 mr-2 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                     ></path>
//                   </svg>
//                   Deleting...
//                 </span>
//               ) : (
//                 'Delete All Students'
//               )}
//             </button>
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           {students.length === 0 ? (
//             <p className="text-gray-700">No students found for your account.</p>
//           ) : (
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr className="w-full bg-gray-200">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">10th Grade</th>
//                   <th className="py-2 px-4 border-b">12th Grade</th>
//                   <th className="py-2 px-4 border-b">UG</th>
//                   <th className="py-2 px-4 border-b">PG</th>
//                   <th className="py-2 px-4 border-b">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student) => (
//                   <tr key={student.id}>
//                     <td className="py-2 px-4 border-b">{student.name}</td>
//                     <td className="py-2 px-4 border-b">{student.tenth}</td>
//                     <td className="py-2 px-4 border-b">{student.twelfth}</td>
//                     <td className="py-2 px-4 border-b">{student.ug}</td>
//                     <td className="py-2 px-4 border-b">{student.pg}</td>
//                     <td className="py-2 px-4 border-b">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </div>
//   );
// };

// export default StudentList;

// import React, { useEffect, useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentList = () => {
//   const { user } = useAuthContext(); // Get the currently logged-in user
//   const [students, setStudents] = useState([]); // State to store student data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [deleting, setDeleting] = useState(false); // State to manage deleting status

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) {
//         return; // Exit if the user is not authenticated
//       }

//       try {
//         // Query to get students added by the current user
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = [];

//         querySnapshot.forEach((doc) => {
//           studentsData.push({ id: doc.id, ...doc.data() }); // Add document data to array
//         });

//         setStudents(studentsData); // Update state with student data
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchStudents(); // Call the fetch function
//   }, [user]);

//   const deleteAllStudents = async () => {
//     if (!user) return; // Exit if the user is not authenticated

//     // Create a custom toast for confirmation in the middle of the function
//     const confirmToast = toast(
//       <div>
//         <p>Are you sure you want to delete all students? This action cannot be undone.</p>
//         <div className="flex justify-between mt-2">
//           <button
//             onClick={handleDeleteConfirmed}
//             className="bg-red-500 text-white py-1 px-2 rounded-lg"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => toast.dismiss(confirmToast)}
//             className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg"
//           >
//             No
//           </button>
//         </div>
//       </div>,
//       {
//         position: "top-right",
//         autoClose: false,
//         closeOnClick: false,
//         pauseOnHover: false,
//         draggable: false,
//       }
//     );
//   };

//   const handleDeleteConfirmed = async () => {
//     setDeleting(true); // Set deleting state to true
//     const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//     const querySnapshot = await getDocs(q);

//     const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref)); // Create delete promises for each student

//     try {
//       await Promise.all(deletePromises); // Wait for all deletions to complete
//       setStudents([]); // Clear the local state
//       toast.success('All students deleted successfully!'); // Toast notification for success
//     } catch (error) {
//       console.error('Error deleting students:', error);
//       toast.error('Failed to delete students.'); // Toast notification for error
//     } finally {
//       setDeleting(false); // Reset deleting state
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           {/* Back Button */}
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           {/* Delete All Students Button */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={deleteAllStudents}
//               className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
//               disabled={deleting} // Disable the button while deleting
//             >
//               {deleting ? (
//                 <span className="flex items-center">
//                   <svg
//                     className="animate-spin h-5 w-5 mr-2 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                     ></path>
//                   </svg>
//                   Deleting...
//                 </span>
//               ) : (
//                 'Delete All Students'
//               )}
//             </button>
//           </div>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           {students.length === 0 ? (
//             <p className="text-gray-700">No students found for your account.</p>
//           ) : (
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr className="w-full bg-gray-200">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">10th Grade</th>
//                   <th className="py-2 px-4 border-b">12th Grade</th>
//                   <th className="py-2 px-4 border-b">UG</th>
//                   <th className="py-2 px-4 border-b">PG</th>
//                   <th className="py-2 px-4 border-b">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student) => (
//                   <tr key={student.id}>
//                     <td className="py-2 px-4 border-b">{student.name}</td>
//                     <td className="py-2 px-4 border-b">{student.tenth}</td>
//                     <td className="py-2 px-4 border-b">{student.twelfth}</td>
//                     <td className="py-2 px-4 border-b">{student.ug}</td>
//                     <td className="py-2 px-4 border-b">{student.pg}</td>
//                     <td className="py-2 px-4 border-b">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </div>
//   );
// };

// export default StudentList;


// import React, { useEffect, useState } from 'react';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentList = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) return;

//       try {
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setStudents(studentsData);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-bounce-slow delay-500"></div>

//       <Header />

//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           {students.length === 0 ? (
//             <p className="text-gray-700">No students found for your account.</p>
//           ) : (
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr className="w-full bg-gray-200">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">10th Grade</th>
//                   <th className="py-2 px-4 border-b">12th Grade</th>
//                   <th className="py-2 px-4 border-b">UG</th>
//                   <th className="py-2 px-4 border-b">PG</th>
//                   <th className="py-2 px-4 border-b">Skills</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student) => (
//                   <tr key={student.id}>
//                     <td className="py-2 px-4 border-b">{student.name}</td>
//                     <td className="py-2 px-4 border-b">{student.tenth}</td>
//                     <td className="py-2 px-4 border-b">{student.twelfth}</td>
//                     <td className="py-2 px-4 border-b">{student.ug}</td>
//                     <td className="py-2 px-4 border-b">{student.pg}</td>
//                     <td className="py-2 px-4 border-b">{student.skillSet}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default StudentList;



// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import { db } from '../services/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { useAuthContext } from '../context/AuthContext';
// import Header from './HeaderFooter';
// import Footer from './Footer';

// const StudentList = () => {
//   const { user } = useAuthContext();
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [criteria, setCriteria] = useState({
//     tenth: '',
//     twelfth: '',
//     ug: '',
//     pg: '',
//   });

//   // Fetch students associated with the logged-in user
//   useEffect(() => {
//     const fetchStudents = async () => {
//       if (!user) return;

//       try {
//         const q = query(collection(db, 'students'), where('userId', '==', user.uid));
//         const querySnapshot = await getDocs(q);
//         const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setStudents(studentsData);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [user]);

//   // Update criteria state for filtering
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCriteria({ ...criteria, [name]: value });
//   };

//   // Filter students based on criteria
//   const filterStudents = () => {
//     const { tenth, twelfth, ug, pg } = criteria;
//     const filtered = students.filter((student) =>
//       (tenth ? student.tenth >= Number(tenth) : true) &&
//       (twelfth ? student.twelfth >= Number(twelfth) : true) &&
//       (ug ? student.ug >= Number(ug) : true) &&
//       (pg ? student.pg >= Number(pg) : true)
//     );
//     setFilteredStudents(filtered);
//   };

//   // Generate PDF of filtered students
//   const generatePDF = () => {
//     const doc = new jsPDF('landscape');
//     doc.setFontSize(22);
//     doc.text('Filtered Student List', 20, 20);
//     doc.setFontSize(16);

//     if (filteredStudents.length === 0) {
//       doc.text('No students meet the criteria.', 20, 40);
//     } else {
//       filteredStudents.forEach((student, index) => {
//         const y = 50 + index * 10;
//         doc.text(`Name: ${student.name}`, 20, y);
//         doc.text(`10th Grade: ${student.tenth}`, 60, y);
//         doc.text(`12th Grade: ${student.twelfth}`, 100, y);
//         doc.text(`UG: ${student.ug}`, 140, y);
//         doc.text(`PG: ${student.pg}`, 180, y);
//         doc.text(`Skills: ${student.skillSet}`, 220, y);
//       });
//     }

//     doc.save('filtered_students.pdf');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-bounce-slow delay-500"></div>

//       <Header />

//       <main className="flex-grow bg-gray-100 p-6 mt-24">
//         <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Back
//           </button>

//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

//           <div className="flex flex-wrap mb-4 gap-4">
//             <input
//               type="number"
//               name="tenth"
//               value={criteria.tenth}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Min 10th Grade"
//             />
//             <input
//               type="number"
//               name="twelfth"
//               value={criteria.twelfth}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Min 12th Grade"
//             />
//             <input
//               type="number"
//               name="ug"
//               value={criteria.ug}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Min UG Grade"
//             />
//             <input
//               type="number"
//               name="pg"
//               value={criteria.pg}
//               onChange={handleInputChange}
//               className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Min PG Grade"
//             />
//             <button
//               onClick={filterStudents}
//               className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
//             >
//               Filter Students
//             </button>
//           </div>

//           {filteredStudents.length > 0 ? (
//             <>
//               <h3 className="text-lg font-semibold">Filtered Students</h3>
//               <table className="min-w-full bg-white mt-4">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="py-2 px-4 border-b">Name</th>
//                     <th className="py-2 px-4 border-b">10th Grade</th>
//                     <th className="py-2 px-4 border-b">12th Grade</th>
//                     <th className="py-2 px-4 border-b">UG</th>
//                     <th className="py-2 px-4 border-b">PG</th>
//                     <th className="py-2 px-4 border-b">Skills</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents.map((student) => (
//                     <tr key={student.id}>
//                       <td className="py-2 px-4 border-b">{student.name}</td>
//                       <td className="py-2 px-4 border-b">{student.tenth}</td>
//                       <td className="py-2 px-4 border-b">{student.twelfth}</td>
//                       <td className="py-2 px-4 border-b">{student.ug}</td>
//                       <td className="py-2 px-4 border-b">{student.pg}</td>
//                       <td className="py-2 px-4 border-b">{student.skillSet}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 onClick={generatePDF}
//                 className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
//               >
//                 Generate PDF
//               </button>
//             </>
//           ) : (
//             <p className="text-gray-700 mt-4">No students found with the specified criteria.</p>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default StudentList;
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import Header from './HeaderFooter';
import Footer from './Footer';

const StudentList = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user) return;

      try {
        const q = query(collection(db, 'students'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setStudents(studentsData);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();

    // Set up a listener to detect screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
      <Header />

      <main className="flex-grow p-6 mt-24">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-300">

          {/* Render Back button at the top for larger screens only */}
          {!isMobile && (
            <button
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200 float-right"
            >
              Back
            </button>
          )}

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student List</h2>

          {students.length === 0 ? (
            <p className="text-gray-700 text-center">No students found for your account.</p>
          ) : (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">10th Grade</th>
                    <th className="py-2 px-4 border-b">12th Grade</th>
                    <th className="py-2 px-4 border-b">UG</th>
                    <th className="py-2 px-4 border-b">PG</th>
                    <th className="py-2 px-4 border-b">Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{student.name}</td>
                      <td className="py-2 px-4 border-b">{student.tenth}</td>
                      <td className="py-2 px-4 border-b">{student.twelfth}</td>
                      <td className="py-2 px-4 border-b">{student.ug}</td>
                      <td className="py-2 px-4 border-b">{student.pg}</td>
                      <td className="py-2 px-4 border-b">{student.skillSet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>x
            </div>
          )}

          {/* Render Back button at the bottom for mobile screens only */}
          {isMobile && (
            <button
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white py-2 px-4 mt-6 rounded-lg hover:bg-gray-600 transition duration-200 w-full"
            >
              Back
            </button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentList;

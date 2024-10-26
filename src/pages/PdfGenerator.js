


import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import Header from './HeaderFooter';
import Footer from './Footer';

const StudentList = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [criteria, setCriteria] = useState({
    tenth: '',
    twelfth: '',
    ug: '',
    pg: '',
  });

  // Fetch students associated with the logged-in user
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
  }, [user]);

  // Update criteria state for filtering
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  // Filter students based on criteria
  const filterStudents = () => {
    const { tenth, twelfth, ug, pg } = criteria;
    const filtered = students.filter((student) =>
      (tenth ? student.tenth >= Number(tenth) : true) &&
      (twelfth ? student.twelfth >= Number(twelfth) : true) &&
      (ug ? student.ug >= Number(ug) : true) &&
      (pg ? student.pg >= Number(pg) : true)
    );
    setFilteredStudents(filtered);
  };

  // Generate PDF of filtered students
  const generatePDF = () => {
    const doc = new jsPDF('landscape');
    doc.setFontSize(22);
    doc.text('Filtered Student List', 20, 20);
    doc.setFontSize(16);

    if (filteredStudents.length === 0) {
      doc.text('No students meet the criteria.', 20, 40);
    } else {
      filteredStudents.forEach((student, index) => {
        const y = 50 + index * 10;
        doc.text(`Name: ${student.name}`, 20, y);
        doc.text(`10th Grade: ${student.tenth}`, 60, y);
        doc.text(`12th Grade: ${student.twelfth}`, 100, y);
        doc.text(`UG: ${student.ug}`, 140, y);
        doc.text(`PG: ${student.pg}`, 180, y);
        doc.text(`Skills: ${student.skillSet}`, 220, y);
      });
    }

    doc.save('filtered_students.pdf');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-200"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-slow delay-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full opacity-30 animate-bounce-slow delay-500"></div>

      <Header />

      <main className="flex-grow bg-gray-100 p-6 mt-24">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-8">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-500 text-white py-2 px-4 mb-6 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Back
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

          <div className="flex flex-wrap mb-4 gap-4">
            <input
              type="number"
              name="tenth"
              value={criteria.tenth}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Min 10th Grade"
            />
            <input
              type="number"
              name="twelfth"
              value={criteria.twelfth}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Min 12th Grade"
            />
            <input
              type="number"
              name="ug"
              value={criteria.ug}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Min UG Grade"
            />
            <input
              type="number"
              name="pg"
              value={criteria.pg}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Min PG Grade"
            />
            <button
              onClick={filterStudents}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Filter Students
            </button>
          </div>

          {filteredStudents.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold">Filtered Students</h3>
              <table className="min-w-full bg-white mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">10th Grade</th>
                    <th className="py-2 px-4 border-b">12th Grade</th>
                    <th className="py-2 px-4 border-b">UG</th>
                    <th className="py-2 px-4 border-b">PG</th>
                    <th className="py-2 px-4 border-b">Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td className="py-2 px-4 border-b">{student.name}</td>
                      <td className="py-2 px-4 border-b">{student.tenth}</td>
                      <td className="py-2 px-4 border-b">{student.twelfth}</td>
                      <td className="py-2 px-4 border-b">{student.ug}</td>
                      <td className="py-2 px-4 border-b">{student.pg}</td>
                      <td className="py-2 px-4 border-b">{student.skillSet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={generatePDF}
                className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
              >
                Generate PDF
              </button>
            </>
          ) : (
            <p className="text-gray-700 mt-4">No students found with the specified criteria.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentList;

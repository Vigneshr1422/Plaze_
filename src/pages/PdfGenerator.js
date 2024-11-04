
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from './HeaderFooter';
import Footer from './Footer';

const ExcelGenerator = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');

  // State for percentage criteria
  const [tenthCriteria, setTenthCriteria] = useState(60);
  const [twelfthCriteria, setTwelfthCriteria] = useState(60);
  const [ugCriteria, setUgCriteria] = useState(60);
  const [pgCriteria, setPgCriteria] = useState(60);

  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

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

  const generateExcel = () => {
    const filteredStudents = students.filter((student) => 
        student.tenth >= tenthCriteria &&
        student.twelfth >= twelfthCriteria &&
        student.ug >= ugCriteria &&
        student.pg >= pgCriteria
    );

    const data = filteredStudents.map((student) => ({
        'Company Name': companyName,
        'Role': role,
        'Date': date,
        'Reg No': student.regNo,
        'Name': student.name,
        'DoB': student.dob,
        'Gender': student.gender,
        'Address': student.address,
        '10th%': student.tenth,
        '12th%': student.twelfth,
        'UG%': student.ug,
        'PG%': student.pg,
        'Skill Set': student.skillSet,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    XLSX.writeFile(workbook, 'Students.xlsx');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with min-height */}
      <Header />
      <div className="container mx-auto p-6 flex flex-grow mt-20"> {/* Add flex-grow to occupy space */}
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4">Company Details</h2>
          <div className="mb-4">
            <label className="block mb-2">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-4">Enter Criteria for Filtering</h3>

          <div className="mb-4">
            <label className="block mb-2">Minimum 10th Grade Percentage</label>
            <input
              type="number"
              value={tenthCriteria}
              onChange={(e) => setTenthCriteria(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Minimum 12th Grade Percentage</label>
            <input
              type="number"
              value={twelfthCriteria}
              onChange={(e) => setTwelfthCriteria(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Minimum UG Percentage</label>
            <input
              type="number"
              value={ugCriteria}
              onChange={(e) => setUgCriteria(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Minimum PG Percentage</label>
            <input
              type="number"
              value={pgCriteria}
              onChange={(e) => setPgCriteria(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Back
            </button>
            <button
              onClick={generateExcel}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Generate Excel
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          Generate Successful!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ExcelGenerator;

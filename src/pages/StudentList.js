
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';
import Header from './HeaderFooter';
import Footer from './Footer';
import { FaSearch } from 'react-icons/fa';

const Toast = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white text-center py-4 px-6 rounded shadow-lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Close
      </button>
    </div>
  </div>
);

const StudentList = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('name');

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user) return;

      try {
        const q = query(collection(db, 'students'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const studentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        const years = [...new Set(studentsData.map(student => student.passedOutYear))];
        setUniqueYears(years);

        setStudents(studentsData);
        setFilteredStudents(studentsData);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [user]);

  const deleteAllStudents = async () => {
    if (window.confirm('Are you sure you want to delete all students? This action cannot be undone.')) {
      try {
        const q = query(collection(db, 'students'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
        await Promise.all(deletePromises);
        setStudents([]);
        setFilteredStudents([]);
        setToast('All students deleted successfully!');
      } catch (error) {
        console.error('Error deleting students:', error);
      }
    }
  };

  const handleEdit = async (student) => {
    const updatedData = {
      regNo: prompt("Enter new Registration No:", student.regNo),
      name: prompt("Enter new Name:", student.name),
      dob: prompt("Enter new Date of Birth:", student.dob),
      gender: prompt("Enter new Gender:", student.gender),
      address: prompt("Enter new Address:", student.address),
      tenth: prompt("Enter new 10th Percentage:", student.tenth),
      twelfth: prompt("Enter new 12th Percentage:", student.twelfth),
      ug: prompt("Enter new UG Percentage:", student.ug),
      pg: prompt("Enter new PG Percentage:", student.pg),
      skillSet: prompt("Enter new Skill Set:", student.skillSet),
      passedOutYear: prompt("Enter new Passed-Out Year:", student.passedOutYear),
    };

    if (Object.values(updatedData).every((field) => field)) {
      try {
        await updateDoc(doc(db, 'students', student.id), updatedData);
        setStudents((prev) =>
          prev.map((std) => (std.id === student.id ? { ...std, ...updatedData } : std))
        );
        setToast('Student details updated successfully!');
      } catch (error) {
        console.error('Error updating student data:', error);
      }
    }
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    const filtered = year ? students.filter((student) => student.passedOutYear === year) : students;
    setFilteredStudents(filtered);
  };

  const resetFilter = () => {
    setFilteredStudents(students);
    setSelectedYear('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = students.filter(student => student[searchField]?.toString().toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredStudents(filtered);
  };

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
          <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 mb-4"
            >
              Back
            </button>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4 w-full md:w-auto">
              <button
                onClick={deleteAllStudents}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 w-full md:w-auto"
              >
                Delete All Students
              </button>
              <select
                value={selectedYear}
                onChange={(e) => handleYearFilter(e.target.value)}
                className="py-2 px-4 rounded-lg border border-gray-300 w-full md:w-auto"
              >
                <option value="">Select Year</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <button
                onClick={resetFilter}
                className="py-2 px-4 rounded-lg bg-red-500 text-white w-full md:w-auto"
              >
                Reset Filter
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center border border-gray-300 rounded-lg p-2 space-x-2">
            <select
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
            >
              <option value="regNo">Reg No</option>
              <option value="name">Name</option>
              <option value="dob">DoB</option>
              <option value="gender">Gender</option>
              <option value="address">Address</option>
              <option value="tenth">10th%</option>
              <option value="twelfth">12th%</option>
              <option value="ug">UG%</option>
              <option value="pg">PG%</option>
              <option value="skillSet">Skill Set</option>
              <option value="passedOutYear">Passed-Out Year</option>
            </select>

            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
              className="outline-none w-full p-2"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student List</h2>

          <div className="overflow-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2 border-b">Reg No</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">DoB</th>
                  <th className="px-4 py-2 border-b">Gender</th>
                  <th className="px-4 py-2 border-b">Address</th>
                  <th className="px-4 py-2 border-b">10th%</th>
                  <th className="px-4 py-2 border-b">12th%</th>
                  <th className="px-4 py-2 border-b">UG%</th>
                  <th className="px-4 py-2 border-b">PG%</th>
                  <th className="px-4 py-2 border-b">Skill Set</th>
                  <th className="px-4 py-2 border-b">Passed-Out Year</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{student.regNo}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.dob}</td>
                    <td className="px-4 py-2">{student.gender}</td>
                    <td className="px-4 py-2">{student.address}</td>
                    <td className="px-4 py-2">{student.tenth}</td>
                    <td className="px-4 py-2">{student.twelfth}</td>
                    <td className="px-4 py-2">{student.ug}</td>
                    <td className="px-4 py-2">{student.pg}</td>
                    <td className="px-4 py-2">{student.skillSet}</td>
                    <td className="px-4 py-2">{student.passedOutYear}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {toast && (
        <Toast message={toast} onClose={() => setToast(null)} />
      )}

      <Footer />
    </div>
  );
};

export default StudentList;

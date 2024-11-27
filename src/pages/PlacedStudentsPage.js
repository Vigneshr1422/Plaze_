

import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlacedStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState({});
  const [editing, setEditing] = useState({});
  const [selectedYear, setSelectedYear] = useState('');
  const [error, setError] = useState(null);
  const currentUser = getAuth().currentUser;

  useEffect(() => {
    const fetchStudents = async () => {
      if (!currentUser) {
        setLoading(false);
        setError('You must be logged in to view this page.');
        return;
      }

      try {
        setLoading(true);
        const studentsRef = collection(db, 'students');
        const q = query(studentsRef, where('userId', '==', currentUser.uid), where('placementStatus', '==', 'Placed'));
        const querySnapshot = await getDocs(q);
        const studentsData = [];
        querySnapshot.forEach((doc) => {
          studentsData.push({ id: doc.id, ...doc.data() });
        });

        setStudents(studentsData);
        setFilteredStudents(studentsData); // Show all initially
      } catch (err) {
        console.error('Error fetching students:', err);
        setError('Error fetching students');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [currentUser]);

  // Filter students by selected year
  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    if (year) {
      setFilteredStudents(students.filter(student => student.passedOutYear === year));
    } else {
      setFilteredStudents(students); // Show all students if no year selected
    }
  };

  // Handle input changes for editing
  const handleInputChange = (e, studentId, field) => {
    const { value } = e.target;
    setFilteredStudents(prevStudents => prevStudents.map(student =>
      student.id === studentId ? { ...student, [field]: value } : student
    ));
  };

  // Handle save functionality
  const handleUpdateStudent = async (studentId) => {
    setSaving(prev => ({ ...prev, [studentId]: true }));
    const student = filteredStudents.find(student => student.id === studentId);
    try {
      const studentRef = doc(db, 'students', studentId);
      await updateDoc(studentRef, {
        companyName: student.companyName,
        role: student.role,
        package: student.package,
      });
      toast.success('Student details updated successfully!');
    } catch (err) {
      console.error('Error updating student:', err);
      toast.error('Error updating student details');
    } finally {
      setSaving(prev => ({ ...prev, [studentId]: false }));
      setEditing(prev => ({ ...prev, [studentId]: false }));
    }
  };

  const toggleEdit = (studentId) => {
    setEditing(prev => ({ ...prev, [studentId]: !prev[studentId] }));
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-xl font-semibold mb-4">Placed Students</h2>

      {/* Passed-Out Year Dropdown */}
      <div className="mb-4">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border p-2 rounded"
        >
          <option value="">All Years</option>
          {[...new Set(students.map(student => student.passedOutYear))].map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        filteredStudents.length === 0 ? (
          <p>No placed students found for the selected year.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="border p-4 rounded shadow-md">
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Registration No:</strong> {student.regNo}</p>
                <p><strong>Passed-Out Year:</strong> {student.passedOutYear}</p>

                {/* Editable Fields */}
                <div className="space-y-2">
                  <input
                    type="text"
                    value={student.companyName || ''}
                    onChange={(e) => handleInputChange(e, student.id, 'companyName')}
                    className="border p-2 rounded w-full"
                    placeholder="Company Name"
                    disabled={!editing[student.id]}
                  />
                  <input
                    type="text"
                    value={student.role || ''}
                    onChange={(e) => handleInputChange(e, student.id, 'role')}
                    className="border p-2 rounded w-full"
                    placeholder="Role"
                    disabled={!editing[student.id]}
                  />
                  <input
                    type="text"
                    value={student.package || ''}
                    onChange={(e) => handleInputChange(e, student.id, 'package')}
                    className="border p-2 rounded w-full"
                    placeholder="Package"
                    disabled={!editing[student.id]}
                  />
                </div>

                {/* Buttons */}
                <div className="mt-2 flex space-x-2">
                  {editing[student.id] ? (
                    <button
                      onClick={() => handleUpdateStudent(student.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded"
                      disabled={saving[student.id]}
                    >
                      {saving[student.id] ? 'Saving...' : 'Save OK'}
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleEdit(student.id)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )
      )}
      <ToastContainer />

      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PlacedStudentsPage;

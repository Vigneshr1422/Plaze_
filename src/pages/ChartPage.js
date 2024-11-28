
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartsPage = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('');
  const [availableYears, setAvailableYears] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchYearsAndData = async () => {
      if (!user) return;
      setLoading(true);

      try {
        const studentsCollection = collection(db, 'students');
        const q = query(studentsCollection, where("userId", "==", user.uid));
        const studentSnapshot = await getDocs(q);
        const studentList = studentSnapshot.docs.map(doc => doc.data());

        // Extract unique years from the fetched data
        const years = [...new Set(studentList.map(student => student.passedOutYear))];
        setAvailableYears(years.sort());

        // Filter students based on the selected year or show all initially
        const yearFilteredStudents = selectedYear
          ? studentList.filter(student => student.passedOutYear === selectedYear)
          : studentList;

        // Calculate placement statistics
        const placed = yearFilteredStudents.filter(s => s.placementStatus === 'Placed').length;
        const unplaced = yearFilteredStudents.filter(s => s.placementStatus === 'Unplaced').length;
        const total = yearFilteredStudents.length;
        const unaccounted = total - placed - unplaced;

        setChartData({
          labels: ['Placed', 'Unplaced', 'Unaccounted'],
          datasets: [{
            data: [placed, unplaced, unaccounted],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          }],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchYearsAndData();
  }, [user, selectedYear]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-6 px-4 pt-16">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 relative">
        <h1 className="text-2xl font-bold mb-4 text-center">Placement Statistics</h1>

        {/* Year Dropdown */}
        <div className="mb-4 flex justify-end">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}  // Update selectedYear on change
            className="p-2 border rounded"
          >
            <option value="">Select Year</option>
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Display Chart */}
        {loading ? (
          <div className="flex justify-center items-center">Loading...</div>
        ) : (
          chartData.datasets[0].data.some(value => value > 0) ? (
            <div className="flex justify-center">
              <div style={{ width: '80%', maxWidth: '400px' }}>
                <Doughnut data={chartData} />
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">No data available for the selected year.</div>
          )
        )}

        {/* Back Button */}
        <div className="absolute bottom-6 right-6">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;

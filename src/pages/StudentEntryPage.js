import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const StudentEntryPage = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'students'), { name, year });
    alert('Student added');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentEntryPage;

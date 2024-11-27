import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CompanyDetailsPage = () => {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [packageOffer, setPackageOffer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'companies'), { company, role, packageOffer });
    alert('Company details added');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6">
      <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} />
      <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <input placeholder="Package" value={packageOffer} onChange={(e) => setPackageOffer(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyDetailsPage;

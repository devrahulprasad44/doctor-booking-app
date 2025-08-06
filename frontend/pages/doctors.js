import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import DoctorCard from '../components/DoctorCard';
import { ChevronDown, Filter, SlidersHorizontal } from 'lucide-react';
import axios from 'axios';

export default function Doctors() {
  const router = useRouter();
  const { location, specialty, name } = router.query;

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: '',
    patientStories: '',
    experience: '',
  });

  useEffect(() => {
    if (!location && !specialty && !name) {
      setDoctors([]);
      setLoading(false);
      return;
    }
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, specialty, name, filters]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      if (location) params.append('location', location.toString());
      if (specialty) params.append('specialty', specialty.toString());
      if (name) params.append('name', name.toString());

      const response = await axios.get(
        `http://localhost:8080/api/doctors/search?${params.toString()}`
      );

      if (response.data && response.data.length > 0) {
        setDoctors(response.data);
      } else {
        setDoctors([]); // no fallback
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([]); // fail silently with empty
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Doctors</title>
      </Head>
      <Header />
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-6">
          <h2 className="text-2xl font-semibold">
            {doctors.length}{' '}
            {name
              ? `"${name}"`
              : specialty
              ? specialty
              : 'Doctors'}{' '}
            available in {location}
          </h2>
          <p className="text-sm text-gray-600">
            ✓ Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        {loading && <div>Loading...</div>}

        <div className="space-y-6">
          {!loading && doctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No doctors found for {specialty && `"${specialty}"`}{' '}
                {name && `"${name}"`} in {location}
              </p>
              <p className="text-gray-500 mt-2">
                Try searching with a different specialty, name or location
              </p>
            </div>
          )}

          {doctors.map((doc) => (
            <DoctorCard key={doc.id || doc.name} doctor={doc} />
          ))}
        </div>
      </div>
    </>
  );
}

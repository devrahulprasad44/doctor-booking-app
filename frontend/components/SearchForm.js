import { useState } from 'react';
import { useRouter } from 'next/router';
import { MapPin, Search } from 'lucide-react';

const SearchForm = () => {
  const [location, setLocation] = useState('Bangalore');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/doctors?location=${location}&specialty=${specialty}`);
  };

  const popularSearches = [
    'Dermatologist',
    'Pediatrician', 
    'Gynecologist/Obstetrician',
    'Orthopedist'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
        {/* Location Input */}
        <div className="flex items-center flex-1 min-w-0 px-4 py-2 border-r md:border-r border-gray-200">
          <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={20} />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Search Input */}
        <div className="flex items-center flex-2 min-w-0 px-4 py-2">
          <Search className="text-gray-400 mr-2 flex-shrink-0" size={20} />
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
        >
          Search
        </button>
      </form>

      {/* Popular Searches */}
      <div className="mt-6 text-center">
        <span className="text-white text-sm mr-4">Popular searches:</span>
        <div className="inline-flex flex-wrap gap-2 mt-2">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => {
                setSpecialty(search);
                router.push(`/doctors?location=${location}&specialty=${search}`);
              }}
              className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-all"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
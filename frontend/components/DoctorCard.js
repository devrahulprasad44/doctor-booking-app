import Image from 'next/image';
import { Star, MapPin, Calendar, Phone } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  // Normalize / fallback values
  const imgSrc =
    doctor?.imageUrl && doctor.imageUrl.trim() !== ''
      ? doctor.imageUrl
      : '/images/dr-placeholder.avif';
  const name = doctor?.name || 'Unknown Doctor';
  const specialization = doctor?.specialization || 'General';
  const experience =
    doctor?.experienceYears != null
      ? `${doctor.experienceYears} years`
      : 'N/A';
  const location = doctor?.location || '';
  const clinic = doctor?.clinicName || '';
  const fee =
    doctor?.consultationFee != null
      ? `₹${doctor.consultationFee}`
      : 'N/A';
  const rating = doctor?.rating != null ? doctor.rating : null;
  const patientStories =
    doctor?.patientStories != null ? doctor.patientStories : 0;
  const availableToday = doctor?.available === true;
  const noBookingFee = doctor?.noBookingFee === true;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Doctor Image/Avatar */}
        <div className="flex-shrink-0 w-20 h-20 relative">
          <Image
            src={imgSrc}
            alt={`Photo of ${name}`}
            fill
            className="rounded-full object-cover"
            sizes="80px"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-blue-600 mb-1">{name}</h3>
              <p className="text-gray-600 mb-2">{specialization}</p>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{experience} experience overall</span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={16} className="mr-1" />
                <span>{location}</span>
                {clinic && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{clinic}</span>
                  </>
                )}
              </div>

              <div className="text-lg font-semibold text-gray-800 mb-2">
                {fee} Consultation fee at clinic
              </div>

              {/* Rating and Patient Stories */}
              <div className="flex items-center gap-4 mb-4">
                {rating != null && (
                  <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-sm">
                    <Star size={14} className="mr-1" />
                    <span>{rating}</span>
                  </div>
                )}
                <span className="text-sm text-gray-600 underline cursor-pointer">
                  {patientStories} Patient Stories
                </span>
              </div>

              {/* Availability */}
              {availableToday && (
                <div className="flex items-center text-green-600 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>Available Today</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium flex flex-col items-start">
                <span>Book Clinic Visit</span>
                {noBookingFee && (
                  <div className="text-xs mt-1">No Booking Fee</div>
                )}
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors font-medium flex items-center justify-center">
                <Phone size={16} className="mr-1" />
                Contact Clinic
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

import React, { useState,useEffect } from 'react';

import { MapPin } from 'lucide-react';

const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    email: '',
    contactNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            const address = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
            setPersonalInfo({ ...personalInfo, address });
          } catch (error) {
            console.error("Error fetching address:", error);
            setPersonalInfo({ ...personalInfo, address: `Lat: ${latitude}, Lon: ${longitude}` });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to fetch location. Please ensure you've granted permission.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className='p-6'>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Personal Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.fullName}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.dateOfBirth}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Nationality</label>
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.nationality}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Passport Number</label>
        <input
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportNumber}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Passport Expiry Date</label>
        <input
          type="date"
          name="passportExpiry"
          placeholder="Passport Expiry Date"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportExpiry}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-blue-900">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.contactNumber}
          onChange={handleChange}
        />
     
     <label className="mt-2 font-medium text-blue-900">Address</label>
        <div className="flex items-center">
          <textarea
            name="address"
            placeholder="Address"
            className="flex-grow p-2 border border-gray-300 rounded input-field"
            value={personalInfo.address}
            onChange={handleChange}
            rows="3"
          />
          <button
            onClick={fetchLocation}
            className="p-2 ml-2 text-white bg-blue-900 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            title="Fetch current location"
          >
            <MapPin size={24} />
          </button>

     
      </div>
    </div>

    </div>
  );
}












































const MaritalStatus = ({ onMaritalStatusChange }) => {
  const [maritalStatus, setMaritalStatus] = useState({
    maritalStatus: '',
    spouseName: '',
    spouseDob: '',
    spouseNationality: '',
    children: '',
    numberOfChildren: 1,
    childrenDetails: [{ name: '', dob: '', nationality: '', gender: '' }]
  });
  const [hasChildren, setHasChildren] = useState(null);

  const handleMaritalStatusChange = (e) => {
    const newStatus = e.target.value;
    setMaritalStatus({ ...maritalStatus, maritalStatus: newStatus });
    onMaritalStatusChange(newStatus);  // Update global state
  };


  const handleChildrenDetailsChange = (index, field, value) => {
    const updatedChildrenDetails = [...maritalStatus.childrenDetails];
    updatedChildrenDetails[index] = {
      ...updatedChildrenDetails[index],
      [field]: value
    };
    setMaritalStatus({ ...maritalStatus, childrenDetails: updatedChildrenDetails });
  };

  const handleChildrenSelect = (e) => {
    const numberOfChildren = parseInt(e.target.value);
    const updatedChildrenDetails = Array(numberOfChildren).fill({ name: '', dob: '', nationality: '', gender: '' });
    setMaritalStatus({ ...maritalStatus, numberOfChildren, childrenDetails: updatedChildrenDetails });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Marital Status</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Marital Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded input-field"
          // value={maritalStatus.maritalStatus}
          // onChange={(e) => setMaritalStatus({ ...maritalStatus, maritalStatus: e.target.value })}
          value={maritalStatus.maritalStatus}
          onChange={handleMaritalStatusChange}
        >
          <option value="">Select your status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Separated">Separated</option>
        </select>
        {/* Conditionally render spouse-related fields if marital status is Married or Separated */}
        {(maritalStatus.maritalStatus === 'Married' ) && (
          <>
            <label className="mt-2 font-medium text-blue-900">Spouse's Full Name</label>
            <input
              type="text"
              placeholder="Spouse's Full Name"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={maritalStatus.spouseName}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseName: e.target.value })}
            />
            <label className="mt-2 font-medium text-blue-900">Spouse's Date of Birth</label>
            <input
              type="date"
              placeholder="Spouse's Date of Birth"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={maritalStatus.spouseDob}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseDob: e.target.value })}
            />
            <label className="mt-2 font-medium text-blue-900">Spouse's Nationality</label>
            <input
              type="text"
              placeholder="Spouse's Nationality"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={maritalStatus.spouseNationality}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseNationality: e.target.value })}
            />
   
          </>
        )}
        {/* Do you have children? */}
        {(maritalStatus.maritalStatus === 'Married' || maritalStatus.maritalStatus === 'Separated') && (
          <>
            <label className="mt-6 font-medium text-blue-900">Do you have children?</label>
            <div className="flex gap-8 mt-2 mb-4">
              <button
                type="button"
                className={`px-4 py-2 ${hasChildren === true ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                onClick={() => {
                  setHasChildren(true);
                  setMaritalStatus({
                    ...maritalStatus,
                    numberOfChildren: 1,
                    childrenDetails: [{ name: '', dob: '', nationality: '' }]
                  });
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 ${hasChildren === false ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                onClick={() => setHasChildren(false)}
              >
                No
              </button>
            </div>
            {hasChildren === true && (
              <div>
                <label className="mt-4 font-medium text-blue-900">How many children?</label>
                <select
                  value={maritalStatus.numberOfChildren}
                  onChange={handleChildrenSelect}
                  className="w-[13%] p-2 border text-center border-gray-300 rounded input-field ml-4"
                >
                  {[...Array(10).keys()].map(i => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <div className="p-4 mt-4">
                  {Array.from({ length: maritalStatus.numberOfChildren }).map((_, index) => (
                    <div key={index} className="p-6 mb-8 bg-white rounded-lg shadow-lg">
                      <h4 className="mb-6 text-lg font-semibold underline underline-offset-4">Child {index + 1} Details</h4>
                      <div className="flex flex-col space-y-4">
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Name</label>
                          <input
                            type="text"
                            placeholder="Child's Name"
                            className="w-full p-2 border border-gray-300 rounded input-field"
                            value={maritalStatus.childrenDetails[index]?.name || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'name', e.target.value)}
                          />
                        </div>



                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Gender</label>
                          <div className="flex gap-4">
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Male' ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Male')}
                            >
                              Male
                            </button>
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Female' ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Female')}
                            >
                              Female
                            </button>
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Other' ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Other')}
                            >
                              Other
                            </button>
                          </div>
                      </div>






                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Date of Birth</label>
                          <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded input-field"
                            value={maritalStatus.childrenDetails[index]?.dob || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'dob', e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Nationality</label>
                          <input
                            type="text"
                            placeholder="Child's Nationality"
                            className="w-full p-2 border border-gray-300 rounded input-field"
                            value={maritalStatus.childrenDetails[index]?.nationality || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'nationality', e.target.value)}
                          />
                        </div>


                 



                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
const Education = ({ globalMaritalStatus }) => {
  const [education, setEducation] = useState({
    highestDegree: '',
    fieldOfStudy: '',
    institution: '',
    completionYear: '',
    spouseHighestDegree: '',
    spouseFieldOfStudy: '',
    spouseInstitution: '',
    spouseCompletionYear: ''
  });
  // Degrees that will trigger showing additional fields
  const degreeOptions = ['Intermediate', 'Bachelors', 'Masters'];
  return (
    <>
      <div>
        <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Education</h3>
        {/* <p>{globalMaritalStatus}</p> */}
        <div className="grid grid-cols-1 gap-2">
          {/* Your Education Section */}
          <label className="mt-2 font-medium text-blue-900">Your Highest Degree</label>
          <select
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.highestDegree}
            onChange={(e) => setEducation({ ...education, highestDegree: e.target.value })}
          >
            <option value="" className='text-blue-900 '>Select Degree</option>
            <option value="Intermediate" className='text-blue-900'>Intermediate</option>
            <option value="Bachelors"className='text-blue-900'>Bachelors</option>
            <option value="Masters"className='text-blue-900'>Masters</option>
            <option value="Uneducated"className='text-blue-900'>Uneducated</option>
          </select>
          {/* Show additional fields if Intermediate, Bachelors, or Masters is selected */}
          {degreeOptions.includes(education.highestDegree) && (
            <>
              <label className="mt-2 font-medium text-blue-900">Field of Study</label>
              <input
                type="text"
                placeholder="Field of Study"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.fieldOfStudy}
                onChange={(e) => setEducation({ ...education, fieldOfStudy: e.target.value })}
              />
              <label className="mt-2 font-medium text-blue-900">Institution Attended</label>
              <input
                type="text"
                placeholder="Institution Attended"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.institution}
                onChange={(e) => setEducation({ ...education, institution: e.target.value })}
              />
              <label className="mt-2 font-medium text-blue-900">Completion Year</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.completionYear}
                onChange={(e) => setEducation({ ...education, completionYear: e.target.value })}
              />
            </>
          )}
      
          

          {/* <label className="mt-4 font-medium text-blue-900">Spouse's Highest Degree</label>
          <select
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.spouseHighestDegree}
            onChange={(e) => setEducation({ ...education, spouseHighestDegree: e.target.value })}
          >
            <option value="" className='text-blue-900'>Select Spouse's Degree</option>
            <option value="Intermediate" className='text-blue-900'>Intermediate</option>
            <option value="Bachelors" className='text-blue-900'>Bachelors</option>
            <option value="Masters" className='text-blue-900'>Masters</option>
            <option value="Uneducated" className='text-blue-900'>Uneducated</option>
          </select>
          
          {degreeOptions.includes(education.spouseHighestDegree) && (
            <>
              <label className="mt-2 font-medium text-blue-900">Spouse's Field of Study</label>
              <input
                type="text"
                placeholder="Spouse's Field of Study"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.spouseFieldOfStudy}
                onChange={(e) => setEducation({ ...education, spouseFieldOfStudy: e.target.value })}
              />
              <label className="mt-2 font-medium text-blue-900">Spouse's Institution Attended</label>
              <input
                type="text"
                placeholder="Spouse's Institution Attended"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.spouseInstitution}
                onChange={(e) => setEducation({ ...education, spouseInstitution: e.target.value })}
              />
              <label className="mt-2 font-medium text-blue-900">Spouse's Completion Year</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.spouseCompletionYear}
                onChange={(e) => setEducation({ ...education, spouseCompletionYear: e.target.value })}
              />
            </>
          )} */}


{['Married'].includes(globalMaritalStatus) && (
            <>
              <label className="mt-4 font-medium text-blue-900">Spouse's Highest Degree</label>
              <select
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={education.spouseHighestDegree}
                onChange={(e) => setEducation({ ...education, spouseHighestDegree: e.target.value })}
              >
                <option value="" className="text-blue-900">Select Spouse's Degree</option>
                <option value="Intermediate" className="text-blue-900">Intermediate</option>
                <option value="Bachelors" className="text-blue-900">Bachelors</option>
                <option value="Masters" className="text-blue-900">Masters</option>
                <option value="Uneducated" className="text-blue-900">Uneducated</option>
              </select>

              {/* Show additional fields for spouse if Intermediate, Bachelors, or Masters is selected */}
              {degreeOptions.includes(education.spouseHighestDegree) && (
                <>
                  <label className="mt-2 font-medium text-blue-900">Spouse's Field of Study</label>
                  <input
                    type="text"
                    placeholder="Spouse's Field of Study"
                    className="w-full p-2 border border-gray-300 rounded input-field"
                    value={education.spouseFieldOfStudy}
                    onChange={(e) => setEducation({ ...education, spouseFieldOfStudy: e.target.value })}
                  />
                  <label className="mt-2 font-medium text-blue-900">Spouse's Institution Attended</label>
                  <input
                    type="text"
                    placeholder="Spouse's Institution Attended"
                    className="w-full p-2 border border-gray-300 rounded input-field"
                    value={education.spouseInstitution}
                    onChange={(e) => setEducation({ ...education, spouseInstitution: e.target.value })}
                  />
                  <label className="mt-2 font-medium text-blue-900">Spouse's Completion Year</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded input-field"
                    value={education.spouseCompletionYear}
                    onChange={(e) => setEducation({ ...education, spouseCompletionYear: e.target.value })}
                  />
                </>
              )}
            </>
          )}
      
          
        </div>
      </div>
    </>
  );
};
const TravelInformation = () => {
  const [travelInfo, setTravelInfo] = useState({
    purposeOfVisit: '',
    durationOfStay: '',
    countriesTraveled: []
  });

  const countryList = [
    'United States', 'Canada', 'Mexico', 'Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'China', 'Japan',
    'Australia', 'New Zealand', 'Brazil', 'Argentina', 'South Africa', 'Egypt', 'Russia', 'India', 'Pakistan',
    'Bangladesh', 'Turkey', 'Saudi Arabia', 'UAE', 'Malaysia', 'Singapore', 'Thailand', 'Indonesia', 'Vietnam',
    'South Korea', 'Nigeria', 'Kenya', 'Morocco', 'Greece', 'Portugal', 'Sweden', 'Norway', 'Denmark', 'Netherlands',
    'Belgium', 'Switzerland'
  ];

  const [availableCountries] = useState(countryList);
  const [countryDetails, setCountryDetails] = useState({}); // To store details for each country

  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== '') {
      const newCountriesTraveled = [...travelInfo.countriesTraveled, selectedCountry];
      setTravelInfo({
        ...travelInfo,
        countriesTraveled: newCountriesTraveled
      });
      setCountryDetails({
        ...countryDetails,
        [selectedCountry]: { dateVisited: '', dateReturn: '', purpose: '', duration: '' }
      });
    }
  };

  const removeCountry = (country) => {
    setTravelInfo({
      ...travelInfo,
      countriesTraveled: travelInfo.countriesTraveled.filter(selected => selected !== country)
    });
    const newDetails = { ...countryDetails };
    delete newDetails[country];
    setCountryDetails(newDetails);
  };

  const handleDetailChange = (country, field, value) => {
    const updatedDetails = {
      ...countryDetails[country],
      [field]: value
    };

    // Auto-calculate duration if both dates are present
    if (updatedDetails.dateVisited && updatedDetails.dateReturn) {
      const dateVisited = new Date(updatedDetails.dateVisited);
      const dateReturn = new Date(updatedDetails.dateReturn);
      const duration = Math.ceil((dateReturn - dateVisited) / (1000 * 60 * 60 * 24)); // duration in days
      updatedDetails.duration = duration >= 0 ? duration : '';
    }

    setCountryDetails({
      ...countryDetails,
      [country]: updatedDetails
    });
  };

  return (
    <>
      <div>
        <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Travel Information</h3>
        <div className="grid grid-cols-1 gap-2">
          <label className="mt-2 font-medium text-blue-900">Purpose of Visit</label>
          <input
            type="text"
            placeholder="Purpose of Visit"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={travelInfo.purposeOfVisit}
            onChange={(e) => setTravelInfo({ ...travelInfo, purposeOfVisit: e.target.value })}
          />
          <label className="mt-2 font-medium text-blue-900">Duration of Stay</label>
          <input
            type="text"
            placeholder="Duration of Stay"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={travelInfo.durationOfStay}
            onChange={(e) => setTravelInfo({ ...travelInfo, durationOfStay: e.target.value })}
          />

          <label className="mt-2 font-medium text-blue-900">Countries Traveled in Last 10 Years</label>
          <select
            className="w-full h-10 p-2 border border-gray-300 rounded input-field"
            onChange={handleCountrySelect}
            value=""
          >
            <option value="" disabled>Select Country</option>
            {availableCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>

          {travelInfo.countriesTraveled.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              <h1 className="w-full mb-4 text-lg font-bold tracking-normal text-blue-900">Selected Countries:</h1>
              {travelInfo.countriesTraveled.map((country, index) => (
                <div key={index} className="w-full mb-4">
                  <div className="items-center inline-block px-3 py-1 text-white bg-blue-900 rounded-full">
                    {country}
                    <button
                      className="px-2 py-1 ml-2 text-white bg-transparent rounded-full hover:bg-red-700 hover:text-white"
                      onClick={() => removeCountry(country)}
                    >
                      &times;
                    </button>
                  </div>

                  {/* Form for each country */}
                  <div className="mt-4">
                    <label className="font-medium text-blue-900">Date Visited</label>
                    <input
                      type="date"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={countryDetails[country]?.dateVisited || ''}
                      onChange={(e) => handleDetailChange(country, 'dateVisited', e.target.value)}
                    />

                    <label className="font-medium text-blue-900">Date Return</label>
                    <input
                      type="date"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={countryDetails[country]?.dateReturn || ''}
                      onChange={(e) => handleDetailChange(country, 'dateReturn', e.target.value)}
                    />

                    <label className="font-medium text-blue-900">Duration of Stay (days)</label>
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={countryDetails[country]?.duration || ''}
                      readOnly
                    />

                    <label className="font-medium text-blue-900">Purpose</label>
                    <input
                      type="text"
                      placeholder="Purpose of Travel"
                      className="w-full p-2 mb-2 border border-gray-300 rounded"
                      value={countryDetails[country]?.purpose || ''}
                      onChange={(e) => handleDetailChange(country, 'purpose', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};


























const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'India', 
  'China', 'Japan', 'Brazil', 'South Africa', 'Mexico', 'Russia', 'Italy', 'Spain', 'Netherlands',
  'Pakistan', 'Nigeria', 'Saudi Arabia', 'South Korea'
];





const Employment = () => {
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [employmentRecords, setEmploymentRecords] = useState([]);

  const handleEmploymentStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setEmploymentStatus(selectedStatus);
    if (selectedStatus !== 'Employed') {
      setEmploymentRecords([]);
    }
  };

  const addEmploymentRecord = () => {
    setEmploymentRecords([...employmentRecords, {
      employerDetails: '',
      jobTitle: '',
      salary: '',
      employmentHistory: '',
      jobStartDate: '',
      jobEndDate: '',
      country: '',
      isCurrentJob: false,
    }]);
  };

  const updateEmploymentRecord = (index, field, value) => {
    const updatedRecords = [...employmentRecords];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setEmploymentRecords(updatedRecords);
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Employment</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Current Employment Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employmentStatus}
          onChange={handleEmploymentStatusChange}
        >
          <option value="" disabled>Select Employment Status</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Retired">Retired</option>
        </select>

        {employmentStatus === 'Employed' && (
          <>
            {employmentRecords.map((record, index) => (
              <div key={index} className="p-4 mt-4 border border-gray-300 rounded">
                <h4 className="mb-2 text-xl font-semibold text-blue-900">Job {index + 1}</h4>
                <label className="mt-2 font-medium text-blue-900">Employer Details</label>
                <input
                  type="text"
                  placeholder="Employer Details"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.employerDetails}
                  onChange={(e) => updateEmploymentRecord(index, 'employerDetails', e.target.value)}
                />

                <label className="mt-2 font-medium text-blue-900">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.jobTitle}
                  onChange={(e) => updateEmploymentRecord(index, 'jobTitle', e.target.value)}
                />

                <label className="mt-2 font-medium text-blue-900">Current Salary</label>
                <input
                  type="text"
                  placeholder="Current Salary"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.salary}
                  onChange={(e) => updateEmploymentRecord(index, 'salary', e.target.value)}
                />

                <label className="mt-2 font-medium text-blue-900">Employment History (Past 5 years)</label>
                <input
                  type="text"
                  placeholder="Employment History"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.employmentHistory}
                  onChange={(e) => updateEmploymentRecord(index, 'employmentHistory', e.target.value)}
                />

                <label className="mt-2 font-medium text-blue-900">Job Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.jobStartDate}
                  onChange={(e) => updateEmploymentRecord(index, 'jobStartDate', e.target.value)}
                />

                <label className="mt-2 font-medium text-blue-900">Job End Date (or Present)</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.isCurrentJob ? '' : record.jobEndDate}
                  onChange={(e) => updateEmploymentRecord(index, 'jobEndDate', e.target.value)}
                  disabled={record.isCurrentJob}
                />

                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={record.isCurrentJob}
                    onChange={(e) => updateEmploymentRecord(index, 'isCurrentJob', e.target.checked)}
                    className="mr-2"
                  />
                  <label className="font-medium text-blue-900">This is my current job</label>
                </div>

                <label className="mt-2 font-medium text-blue-900">Country</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={record.country}
                  onChange={(e) => updateEmploymentRecord(index, 'country', e.target.value)}
                >
                  <option value="" disabled>Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <button
              onClick={addEmploymentRecord}
              className="px-2 py-4 mt-4 w-[28%] ml-auto mr-auto text-white bg-blue-900 rounded hover:bg-blue-600 hover:scale-110 font-semibold hover:transition-all hover:duration-300"
            >
            
              Add Job
            </button>
          </>
        )}
      </div>
    </div>
  );
};





























const Finance = () => {
  const [finance, setFinance] = useState({
    financialStatus: '',
    bankBalance: ''
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinance((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Finance</h3>
      <div className="grid grid-cols-1 gap-2">
      
 
        <label className="mt-2 font-medium text-blue-900">Bank Statement (Last 6 Months)</label>
        <input
          type="text"
          name="bankBalance" 
          placeholder="Bank Balance"
          value={finance.bankBalance} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded input-field"
        />

        <label className="mt-2 font-medium text-blue-900">
          Financial Status (Balance Available/Cash or how much you can show off)
        </label>
        <input
          type="text"
          name="financialStatus" 
          placeholder="Financial Status"
          value={finance.financialStatus} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded input-field"
        />
      </div>
    </div>
  );
};

const TiesToHomeCountry = () => {
  const [tiesToCountry, setTiesToCountry] = useState({
    familyMembers: '',
    propertyOwnership: '',
    longTermCommitments: ''
  });
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Ties to Home Country</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Family Members in Home Country</label>
        <input
          type="number"
          min={1}
          placeholder="Family Members"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.familyMembers}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, familyMembers: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Property Ownership or Significant Assets</label>
        <input
          type="text"
          placeholder="Property Ownership"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.propertyOwnership}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, propertyOwnership: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Long-term Commitments or Responsibilities</label>
        <input
          type="text"
          placeholder="Long-term Commitments"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.longTermCommitments}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, longTermCommitments: e.target.value })}
        />
      </div>
    </div>
  )
}


























const ImmigrationHistory = () => {
  const countries = [
    "Canada", "USA", "UK", "Australia", "Germany", "France",
    "Italy", "Spain", "New Zealand", "Japan", "China", "India",
    "Brazil", "South Africa", "Mexico", "Switzerland", "Sweden",
    "Netherlands", "Russia", "Singapore", "Other"
  ];

  const [immigrationHistory, setImmigrationHistory] = useState({
    previousApplications: '',
    visaRejections: '',
    hasPreviousVisas: '',
    visaDate: '',
    hasVisaRejections: '',
    visaRejections: [],
    refusalCountry: '',
    refusalDate: '',
    refusalReason: '',
    otherCountryName: '', // For custom country name input
  });

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [availableCountries, setAvailableCountries] = useState(countries);



  const handlePreviousVisaChange = (value) => {
    setImmigrationHistory({
      ...immigrationHistory,
      hasPreviousVisas: value,
      previousVisas: value === 'yes' ? [] : []
    });
  };

  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== '') {
      setImmigrationHistory({
        ...immigrationHistory,
        previousVisas: [
          ...immigrationHistory.previousVisas,
          { country: selectedCountry, visaDate: '', returnDate: '', duration: '', purpose: '' }
        ]
      });
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedVisas = immigrationHistory.previousVisas.map((visa, i) => {
      if (i === index) {
        return { ...visa, [field]: value };
      }
      return visa;
    });
    setImmigrationHistory({
      ...immigrationHistory,
      previousVisas: updatedVisas
    });
  };

  const handleRemoveCountry = (index) => {
    const updatedVisas = immigrationHistory.previousVisas.filter((_, i) => i !== index);
    setImmigrationHistory({
      ...immigrationHistory,
      previousVisas: updatedVisas
    });
  };

  const calculateDuration = (visaDate, returnDate) => {
    if (visaDate && returnDate) {
      const date1 = new Date(visaDate);
      const date2 = new Date(returnDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + " days";
    }
    return '';
  };


  const handleVisaRejectionChange = (value) => {
    setImmigrationHistory({
      ...immigrationHistory,
      hasVisaRejections: value,
      visaRejections: value === 'yes' ? [{ country: '', refusalDate: '', refusalReason: '' }] : []
    });
  };

  const addVisaRejection = () => {
    setImmigrationHistory({
      ...immigrationHistory,
      visaRejections: [...immigrationHistory.visaRejections, { country: '', refusalDate: '', refusalReason: '' }]
    });
  };

  const updateVisaRejection = (index, field, value) => {
    const updatedRejections = immigrationHistory.visaRejections.map((rejection, i) => {
      if (i === index) {
        return { ...rejection, [field]: value };
      }
      return rejection;
    });
    setImmigrationHistory({
      ...immigrationHistory,
      visaRejections: updatedRejections
    });
  };




  

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Immigration History</h3>
      <div className="grid grid-cols-1 gap-2">
       
 

      <div>
      <label className="mt-4 mb-2 font-medium text-blue-900">
        Previous Visas to Canada or Other Countries:
      </label>
      <div className="flex mt-2 space-x-4">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'yes'
            ? 'bg-blue-900 text-white'
            : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => handlePreviousVisaChange('yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'no'
            ? 'bg-blue-900 text-white'
            : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => handlePreviousVisaChange('no')}
        >
          No
        </button>
      </div>

      {immigrationHistory.hasPreviousVisas === 'yes' && (
        <>
          <label className="mt-2 font-medium text-blue-900">Select Country</label>
          <select
            className="w-full p-2 border border-gray-300 rounded input-field"
            onChange={handleCountrySelect}
            value="" // Reset the dropdown value after selection
          >
            <option value="" disabled>Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>

          {/* Display form for each selected country */}
          {immigrationHistory.previousVisas.length > 0 && (
            <>
              <h4 className="mt-4 text-xl font-bold">Countries and Visa Details</h4>
              {immigrationHistory.previousVisas.map((visa, index) => (
                <div key={index} className="p-4 mt-4 border rounded">
                  <h5 className="p-2 mb-6 text-xl font-bold text-center w-[30%] rounded-lg ml-auto mr-auto text-white bg-blue-900">{visa.country}</h5>
                  <label className="mt-2 mb-2 font-medium text-blue-900">Visa Date</label>
                  <input
                    type="date"
                    className="w-full p-2 mb-2 border border-gray-300 rounded input-field"
                    value={visa.visaDate}
                    onChange={(e) => handleInputChange(index, 'visaDate', e.target.value)}
                  />

                  <label className="mt-2 font-medium text-blue-900">Return Date</label>
                  <input
                    type="date"
                    className="w-full p-2 mb-2 border border-gray-300 rounded input-field"
                    value={visa.returnDate}
                    onChange={(e) => handleInputChange(index, 'returnDate', e.target.value)}
                  />

                  <label className="mt-2 font-medium text-blue-900">Duration of Stay</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded input-field"
                    value={calculateDuration(visa.visaDate, visa.returnDate)}
                    readOnly
                  />

                  <label className="mt-2 font-medium text-blue-900">Purpose</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded input-field"
                    value={visa.purpose}
                    onChange={(e) => handleInputChange(index, 'purpose', e.target.value)}
                  />

                  <button
                    className="px-2 py-2 font-bold text-white transition-all duration-300 bg-red-800 rounded hover:scale-110"
                    onClick={() => handleRemoveCountry(index)}
                  >
                    Remove Country
                  </button>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>


    

    



<div>
      <label className="mt-4 mb-2 font-medium text-blue-900">Previous Visa Refusals:</label>
      <div className="flex mt-2 space-x-4">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'yes'
            ? 'bg-blue-900 text-white'
            : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => handleVisaRejectionChange('yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'no'
            ? 'bg-blue-900 text-white'
            : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => handleVisaRejectionChange('no')}
        >
          No
        </button>
      </div>

      {immigrationHistory.hasVisaRejections === 'yes' && (
        <>
          {immigrationHistory.visaRejections.map((rejection, index) => (
            <div key={index} className="p-4 mt-4 border rounded">
              <label className="mt-2 font-medium text-blue-900">Country Name</label>
              <select
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={rejection.country}
                onChange={(e) => updateVisaRejection(index, 'country', e.target.value)}
              >
                <option value="" disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              {rejection.country === 'Other' && (
                <>
                  <label className="mt-2 font-medium text-blue-900">Enter Country Name</label>
                  <input
                    type="text"
                    placeholder="Enter Country Name"
                    className="w-full p-2 border border-gray-300 rounded input-field"
                    value={rejection.otherCountryName || ''}
                    onChange={(e) => updateVisaRejection(index, 'otherCountryName', e.target.value)}
                  />
                </>
              )}

              <label className="mt-2 font-medium text-blue-900">Date Refused</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={rejection.refusalDate}
                onChange={(e) => updateVisaRejection(index, 'refusalDate', e.target.value)}
              />

              <label className="mt-2 font-medium text-blue-900">Reason for Refusal</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded input-field"
                value={rejection.refusalReason}
                onChange={(e) => updateVisaRejection(index, 'refusalReason', e.target.value)}
              />
            </div>
          ))}
          <button
            className="px-4 py-2 mt-4 font-medium text-white bg-blue-900 rounded hover:bg-blue-800"
            onClick={addVisaRejection}
          >
            Add Another Visa Refusal
          </button>
        </>
      )}
    </div>


      </div>
    </div>
  );
};
























const HealthSecurity = () => {
  const [healthSecurity, setHealthSecurity] = useState({
    hasHealthIssues: '',
    diseaseName: '',
    customDisease: '',
    hasCriminalRecord: '',
    caseName: '',
    customCase: '',
  });
  const diseaseOptions = [
    'Tuberculosis', 'HIV', 'Hepatitis B', 'Hepatitis C', 'Malaria', 'Cancer', 
    'Diabetes', 'Heart Disease', 'Lung Disease', 'Kidney Disease', 'Liver Disease', 
    'Mental Health Issues', 'Stroke', 'Severe Asthma', 'Epilepsy', 'Other'
  ];
  const caseOptions = [
    'Fraud', 'Drug Trafficking', 'Human Trafficking', 'Money Laundering', 
    'Violent Crime', 'Theft', 'Bribery', 'Terrorism', 'Smuggling', 'Forgery', 
    'Cyber Crime', 'Arson', 'Tax Evasion', 'Assault', 'Corruption', 'Other'
  ];
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Health and Security</h3>
    
      <label className="mt-4 font-medium text-blue-900">Do you have any significant health issues?</label>
      <div className="flex mt-6 mb-6 space-x-6">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'yes' })}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'no' })}
        >
          No
        </button>
      </div>
    
      {healthSecurity.hasHealthIssues === 'yes' && (
        <>
          <label className="mt-8 font-medium text-blue-900">Disease Name</label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={healthSecurity.diseaseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, diseaseName: e.target.value, customDisease: '' })}
          >
            {diseaseOptions.map((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))}
          </select>
          {/* If "Other" is selected, show the custom input */}
          {healthSecurity.diseaseName === 'Other' && (
            <input
              type="text"
              placeholder="Enter Disease Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded input-field"
              value={healthSecurity.customDisease}
              onChange={(e) => setHealthSecurity({ ...healthSecurity, customDisease: e.target.value })}
            />
          )}
        </>
      )}
      {/* Criminal Record Section */}
      <label className="mt-4 font-medium text-blue-900">Do you have a criminal record?</label>
      <div className="flex mt-6 mb-6 space-x-6">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'yes' })}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'no' })}
        >
          No
        </button>
      </div>
      {/* Conditional input for criminal record */}
      {healthSecurity.hasCriminalRecord === 'yes' && (
        <>
          <label className="mt-2 font-medium text-blue-900">Case Name</label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={healthSecurity.caseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, caseName: e.target.value, customCase: '' })}
          >
            {caseOptions.map((caseName, index) => (
              <option key={index} value={caseName}>
                {caseName}
              </option>
            ))}
          </select>
          {/* If "Other" is selected, show the custom input */}
          {healthSecurity.caseName === 'Other' && (
            <input
              type="text"
              placeholder="Enter Case Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded input-field"
              value={healthSecurity.customCase}
              onChange={(e) => setHealthSecurity({ ...healthSecurity, customCase: e.target.value })}
            />
          )}
        </>
      )}
    </div>
  );
};
const AdditionalInformation = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    hasCanadianContacts: '',
    numberOfContacts: '',
    contacts: [],
    hasAccommodation: '',
    accommodationAddress: '',
    comments: ''
  });
  // Handle changing the contact name and number
  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...additionalInfo.contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };
    setAdditionalInfo({ ...additionalInfo, contacts: updatedContacts });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Additional Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Canadian Contacts or References</label>
        <div className="flex mt-2 space-x-4">
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'no', contacts: [] })}
          >
            No
          </button>
        </div>
        {/* If user selects Yes for Canadian contacts, show dropdown */}
        {additionalInfo.hasCanadianContacts === 'yes' && (
          <>
            <label className="mt-2 font-medium text-blue-900">Number of Contacts</label>
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded input-field"
              value={additionalInfo.numberOfContacts}
              onChange={(e) => {
                const num = parseInt(e.target.value);
                setAdditionalInfo({
                  ...additionalInfo,
                  numberOfContacts: num,
                  contacts: Array(num).fill({ name: '', number: '' }),
                });
              }}
            >
              <option value="">Select Number of Contacts</option>
              {[...Array(5)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
            {/* Dynamically render contact name and number fields */}
            {additionalInfo.contacts.map((contact, index) => (
              <div key={index} className="flex mb-4 space-x-4">
                <div className="w-1/2">
                  <label className="font-medium text-blue-900">Contact {index + 1} Name</label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Name`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded input-field"
                    value={contact.name}
                    onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-medium text-blue-900">Contact {index + 1} Number</label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Number`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded input-field"
                    value={contact.number}
                    onChange={(e) => handleContactChange(index, 'number', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </>
        )}
        <label className="mt-2 font-medium text-blue-900">Accommodation in Canada</label>
        <div className="flex mt-2 space-x-4">
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'no' })}
          >
            No
          </button>
        </div>
        {additionalInfo.hasAccommodation === 'yes' && (
          <>
            <label className="mt-2 font-medium text-blue-900">Address</label>
            <input
              type="text"
              placeholder="Accommodation Address"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={additionalInfo.accommodationAddress}
              onChange={(e) => setAdditionalInfo({ ...additionalInfo, accommodationAddress: e.target.value })}
            />
          </>
        )}
        <div className="mt-4">
          <label className="mt-2 font-medium text-blue-900">Additional Comments</label>
          <textarea
            placeholder="Additional Comments"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={additionalInfo.comments}
            onChange={(e) => setAdditionalInfo({ ...additionalInfo, comments: e.target.value })}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};
const Travel_Reg_Form = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);


  const [globalMaritalStatus, setGlobalMaritalStatus] = useState('');


  useEffect(() => {
    console.log("Global Marital Status:", globalMaritalStatus);
  }, [globalMaritalStatus]);

  const handleMaritalStatusChange = (status) => {
    setGlobalMaritalStatus(status);
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    // You can add your form submission logic here, such as sending data to a server
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <MaritalStatus  onMaritalStatusChange={handleMaritalStatusChange}/>;
      case 3:
        return <Education globalMaritalStatus={globalMaritalStatus}/>;
      case 4:
        return <TravelInformation />;
      case 5:
        return <Employment />;
      case 6:
          return <Finance />;
      case 7:
        return <TiesToHomeCountry />;
      case 8:
        return <ImmigrationHistory />;
      case 9:
        return <HealthSecurity />;
      case 10:
        return <AdditionalInformation />;
      default:
        return <PersonalInformation />;
    }
  };
  return (
    <>
      <div className='w-full mt-20 mb-4 text-center'>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Application Form</h2>
      </div>
      <div className="container max-w-xl p-6 mx-auto mt-16 mb-24 bg-gray-100 rounded-lg shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {renderStep()}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 font-semibold text-blue-900 bg-gray-300 rounded hover:bg-gray-500 hover:text-white hover:text-semibold"
              >
                Previous
              </button>
            )}
            {step < 10 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 text-white bg-blue-900 rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Travel_Reg_Form;
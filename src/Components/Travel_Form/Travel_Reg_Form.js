import React, { useState } from 'react';
const PersonalInformation = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: ''
  });
  return (
    <div className='p-6 '>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Personal Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900 ">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.fullName}
          onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900 ">Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.dateOfBirth}
          onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Nationality</label>
        <input
          type="text"
          placeholder="Nationality"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.nationality}
          onChange={(e) => setPersonalInfo({ ...personalInfo, nationality: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Passport Number</label>
        <input
          type="text"
          placeholder="Passport Number"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportNumber}
          onChange={(e) => setPersonalInfo({ ...personalInfo, passportNumber: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Passport Expiry Date</label>
        <input
          type="date"
          placeholder="Passport Expiry Date"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportExpiry}
          onChange={(e) => setPersonalInfo({ ...personalInfo, passportExpiry: e.target.value })}
        />
      </div>
    </div>
  );
}
const MaritalStatus = () => {
  const [maritalStatus, setMaritalStatus] = useState({
    maritalStatus: '',
    spouseName: '',
    spouseDob: '',
    spouseNationality: '',
    Spouse_Highest_Level_of_Education: '',
    children: '',
    numberOfChildren: 1,
    childrenDetails: [{ name: '', dob: '', nationality: '' }]
  });
  const [hasChildren, setHasChildren] = useState(null);
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
    const updatedChildrenDetails = Array(numberOfChildren).fill({ name: '', dob: '', nationality: '' });
    setMaritalStatus({ ...maritalStatus, numberOfChildren, childrenDetails: updatedChildrenDetails });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Marital Status</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Marital Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.maritalStatus}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, maritalStatus: e.target.value })}
        >
          <option value="">Select your status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Separated">Separated</option>
        </select>
        {/* Conditionally render spouse-related fields if marital status is Married or Separated */}
        {(maritalStatus.maritalStatus === 'Married' || maritalStatus.maritalStatus === 'Separated') && (
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
            <label className="mt-2 font-medium text-blue-900">Spouse's Highest Level of Education</label>
            <input
              type="text"
              placeholder="Spouse's Highest Level of Education"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={maritalStatus.Spouse_Highest_Level_of_Education}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, Spouse_Highest_Level_of_Education: e.target.value })}
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
const Education = () => {
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
          {/* Spouse Education Section */}
          <label className="mt-4 font-medium text-blue-900">Spouse's Highest Degree</label>
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
  const [availableCountries, setAvailableCountries] = useState(countryList);
  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== '' && !travelInfo.countriesTraveled.includes(selectedCountry)) {
      setTravelInfo({
        ...travelInfo,
        countriesTraveled: [...travelInfo.countriesTraveled, selectedCountry]
      });
      setAvailableCountries(availableCountries.filter(country => country !== selectedCountry));
    }
  };
  const removeCountry = (country) => {
    setTravelInfo({
      ...travelInfo,
      countriesTraveled: travelInfo.countriesTraveled.filter(selected => selected !== country)
    });
    setAvailableCountries([...availableCountries, country]);
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
            className="w-full h-10 p-2 border border-gray-300 rounded input-field" // Adjusted height of the select dropdown
            onChange={handleCountrySelect}
            value=""
          >
            <option value="" disabled >Select Country</option>
            {availableCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2 mt-2">
            {travelInfo.countriesTraveled.map((country, index) => (
             <div> 
              <h1 className='w-full mb-4 text-lg font-bold tracking-normal text-blue-900'>Selected Countries: </h1>
              <div 
                key={index} 
                className="items-center inline-block px-3 py-1 text-white bg-blue-900 rounded-full"
              >
                {country}
                <button
                  className="px-2 py-1 ml-2 text-white bg-transparent rounded-full hover:bg-red-700 hover:text-white"
                  onClick={() => removeCountry(country)}
                >
                  &times;
                </button>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const EmploymentFinance = () => {
  const [employment, setEmployment] = useState({
    employmentStatus: '',
    employerDetails: '',
    jobTitle: '',
    salary: '',
    employmentHistory: '',
    financialStatus: '',
    bankBalance: ''
  });
  // Handler for employment status change
  const handleEmploymentStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setEmployment((prevState) => ({
      ...prevState,
      employmentStatus: selectedStatus,
      // Reset fields if not employed
      employerDetails: selectedStatus === 'Employed' ? prevState.employerDetails : '',
      jobTitle: selectedStatus === 'Employed' ? prevState.jobTitle : '',
      salary: selectedStatus === 'Employed' ? prevState.salary : '',
      employmentHistory: selectedStatus === 'Employed' ? prevState.employmentHistory : ''
    }));
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Employment and Finance</h3>
      <div className="grid grid-cols-1 gap-2">
        {/* Current Employment Status */}
        <label className="mt-2 font-medium text-blue-900">Current Employment Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employmentStatus}
          onChange={handleEmploymentStatusChange}
        >
          <option value="" disabled>Select Employment Status</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Retired">Retired</option>
        </select>
        {/* Conditionally Rendered Fields for Employed Status */}
        {employment.employmentStatus === 'Employed' && (
          <>
            {/* Employer Details */}
            <label className="mt-2 font-medium text-blue-900">Employer Details</label>
            <input
              type="text"
              placeholder="Employer Details"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={employment.employerDetails}
              onChange={(e) => setEmployment({ ...employment, employerDetails: e.target.value })}
            />
            {/* Job Title */}
            <label className="mt-2 font-medium text-blue-900">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={employment.jobTitle}
              onChange={(e) => setEmployment({ ...employment, jobTitle: e.target.value })}
            />
            {/* Current Salary */}
            <label className="mt-2 font-medium text-blue-900">Current Salary</label>
            <input
              type="text"
              placeholder="Current Salary"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={employment.salary}
              onChange={(e) => setEmployment({ ...employment, salary: e.target.value })}
            />
            {/* Employment History */}
            <label className="mt-2 font-medium text-blue-900">Employment History (Past 5 years)</label>
            <input
              type="text"
              placeholder="Employment History"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={employment.employmentHistory}
              onChange={(e) => setEmployment({ ...employment, employmentHistory: e.target.value })}
            />
          </>
        )}
        {/* Bank Statement */}
        <label className="mt-2 font-medium text-blue-900">Bank Statement (Last 6 Months)</label>
        <input
          type="text"
          placeholder="Bank Balance"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.bankBalance}
          onChange={(e) => setEmployment({ ...employment, bankBalance: e.target.value })}
        />
        {/* Financial Status */}
        <label className="mt-2 font-medium text-blue-900">
          Financial Status (Balance Available/Cash or how much you can show off)
        </label>
        <input
          type="text"
          placeholder="Financial Status"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.financialStatus}
          onChange={(e) => setEmployment({ ...employment, financialStatus: e.target.value })}
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
    visaCountries: '',
    visaDate: '',
    hasVisaRejections: '',
    refusalCountry: '',
    refusalDate: '',
    refusalReason: '',
    otherCountryName: '' // New state for custom country name input
  });

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Immigration History</h3>
      <div className="grid grid-cols-1 gap-2">
        {/* Previous Visas to Canada or Other Countries */}
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
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasPreviousVisas: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'no'
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasPreviousVisas: 'no' })}
          >
            No
          </button>
        </div>
        {/* Conditional fields for "Yes" in Previous Visas */}
        {immigrationHistory.hasPreviousVisas === 'yes' && (
          <>
            <label className="mt-2 font-medium text-blue-900">Where (Country Name)</label>
            <select
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.visaCountries}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, visaCountries: e.target.value })}
            >
              <option value="" disabled>Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            {/* Show custom input field if "Other" is selected */}
            {immigrationHistory.visaCountries === 'Other' && (
              <>
                <label className="mt-2 font-medium text-blue-900">Enter Country Name</label>
                <input
                  type="text"
                  placeholder="Enter Country Name"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={immigrationHistory.otherCountryName}
                  onChange={(e) => setImmigrationHistory({ ...immigrationHistory, otherCountryName: e.target.value })}
                />
              </>
            )}

            <label className="mt-2 font-medium text-blue-900">When (Date)</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.visaDate}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, visaDate: e.target.value })}
            />
          </>
        )}
        
        {/* Previous Visa Refusals */}
        <label className="mt-4 mb-2 font-medium text-blue-900">Previous Visa Refusals:</label>
        <div className="flex mt-2 space-x-4">
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'yes'
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasVisaRejections: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'no'
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasVisaRejections: 'no' })}
          >
            No
          </button>
        </div>

        {/* Conditional fields for "Yes" in Visa Refusals */}
        {immigrationHistory.hasVisaRejections === 'yes' && (
          <>
            <label className="mt-2 font-medium text-blue-900">Country Name</label>
            <select
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.refusalCountry}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, refusalCountry: e.target.value })}
            >
              <option value="" disabled>Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            {/* Show custom input field if "Other" is selected for refusal */}
            {immigrationHistory.refusalCountry === 'Other' && (
              <>
                <label className="mt-2 font-medium text-blue-900">Enter Country Name</label>
                <input
                  type="text"
                  placeholder="Enter Country Name"
                  className="w-full p-2 border border-gray-300 rounded input-field"
                  value={immigrationHistory.otherCountryName}
                  onChange={(e) => setImmigrationHistory({ ...immigrationHistory, otherCountryName: e.target.value })}
                />
              </>
            )}

            <label className="mt-2 font-medium text-blue-900">Date Applied</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.refusalDate}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, refusalDate: e.target.value })}
            />
            <label className="mt-2 font-medium text-blue-900">Reason</label>
            <input
              type="text"
              placeholder="Reason for Rejection"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.refusalReason}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, refusalReason: e.target.value })}
            />
          </>
        )}
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
      {/* Significant Health Issues Section */}
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
      {/* Conditional input for health issues */}
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
        return <MaritalStatus />;
      case 3:
        return <Education />;
      case 4:
        return <TravelInformation />;
      case 5:
        return <EmploymentFinance />;
      case 6:
        return <TiesToHomeCountry />;
      case 7:
        return <ImmigrationHistory />;
      case 8:
        return <HealthSecurity />;
      case 9:
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
            {step < 9 ? (
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
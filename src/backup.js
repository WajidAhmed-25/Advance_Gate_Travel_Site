import { add } from 'date-fns';
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
        <input
          type="text"
          placeholder="Marital Status"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.maritalStatus}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, maritalStatus: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Spouse's Full Name</label>
        <input
          type="text"
          placeholder="Spouse's Full Name"
          // className= "w-full p-2 border border-gray-300 rounded input-field"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.spouseName}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseName: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Spouse's Date of Birth</label>
        <input
          type="date"
          placeholder="Spouse's Date of Birth"
          // className= "w-full p-2 border border-gray-300 rounded input-field"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.spouseDob}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseDob: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Spouse's Nationality</label>
        <input
          type="text"
          placeholder="Spouse's Nationality"
          // className= "w-full p-2 border border-gray-300 rounded input-field"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.spouseNationality}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseNationality: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Spouse's Highest Level of Education</label>
        <input
          type="text"
          placeholder="Spouse's Highest Level of Education"
          // className= "w-full p-2 border border-gray-300 rounded input-field"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={maritalStatus.Spouse_Highest_Level_of_Education}
          onChange={(e) => setMaritalStatus({ ...maritalStatus, Spouse_Highest_Level_of_Education: e.target.value })}
        />
        {/* Do you have children? */}
        <label className="mt-6 font-medium text-blue-900">Do you have children?</label>
        <div className="flex gap-8 mt-2 mb-4">
          <button
            className={`px-4 py-2 ${hasChildren === true ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
            onClick={() => {
              setHasChildren(true);
              setMaritalStatus({
                ...maritalStatus,
                numberOfChildren: 1, // Set default number of children to 1
                childrenDetails: [{ name: '', dob: '', nationality: '' }] // Default child details
              });
            }}
          >
            Yes
          </button>
          <button
            className={`px-4 py-2 ${hasChildren === false ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
            onClick={() => setHasChildren(false)}
          >
            No
          </button>
        </div>
        {/* If "Yes", ask for number of children */}
        {hasChildren === true && (
          <div>
            <label className="mt-4 font-medium text-blue-900">How many children?</label>
            <select
              value={maritalStatus.numberOfChildren}
              onChange={handleChildrenSelect}
              // className="input-field "
              className="w-[13%] p-2 border text-center border-gray-300 rounded input-field ml-4"
            >
              {[...Array(10).keys()].map(i => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <div className="p-4 mt-4 ">
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
      </div>
    </div>
  )
}
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
  return (
    <>
      <div>
        <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Education</h3>
        <div className="grid grid-cols-1 gap-2">
          <label className="mt-2 font-medium text-blue-900">Your Highest Degree</label>
          <input
            type="text"
            placeholder="Your Highest Degree"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.highestDegree}
            onChange={(e) => setEducation({ ...education, highestDegree: e.target.value })}
          />
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
            placeholder="Completion Year"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.completionYear}
            onChange={(e) => setEducation({ ...education, completionYear: e.target.value })}
          />
          <label className="mt-2 font-medium text-blue-900">Spouse's Highest Degree:</label>
          <input
            type="text"
            placeholder="Spouse's Highest Degree: "
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.spouseHighestDegree}
            onChange={(e) => setEducation({ ...education, spouseHighestDegree: e.target.value })}
          />
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
            placeholder="Spouse's Completion Year"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={education.spouseCompletionYear}
            onChange={(e) => setEducation({ ...education, spouseCompletionYear: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}
const TravelInformation = () => {
  const [travelInfo, setTravelInfo] = useState({
    purposeOfVisit: '',
    durationOfStay: '',
    countriesTraveled: ''
  });
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
          <input
            type="text"
            placeholder="Countries Traveled in Last 10 Years"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={travelInfo.countriesTraveled}
            onChange={(e) => setTravelInfo({ ...travelInfo, countriesTraveled: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}
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
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Employment and Finance</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Current Employment Status</label>
        <input
          type="text"
          placeholder="Current Employment Status"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employmentStatus}
          onChange={(e) => setEmployment({ ...employment, employmentStatus: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Employer Details</label>
        <input
          type="text"
          placeholder="Employer Details"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employerDetails}
          onChange={(e) => setEmployment({ ...employment, employerDetails: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.jobTitle}
          onChange={(e) => setEmployment({ ...employment, jobTitle: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Current Salary</label>
        <input
          type="number"
          placeholder="Current Salary"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.salary}
          onChange={(e) => setEmployment({ ...employment, salary: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Employment History (Past 5 years)</label>
        <input
          type="text"
          placeholder="Employment History"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employmentHistory}
          onChange={(e) => setEmployment({ ...employment, employmentHistory: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Bank Statement (Last 6 Month)</label>
        <input
          type="number"
          placeholder="Bank Balance"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.bankBalance}
          onChange={(e) => setEmployment({ ...employment, bankBalance: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-900">Financial Status (Balance Available/Cash or how much you can show off)</label>
        <input
          type="number"
          placeholder="Bank Balance"
          className="w-full p-2 border border-gray-300 rounded input-field"
          value={employment.bankBalance}
          onChange={(e) => setEmployment({ ...employment, financialStatus: e.target.value })}
        />
      </div>
    </div>
  )
}
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
          type="text"
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
  const [immigrationHistory, setImmigrationHistory] = useState({
    previousApplications: '',
    visaRejections: '',
    hasPreviousVisas: '',
    visaCountries: '',
    visaDate: '',
    hasVisaRejections: '',
    refusalCountry: '',
    refusalDate: '',
    refusalReason: ''
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
            className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'yes'
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasPreviousVisas: 'yes' })}
          >
            Yes
          </button>
          <button
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
            <input
              type="text"
              placeholder="Country Name"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.visaCountries}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, visaCountries: e.target.value })}
            />
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
            className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'yes'
              ? 'bg-blue-900 text-white'
              : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setImmigrationHistory({ ...immigrationHistory, hasVisaRejections: 'yes' })}
          >
            Yes
          </button>
          <button
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
            <input
              type="text"
              placeholder="Country Name"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={immigrationHistory.refusalCountry}
              onChange={(e) => setImmigrationHistory({ ...immigrationHistory, refusalCountry: e.target.value })}
            />
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
  )
}
const HealthSecurity = () => {
  const [healthSecurity, setHealthSecurity] = useState({
    hasHealthIssues: '',
    healthIssues: '',
    hasCriminalRecord: '',
    criminalRecord: '',
    diseaseName: '',
    caseName: ''
  });
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Health and Security</h3>
      {/* Significant Health Issues Section */}
      <label className="mt-4 font-medium text-blue-900">Do you have any significant health issues?</label>
      <div className="flex mt-6 mb-6 space-x-6">
        <button
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'yes' })}
        >
          Yes
        </button>
        <button
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'no' })}
        >
          No
        </button>
      </div>
      {/* Conditional input for health issues */}
      {healthSecurity.hasHealthIssues === 'yes' && (
        <>
          <label className="mt-8 font-medium text-blue-900">Disease Name</label>
          <input
            type="text"
            placeholder="Disease Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded input-field"
            value={healthSecurity.diseaseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, diseaseName: e.target.value })}
          />
        </>
      )}
      {/* Criminal Record Section */}
      <label className="mt-4 font-medium text-blue-900">Do you have a criminal record?</label>
      <div className="flex mt-6 mb-6 space-x-6">
        <button
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'yes' })}
        >
          Yes
        </button>
        <button
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
            }`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'no' })}
        >
          No
        </button>
      </div>
      {healthSecurity.hasCriminalRecord === 'yes' && (
        <>
          <label className="mt-2 font-medium text-blue-900">Case Name</label>
          <input
            type="text"
            placeholder="Case Name"
            className="w-full p-2 border border-gray-300 rounded input-field"
            value={healthSecurity.caseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, caseName: e.target.value })}
          />
        </>
      )}
    </div>
  )
}
const AdditionalInformation = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    hasCanadianContacts: '',
    canadianPhoneNumber: '',
    hasAccommodation: '',
    accommodationAddress: '',
    comments: ''
  });
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-blue-900">Additional Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-900">Canadian Contacts or References</label>
        <div className="flex mt-2 space-x-4">
          <button
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'yes' })}
          >
            Yes
          </button>
          <button
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'no' })}
          >
            No
          </button>
        </div>
        {additionalInfo.hasCanadianContacts === 'yes' && (
          <>
            <label className="mt-2 font-medium text-blue-900">Phone Number</label>
            <input
              type="text"
              placeholder="Canadian Phone Number"
              className="w-full p-2 border border-gray-300 rounded input-field"
              value={additionalInfo.canadianPhoneNumber}
              onChange={(e) => setAdditionalInfo({ ...additionalInfo, canadianPhoneNumber: e.target.value })}
            />
          </>
        )}
        <label className="mt-2 font-medium text-blue-900">Accommodation in Canada</label>
        <div className="flex mt-2 space-x-4">
          <button
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'yes' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'yes' })}
          >
            Yes
          </button>
          <button
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'no' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
              }`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'no' })}
          >
            No
          </button>
        </div>
        {/* Conditional input for accommodation address */}
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
        {/* Additional Comments */}
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
  )
}
const Travel_Reg_Form = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
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
        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">Application Form</h2>
      </div>
      <div className="container max-w-xl p-6 mx-auto mt-16 mb-24 bg-gray-100 rounded-lg shadow-md">
        <form className="space-y-6 "  >
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
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
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
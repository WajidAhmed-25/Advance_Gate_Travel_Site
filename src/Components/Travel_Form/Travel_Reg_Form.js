import React, { useState } from 'react';
const Travel_Reg_Form = () => {
  const [step, setStep] = useState(1); // Track the current step

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: ''
  });
  const [maritalStatus, setMaritalStatus] = useState({
    maritalStatus: '',
    spouseName: '',
    spouseDob: '',
    spouseNationality: '',
    Spouse_Highest_Level_of_Education: '',
    children: '',
    numberOfChildren: 1,  // Default to 1 child initially
    childrenDetails: [{ name: '', dob: '', nationality: '' }]  // Default child information
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

  
  const [travelInfo, setTravelInfo] = useState({
    purposeOfVisit: '',
    durationOfStay: '',
    countriesTraveled: ''
  });
  const [employment, setEmployment] = useState({
    employmentStatus: '',
    employerDetails: '',
    jobTitle: '',
    salary: '',
    employmentHistory: '',
    financialStatus:'',
    bankBalance: ''
  });
  const [tiesToCountry, setTiesToCountry] = useState({
    familyMembers: '',
    propertyOwnership: '',
    longTermCommitments: ''
  });
  const [immigrationHistory, setImmigrationHistory] = useState({
    visaRejections: '',
    previousApplications: '',
    details_Visa_Refusal:''
  });
  const [healthSecurity, setHealthSecurity] = useState({
    healthIssues: '',
    criminalRecord: ''
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    accommodation_in_Canada:'',
canadian_contract_references:'',
    comments: ''
  });
  // Next and Previous handlers
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      PersonalInformation: personalInfo,
      MaritalStatus: maritalStatus,
      Education: education,
      TravelInformation: travelInfo,
      EmploymentFinance: employment,
      TiesToHomeCountry: tiesToCountry,
      ImmigrationHistory: immigrationHistory,
      HealthSecurity: healthSecurity,
      AdditionalInformation: additionalInfo
    };
    console.log(formData);
  };
  // Each form section with state and handlers
  const PersonalInformation = () => (
    <div className='p-6 '>
      <h3 className="mb-8 text-3xl font-semibold text-center">Personal Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800 ">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.fullName}
          onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800 ">Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.dateOfBirth}
          onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Nationality</label>
        <input
          type="text"
          placeholder="Nationality"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.nationality}
          onChange={(e) => setPersonalInfo({ ...personalInfo, nationality: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Passport Number</label>
        <input
          type="text"
          placeholder="Passport Number"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportNumber}
          onChange={(e) => setPersonalInfo({ ...personalInfo, passportNumber: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Passport Expiry Date</label>
        <input
          type="date"
          placeholder="Passport Expiry Date"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={personalInfo.passportExpiry}
          onChange={(e) => setPersonalInfo({ ...personalInfo, passportExpiry: e.target.value })}
        />
      </div>
    </div>
  );
  const MaritalStatus = () => (

    <div>
    <h3 className="mb-8 text-3xl font-semibold text-center">Marital Status</h3>
    <div className="grid grid-cols-1 gap-2">
      <label className="mt-2 font-medium text-blue-800">Marital Status</label>
      <input
        type="text"
        placeholder="Marital Status"
      //      className= "w-full p-2 border border-gray-300 rounded input-field"
    className= "w-full p-2 border border-gray-300 rounded input-field"
        value={maritalStatus.maritalStatus}
        onChange={(e) => setMaritalStatus({ ...maritalStatus, maritalStatus: e.target.value })}
      />
      <label className="mt-2 font-medium text-blue-800">Spouse's Full Name</label>
      <input
        type="text"
        placeholder="Spouse's Full Name"
       //     className= "w-full p-2 border border-gray-300 rounded input-field"
       className= "w-full p-2 border border-gray-300 rounded input-field"
        value={maritalStatus.spouseName}
        onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseName: e.target.value })}
      />
      <label className="mt-2 font-medium text-blue-800">Spouse's Date of Birth</label>
      <input
        type="date"
        placeholder="Spouse's Date of Birth"
      //      className= "w-full p-2 border border-gray-300 rounded input-field"
      className= "w-full p-2 border border-gray-300 rounded input-field"
        value={maritalStatus.spouseDob}
        onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseDob: e.target.value })}
      />
      <label className="mt-2 font-medium text-blue-800">Spouse's Nationality</label>
      <input
        type="text"
        placeholder="Spouse's Nationality"
     //       className= "w-full p-2 border border-gray-300 rounded input-field"
     className= "w-full p-2 border border-gray-300 rounded input-field"
        value={maritalStatus.spouseNationality}
        onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseNationality: e.target.value })}
      />
      <label className="mt-2 font-medium text-blue-800">Spouse's Highest Level of Education</label>
      <input
        type="text"
        placeholder="Spouse's Highest Level of Education"
       //     className= "w-full p-2 border border-gray-300 rounded input-field"
       className= "w-full p-2 border border-gray-300 rounded input-field"
        value={maritalStatus.Spouse_Highest_Level_of_Education}
        onChange={(e) => setMaritalStatus({ ...maritalStatus, Spouse_Highest_Level_of_Education: e.target.value })}
      />

      {/* Do you have children? */}
      <label className="mt-2 font-medium text-blue-800">Do you have children?</label>
      <div className="flex gap-8">
        <button
          className={`px-4 py-2 ${hasChildren === true ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => {
            setHasChildren(true);
            setMaritalStatus({
              ...maritalStatus,
              numberOfChildren: 1,  // Set default number of children to 1
              childrenDetails: [{ name: '', dob: '', nationality: '' }]  // Default child details
            });
          }}
        >
          Yes
        </button>
        <button
          className={`px-4 py-2 ${hasChildren === false ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setHasChildren(false)}
        >
          No
        </button>
      </div>

      {/* If "Yes", ask for number of children */}
      {hasChildren === true && (
        <div>
          <label className="mt-2 font-medium text-blue-800">How many children?</label>
          <select
            value={maritalStatus.numberOfChildren}
            onChange={handleChildrenSelect}
          //  className="input-field "  
          className= "w-[13%] p-2 border text-center border-gray-300 rounded input-field ml-4"
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
  );

  
  const Education = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Education</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800">Your Highest Degree</label>
        <input
          type="text"
          placeholder="Your Highest Degree"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={education.highestDegree}
          onChange={(e) => setEducation({ ...education, highestDegree: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Field of Study</label>
        <input
          type="text"
          placeholder="Field of Study"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={education.fieldOfStudy}
          onChange={(e) => setEducation({ ...education, fieldOfStudy: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Institution Attended</label>
        <input
          type="text"
          placeholder="Institution Attended"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={education.institution}
          onChange={(e) => setEducation({ ...education, institution: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Completion Year</label>
        <input
          type="date"
          placeholder="Completion Year"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={education.completionYear}
          onChange={(e) => setEducation({ ...education, completionYear: e.target.value })}
        />


<label className="mt-2 font-medium text-blue-800">Spouse's Highest Degree:</label>

      <input
        type="text"
        placeholder="Spouse's Highest Degree:        "
        className= "w-full p-2 border border-gray-300 rounded input-field"
        value={education.spouseHighestDegree}
        onChange={(e) => setEducation({ ...education, spouseHighestDegree: e.target.value })}
      />



<label className="mt-2 font-medium text-blue-800">Spouse's Field of Study</label>

      <input
        type="text"
        placeholder="Spouse's Field of Study"
        className= "w-full p-2 border border-gray-300 rounded input-field"
        value={education.spouseFieldOfStudy}
        onChange={(e) => setEducation({ ...education, spouseFieldOfStudy: e.target.value })}
      />

<label className="mt-2 font-medium text-blue-800">Spouse's Institution Attended</label>

      <input
        type="text"
        placeholder="Spouse's Institution Attended"
        className= "w-full p-2 border border-gray-300 rounded input-field"
        value={education.spouseInstitution}
        onChange={(e) => setEducation({ ...education, spouseInstitution: e.target.value })}
      />

  
      <label className="mt-2 font-medium text-blue-800">Spouse's Completion Year</label>
      <input
        type="date"
        placeholder="Spouse's Completion Year"
        className= "w-full p-2 border border-gray-300 rounded input-field"
        value={education.spouseCompletionYear}
        onChange={(e) => setEducation({ ...education, spouseCompletionYear: e.target.value })}
      />
 




      </div>
    </div>
  );
  const TravelInformation = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Travel Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800">Purpose of Visit</label>
        <input
          type="text"
          placeholder="Purpose of Visit"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={travelInfo.purposeOfVisit}
          onChange={(e) => setTravelInfo({ ...travelInfo, purposeOfVisit: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Duration of Stay</label>
        <input
          type="text"
          placeholder="Duration of Stay"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={travelInfo.durationOfStay}
          onChange={(e) => setTravelInfo({ ...travelInfo, durationOfStay: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Countries Traveled in Last 10 Years</label>
        <input
          type="text"
          placeholder="Countries Traveled in Last 10 Years"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={travelInfo.countriesTraveled}
          onChange={(e) => setTravelInfo({ ...travelInfo, countriesTraveled: e.target.value })}
        />
      </div>
    </div>
  );
  const EmploymentFinance = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Employment and Finance</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800">Current Employment Status</label>
        <input
          type="text"
          placeholder="Current Employment Status"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employmentStatus}
          onChange={(e) => setEmployment({ ...employment, employmentStatus: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Employer Details</label>
        <input
          type="text"
          placeholder="Employer Details"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employerDetails}
          onChange={(e) => setEmployment({ ...employment, employerDetails: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Job Title</label>
        <input
          type="text"
          placeholder="Job Title"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.jobTitle}
          onChange={(e) => setEmployment({ ...employment, jobTitle: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Current Salary</label>
        <input
          type="number"
          placeholder="Current Salary"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.salary}
          onChange={(e) => setEmployment({ ...employment, salary: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Employment History (Past 5 years)</label>
        <input
          type="text"
          placeholder="Employment History"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.employmentHistory}
          onChange={(e) => setEmployment({ ...employment, employmentHistory: e.target.value })}
        />


        
      <label className="mt-2 font-medium text-blue-800">Bank Statement (Last 6 Month)</label>
        <input
          type="number"
          placeholder="Bank Balance"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.bankBalance}
          onChange={(e) => setEmployment({ ...employment, bankBalance: e.target.value })}
        />
        
        <label className="mt-2 font-medium text-blue-800">Financial Status (Balance Available/Cash or how much you can show off)</label>
        <input
          type="number"
          placeholder="Bank Balance"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={employment.bankBalance}
          onChange={(e) => setEmployment({ ...employment, financialStatus: e.target.value })}
        />
      </div>



      </div>




  );
  const TiesToHomeCountry = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Ties to Home Country</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800">Family Members in Home Country</label>
        <input
          type="text"
          placeholder="Family Members"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.familyMembers}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, familyMembers: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Property Ownership or Significant Assets</label>
        <input
          type="text"
          placeholder="Property Ownership"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.propertyOwnership}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, propertyOwnership: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Long-term Commitments or Responsibilities</label>
        <input
          type="text"
          placeholder="Long-term Commitments"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={tiesToCountry.longTermCommitments}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, longTermCommitments: e.target.value })}
        />
      </div>
    </div>
  );
  const ImmigrationHistory = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Immigration History</h3>
      <div className="grid grid-cols-1 gap-2">




      <label className="mt-2 font-medium text-blue-800">Previous Applications to Canada or Other Countries</label>
        <input
          type="text"
          placeholder="Previous Applications"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={immigrationHistory.previousApplications}
          onChange={(e) => setImmigrationHistory({ ...immigrationHistory, previousApplications: e.target.value })}
        />



        <label className="mt-2 font-medium text-blue-800">Previous Visa Rejections</label>
        <input
          type="text"
          placeholder="Previous Visa Rejections"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={immigrationHistory.visaRejections}
          onChange={(e) => setImmigrationHistory({ ...immigrationHistory, visaRejections: e.target.value })}
        />
        



        <label className="mt-2 font-medium text-blue-800">Details of Visa Refusals(Countries, Reasons, Dates)</label>
        <input
          type="text"
          placeholder="Previous Visa Rejections"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={immigrationHistory.details_Visa_Refusal}
          onChange={(e) => setImmigrationHistory({ ...immigrationHistory, details_Visa_Refusal: e.target.value })}
        />


      </div>
    </div>
  );
  const HealthSecurity = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Health and Security</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-blue-800">Do you have any significant health issues?</label>
        <input
          type="text"
          placeholder="Health Issues"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={healthSecurity.healthIssues}
          onChange={(e) => setHealthSecurity({ ...healthSecurity, healthIssues: e.target.value })}
        />
        <label className="mt-2 font-medium text-blue-800">Do you have a criminal record?</label>
        <input
          type="text"
          placeholder="Criminal Record"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={healthSecurity.criminalRecord}
          onChange={(e) => setHealthSecurity({ ...healthSecurity, criminalRecord: e.target.value })}
        />
      </div>
    </div>
  );
  const AdditionalInformation = () => (
    <div>
      <h3 className="mb-8 text-3xl font-semibold text-center">Additional Information</h3>
      <div className="grid grid-cols-1 gap-2">


      <label className="mt-2 font-medium text-blue-800">Canadian Contacts or References</label>
        <input
          type="text"
          placeholder="Canadian Contacts or References"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={additionalInfo.canadian_contract_references}
          onChange={(e) => setAdditionalInfo({ ...additionalInfo, canadian_contract_references: e.target.value })}
        />


        
        <label className="mt-2 font-medium text-blue-800">Accommodation in Canada</label>
        <input
          type="text"
          placeholder="Accommodation in Canada:
          "
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={additionalInfo.accommodation_in_Canada}
          onChange={(e) => setAdditionalInfo({ ...additionalInfo, accommodation_in_Canada: e.target.value })}
        />






<label className="mt-2 font-medium text-blue-800">Additional Comments
</label>
        <input
          type="text"
          placeholder="Additional Comments"
              className= "w-full p-2 border border-gray-300 rounded input-field"
          value={additionalInfo.comments}
          onChange={(e) => setAdditionalInfo({ ...additionalInfo, comments: e.target.value })}
        />







      </div>
    </div>
  );
  // Similar approach for other sections...
  // Form content based on the step
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
<h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Application Form</h2>
  
</div>
    
    <div className="container max-w-xl p-6 mx-auto mt-12 mb-24 bg-gray-100 rounded-lg shadow-md">
      {/* <h2 className="mb-4 text-2xl font-bold text-center">Application Form</h2> */}
      <form className="space-y-6 " onSubmit={handleSubmit} >
        {renderStep()}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-blue-800 bg-gray-300 rounded hover:bg-gray-500 hover:text-white hover:text-semibold"
            >
              Previous
            </button>
          )}
          {step < 9 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-700"
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
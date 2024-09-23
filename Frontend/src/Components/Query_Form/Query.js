import { useState,useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Query_Form() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France",
    "Italy", "Spain", "Brazil", "India", "China", "Japan", "South Korea", "Mexico",
    "Russia", "South Africa", "Netherlands", "Turkey", "Sweden", "Switzerland",
    "Argentina", "New Zealand", "Norway", "Denmark", "Poland", "Belgium", "Thailand",
    "Indonesia", "Malaysia", "Philippines", "Vietnam", "Singapore", "Saudi Arabia",
    "UAE", "Israel", "Ireland", "Portugal", "Greece", "Egypt", "Nigeria", "Kenya"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !country || !message || !age || !phone || !purpose) {
      toast.error('All fields are required!');
      return;
    }
  
    if (!/^\d+$/.test(phone)) {
      toast.error('Phone number must contain only digits!');
      return;
    }
  
    try {
      const sendDetailsResponse = await fetch('http://127.0.0.1:8000/api/send-user-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          country,
          purpose,
          message,
          age,
          phone
        }),
      });
  
      if (sendDetailsResponse.ok) {
        // Show success toast notification
        toast.success('Details sent successfully! Check your email for details.');
  
        // Navigate after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000); // Adjust the timeout if needed
      } else {
        console.error('Failed to send user details email');
        toast.warning('Details sent, but failed to send email.');
      }
  
    } catch (error) {
      console.error('Error during process:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          className="items-center justify-center w-full max-w-lg p-6 mt-12 mb-12 bg-white rounded-lg shadow-xl"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text-3xl font-bold text-center text-[#007fac]">Applicant Query Form</h2>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="name">
              Applicant Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
              placeholder="Enter your phone"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
            >
              <option value="">Select a country</option>
              {countries.map((countryName, index) => (
                <option key={index} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              min={0}
              max={99}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
              placeholder="Enter your age"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="purpose">
              Purpose
            </label>
            <select
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
            >
              <option value="">Select a purpose</option>
              <option value="travel">Travel</option>
              <option value="hotel">Hotel</option>
              <option value="flight">Flight</option>
              <option value="transport">Transport</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold text-[#007fac]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007fac]"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] px-4 py-2 font-bold text-white bg-[#007fac] rounded-xl hover:bg-[#007fac] focus:outline-none focus:ring-2 focus:ring-[#007fac]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

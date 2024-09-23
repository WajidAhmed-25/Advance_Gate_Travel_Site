import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Modal = ({ isOpen, onClose, application }) => {
    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet([application]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Visa Application");
        const fileName = `${application.fullName}_visa_application.xlsx`;
        XLSX.writeFile(workbook, fileName);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-h-[70vh] max-w-[800px] w-full overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Application Details</h2>
                <hr className="border-b-2 border-gray-300 mb-4" />
                <table className="min-w-full text-left border border-gray-300">
                    <tbody>
                        {Object.entries(application).map(([key, value], index) => (
                            <tr key={key} className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td className="px-4 py-2 font-semibold">{key.replace(/_/g, ' ')}:</td>
                                <td className="px-4 py-2">{Array.isArray(value) ? value.join(", ") : value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-200" onClick={onClose}>Close</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleDownload}>
                        Download XLSX
                    </button>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [visaApplications, setVisaApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [showSidebar, setShowSidebar] = useState(true);
    const [showApplicantDetails, setShowApplicantDetails] = useState(false);

    useEffect(() => {
        const fetchVisaApplications = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/visa-applications/");
                const data = await response.json();
                setVisaApplications(data);
            } catch (error) {
                console.error("Error fetching visa applications:", error);
            }
        };

        fetchVisaApplications();
    }, []);

    const handleOpenModal = (application) => {
        setSelectedApplication(application);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedApplication(null);
    };

    const indexOfLastApplication = currentPage * itemsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - itemsPerPage;
    const currentApplications = visaApplications.slice(indexOfFirstApplication, indexOfLastApplication);
    const totalPages = Math.ceil(visaApplications.length / itemsPerPage);

    const handleApplicantDetailsClick = () => {
        setShowApplicantDetails(true);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-64 ${showSidebar ? "block" : "hidden"} transition-all duration-300`}>
                <div className="p-4">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <ul className="mt-4">
                        <li
                            className="py-2 hover:bg-gray-700 cursor-pointer"
                            onClick={handleApplicantDetailsClick}
                        >
                            Applicant Details
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? "<" : ">"}
                </button>

                {/* Show Applicant Details only when clicked */}
                {showApplicantDetails && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center text-sm font-light">
                            <thead className="border-b bg-gray-800 font-medium text-white">
                                <tr>
                                    <th className="px-6 py-4">#</th>
                                    <th className="px-6 py-4">Full Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Country</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentApplications.map((application, index) => (
                                    <tr key={application.id} className="border-b">
                                        <td className="px-6 py-4 font-medium">{indexOfFirstApplication + index + 1}</td>
                                        <td className="px-6 py-4">{application.fullName}</td>
                                        <td className="px-6 py-4">{application.email}</td>
                                        <td className="px-6 py-4">{application.nationality}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                                onClick={() => handleOpenModal(application)}
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination Controls */}
                {showApplicantDetails && (
                    <div className="flex justify-center items-center mt-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-600 disabled:bg-gray-300"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:bg-gray-300"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}

                <Modal isOpen={isModalOpen} onClose={handleCloseModal} application={selectedApplication} />
            </div>
        </div>
    );
}

export default Dashboard;

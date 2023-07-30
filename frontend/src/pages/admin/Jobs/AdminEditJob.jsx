import React, { useState } from "react";
import Modal from "react-modal";

const AdminEditJob = (props) => {
  const { job, onSave } = props;
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [formData, setFormData] = useState({ ...job });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData); // Call the parent component's onSave function
    setShowConfirmBox(false); // Close the confirm box
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#0d1bcf]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Job</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 w-full border rounded-md h-40"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-700 font-bold">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-bold">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-bold">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-bold">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobType" className="block text-gray-700 font-bold">
              Job Type
            </label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowConfirmBox(true)}
              className="px-6 py-3 mr-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                // Go back to the previous page
                // Replace this with your own navigation logic if needed
                window.history.back();
              }}
              className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Confirm Box */}
      <Modal
        isOpen={showConfirmBox}
        onRequestClose={() => setShowConfirmBox(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Confirm Save Changes</h2>
          <p>Are you sure you want to save the changes?</p>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-3 mr-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              onClick={() => setShowConfirmBox(false)}
              className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminEditJob;

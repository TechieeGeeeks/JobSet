import React, { useState } from "react";
import Modal from "react-modal";

const AdminDeleteJob = () => {
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const handleDeleteUser = () => {
    // Implement the logic for deleting the user here
    // For this example, I'm just closing the confirm box after 1 second
    setTimeout(() => {
      setShowConfirmBox(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#0d1bcf]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Delete Job</h2>
        <p className="mb-4 text-center">
          Are you sure you want to delete this Job?
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setShowConfirmBox(true)}
            className="px-6 py-3 mr-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Delete User
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
      </div>

      {/* Confirm Box */}
      <Modal
        isOpen={showConfirmBox}
        onRequestClose={() => setShowConfirmBox(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this user?</p>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDeleteUser}
              className="px-6 py-3 mr-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete
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

export default AdminDeleteJob;

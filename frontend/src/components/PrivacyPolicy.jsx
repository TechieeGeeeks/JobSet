import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [showPolicy, setShowPolicy] = useState(true);

  // Function to handle the accept button click
  const handleAccept = () => {
    // You can add any logic you want when the user accepts the policy.
    // For example, you can save a flag in local storage to indicate the policy has been accepted.
    setShowPolicy(false);
  };

  return (
    <div className={`fixed inset-0 bg-opacity-50 bg-gray-900 flex items-center justify-center ${showPolicy ? '' : 'hidden'}`}>
      {/* Overlay Box */}
      <div className="bg-white rounded-lg p-8 w-3/4 max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        {/* Add your privacy policy details here */}
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Add more policy details as needed */}
        <p className="mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Accept Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

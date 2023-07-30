import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AdminEditUser = () => {
  const [showForm, setShowForm] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update user profile here
    // ...
    setShowForm(false); // Hide the form after submission (you can handle this differently based on your use case)
  };

  // Show the form after a slight delay for the entrance animation
  setTimeout(() => {
    setShowForm(true);
  }, 200);

  // Animation for the form entrance
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(20px)",
  });
  
  return (
    <div className="flex justify-center items-center h-screen bg-[#0d1bcf]">
      <animated.div
        style={{ ...formAnimation, width: "400px" }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Gender</label>
            <select className="mt-1 p-2 w-full border rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Date of Birth</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="flex gap-4 mb-4">
              <div className="flex-1">
              <label className="block text-gray-700 font-bold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="role" className="block text-gray-700 font-bold">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="1">Admin</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
            <div className="flex-1">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold"
                >
                  Gender
                </label>
                <div className="flex mt-1">
                  <label className="mb-4 text-center text-gray">
                    <input
                    className="mx-2"
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    <span className="mb-4 text-center text-gra">Male</span>
                  </label>
                  <label>
                    <input
                    className="mx-2"
                      type="radio"
                      name="gender"
                      value="FeMale"
                      >
                      
                    </input>
                    <span className="mb-4 text-center text-gray">Female</span>
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-gray-700 font-bold"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700 font-bold">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-gray-700 font-bold"
              >
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

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </animated.div>
    </div>
  );
};


export default AdminEditUser
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch } from "react-redux";
import { createJobTypeAction } from "../../../redux/actions/jobTypeAction";
import { useNavigate } from "react-router-dom";

const AdminCreateJobType = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  // Animation for the form entrance
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(50px)",
  });

  const [formData, setFormData] = useState({
    jobTypeName: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform form submission or validation here
    await dispatch(
      createJobTypeAction({
        jobTypeName: formData.jobTypeName,
        requirements: formData.requirements,
      })
    );
    setFormData({
      jobTypeName: "",
      requirements: "",
    });
    navigate("/job-types");
    console.log(formData);
  };

  // Show the form after a slight delay for the entrance animation
  setTimeout(() => {
    setShowForm(true);
  }, 200);

  return (
    <div
      className="h-screen flex items-center justify-center bg-[#0d1bcf]"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="max-w-md w-full p-8 bg-white rounded-lg">
        <animated.div style={formAnimation}>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Create Job Type
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="jobTypeName"
                className="mb-4 text-center text-gray-800 font-bold"
              >
                Job Type Name
              </label>
              <input
                type="text"
                id="jobTypeName"
                name="jobTypeName"
                value={formData.jobTypeName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="requirements"
                className="mb-4 text-center text-gray-800 font-bold"
              >
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md h-40"
                required
              />
            </div>
            <div className="mb-4 text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default AdminCreateJobType;

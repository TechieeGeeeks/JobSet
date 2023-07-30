import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDispatch } from "react-redux";
import { createJobAction } from "../../../redux/actions/jobAction";
import { useNavigate } from "react-router-dom";

const AdminJobCreate = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  // Animation for the form entrance
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(50px)",
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    company: "",
    contact: "",
    website: "",
    jobType: "",
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
      createJobAction({
        title: formData.title,
        description: formData.description,
        salary: formData.salary,
        location: formData.location,
        company: formData.company,
        contact: formData.contact,
        website: formData.website,
        jobType: formData.jobType,
      })
    );
    setFormData({
      title: "",
      description: "",
      salary: "",
      location: "",
      company: "",
      contact: "",
      website: "",
      jobType: "",
    });
    navigate("/jobs");
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
      <div className="max-w-md w-full p-8 bg-[#fff] rounded-lg">
        <animated.div style={formAnimation}>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray">Create Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="mb-4 text-center text-gray font-bold">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-4 text-center text-gray font-bold"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md h-40"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="mb-4 text-center text-gray font-bold">
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="location"
                className="mb-4 text-center text-gray font-bold"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="mb-4 text-center text-gray font-bold"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="mb-4 text-center text-gray font-bold"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="website"
                className="mb-4 text-center text-gray font-bold"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="jobType" className="mb-4 text-center text-gray font-bold">
                Job Type
              </label>
              <input
                type="text"
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4 text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-[#0d1bcf] text-white rounded-md font-bold"
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

export default AdminJobCreate;

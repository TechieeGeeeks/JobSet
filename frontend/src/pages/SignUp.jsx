import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import bg_img from "../img/bg_bg.png";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import login from '../img/login.png';
const SignUp = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const disptach = useDispatch();
  // Animation for the form entrance
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(50px)",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    role: 0,
    gender: "FeMale",
    city: "",
    state: "",
    dateOfBirth: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can perform form submission or validation here
    await disptach(
      userSignUpAction({
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.value,
        gender: formData.gender,
        city: formData.city,
        state: formData.state,
        dateOfBirth: formData.dateOfBirth,
        contact: formData.contact,
      })
    );
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      role: 0,
      gender: "FeMale",
      city: "",
      state: "",
      dateOfBirth: "",
      contact: "",
    });
    navigate('/login');
    console.log(formData);
  };

  // Show the form after a slight delay for the entrance animation
  setTimeout(() => {
    setShowForm(true);
  }, 200);

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center',padding:'50x' }}
    >
      <div className="shadow-xl max-w-md w-full p-8 bg-white rounded-lg">
        <animated.div style={formAnimation}>
          <h2 className="text-2xl font-bold mb-4 text-center">SIGN-UP</h2><br/>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-black font-bold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="middleName"
                  className="block text-black font-bold"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-black font-bold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-black font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="block text-black font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="role" className="block text-black font-bold">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="0">User</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="gender"
                  className="block text-black font-bold"
                >
                  Gender
                </label>
                <div className="flex mt-1">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-black">Male</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="FeMale"
                      checked={formData.gender === "FeMale"}
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-black">Female</span>
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-black font-bold"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-black font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-black font-bold">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-black font-bold"
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
            <div className="mt-8">
              <center>
              <button
                type="submit"
                className="px-4 py-2 bg-white text-lightPrimary rounded-md w-full hover:shadow-lg"
              >
                Submit
              </button>
              </center>
            </div>
            <p className="mt-4 text-center text-black">
              Already have an account?
            </p>
          </form>
        </animated.div>
      </div>
    </div>
    
  );
 
};

export default SignUp;

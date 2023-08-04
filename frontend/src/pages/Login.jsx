import { Avatar, Box } from '@mui/material';
import React, { useEffect } from 'react';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInAction } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import login from '../img/login.png';
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});



const LogIn = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.signIn);

  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo && userInfo.role === 0) {
        navigate('/user/dashboard');
      }
      if (userInfo && userInfo.role === 1) {
        navigate('/admin/dashboard');
      }
    }
  }, [isAuthenticated]);

  // useFormik is hook
  const formik = useFormik({
    // Setting up Initial Values
    initialValues: {
      email: '',
      password: '',
    },
    // To validate fields
    validationSchema: validationSchema,
    // Onsubmit handler for form
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

 

  return (
    <section className=" h-screen flex items-center justify-center"   
    style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center',padding:'50x' }}
  >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-black">
          <LockClockOutlined className="w-8 h-8 mr-2" />
          LOG-IN
        </div>
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-white text-sm">{formik.errors.email}</div>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-white text-sm">{formik.errors.password}</div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm font-light text-white">
                Don’t have an account yet?{' '}
                <Link to='/register' className="font-medium text-white hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

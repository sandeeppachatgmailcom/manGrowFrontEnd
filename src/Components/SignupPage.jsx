import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const darkTheme = useSelector((state)=>state.theme)

  useEffect(()=>{console.log(darkTheme.theme,'test')},[darkTheme])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic with formData
    console.log(formData);
  };

  return (
    <div className= {` ${darkTheme.theme} min-h-screen flex items-center justify-center   py-12 px-4 sm:px-6 lg:px-8 `}>
      <div className={` ${darkTheme.theme } max-w-md w-full space-y-8 border p-5 rounded-xl`}>
        <div>
          <h2 className={` ${darkTheme.inputtext} mt-6 text-center text-3xl  `}>Sign up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className={` ${darkTheme.inputtext} + sr-only`}>Name</label>
              <input  id="name" name="name" type="text" required value={formData.name} onChange={handleChange} autoComplete="name" className={`${darkTheme.inputtext} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className= 'sr-only'  >Email address</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} autoComplete="email" className={`${darkTheme.inputtext} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} autoComplete="current-password" className={`${darkTheme.inputtext} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} placeholder="Password" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </button>
            <div className='container flex justify-end'>
            <Link to="/signin"> Sign in </Link>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

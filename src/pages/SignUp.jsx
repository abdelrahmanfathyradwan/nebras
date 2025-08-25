import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
   <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img 
      className="mx-auto h-[100px] w-full" 
      src="/Logo.jpg" 
      alt="Nebras Academy Logo" 
    />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary-700">
      Create Your Account
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      Join Nebras Academy to begin your Quranic journey
    </p>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10 border border-gray-100">
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="mt-1">
            <input
              id="full-name"
              name="full-name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
              placeholder="+1 (___) ___-____"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
              placeholder="Create a password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <span className="text-gray-500 text-xs">8+ characters</span>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="mt-1">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
              placeholder="Re-enter your password"
            />
          </div>
        </div>

        {/* Account Type */}
        <div>
          <label htmlFor="account-type" className="block text-sm font-medium text-gray-700">
            I am a
          </label>
          <div className="mt-1">
            <select
              id="account-type"
              name="account-type"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm rounded-md"
            >
              <option>Student</option>
              <option>Parent</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the <Link to="/policy" className="text-secondary-600 hover:text-secondary-500">Terms of Service</Link> and <Link to="/policy" className="text-secondary-600 hover:text-secondary-500">Privacy Policy</Link>
          </label>
        </div>

        {/* Sign Up Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transition-colors duration-200"
          >
            Create Account
          </button>
        </div>
      </form>

      {/* Login Prompt */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-secondary-600 hover:text-secondary-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default SignUp;

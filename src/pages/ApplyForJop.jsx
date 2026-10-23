import React from 'react'
import SEO from '../components/SEO';

const ApplyForJop = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 text-center page-enter">
      <SEO 
        title="Apply for a Job" 
        description="Join Nebras Academy as an online Quran or Arabic teacher." 
        canonical="/applyForJop"
      />
      <div className="max-w-md mx-auto card p-8 sm:p-10">
        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-500 mx-auto text-2xl font-bold">
          💼
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-secondary-700 mb-4">Apply for a Job</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Are you a certified Quran or Arabic teacher interested in joining Nebras Academy? We will be launching our application portal soon.
        </p>
        <div className="text-sm text-gray-500 font-medium bg-gray-50 rounded-lg p-3 inline-block">
          Stay Tuned!
        </div>
      </div>
    </div>
  )
}

export default ApplyForJop

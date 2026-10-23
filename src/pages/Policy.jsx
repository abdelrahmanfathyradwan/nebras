import React from 'react'
import SEO from '../components/SEO';

const Policy = () => {
  return (
   <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 page-enter">
     <SEO 
       title="Student Policy" 
       description="Read the student policy, class timings, and payment terms for Nebras Academy's online Quran and Arabic classes." 
       canonical="/policy"
     />
     {/* Header Section */}
     <div className="text-center mb-16">
       <h1 className="page-title">Student Policy</h1>
       <div className="accent-bar"></div>
     </div>

     {/* Class Timings Section */}
     <section className="mb-12 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
       <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 py-5 px-6 sm:px-8">
         <h2 className="text-xl font-bold text-white">Class Timings and Rescheduling</h2>
       </div>
       <div className="p-6 sm:p-8">
         <ol className="list-decimal pl-6 space-y-4 text-gray-600 leading-relaxed">
           <li className="pl-2">
             <span className="font-semibold text-secondary-800">Flexible scheduling:</span> The student should choose class timings according to their needs.
           </li>
           <li className="pl-2">
             <span className="font-semibold text-secondary-800">Eid breaks:</span> Students may reschedule classes before Eid to be taken afterwards.
           </li>
           <li className="pl-2">
             <span className="font-semibold text-secondary-800">Rescheduling policy:</span> Classes may be rescheduled to any suitable time within the teacher's shift with at least two hours notice.
           </li>
         </ol>
       </div>
     </section>

     {/* Payment Section */}
     <section className="mb-12 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
       <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 py-5 px-6 sm:px-8">
         <h2 className="text-xl font-bold text-white">Payment Policy</h2>
       </div>
       <div className="p-6 sm:p-8">
         <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
             <h3 className="text-lg font-bold text-secondary-800 mb-4 pb-2 border-b border-gray-100">Pricing Structure</h3>
             <ul className="space-y-3 text-gray-600">
               <li className="flex items-start">
                 <span className="text-primary-500 mr-2 font-bold">•</span>
                 <span><span className="font-semibold text-secondary-800">$10/hr</span> for one-on-one classes</span>
               </li>
               <li className="flex items-start">
                 <span className="text-primary-500 mr-2 font-bold">•</span>
                 <span><span className="font-semibold text-secondary-800">$6/hr/student</span> for group classes (2-5 students)</span>
               </li>
             </ul>
           </div>
           <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
             <h3 className="text-lg font-bold text-secondary-800 mb-4 pb-2 border-b border-gray-100">Payment Terms</h3>
             <ul className="space-y-3 text-gray-600">
               <li className="flex items-start">
                 <span className="text-primary-500 mr-2 font-bold">•</span>
                 <span>Invoices sent automatically upon scheduling</span>
               </li>
               <li className="flex items-start">
                 <span className="text-primary-500 mr-2 font-bold">•</span>
                 <span>Payment due every four weeks in advance</span>
               </li>
               <li className="flex items-start">
                 <span className="text-primary-500 mr-2 font-bold">•</span>
                 <span>Classes suspended after 3-day payment delay</span>
               </li>
             </ul>
           </div>
         </div>
         <p className="mt-6 text-gray-550 italic text-sm text-center">
           Note: Free trial classes can be paid after the session.
         </p>
       </div>
     </section>

     {/* Lateness Policy */}
     <section className="mb-12 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
       <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 py-5 px-6 sm:px-8">
         <h2 className="text-xl font-bold text-white">Attendance Policy</h2>
       </div>
       <div className="p-6 sm:p-8">
         <ol className="list-decimal pl-6 space-y-4 text-gray-600 leading-relaxed">
           <li className="pl-2">
             <span className="font-semibold text-secondary-800">Punctuality required:</span> Students must attend class on time. Teachers will leave after half of the class time has passed.
           </li>
           <li className="pl-2">
             <span className="font-semibold text-secondary-800">No make-up time:</span> Lost minutes due to lateness cannot be made up.
           </li>
         </ol>
       </div>
     </section>

     {/* Arbitration Clause */}
     <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
       <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 py-5 px-6 sm:px-8">
         <h2 className="text-xl font-bold text-white">Dispute Resolution</h2>
       </div>
       <div className="p-6 sm:p-8">
         <div className="bg-amber-50/50 p-6 rounded-xl border-l-4 border-primary-500 shadow-sm text-gray-700">
           <h3 className="text-lg font-bold text-secondary-850 mb-3">Arbitration Clause</h3>
           <p className="text-sm leading-relaxed whitespace-pre-line">
             All disputes arising under this agreement shall be governed by and interpreted in accordance with the laws of Texas, without regard to principles of conflict of laws. The parties to this agreement will submit all disputes arising under this agreement to arbitration in Conroe, TX before a single arbitrator of the American Arbitration Association ("AAA"). The arbitrator shall be selected by application of the rules of the AAA, or by mutual agreement of the parties, except that such arbitrator shall be an attorney admitted to practice law in Texas. No party to this agreement will challenge the jurisdiction or venue provisions as provided in this section. Nothing contained herein shall prevent the party from obtaining an injunction.
           </p>
         </div>
       </div>
     </section>

     {/* Footer Note */}
     <div className="mt-12 text-center text-gray-400 text-sm">
       <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
     </div>
   </div>
  )
}

export default Policy;

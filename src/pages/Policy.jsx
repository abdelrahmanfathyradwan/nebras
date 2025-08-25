import React from 'react'

const Policy = () => {
  return (
   <div className="max-w-4xl mx-auto px-4 py-12">
  {/* Header Section */}
  <div className="text-center mb-16">
    <h1 className="text-4xl font-bold text-secondary-700 mb-4">Student Policy</h1>
    <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
  </div>

  {/* Class Timings Section */}
  <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="bg-secondary-700 p-4">
      <h2 className="text-xl font-bold text-white">Class Timings and Rescheduling</h2>
    </div>
    <div className="p-6">
      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li className="pl-2">
          <span className="font-semibold">Flexible scheduling:</span> The student should choose class timings according to their needs.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Eid breaks:</span> Students may reschedule classes before Eid to be taken afterwards.
        </li>
        <li className="pl-2">
          <span className="font-semibold">Rescheduling policy:</span> Classes may be rescheduled to any suitable time within the teacher's shift with at least two hours notice.
        </li>
      </ol>
    </div>
  </section>

  {/* Payment Section */}
  <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="bg-secondary-700 p-4">
      <h2 className="text-xl font-bold text-white">Payment Policy</h2>
    </div>
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-secondary-800 mb-3">Pricing Structure</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span><span className="font-medium">$10/hr</span> for one-on-one classes</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span><span className="font-medium">$6/hr/student</span> for group classes (2-5 students)</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-secondary-800 mb-3">Payment Terms</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Invoices sent automatically upon scheduling</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Payment due every four weeks in advance</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Classes suspended after 3-day payment delay</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-gray-600 italic">
        Note: Free trial classes can be paid after the session.
      </p>
    </div>
  </section>

  {/* Lateness Policy */}
  <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="bg-secondary-700 p-4">
      <h2 className="text-xl font-bold text-white">Attendance Policy</h2>
    </div>
    <div className="p-6">
      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li className="pl-2">
          <span className="font-semibold">Punctuality required:</span> Students must attend class on time. Teachers will leave after half of the class time has passed.
        </li>
        <li className="pl-2">
          <span className="font-semibold">No make-up time:</span> Lost minutes due to lateness cannot be made up.
        </li>
      </ol>
    </div>
  </section>

  {/* Arbitration Clause */}
  <section className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="bg-secondary-700 p-4">
      <h2 className="text-xl font-bold text-white">Dispute Resolution</h2>
    </div>
    <div className="p-6">
      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Arbitration Clause</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          All disputes arising under this agreement shall be governed by and interpreted in accordance with the laws of Texas, without regard to principles of conflict of laws. The parties to this agreement will submit all disputes arising under this agreement to arbitration in Conroe, TX before a single arbitrator of the American Arbitration Association ("AAA"). The arbitrator shall be selected by application of the rules of the AAA, or by mutual agreement of the parties, except that such arbitrator shall be an attorney admitted to practice law in Texas. No party to this agreement will challenge the jurisdiction or venue provisions as provided in this section. Nothing contained herein shall prevent the party from obtaining an injunction.
        </p>
      </div>
    </div>
  </section>

  {/* Footer Note */}
  <div className="mt-8 text-center text-gray-500 text-sm">
    <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>
</div>
  )
}

export default Policy;

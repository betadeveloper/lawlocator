import React from 'react';
const CallToAction = () => {
  return <section className="py-12 px-4 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="mb-6">
          Help grow our database by contributing local laws and regulations from
          your area.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Contribute a Law
        </button>
      </div>
    </section>;
};
export default CallToAction;
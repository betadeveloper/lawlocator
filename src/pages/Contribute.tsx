import React from 'react';
import { Helmet } from 'react-helmet';
import { ScaleIcon, FileTextIcon, CheckCircleIcon } from 'lucide-react';
export default function Contribute() {
  return <>
      <Helmet>
        <title>Contribute Local Laws | LawLocator.org</title>
        <meta name="description" content="Help others by contributing local laws and regulations from your area. Share your knowledge and make legal information more accessible." />
        <meta property="og:title" content="Contribute Local Laws | LawLocator.org" />
        <meta property="og:description" content="Share your knowledge of local laws and regulations to help others." />
      </Helmet>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              Contribute to LawLocator
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help make legal information more accessible by sharing local laws
              and regulations from your area. Your contribution helps others
              navigate legal requirements with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{
            icon: <FileTextIcon className="h-6 w-6" />,
            title: 'Share Knowledge',
            description: "Submit local laws and regulations you're familiar with"
          }, {
            icon: <CheckCircleIcon className="h-6 w-6" />,
            title: 'Verification Process',
            description: 'Our team verifies submissions against official sources'
          }, {
            icon: <ScaleIcon className="h-6 w-6" />,
            title: 'Help Others',
            description: 'Make legal information more accessible to everyone'
          }].map((item, index) => <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>)}
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-6">
              Submit a Law or Regulation
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200">
                    <option value="">Select a category</option>
                    <option value="noise">Noise Regulations</option>
                    <option value="business">Business Hours</option>
                    <option value="parking">Parking Rules</option>
                    <option value="alcohol">Alcohol Sales</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="JP">Japan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City/Region
                </label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200" placeholder="e.g., New York City" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rule Title
                </label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200" placeholder="e.g., Residential Quiet Hours" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Summary
                </label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200" rows={3} placeholder="Provide a short, clear summary of the rule" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Official Source URL
                </label>
                <input type="url" className="w-full px-4 py-2 rounded-lg border border-gray-200" placeholder="Link to official government website or documentation" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Submit for Review
              </button>
            </form>
          </div>
        </div>
      </main>
    </>;
}
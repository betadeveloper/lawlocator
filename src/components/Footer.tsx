import React from 'react';
import { Link } from 'react-router-dom';
import { ScaleIcon } from 'lucide-react';
const Footer = () => {
  const regions = [{
    name: 'North America',
    links: ['United States Laws', 'Canada Regulations', 'Mexico Legal Rules']
  }, {
    name: 'Europe',
    links: ['UK Laws', 'Germany Rules', 'France Regulations', 'Ireland Legal Guide']
  }, {
    name: 'Asia & Pacific',
    links: ['Japan Laws', 'Australia Regulations', 'India Legal Rules', 'Singapore Rules']
  }];
  return <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded">
                <ScaleIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">LawLocator</span>
                <span className="text-xs text-gray-500">.org</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              Helping you navigate local laws and regulations around the world
              with simple, clear explanations.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.links.map((link, linkIndex) => <li key={linkIndex}>
                      <Link to={`/search?region=${region.name.toLowerCase()}`} className="text-sm text-gray-600 hover:text-blue-600">
                        {link}
                      </Link>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} LawLocator.org. All rights reserved.
            </div>
            <div className="flex justify-start md:justify-end space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
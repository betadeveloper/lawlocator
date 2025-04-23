import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScaleIcon } from 'lucide-react';
const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white p-2.5 rounded-lg">
            <ScaleIcon className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">LawLocator</span>
            <span className="text-xs text-gray-500">.org</span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className={`text-sm font-medium ${isActive('/search') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Search
              </Link>
            </li>
            <li>
              <Link to="/contribute" className={`text-sm font-medium ${isActive('/contribute') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Contribute
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
};
export default Header;
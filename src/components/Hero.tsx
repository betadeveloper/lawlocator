import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your Java backend
    console.log('Searching for:', searchQuery);
  };
  return <section className="pt-16 pb-8 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Find Local Laws <span className="text-blue-600">In Seconds</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Simple, clear explanations of local regulations from around the world.
        No legal jargon, just straightforward answers.
      </p>
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-4">
        <div className="relative">
          <input type="text" placeholder="Search for local laws (e.g., 'quiet hours', 'parking rules')" className="w-full px-4 py-3 pl-10 pr-20 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <button type="submit" className="absolute right-2 inset-y-1 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800">
            Search
          </button>
        </div>
      </form>
      <div className="text-sm text-blue-600">
        <span className="inline-block mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </span>
        <a href="#" className="hover:underline">
          Know a local law? Contribute it here
        </a>
      </div>
    </section>;
};
export default Hero;
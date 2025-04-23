import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Tag, TrendingUp } from 'lucide-react';
const PopularSearches = () => {
  const navigate = useNavigate();
  const searches = [{
    text: 'US business permits',
    category: 'business',
    country: 'US'
  }, {
    text: 'Japan quiet hours',
    category: 'noise',
    country: 'JP'
  }, {
    text: 'UK parking zones',
    category: 'parking',
    country: 'UK'
  }, {
    text: 'Australia alcohol sales',
    category: 'alcohol',
    country: 'AU'
  }, {
    text: 'Germany shop closing',
    category: 'business',
    country: 'DE'
  }, {
    text: 'Lithuania business registration',
    category: 'business',
    country: 'LT'
  }, {
    text: 'NYC noise ordinance',
    category: 'noise',
    country: 'US'
  }, {
    text: 'Singapore public drinking',
    category: 'alcohol',
    country: 'SG'
  }];
  const handleSearchClick = (search: (typeof searches)[0]) => {
    navigate(`/search?q=${encodeURIComponent(search.text)}&category=${search.category}&country=${search.country}`);
  };
  return <section className="pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
          <TrendingUp className="h-4 w-4" />
          <span>Popular searches</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {searches.map((search, index) => <Button key={index} variant="outline" size="sm" className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 group" onClick={() => handleSearchClick(search)}>
              <Tag className="h-3 w-3 mr-2 opacity-50 group-hover:opacity-70" />
              {search.text}
            </Button>)}
        </div>
      </div>
    </section>;
};
export default PopularSearches;
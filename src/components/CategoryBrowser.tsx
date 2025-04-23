import React, { cloneElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Volume2Icon, ClockIcon, CarIcon, WineIcon, HomeIcon, ShieldIcon, BuildingIcon, ScaleIcon, TreesIcon, DollarSignIcon, HeartPulseIcon, GraduationCapIcon } from 'lucide-react';
import { cn } from '../lib/utils';
const categories = [{
  icon: <Volume2Icon />,
  title: 'Noise Regulations',
  description: 'Quiet hours and noise limits',
  slug: 'noise',
  color: 'blue'
}, {
  icon: <ClockIcon />,
  title: 'Business Hours',
  description: 'Opening and closing times',
  slug: 'business-hours',
  color: 'green'
}, {
  icon: <CarIcon />,
  title: 'Parking Rules',
  description: 'Parking zones and restrictions',
  slug: 'parking',
  color: 'orange'
}, {
  icon: <WineIcon />,
  title: 'Alcohol Sales',
  description: 'Sales permits and restrictions',
  slug: 'alcohol',
  color: 'purple'
}, {
  icon: <HomeIcon />,
  title: 'Residential Rules',
  description: 'Housing and property regulations',
  slug: 'residential',
  color: 'pink'
}, {
  icon: <ShieldIcon />,
  title: 'Public Safety',
  description: 'Safety and security regulations',
  slug: 'safety',
  color: 'red'
}, {
  icon: <BuildingIcon />,
  title: 'Construction',
  description: 'Building permits and codes',
  slug: 'construction',
  color: 'yellow'
}, {
  icon: <ScaleIcon />,
  title: 'Legal Rights',
  description: 'Citizen and resident rights',
  slug: 'rights',
  color: 'indigo'
}, {
  icon: <TreesIcon />,
  title: 'Environment',
  description: 'Environmental regulations',
  slug: 'environment',
  color: 'emerald'
}, {
  icon: <DollarSignIcon />,
  title: 'Business Permits',
  description: 'Licenses and registrations',
  slug: 'permits',
  color: 'cyan'
}, {
  icon: <HeartPulseIcon />,
  title: 'Healthcare',
  description: 'Health regulations and requirements',
  slug: 'healthcare',
  color: 'rose'
}, {
  icon: <GraduationCapIcon />,
  title: 'Education',
  description: 'Educational requirements',
  slug: 'education',
  color: 'amber'
}];
const colorVariants = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100',
  green: 'bg-green-50 text-green-600 border-green-100 hover:bg-green-100',
  orange: 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100',
  pink: 'bg-pink-50 text-pink-600 border-pink-100 hover:bg-pink-100',
  red: 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100',
  yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100 hover:bg-yellow-100',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100',
  cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100 hover:bg-cyan-100',
  rose: 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100',
  amber: 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100'
};
const CategoryBrowser = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category: (typeof categories)[0]) => {
    navigate(`/search?category=${category.slug}`);
  };
  return <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Find laws and regulations by topic
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category, index) => <button key={index} onClick={() => handleCategoryClick(category)} className={cn('flex items-start p-4 rounded-xl border transition-all duration-200', 'hover:shadow-md cursor-pointer text-left w-full', colorVariants[category.color])}>
              <div className="mr-4 p-2 rounded-lg bg-white/80 backdrop-blur-sm">
                {cloneElement(category.icon, {
              className: 'h-6 w-6'
            })}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm opacity-80">{category.description}</p>
              </div>
            </button>)}
        </div>
      </div>
    </section>;
};
export default CategoryBrowser;
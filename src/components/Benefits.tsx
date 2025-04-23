import React from 'react';
import { Clock, CheckCircle, MapPin } from 'lucide-react';
const Benefits = () => {
  const benefits = [{
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Save Time',
    description: 'Find answers in seconds instead of hours spent researching complex legal texts.'
  }, {
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    title: 'Verified Information',
    description: 'All rules are sourced from official government websites and regularly updated.'
  }, {
    icon: <MapPin className="h-8 w-8 text-purple-600" />,
    title: 'Local Context',
    description: 'Rules are explained with local context and practical examples for better understanding.'
  }];
  return <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          Why Use LawLocator.com?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gray-100 rounded-full inline-flex">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Benefits;
'use client';

import { HomeIcon, ExclamationTriangleIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon, FireIcon, BanknotesIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Troubles() {
  const scenarios = [
    {
      text: "Facing Foreclosure in Dallas Fort-Worth",
      icon: ExclamationTriangleIcon
    },
    {
      text: "Have an Inherited house you want to sell in Dallas Fort-Worth?",
      icon: HomeIcon
    },
    {
      text: "Going through a divorce?",
      icon: UserGroupIcon
    },
    {
      text: "Upside down or behind on your mortgage?",
      icon: CurrencyDollarIcon
    },
    {
      text: "Tired of dealing with bad tenants in a rental property?",
      icon: BuildingOfficeIcon
    },
    {
      text: "Owe back taxes or have liens on your house in Dallas Fort-Worth?",
      icon: DocumentTextIcon
    },
    {
      text: "Have a fire or water damaged house?",
      icon: FireIcon
    },
    {
      text: "Wanting to avoid realtor commissions?",
      icon: BanknotesIcon
    },
    {
      text: "Own a vacant house in Dallas Fort-Worth?",
      icon: HomeIcon
    },
    {
      text: "Own a house that needs thousands & thousands in repairs?",
      icon: WrenchScrewdriverIcon
    },
    {
      text: "Something else?",
      icon: QuestionMarkCircleIcon
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">We Buy Houses in Any Condition</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No matter your situation, we're here to help you sell your house quickly and hassle-free
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-gray-800 text-base font-medium group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">
                    {scenario.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
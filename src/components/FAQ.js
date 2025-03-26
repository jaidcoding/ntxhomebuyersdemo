"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Will you be listing my house on the MLS or actually buying it?",
      answer: "We are direct buyers, not real estate agents. When you work with us, we will actually purchase your property directly from you, not list it on the MLS. This means a faster, more straightforward process without the typical listing and showing hassles."
    },
    {
      question: "Do you pay fair prices for properties?",
      answer: "Yes, we offer fair market value for properties based on current market conditions, property condition, and location. Our offers are competitive and take into account all relevant factors to ensure you receive a fair price for your property."
    },
    {
      question: "How are you different from a real estate agent?",
      answer: "Unlike real estate agents who list and market your property, we are direct buyers who purchase properties outright. We don't charge commissions or fees, and we can close deals much faster than traditional real estate transactions."
    },
    {
      question: "Are there any fees or commissions to work with you?",
      answer: "No, there are no fees or commissions when you work with us. We cover all closing costs and don't charge any hidden fees. What we offer is what you get."
    },
    {
      question: "How do you determine the price to offer on my house?",
      answer: "We evaluate multiple factors including current market conditions, property condition, location, comparable sales, and renovation costs. Our pricing model is transparent and based on real market data."
    },
    {
      question: "Is there any obligation when I submit my info?",
      answer: "No, there is absolutely no obligation when you submit your information. We provide a free, no-pressure consultation to discuss your options and answer any questions you may have."
    },
    {
      question: "What happens when I fill out the form or give you a call?",
      answer: "When you contact us, we'll reach out promptly to discuss your property and situation. We'll gather some basic information and schedule a time to evaluate your property if you're interested in moving forward."
    },
    {
      question: "What do you do with my information when I submit a form?",
      answer: "We take your privacy seriously. Your information is used solely to contact you about your property and provide our services. We never share your information with third parties or use it for any other purpose without your explicit consent."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 
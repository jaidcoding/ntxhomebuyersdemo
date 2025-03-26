'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Reviews() {
    const reviews = [
        {
            name: "Jesse Campuzano",
            date: "3 weeks ago",
            text: "NTX Home Buyers made the process of buying my home super simple. They made a fair offer to buy the house as is without needing for me to make any repairs, they also paid all closing cost. what a relief. im so glad I found them.",
            tags: ["Professionalism", "Quality", "Responsiveness", "Value"]
        },
        {
            name: "Kelley Brown",
            date: "3 weeks ago",
            text: "Good folks to do business with. Good communications and fast closing. They made a fair offer and followed through with it. Thanks again!",
            tags: ["Professionalism", "Responsiveness"]
        },
        {
            name: "STEPHEN MENDIOLA",
            date: "3 weeks ago",
            text: "I was very impressed by the speed in which my property was bought. The paperwork was very minimal and I had cash in my hands for my house in days. Thank you for a fast and hassle free experience.",
            tags: ["Professionalism", "Responsiveness"]
        },
        {
            name: "Cristina Fonseca",
            date: "4 months ago",
            text: "Casey and his group gave me an offer that I could not refuse. My property closed within 30 days of the offer. They made the process as simple as possible, and showed support throughout as well! If you want to sell and get a great offer, contact this company!",
            tags: ["Professionalism", "Quality", "Responsiveness", "Value"]
        },
        {
            name: "Albert Avila",
            date: "3 weeks ago",
            text: "Super smooth process and very easy to work with 100% thank you guys.",
            tags: ["Professionalism", "Quality", "Responsiveness", "Value"]
        }
    ];

    return (
        <div className="bg-white py-12">
            <div className="w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Facebook Reviews */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-900">Facebook</h3>
                                </div>
                                <div className="flex items-center">
                                    <StarIcon className="h-6 w-6 text-yellow-400" />
                                    <span className="ml-1 text-lg font-semibold text-gray-900">5.0</span>
                                </div>
                            </div>
                        </div>

                        {/* Google Reviews */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-900">Google</h3>
                                </div>
                                <div className="flex items-center">
                                    <StarIcon className="h-6 w-6 text-yellow-400" />
                                    <span className="ml-1 text-lg font-semibold text-gray-900">5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                                        {review.name[0]}
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                        <div className="flex items-center">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                                                ))}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="text-gray-600 text-sm">{review.text}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {review.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
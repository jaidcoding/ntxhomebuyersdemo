'use client';

import { PhoneIcon, DocumentCheckIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Info() {
  return (
    <div className="bg-blue-600 text-white p-10 grid grid-cols-3 justify-center items-center">
        <div className="p-10">
            <div className="flex flex-col items-center">
                <PhoneIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold">Contact us</h2>
                <p className="text-center pl-20 pr-20 mt-5 text-lg">
                    We will ask some questions about the property, it&apos;s condition, and learn about your situation.
                </p>
            </div>
        </div>
        <div className="p-10">
            <div className="flex flex-col items-center">
                <DocumentCheckIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold">Get an offer</h2>
                <p className="text-center pl-20 pr-20 mt-5 text-lg">
                    We will schedule a time to meet with you to view the property and give you a no-obligation offer on the spot.
                </p>
            </div>
        </div>
        <div className="p-10">
            <div className="flex flex-col items-center">
                <HomeIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold">Sell your house</h2>
                <p className="text-center pl-20 pr-20 mt-5 text-lg">
                    Once we find a win-win solution, you select when you get paid and move out!
                </p>
            </div>
        </div>
    </div>
  );
}
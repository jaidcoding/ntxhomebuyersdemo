'use client';

import { ClockIcon, BanknotesIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Info() {
  return (
    <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center px-8">
                <ClockIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold mb-4">Fast & Easy</h2>
                <p className="text-center text-lg">
                    You&apos;ll receive your fair, cash offer in as little as a few hours, we can close in 10 days or less and we&apos;ll close on the date of your choosing! You&apos;re in 100% control when you sell your Dallas Fort-Worth house to NTX Home Buyers.
                </p>
            </div>
            <div className="flex flex-col items-center px-8">
                <BanknotesIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold mb-4">Pay Zero Fees Or Costs</h2>
                <p className="text-center text-lg">
                    We&apos;re not agents who are listing your house on the MLS... we&apos;re actually buying it. True Dallas Fort-Worth home buyers that buy houses quickly. Because we&apos;re buying your home, you&apos;re saving thousands in pesky realtor commissions.
                </p>
            </div>
            <div className="flex flex-col items-center px-8">
                <HomeIcon className="h-12 w-12 mb-5" />
                <h2 className="text-2xl text-center font-bold mb-4">Any Condition, Any Situation</h2>
                <p className="text-center text-lg">
                    We buy houses in Dallas Fort-Worth in as-is condition & no matter the situations you&apos;re facing. We&apos;ve helped dozens and dozens of homeowners going through tough and stressful times, so we know we&apos;ll be able to help you too!
                </p>
            </div>
        </div>
    </div>
  );
}
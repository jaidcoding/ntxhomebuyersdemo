'use client';

export default function TrustBox() {
    return (
        <div className="bg-white text-black p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Left side - Image */}
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                        src="https://ntxhomebuyers.com/wp-content/uploads/2021/03/happy-customer-1-1024x605-1.png"
                        alt="Happy customer with NTX Home Buyers"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side - Text content */}
                <div className="space-y-10">
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900">
                        Most Trusted Home Buying Company in Dallas Fort-Worth
                    </h2>
                    <h3 className="text-2xl text-center md:text-2xl font-semibold text-blue-600">
                        Selling Your Dallas Fort-Worth House Made Easy!
                    </h3>
                    <p className="text-lg text-center text-gray-700 leading-relaxed">
                        Sell your Dallas Fort-Worth house to NTX Home Buyers, and you get to choose the closing date! We buy houses in Dallas Fort-Worth NOW! 
                        <br></br><br></br>
                        When we buy your house, we take care of everything – from paperwork, to coordinating with the title company, and we can even help pay for moving expenses! We also buy Denton Houses too!            
                    </p>
                </div>
            </div>
        </div>
    );
}
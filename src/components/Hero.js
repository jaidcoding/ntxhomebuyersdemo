import { PhoneIcon } from '@heroicons/react/24/solid';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <div id="hero" className="relative pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625950019503-cae6a7825762?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              We Buy Houses in Dallas Fort-Worth
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
              We buy houses in any condition.
              <br></br>
              No realtors, No fees,
              <br></br>
              No commissions.
              <br></br>
              Get you no-obligation, 100% free cash offer today.
            </p>
            <div className="flex  space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-3 text-lg md:text-xl">
                <PhoneIcon className="h-6 w-6" />
                <span>(123)-456 -7890</span>
              </button>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="scale-110">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Get a Cash Offer</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Enter your property address"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Enter your phone number"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="opt-in"
                name="opt-in"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="opt-in" className="text-sm text-gray-700">
                I agree to receive marketing messaging from NTX Home Buyers at the phone number provided above in the form of phone calls and sms text messages. I understand I will receive up to 2 sms messages a month, data rates may apply. Reply STOP to opt out.
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get my cash offer
        </button>
      </form>
    </div>
  );
} 
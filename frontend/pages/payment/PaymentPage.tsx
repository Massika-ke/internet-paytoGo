import { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const PaymentPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, name: '10GB Plan', price: 10, priceId: 'price_1', speed: 'Up to 50 Mbps', features: ['Unlimited Data', 'No Contract'] },
    { id: 2, name: '20GB Plan', price: 20, priceId: 'price_2', speed: 'Up to 100 Mbps', features: ['Unlimited Data', 'No Contract', 'Priority Support'] },
    { id: 3, name: '50GB Plan', price: 50, priceId: 'price_3', speed: 'Up to 200 Mbps', features: ['Unlimited Data', 'No Contract', 'Priority Support', '24/7 Customer Service'] },
  ];

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: selectedPackage.priceId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        console.error('Payment error:', error);
      }
    } catch (err) {
      console.error('Payment error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 mx-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Choose Your Internet Package</h1>
        <p className="text-center text-gray-600 mb-8">Select the perfect plan for your connectivity needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer
                ${selectedPackage?.id === pkg.id 
                  ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                  : 'border border-gray-200 hover:shadow-lg'
                }`}
            >
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 mb-4">{pkg.speed}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    ${pkg.price}<span className="text-lg text-gray-500">/mo</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handlePayment}
            disabled={!selectedPackage}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${!selectedPackage 
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:from-blue-600 hover:to-indigo-700'
              }`}
          >
            {selectedPackage 
              ? `Get Started with ${selectedPackage.name} for $${selectedPackage.price}/mo`
              : 'Select a Package to Continue'}
          </button>
          
          <p className="mt-4 text-sm text-gray-500">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
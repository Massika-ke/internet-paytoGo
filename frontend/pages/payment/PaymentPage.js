import { useState } from 'react';

const PaymentPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, name: '10GB Plan', price: 10, priceId: 'price_1' },
    { id: 2, name: '20GB Plan', price: 20, priceId: 'price_2' },
    { id: 3, name: '50GB Plan', price: 50, priceId: 'price_3' },
  ];

  const handlePayment = async () => {
    // Redirect to payment gateway (e.g., Stripe)
    const stripe = await loadStripe('your-publishable-key');
    await stripe.redirectToCheckout({
      lineItems: [{ price: selectedPackage.priceId, quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Select Internet Package</h1>
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedPackage?.id === pkg.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPackage(pkg)}
            >
              <h2 className="text-lg font-semibold">{pkg.name}</h2>
              <p className="text-gray-600">${pkg.price}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handlePayment}
          disabled={!selectedPackage}
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
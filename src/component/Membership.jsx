import React from 'react';

const Membership = () => {
  const plans = [
    {
      title: "Basic",
      price: "₹499",
      features: [
        "Access to all free courses",
        "Community support",
        "Limited quizzes & projects",
      ],
    },
    {
      title: "Pro",
      price: "₹1499",
      features: [
        "All Basic features",
        "Access to premium courses",
        "Certificate of completion",
        "Weekly live sessions",
      ],
    },
    {
      title: "Premium",
      price: "₹2999",
      features: [
        "All Pro features",
        "1-on-1 mentorship sessions",
        "Resume & interview guidance",
        "Lifetime access to content",
      ],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-green-50 to-white min-h-screen py-16 px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Membership Plans</h1>
        <p className="text-gray-700 text-lg">
          Choose a membership plan that suits your learning goals and upgrade your skills efficiently.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded shadow p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold text-green-700 mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Get {plan.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;

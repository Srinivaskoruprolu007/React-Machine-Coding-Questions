import React, { useState } from "react";

const MortgageCalculator: React.FC = () => {
  const [principle, setPrinciple] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const rate = interestRate / 100 / 12;
    const n = years * 12;
    const monthly = (principle * rate) / (1 - Math.pow(1 + rate, -n));
    setMonthlyPayment(monthly ? Number(monthly.toFixed(2)) : 0);
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg spacae-y-4">
      <h2 className="text-2xl font-semibold mb-4">Mortgage Calculator</h2>
      <div className="space-y-2">
        <label className="block text-gray-700">Principle:</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={principle}
          onChange={(e) => setPrinciple(Number(e.target.value))}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Interest Rate:</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Years:</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-700">Monthly Payment:</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={monthlyPayment}
          readOnly
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4"
        onClick={calculateMortgage}
      >
        Calculate
      </button>
      {monthlyPayment > 0 && (
        <p className="mt-4 text-green-500 font-semibold">
          Your monthly payment is: ${monthlyPayment}
        </p>
      )}
    </div>
  );
};

export default MortgageCalculator;

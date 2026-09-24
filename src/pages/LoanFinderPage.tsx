import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_TYPES, COMMUNITIES } from '../data/datasets';

export default function LoanFinderPage() {
  const { userData, setUserData, setScreen } = useApp();
  const { t } = useLanguage();
  
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [state, setState] = useState(userData.state);
  const [district, setDistrict] = useState(userData.district);
  const [village, setVillage] = useState(userData.village);
  const [community, setCommunity] = useState(userData.community);
  const [businessType, setBusinessType] = useState(userData.businessType);
  const [loanAmount, setLoanAmount] = useState('');

  const states = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'West Bengal', 'Odisha', 'Punjab', 'Haryana', 'Jharkhand', 'Assam'];

  const handleSubmit = () => {
    if (!name || !address || !state || !district || !village || !community || !businessType || !loanAmount) {
      alert(t.fillAll);
      return;
    }
    
    // Calculate margin based on loan amount (loan is 90%, so margin is 10%)
    const loan = Number(loanAmount);
    const margin = loan / 0.9 * 0.1; // margin = loan * (10/90)
    
    setUserData({ 
      name, 
      address, 
      state, 
      district, 
      village,
      margin,
      community, 
      businessType 
    });
    setScreen('financial-plan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4 pt-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 shadow-lg">
            🏦
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Find Your Loan</h2>
          <p className="text-gray-500">We'll help you find the right loan scheme</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">{t.yourName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
            />
          </div>

          {/* Address Section */}
          <div className="mb-5 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📍 {t.yourAddress}</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.yourAddress}</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t.addressPlaceholder}
                rows={2}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.state}</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
                >
                  <option value="">{t.selectState}</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.district}</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder={t.selectDistrict}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.village}</label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder={t.villagePlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
                />
              </div>
            </div>
          </div>

          {/* Loan Amount */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              How much loan do you need? (₹)
              <span className="text-xs font-normal text-gray-500 block mt-1">
                Enter the loan amount you want to borrow
              </span>
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter loan amount (e.g., 500000)"
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
            />
            {loanAmount && Number(loanAmount) > 0 && (
              <div className="mt-2 bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-sm text-purple-800">
                  💡 You'll need to arrange <b>₹{Math.round(Number(loanAmount) / 0.9 * 0.1).toLocaleString('en-IN')}</b> as your margin (10%)
                </p>
              </div>
            )}
          </div>

          {/* Community */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">{t.community}</label>
            <select
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
            >
              <option value="">{t.selectCommunity}</option>
              <option value="sc">{t.sc}</option>
              <option value="st">{t.st}</option>
              <option value="obc">{t.obc}</option>
              <option value="minority">{t.minority}</option>
              <option value="general">{t.general}</option>
            </select>
          </div>

          {/* Business Type */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">{t.businessType}</label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-purple-500 focus:outline-none text-base"
            >
              <option value="">{t.selectBusiness}</option>
              {BUSINESS_TYPES.map((b) => (
                <option key={b.value} value={b.value}>{(t as any)[b.label]}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg"
          >
            Find Loan Schemes →
          </button>

          <button
            onClick={() => setScreen('home')}
            className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm py-2"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

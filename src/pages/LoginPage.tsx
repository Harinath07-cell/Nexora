import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_TYPES, COMMUNITIES } from '../data/datasets';

export default function LoginPage() {
  const { userData, setUserData, setScreen } = useApp();
  const { t } = useLanguage();
  
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [state, setState] = useState(userData.state);
  const [district, setDistrict] = useState(userData.district);
  const [village, setVillage] = useState(userData.village);
  const [margin, setMargin] = useState(userData.margin ? userData.margin.toString() : '');
  const [community, setCommunity] = useState(userData.community);
  const [businessType, setBusinessType] = useState(userData.businessType);

  const states = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Maharashtra', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'West Bengal', 'Odisha', 'Punjab', 'Haryana', 'Jharkhand', 'Assam'];

  const handleSubmit = () => {
    if (!name || !address || !state || !district || !village || !margin || !community || !businessType) {
      alert(t.fillAll);
      return;
    }
    if (Number(margin) < 10000) {
      alert(t.minMargin);
      return;
    }
    
    setUserData({ 
      name, 
      address, 
      state, 
      district, 
      village,
      margin: Number(margin), 
      community, 
      businessType 
    });
    setScreen('financial-plan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 pt-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 shadow-lg">
            ग्रा
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{t.welcome}</h2>
          <p className="text-gray-500">{t.welcomeSubtitle}</p>
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
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
            />
          </div>

          {/* Address Section */}
          <div className="mb-5 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">📍 {t.yourAddress}</h3>
            
            {/* Full Address */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.yourAddress}</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t.addressPlaceholder}
                rows={2}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base resize-none"
              />
            </div>

            {/* State, District, Village Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* State */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.state}</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
                >
                  <option value="">{t.selectState}</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.district}</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder={t.selectDistrict}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
                />
              </div>

              {/* Village */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.village}</label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder={t.villagePlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
                />
              </div>
            </div>
          </div>

          {/* Margin Money */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {t.marginMoney}
              <span className="text-xs font-normal text-gray-500 block mt-1">
                {t.marginHelp}
              </span>
            </label>
            <input
              type="number"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              placeholder={t.marginPlaceholder}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
            />
            {margin && Number(margin) >= 10000 && (
              <div className="mt-2 bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm text-green-800">
                  💡 {t.totalProject}: <b>₹{(Number(margin) / 0.1).toLocaleString('en-IN')}</b> | 
                  {t.loanAmount}: <b>₹{((Number(margin) / 0.1) * 0.9).toLocaleString('en-IN')}</b>
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
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
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
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none text-base"
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg"
          >
            {t.viewFinancialPlan} →
          </button>
        </div>
      </div>
    </div>
  );
}

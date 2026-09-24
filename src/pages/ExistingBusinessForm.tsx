import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_TYPES } from '../data/datasets';

export default function ExistingBusinessForm() {
  const { setUserData, setScreen } = useApp();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    // Essential Business Info (7 inputs)
    businessName: '',
    businessType: '',
    sector: '',
    yearsInOperation: '',
    annualTurnover: '',
    monthlyRevenue: '',
    monthlyExpenses: '',
    
    // Operations & Market (7 inputs)
    numberOfEmployees: '',
    monthlySalary: '',
    currentLoans: '',
    loanAmount: '',
    averageCustomerPerDay: '',
    competitionLevel: '',
    location: '',
  });

  const sectors = [
    'Retail Trade',
    'Manufacturing',
    'Services',
    'Agriculture & Allied',
    'Food & Beverage',
    'Textile & Handicraft',
    'Repair & Maintenance',
    'Transportation',
    'Healthcare',
    'Education',
    'Other'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Validate required fields
    const required = [
      'businessName', 'businessType', 'sector', 'yearsInOperation',
      'annualTurnover', 'monthlyRevenue', 'monthlyExpenses',
      'numberOfEmployees', 'averageCustomerPerDay', 'competitionLevel', 'location'
    ];

    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        alert('Please fill in all required fields');
        return;
      }
    }

    // Save to user data
    setUserData({
      ...formData,
      userType: 'existing',
    } as any);
    
    // Navigate directly to report
    setScreen('business-analysis-report');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 pt-16 pb-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3 shadow-lg">
            📊
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Business Analysis</h2>
          <p className="text-gray-500">Fill in your business details</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
          {/* Section 1: Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">📋</span> Basic Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Name *</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Type *</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select type</option>
                    {BUSINESS_TYPES.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Sector *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => handleInputChange('sector', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select sector</option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Years in Operation *</label>
                <input
                  type="number"
                  value={formData.yearsInOperation}
                  onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
                  placeholder="e.g., 3"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Financial Information */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">💰</span> Financial Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Annual Turnover (₹) *</label>
                <input
                  type="number"
                  value={formData.annualTurnover}
                  onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                  placeholder="e.g., 1200000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Total sales/revenue in last financial year</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Revenue (₹) *</label>
                  <input
                    type="number"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    placeholder="e.g., 100000"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Expenses (₹) *</label>
                  <input
                    type="number"
                    value={formData.monthlyExpenses}
                    onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                    placeholder="e.g., 70000"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Operations */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">👥</span> Operations
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Number of Employees *</label>
                  <input
                    type="number"
                    value={formData.numberOfEmployees}
                    onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                    placeholder="e.g., 5"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Salary Bill (₹)</label>
                  <input
                    type="number"
                    value={formData.monthlySalary}
                    onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                    placeholder="e.g., 50000"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.currentLoans === 'yes'}
                    onChange={(e) => handleInputChange('currentLoans', e.target.checked ? 'yes' : 'no')}
                    className="mt-1 w-4 h-4 text-green-600"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">Do you have any existing loans?</span>
                  </div>
                </label>
              </div>

              {formData.currentLoans === 'yes' && (
                <div className="pl-6 border-l-4 border-blue-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Total Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    placeholder="e.g., 500000"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Market */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">🎯</span> Market Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Average Customers per Day *</label>
                <input
                  type="number"
                  value={formData.averageCustomerPerDay}
                  onChange={(e) => handleInputChange('averageCustomerPerDay', e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Competition Level *</label>
                  <select
                    value={formData.competitionLevel}
                    onChange={(e) => handleInputChange('competitionLevel', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="low">Low (1-2 similar businesses)</option>
                    <option value="medium">Medium (3-5 similar businesses)</option>
                    <option value="high">High (6+ similar businesses)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Location Quality *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select quality</option>
                    <option value="prime">Prime (Main road, high footfall)</option>
                    <option value="average">Average (Good location)</option>
                    <option value="poor">Poor (Interior, low footfall)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg"
          >
            📊 Generate Analysis Report
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

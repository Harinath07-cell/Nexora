import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_TYPES } from '../data/datasets';

export default function ExistingBusinessAnalysis() {
  const { setUserData, setScreen } = useApp();
  const { t } = useLanguage();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Page 1: Essential Business Info (7 inputs)
    businessName: '',
    businessType: '',
    sector: '',
    yearsInOperation: '',
    annualTurnover: '',
    monthlyRevenue: '',
    monthlyExpenses: '',
    
    // Page 2: Operations & Market (7 inputs)
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
    // Save to user data
    setUserData({
      ...formData,
      userType: 'existing',
    } as any);
    
    // Navigate to analysis report
    setScreen('business-analysis-report');
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.businessName && formData.businessType && formData.sector && 
             formData.yearsInOperation && formData.annualTurnover && 
             formData.monthlyRevenue && formData.monthlyExpenses;
    }
    if (step === 2) {
      return formData.numberOfEmployees && formData.averageCustomerPerDay && 
             formData.competitionLevel && formData.location;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 pt-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3 shadow-lg">
            📊
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Business Analysis</h2>
          <p className="text-gray-500">Step {step} of 2</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-full h-2 mb-6 overflow-hidden">
          <div 
            className="bg-green-600 h-full transition-all duration-300"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Page 1: Essential Business Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Basic Business Information</h3>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                >
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sector</label>
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Years in Operation</label>
                <input
                  type="number"
                  value={formData.yearsInOperation}
                  onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
                  placeholder="e.g., 3"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Annual Turnover (₹)</label>
                <input
                  type="number"
                  value={formData.annualTurnover}
                  onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                  placeholder="e.g., 1200000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Total sales/revenue in last financial year</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Revenue (₹)</label>
                <input
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  placeholder="e.g., 100000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Expenses (₹)</label>
                <input
                  type="number"
                  value={formData.monthlyExpenses}
                  onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                  placeholder="e.g., 70000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Include rent, salaries, utilities, raw materials, etc.</p>
              </div>
            </div>
          )}

          {/* Page 2: Operations & Market */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">👥 Operations & Market</h3>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Employees</label>
                <input
                  type="number"
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Including yourself</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Total Monthly Salary Bill (₹)</label>
                <input
                  type="number"
                  value={formData.monthlySalary}
                  onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                  placeholder="e.g., 50000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Average Customers per Day</label>
                <input
                  type="number"
                  value={formData.averageCustomerPerDay}
                  onChange={(e) => handleInputChange('averageCustomerPerDay', e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Competition Level in Your Area</label>
                <select
                  value={formData.competitionLevel}
                  onChange={(e) => handleInputChange('competitionLevel', e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                >
                  <option value="">Select competition level</option>
                  <option value="low">Low (1-2 similar businesses)</option>
                  <option value="medium">Medium (3-5 similar businesses)</option>
                  <option value="high">High (6+ similar businesses)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Location Quality</label>
                <select
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                >
                  <option value="">Select location quality</option>
                  <option value="prime">Prime (Main road, high footfall)</option>
                  <option value="average">Average (Good location, moderate footfall)</option>
                  <option value="poor">Poor (Interior, low footfall)</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-bold transition-all"
              >
                ← Previous
              </button>
            )}
            
            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-all"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-all"
              >
                📊 Analyze My Business
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

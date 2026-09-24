import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_TYPES } from '../data/datasets';

export default function ExistingBusinessAnalysis() {
  const { setUserData, setScreen } = useApp();
  const { t } = useLanguage();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    businessName: '',
    businessType: '',
    sector: '',
    yearsInOperation: '',
    
    // Financial Data
    annualTurnover: '',
    monthlyRevenue: '',
    monthlyExpenses: '',
    currentLoans: '',
    loanAmount: '',
    loanEMI: '',
    
    // Operational Data
    numberOfEmployees: '',
    monthlySalary: '',
    workingHours: '',
    daysPerWeek: '',
    
    // Market Data
    averageCustomerPerDay: '',
    averageTransactionValue: '',
    mainCustomers: '', // retail/wholesale/both
    competitionLevel: '', // low/medium/high
    
    // Location
    businessArea: '', // sq ft
    monthlyRent: '',
    location: '', // prime/average/poor
    
    // Challenges
    mainChallenges: [] as string[],
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

  const challenges = [
    'Low customer footfall',
    'High competition',
    'Rising costs',
    'Difficulty in getting loans',
    'Staff management issues',
    'Marketing challenges',
    'Seasonal fluctuations',
    'Supply chain issues',
    'Technology adoption',
    'Cash flow problems'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      mainChallenges: prev.mainChallenges.includes(challenge)
        ? prev.mainChallenges.filter(c => c !== challenge)
        : [...prev.mainChallenges, challenge]
    }));
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
      return formData.businessName && formData.businessType && formData.sector && formData.yearsInOperation;
    }
    if (step === 2) {
      return formData.annualTurnover && formData.monthlyRevenue && formData.monthlyExpenses;
    }
    if (step === 3) {
      return formData.numberOfEmployees && formData.workingHours;
    }
    if (step === 4) {
      return formData.averageCustomerPerDay && formData.averageTransactionValue;
    }
    if (step === 5) {
      return formData.businessArea && formData.location;
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
          <p className="text-gray-500">Step {step} of 5</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-full h-2 mb-6 overflow-hidden">
          <div 
            className="bg-green-600 h-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Step 1: Basic Information */}
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
            </div>
          )}

          {/* Step 2: Financial Data */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Financial Information</h3>
              
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

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.currentLoans !== ''}
                    onChange={(e) => handleInputChange('currentLoans', e.target.checked ? 'yes' : '')}
                    className="mt-1 w-4 h-4 text-green-600"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">Do you have any existing loans?</span>
                  </div>
                </label>
              </div>

              {formData.currentLoans === 'yes' && (
                <div className="space-y-3 pl-6 border-l-4 border-blue-200">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Total Loan Amount (₹)</label>
                    <input
                      type="number"
                      value={formData.loanAmount}
                      onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                      placeholder="e.g., 500000"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Monthly EMI (₹)</label>
                    <input
                      type="number"
                      value={formData.loanEMI}
                      onChange={(e) => handleInputChange('loanEMI', e.target.value)}
                      placeholder="e.g., 15000"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Operational Data */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">👥 Operational Information</h3>
              
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Working Hours per Day</label>
                <input
                  type="number"
                  value={formData.workingHours}
                  onChange={(e) => handleInputChange('workingHours', e.target.value)}
                  placeholder="e.g., 10"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Days Open per Week</label>
                <input
                  type="number"
                  value={formData.daysPerWeek}
                  onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
                  placeholder="e.g., 6"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Step 4: Market Data */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Market Information</h3>
              
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
                <label className="block text-sm font-bold text-gray-700 mb-2">Average Transaction Value (₹)</label>
                <input
                  type="number"
                  value={formData.averageTransactionValue}
                  onChange={(e) => handleInputChange('averageTransactionValue', e.target.value)}
                  placeholder="e.g., 500"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Main Customer Type</label>
                <select
                  value={formData.mainCustomers}
                  onChange={(e) => handleInputChange('mainCustomers', e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                >
                  <option value="">Select customer type</option>
                  <option value="retail">Retail (Individual customers)</option>
                  <option value="wholesale">Wholesale (Bulk buyers)</option>
                  <option value="both">Both Retail & Wholesale</option>
                </select>
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
            </div>
          )}

          {/* Step 5: Location & Challenges */}
          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📍 Location & Challenges</h3>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Business Area (sq ft)</label>
                <input
                  type="number"
                  value={formData.businessArea}
                  onChange={(e) => handleInputChange('businessArea', e.target.value)}
                  placeholder="e.g., 500"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Rent (₹)</label>
                <input
                  type="number"
                  value={formData.monthlyRent}
                  onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
                  placeholder="e.g., 15000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location Quality</label>
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Main Challenges (Select all that apply)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {challenges.map((challenge) => (
                    <label
                      key={challenge}
                      className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer border-2 transition-all ${
                        formData.mainChallenges.includes(challenge)
                          ? 'bg-green-50 border-green-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.mainChallenges.includes(challenge)}
                        onChange={() => handleChallengeToggle(challenge)}
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
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
            
            {step < 5 ? (
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

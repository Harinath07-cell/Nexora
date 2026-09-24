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
        alert(t.fillAll);
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
          <h2 className="text-2xl font-bold text-gray-800">{t.businessAnalysis}</h2>
          <p className="text-gray-500">{t.fillDetails}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
          {/* Section 1: Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">📋</span> {t.basicInfo}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.businessName} *</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder={t.businessNamePlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.businessType} *</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">{t.selectBusiness}</option>
                    {BUSINESS_TYPES.map((b) => (
                      <option key={b.value} value={b.value}>{(t as any)[b.value]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.sector} *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => handleInputChange('sector', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">{t.selectSector}</option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.yearsInOperation} *</label>
                <input
                  type="number"
                  value={formData.yearsInOperation}
                  onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
                  placeholder={t.yearsPlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Financial Information */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">💰</span> {t.financialInfo}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.annualTurnover} *</label>
                <input
                  type="number"
                  value={formData.annualTurnover}
                  onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                  placeholder={t.turnoverPlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.monthlyRevenue} *</label>
                  <input
                    type="number"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    placeholder={t.revenuePlaceholder}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.monthlyExpenses} *</label>
                  <input
                    type="number"
                    value={formData.monthlyExpenses}
                    onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                    placeholder={t.expensesPlaceholder}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Operations */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">👥</span> {t.operations}
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.numberOfEmployees} *</label>
                  <input
                    type="number"
                    value={formData.numberOfEmployees}
                    onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                    placeholder={t.employeesPlaceholder}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.monthlySalary}</label>
                  <input
                    type="number"
                    value={formData.monthlySalary}
                    onChange={(e) => handleInputChange('monthlySalary', e.target.value)}
                    placeholder={t.salaryPlaceholder}
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
                    <span className="font-semibold text-gray-800">{t.existingLoansQuestion}</span>
                  </div>
                </label>
              </div>

              {formData.currentLoans === 'yes' && (
                <div className="pl-6 border-l-4 border-blue-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.loanAmountLabel}</label>
                  <input
                    type="number"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                    placeholder={t.loanAmountPlaceholder}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Market */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">🎯</span> {t.marketInfo}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.customersPerDay} *</label>
                <input
                  type="number"
                  value={formData.averageCustomerPerDay}
                  onChange={(e) => handleInputChange('averageCustomerPerDay', e.target.value)}
                  placeholder={t.customersPlaceholder}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.competitionLevel} *</label>
                  <select
                    value={formData.competitionLevel}
                    onChange={(e) => handleInputChange('competitionLevel', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">{t.selectCompetition}</option>
                    <option value="low">{t.competitionLow}</option>
                    <option value="medium">{t.competitionMedium}</option>
                    <option value="high">{t.competitionHigh}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t.locationQuality} *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:border-green-500 focus:outline-none"
                  >
                    <option value="">{t.selectLocation}</option>
                    <option value="prime">{t.locationPrime}</option>
                    <option value="average">{t.locationAverage}</option>
                    <option value="poor">{t.locationPoor}</option>
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
            📊 {t.generateAnalysis}
          </button>

          <button
            onClick={() => setScreen('home')}
            className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm py-2"
          >
            ← {t.backToHome}
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { calculateFinancials, PARTNER_BANKS, BUSINESS_TYPES } from '../data/datasets';
import Speaker from '../components/Speaker';

export default function FinancialPlanPage() {
  const { userData, setScreen } = useApp();
  const { t } = useLanguage();
  const financials = useMemo(() => calculateFinancials(userData.margin), [userData.margin]);
  const bank = PARTNER_BANKS[0];
  const businessLabel = BUSINESS_TYPES.find(b => b.value === userData.businessType)?.label || userData.businessType;

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white text-lg font-bold">ग्रा</div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">{t.financialPlan}</h1>
              <p className="text-xs text-gray-500">{userData.name} • {userData.village}, {userData.district}</p>
            </div>
          </div>
          <button onClick={() => setScreen('login')} className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100">
            ← {t.editDetails}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6">
          <Speaker text={`${t.totalCost} is ${financials.totalCost.toLocaleString('en-IN')} rupees. ${t.loanAmount} is ${financials.loanAmount.toLocaleString('en-IN')} rupees.`} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-gray-800">₹{financials.totalCost.toLocaleString('en-IN')}</div>
            <div className="text-sm text-gray-600 font-medium">{t.totalCost}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="text-3xl mb-2">🏦</div>
            <div className="text-2xl font-bold text-gray-800">₹{financials.loanAmount.toLocaleString('en-IN')}</div>
            <div className="text-sm text-gray-600 font-medium">{t.loanAmount}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="text-3xl mb-2">👤</div>
            <div className="text-2xl font-bold text-gray-800">₹{financials.margin.toLocaleString('en-IN')}</div>
            <div className="text-sm text-gray-600 font-medium">{t.yourMargin}</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-2xl font-bold text-gray-800">₹{financials.quarterlyEMI.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
            <div className="text-sm text-gray-600 font-medium">{t.quarterlyEMI}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span> {t.partnerBank}
          </h3>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
            <p className="font-bold text-gray-800 text-lg">{bank.name}</p>
            <p className="text-sm text-gray-600 mt-1">Processing: {bank.processing} | Docs: {bank.docs}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">{t.eligibility}:</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> {t.ageRange}</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> {userData.community.toUpperCase()} {t.beneficiary}</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> {t.noDefault}</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> {t.kycDocs}</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> {t.locationProof}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span> {t.schemeRepayment}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-600">{t.scheme}</p>
              <p className="font-bold text-gray-800">{financials.schemeName}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-600">{t.interest}</p>
              <p className="font-bold text-gray-800">{financials.interestRate}% p.a.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-600">{t.tenure}</p>
              <p className="font-bold text-gray-800">{financials.tenureYears} years</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-xs text-gray-600">{t.moratorium}</p>
              <p className="font-bold text-gray-800">{financials.moratoriumMonths} months</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📅</span> {t.repaymentSchedule}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-700">{t.quarter}</th>
                  <th className="text-left p-3 font-semibold text-gray-700">{t.date}</th>
                  <th className="text-left p-3 font-semibold text-gray-700">{t.status}</th>
                  <th className="text-right p-3 font-semibold text-gray-700">{t.amount}</th>
                </tr>
              </thead>
              <tbody>
                {financials.schedule.map((row) => (
                  <tr key={row.quarter} className={`border-t border-gray-100 ${row.status.includes('Moratorium') ? 'bg-yellow-50' : ''}`}>
                    <td className="p-3 text-gray-800 font-medium">Q{row.quarter}</td>
                    <td className="p-3 text-gray-600">{row.date}</td>
                    <td className="p-3">
                      {row.status.includes('Moratorium') ? (
                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">{row.status}</span>
                      ) : (
                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">{row.status}</span>
                      )}
                    </td>
                    <td className="p-3 text-right font-semibold text-gray-800">
                      {row.amount === 0 ? '₹0' : `₹${row.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">{t.wantReport}</h3>
          <p className="text-green-100 mb-4">{t.getAnalysis}</p>
          <button
            onClick={() => setScreen('report')}
            className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-md"
          >
            📄 {t.generateReport} →
          </button>
        </div>
      </div>
    </div>
  );
}

import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { setUserData, setScreen } = useApp();
  const { t } = useLanguage();

  const handleExistingBusiness = () => {
    setUserData({ userType: 'existing' });
    setScreen('existing-business-analysis');
  };

  const handleHasSavings = () => {
    setUserData({ userType: 'savings' });
    setScreen('login');
  };

  const handleNeedsLoan = () => {
    setUserData({ userType: 'loan' });
    setScreen('loan-finder');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 sm:p-6 pt-20 sm:pt-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl font-bold mx-auto mb-4 shadow-lg">
            ग्रा
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 px-2">{t.welcome}</h1>
          <p className="text-gray-600 text-base sm:text-lg px-2">{t.welcomeSubtitle}</p>
        </div>

        {/* Three Options */}
        <div className="space-y-4 sm:space-y-5">
          {/* Option 1: Existing Business */}
          <button
            onClick={handleExistingBusiness}
            className="w-full bg-white hover:bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 transition-colors">
                🏪
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {t.existingBusiness}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.existingBusinessDesc}
                </p>
              </div>
              <div className="text-green-600 text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">
                →
              </div>
            </div>
          </button>

          {/* Option 2: Has Savings */}
          <button
            onClick={handleHasSavings}
            className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 transition-colors">
                💰
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {t.hasSavings}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.hasSavingsDesc}
                </p>
              </div>
              <div className="text-blue-600 text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">
                →
              </div>
            </div>
          </button>

          {/* Option 3: Needs Loan */}
          <button
            onClick={handleNeedsLoan}
            className="w-full bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 transition-colors">
                🏦
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {t.needsLoan}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t.needsLoanDesc}
                </p>
              </div>
              <div className="text-purple-600 text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">
                →
              </div>
            </div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-10 sm:mt-12 text-center px-2">
          <p className="text-xs sm:text-sm text-gray-500">
            🏛️ {t.ministry}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {t.freeService}
          </p>
        </div>
      </div>
    </div>
  );
}

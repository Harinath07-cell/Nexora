import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import MapComponent from '../components/MapComponent';

export default function HomePage() {
  const { setUserData, setScreen } = useApp();
  const { t } = useLanguage();

  const handleExistingBusiness = () => {
    setUserData({ userType: 'existing' });
    setScreen('report');
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 pt-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4 shadow-lg">
            ग्रा
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.welcome}</h1>
          <p className="text-gray-600 text-lg">{t.welcomeSubtitle}</p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>🗺️</span>
            <span>Nearby Banks & Markets</span>
          </h2>
          <MapComponent
            height="300px"
            zoom={5}
            showBanks={true}
            showMarkets={true}
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            This map shows sample locations. Your actual location will be shown after login.
          </p>
        </div>

        {/* Three Options */}
        <div className="space-y-4">
          {/* Option 1: Existing Business */}
          <button
            onClick={handleExistingBusiness}
            className="w-full bg-white hover:bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 transition-colors">
                🏪
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  I have an existing business
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a detailed report and analysis for your current business
                </p>
              </div>
              <div className="text-green-600 text-2xl group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </button>

          {/* Option 2: Has Savings */}
          <button
            onClick={handleHasSavings}
            className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 transition-colors">
                💰
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  I have savings, want to start new
                </h3>
                <p className="text-gray-600 text-sm">
                  Plan your new business with your available funds
                </p>
              </div>
              <div className="text-blue-600 text-2xl group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </button>

          {/* Option 3: Needs Loan */}
          <button
            onClick={handleNeedsLoan}
            className="w-full bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-100 group-hover:bg-purple-200 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 transition-colors">
                🏦
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  I need a loan to start
                </h3>
                <p className="text-gray-600 text-sm">
                  Find the right loan scheme for your business idea
                </p>
              </div>
              <div className="text-purple-600 text-2xl group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🏛️ Ministry of Social Justice & Empowerment
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Free service for rural entrepreneurs
          </p>
        </div>
      </div>
    </div>
  );
}

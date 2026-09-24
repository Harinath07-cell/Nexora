import { AppProvider, useApp } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FinancialPlanPage from './pages/FinancialPlanPage';
import ReportPage from './pages/ReportPage';
import LoanFinderPage from './pages/LoanFinderPage';
import ExistingBusinessAnalysis from './pages/ExistingBusinessAnalysis';
import BusinessAnalysisReport from './pages/BusinessAnalysisReport';
import Chatbot from './components/Chatbot';
import LanguageSelector from './components/LanguageSelector';

function AppRouter() {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'home':
      return <HomePage />;
    case 'login':
      return <LoginPage />;
    case 'financial-plan':
      return <FinancialPlanPage />;
    case 'report':
      return <ReportPage />;
    case 'loan-finder':
      return <LoanFinderPage />;
    case 'existing-business-analysis':
      return <ExistingBusinessAnalysis />;
    case 'business-analysis-report':
      return <BusinessAnalysisReport />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <LanguageProvider>
        <div className="relative">
          <LanguageSelector />
          <AppRouter />
          <Chatbot />
        </div>
      </LanguageProvider>
    </AppProvider>
  );
}

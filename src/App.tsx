import { AppProvider, useApp } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import { CashFlowProvider } from './context/CashFlowContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FinancialPlanPage from './pages/FinancialPlanPage';
import ReportPage from './pages/ReportPage';
import LoanFinderPage from './pages/LoanFinderPage';
import ExistingBusinessForm from './pages/ExistingBusinessForm';
import BusinessAnalysisReport from './pages/BusinessAnalysisReport';
import CashFlowDashboard from './components/CashFlowDashboard';
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
      return <ExistingBusinessForm />;
    case 'business-analysis-report':
      return <BusinessAnalysisReport />;
    case 'existing-cashflow':
      return <CashFlowDashboard userType="existingBusiness" title="Existing Business Cash Flow" />;
    case 'new-cashflow':
      return <CashFlowDashboard userType="newBusiness" title="New Business Cash Flow" />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <LanguageProvider>
        <CashFlowProvider>
          <div className="relative">
            <LanguageSelector />
            <AppRouter />
            <Chatbot />
          </div>
        </CashFlowProvider>
      </LanguageProvider>
    </AppProvider>
  );
}

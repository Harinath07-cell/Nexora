import { AppProvider, useApp } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FinancialPlanPage from './pages/FinancialPlanPage';
import ReportPage from './pages/ReportPage';
import LoanFinderPage from './pages/LoanFinderPage';
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

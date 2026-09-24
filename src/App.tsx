import { AppProvider, useApp } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import LoginPage from './pages/LoginPage';
import FinancialPlanPage from './pages/FinancialPlanPage';
import ReportPage from './pages/ReportPage';
import Chatbot from './components/Chatbot';
import LanguageSelector from './components/LanguageSelector';

function AppRouter() {
  const { currentScreen } = useApp();

  switch (currentScreen) {
    case 'login':
      return <LoginPage />;
    case 'financial-plan':
      return <FinancialPlanPage />;
    case 'report':
      return <ReportPage />;
    default:
      return <LoginPage />;
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

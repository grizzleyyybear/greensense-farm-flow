import { useState } from 'react';
import { Navigation } from './Navigation';
import { Dashboard } from './Dashboard';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { HelpPage } from './HelpPage';

export const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [language, setLanguage] = useState('en');
  const [showHelp, setShowHelp] = useState(false);

  const handlePageChange = (page: string) => {
    if (page === 'help') {
      setShowHelp(true);
    } else {
      setCurrentPage(page);
      setShowHelp(false);
    }
  };

  const handleCloseHelp = () => {
    setShowHelp(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard language={language} />;
      case 'login':
        return <LoginPage language={language} />;
      case 'about':
        return <AboutPage language={language} />;
      default:
        return <Dashboard language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        language={language}
        onLanguageChange={setLanguage}
      />
      
      {renderCurrentPage()}
      
      {showHelp && (
        <HelpPage 
          language={language}
          onClose={handleCloseHelp}
        />
      )}
    </div>
  );
};
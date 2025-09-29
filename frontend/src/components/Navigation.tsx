import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  LogIn,
  Menu,
  X,
  Globe,
  HelpCircle,
  Leaf,
  Shield,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getTranslation } from '@/lib/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getTranslation(language);

  const navigationItems = [
    { id: 'dashboard', label: t.dashboard, icon: Home },
    { id: 'about', label: t.about, icon: Users },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  ];

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === language);
    return lang?.name || 'English';
  };

  return (
    <>
      <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Leaf className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    GreenSense
                  </h1>
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Smart Agriculture Pro
                  </Badge>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === `/${item.id}`;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    asChild
                    className="gap-2 transition-all hover:scale-105"
                  >
                    <Link to={`/${item.id}`}>
                      <IconComponent className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}

              {/* Auth section: login or profile */}
              <div className="flex items-center ml-4">
                <SignedOut>
                  <Button
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <Link to="/login">
                      <LogIn className="h-4 w-4" />
                      {t.login}
                    </Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 ml-4">
                    <Globe className="h-4 w-4" />
                    {t.language}: {getCurrentLanguageName()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={language === lang.code ? "bg-accent" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === `/${item.id}`;
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "ghost"}
                      className="justify-start gap-2"
                      asChild
                    >
                      <Link to={`/${item.id}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <IconComponent className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </Button>
                  );
                })}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="justify-start gap-2 mt-2">
                      <Globe className="h-4 w-4" />
                      {t.language}: {getCurrentLanguageName()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Auth section for mobile */}
                <SignedOut>
                  <Button
                    className="justify-start gap-2 mt-2"
                    asChild
                  >
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogIn className="h-4 w-4" />
                      {t.login}
                    </Link>
                  </Button>
                </SignedOut>
                <SignedIn>
                  <div className="mt-2 flex justify-start">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-gradient-to-r from-primary to-secondary"
          asChild
        >
          <Link to="/help">
            <HelpCircle className="h-5 w-5 mr-2" />
            {t.help}
          </Link>
        </Button>
      </div>
    </>
  );
};
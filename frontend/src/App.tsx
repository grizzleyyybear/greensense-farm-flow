import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from "./components/Dashboard";
import { LoginPage } from "./components/LoginPage";
import { AboutPage } from "./components/AboutPage";
import { HelpPage } from "./components/HelpPage";
import NotFound from "./pages/NotFound";
import { HomePage } from "./components/HomePage";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const queryClient = new QueryClient();

// This component will protect the dashboard route
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        afterSignOutUrl="/"
      >
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                {/* Redirect from root to homepage */}
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<HomePage />} />
                
                {/* Protected Dashboard Route */}
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="help" element={<HelpPage />} />
              </Route>
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </ClerkProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
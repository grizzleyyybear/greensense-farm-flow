import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Smartphone, Shield, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SignIn, SignUp } from "@clerk/clerk-react";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      {/* Container for the entire login page content */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-6xl flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16">

        {/* Left-side Marketing Column */}
        <div className="hidden lg:flex flex-col items-start space-y-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl shadow-lg">
          <div className="space-y-4">
            <Leaf className="h-16 w-16 text-primary drop-shadow-lg" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome to GreenSense
            </h1>
            <p className="text-xl text-muted-foreground">Advanced Smart Agriculture Platform</p>
          </div>

          <div className="grid gap-6 w-full">
            <Card className="bg-background/80 border-2 border-primary/20 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Crop Monitoring</h3>
                  <p className="text-sm text-muted-foreground">Monitor your crops 24/7 with AI-powered sensors</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 border-2 border-secondary/20 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Smart Pesticide Control</h3>
                  <p className="text-sm text-muted-foreground">Reduce pesticide usage by up to 60% with precise targeting</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 border-2 border-accent/20 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">Get insights to improve yield and sustainability</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right-side Login/Signup Form */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          <Card className="w-full shadow-2xl border-2">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center lg:hidden mb-4">
                <div className="relative">
                  <Leaf className="h-12 w-12 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                {isLogin ? "Login" : "Sign Up"}
              </CardTitle>
              <Badge variant="secondary" className="mx-auto">
                <Shield className="h-3 w-3 mr-1" />
                Secure Authentication
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4 flex flex-col items-center justify-center">
              {isLogin ? (
                <SignIn
                  fallbackRedirectUrl="/dashboard"
                  appearance={{ variables: { colorPrimary: "#22c55e" } }}
                />
              ) : (
                <SignUp
                  fallbackRedirectUrl="/dashboard"
                  appearance={{ variables: { colorPrimary: "#22c55e" } }}
                />
              )}
            </CardContent>
          </Card>
          
          {/* Toggle Button */}
          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
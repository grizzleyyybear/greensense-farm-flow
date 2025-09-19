import { Leaf, Shield, Target, TrendingUp, Zap, Sun, CheckCircle, Lightbulb, BarChart2, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import heroImage from '@/assets/hero-agriculture.jpg'; // Ensure this image path is correct
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { language } = useLanguage();
    const t = getTranslation(language);

    // Feature data (can be moved to a separate config file if it grows)
    const keyBenefits = [
        {
            icon: CheckCircle,
            title: t.precisionDiagnosis || "Precision Diagnosis",
            description: t.precisionDiagnosisDesc || "AI-powered detection of crop diseases with unparalleled accuracy.",
        },
        {
            icon: Lightbulb,
            title: t.smartRecommendations || "Smart Recommendations",
            description: t.smartRecommendationsDesc || "Intelligent advice for optimal pesticide and resource management.",
        },
        {
            icon: BarChart2,
            title: t.yieldBoost || "Yield Boost",
            description: t.yieldBoostDesc || "Maximize harvest and minimize waste with data-driven insights.",
        },
        {
            icon: Leaf,
            title: t.ecoFriendly || "Eco-Friendly Farming",
            description: t.ecoFriendlyDesc || "Reduce chemical use and promote sustainable agricultural practices.",
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">
            {/* Hero Section - More prominent and engaging */}
            <section
                className="relative py-24 md:py-32 px-4 text-center text-white flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 opacity-70" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Leaf className="h-20 w-20 text-white drop-shadow-lg animate-pulse-slow" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                        {t.revolutionizeAgriculture || "Revolutionize Your Agriculture with GreenSense"}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-8 drop-shadow-md">
                        {t.aiPoweredCropProtection || "AI-powered crop health monitoring and precision management for a sustainable future."}
                    </p>
                    <div className="flex justify-center gap-4 mb-8">
                        <Badge className="bg-white/20 text-white border-white/30 text-base py-1 px-3">
                            <Target className="h-4 w-4 mr-2" />
                            {t.aiAccuracy || "95% AI Accuracy"}
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30 text-base py-1 px-3">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            {t.pesticideReduction || "60% Pesticide Reduction"}
                        </Badge>
                    </div>
                    
                    <SignedOut>
                        <Button asChild size="lg" className="rounded-full px-10 py-5 text-xl font-semibold shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300">
                            <Link to="/login">{t.getStarted || "Get Started Today"}</Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <Button asChild size="lg" className="rounded-full px-10 py-5 text-xl font-semibold shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300">
                            <Link to="/dashboard">{t.goToDashboard || "Go to Dashboard"}</Link>
                        </Button>
                    </SignedIn>
                </div>
            </section>

            {/* Key Benefits / Value Proposition Section */}
            <section className="py-16 px-4 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                        {t.howGreenSenseHelps || "How GreenSense Helps You Thrive"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyBenefits.map((benefit, index) => (
                            <Card key={index} className="text-center p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
                                <CardContent className="p-0">
                                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full inline-flex mb-6">
                                        <benefit.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-xl mb-3 text-foreground">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Statistics Section - Re-using elements for consistency */}
            <section className="py-16 px-4 bg-gradient-to-br from-accent/10 to-secondary/10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                        {t.ourImpact || "Our Impact in Numbers"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center p-6 bg-card shadow-md">
                            <CardContent className="p-0 flex flex-col items-center">
                                <Shield className="h-10 w-10 text-primary mb-4" />
                                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                                <p className="text-lg text-muted-foreground">{t.farmsProtected || "Farms Protected"}</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 bg-card shadow-md">
                            <CardContent className="p-0 flex flex-col items-center">
                                <TrendingUp className="h-10 w-10 text-secondary mb-4" />
                                <div className="text-4xl font-bold text-secondary mb-2">60%</div>
                                <p className="text-lg text-muted-foreground">{t.pesticideReduction || "Pesticide Reduction"}</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 bg-card shadow-md">
                            <CardContent className="p-0 flex flex-col items-center">
                                <Zap className="h-10 w-10 text-accent mb-4" />
                                <div className="text-4xl font-bold text-accent mb-2">25%</div>
                                <p className="text-lg text-muted-foreground">{t.yieldIncrease || "Yield Increase"}</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 bg-card shadow-md">
                            <CardContent className="p-0 flex flex-col items-center">
                                <Target className="h-10 w-10 text-primary mb-4" />
                                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                                <p className="text-lg text-muted-foreground">{t.detectionAccuracy || "Detection Accuracy"}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action for Further Exploration */}
            <section className="py-20 px-4 text-center bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl font-bold text-foreground mb-6">
                        {t.readyToTransform || "Ready to Transform Your Farm?"}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        {t.exploreOurSolutions || "Discover how GreenSense can bring efficiency and sustainability to your agricultural practices."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all">
                            <Link to="/about">{t.learnMore || "Learn More About Us"}</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-primary/50 text-primary hover:bg-primary/10 transition-all">
                            <Link to="/help">{t.getSupport || "Get Support"}</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};
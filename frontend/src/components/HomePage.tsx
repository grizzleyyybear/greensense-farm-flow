import { Leaf, Shield, Target, TrendingUp, Zap, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import heroImage from '@/assets/hero-agriculture.jpg';
import { Navigation } from './Navigation';
import { SignedIn } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { language } = useLanguage();
    const t = getTranslation(language);

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">
                <div
                    className="relative h-64 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(rgba(240, 135, 135, 0), rgba(255, 199, 167, 0)), url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40" />
                    <div className="relative text-center text-white z-10">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <Leaf className="h-16 w-16 text-white drop-shadow-lg" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-white flex items-center justify-center">
                                    <Shield className="h-3 w-3 text-primary" />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{t.smartCropHealth}</h2>
                        <p className="text-lg opacity-90 drop-shadow-md">{t.smartAgriculturePlatform}</p>
                        <div className="flex justify-center gap-4 mt-4">
                            <Badge className="bg-white/20 text-white border-white/30">
                                <Target className="h-3 w-3 mr-1" />
                                95% {t.aiAccuracy}
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                60% {t.pesticideReduction}
                            </Badge>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <SignedIn>
                                <Button asChild size="lg" className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all">
                                    <Link to="/dashboard">{t.dashboard || "Go to Dashboard"}</Link>
                                </Button>
                            </SignedIn>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <Card className="border-2 border-healthy/20 hover:border-healthy/40 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-healthy/10 rounded-full">
                                        <Target className="h-8 w-8 text-healthy" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{t.environmentalImpact}</h3>
                                        <p className="text-2xl font-bold text-healthy">60% Reduction</p>
                                        <p className="text-sm text-muted-foreground">vs. traditional methods</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-info/20 hover:border-info/40 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-info/10 rounded-full">
                                        <TrendingUp className="h-8 w-8 text-info" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{t.environmentalImpact}</h3>
                                        <p className="text-2xl font-bold text-info">85% Less</p>
                                        <p className="text-sm text-muted-foreground">soil contamination</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-warning/20 hover:border-warning/40 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-warning/10 rounded-full">
                                        <Zap className="h-8 w-8 text-warning" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{t.realTimeMonitoring}</h3>
                                        <p className="text-2xl font-bold text-warning">24/7</p>
                                        <p className="text-sm text-muted-foreground">AI surveillance</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className="border-2 border-warning/20 hover:border-warning/40 transition-all duration-300 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Sun className="h-5 w-5 text-warning" />
                                    {t.infectionTrend}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Track infection trends and weather insights for smarter farming decisions.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-info/20 hover:border-info/40 transition-all duration-300 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-info" />
                                    {t.recentActivity}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Stay updated with the latest activities and alerts from your smart farm.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    );
};
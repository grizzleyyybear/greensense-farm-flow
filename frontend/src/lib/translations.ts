export interface Translation {
  // Navigation
  dashboard: string;
  about: string;
  login: string;
  help: string;
  language: string;

  // Dashboard
  smartCropHealth: string;
  welcomeBack: string;
  farmOverview: string;
  plotsMonitored: string;
  pesticideReduction: string;
  aiAccuracy: string;
  environmentalImpact: string;
  quickActions: string;
  manualSpray: string;
  autoMode: string;
  pesticideLevel: string;
  fullTank: string;
  recentActivity: string;
  pesticideApplied: string;
  infectionDetected: string;
  systemAlert: string;
  viewAllNotifications: string;
  infectionTrend: string;
  last7Days: string;
  plot: string;
  healthy: string;
  mildInfection: string;
  severeInfection: string;
  viewDetails: string;
  
  // Plant Detail View
  plantHealthAnalysis: string;
  healthScore: string;
  recommendation: string;
  sprayNow: string;
  scheduleSpray: string;
  backToDashboard: string;
  
  // Login Page  
  signIn: string;
  signUp: string;
  email: string;
  password: string;
  farmName: string;
  confirmPassword: string;
  secureAuth: string;
  noAccount: string;
  haveAccount: string;
  createAccount: string;
  welcomeToGreenSense: string;
  smartAgriculturePlatform: string;
  aiPoweredCropMonitoring: string;
  aiPoweredDesc: string;
  precisionPesticide: string;
  precisionPesticideDesc: string;
  realTimeAlerts: string;
  realTimeAlertsDesc: string;
  
  // About Page
  aboutUs: string;
  aboutTitle: string;
  aboutDescription: string;
  ourMission: string;
  missionTitle: string;
  missionDescription: string;
  keyFeatures: string;
  smartDetection: string;
  smartDetectionDesc: string;
  automatedSpraying: string;
  automatedSprayingDesc: string;
  realTimeMonitoring: string;
  realTimeMonitoringDesc: string;
  dataAnalytics: string;
  dataAnalyticsDesc: string;
  ourTeam: string;
  
  // Help Page
  helpCenter: string;
  quickHelp: string;
  systemOverview: string;
  systemOverviewDesc: string;
  troubleshooting: string;
  troubleshootingDesc: string;
  userGuide: string;
  userGuideDesc: string;
  contactSupport: string;
  phone: string;
  emailSupport: string;
  liveChat: string;
  emergency: string;
  learningResources: string;
  downloadUserManual: string;
  watchTutorials: string;
  faq: string;
  returnToDashboard: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    about: "About",
    login: "Login",
    help: "Help",
    language: "Language",

    // Dashboard
    smartCropHealth: "Smart Crop Health & Pest Control",
    welcomeBack: "Welcome back, Farmer",
    farmOverview: "Farm Overview",
    plotsMonitored: "Plots Monitored",
    pesticideReduction: "Pesticide Reduction",
    aiAccuracy: "AI Detection Accuracy",
    environmentalImpact: "Environmental Impact Reduced",
    quickActions: "Quick Actions",
    manualSpray: "Manual Spray",
    autoMode: "Auto Mode",
    pesticideLevel: "Pesticide Level",
    fullTank: "Full Tank",
    recentActivity: "Recent Activity",
    pesticideApplied: "Pesticide applied to Plot A",
    infectionDetected: "New infection detected in Plot C",
    systemAlert: "System maintenance completed",
    viewAllNotifications: "View All Notifications",
    infectionTrend: "Infection Trend",
    last7Days: "Last 7 Days",
    plot: "Plot",
    healthy: "Healthy",
    mildInfection: "Mild Infection", 
    severeInfection: "Severe Infection",
    viewDetails: "View Details",
    
    // Plant Detail View
    plantHealthAnalysis: "Plant Health Analysis",
    healthScore: "Health Score",
    recommendation: "Recommendation",
    sprayNow: "Spray Now",
    scheduleSpray: "Schedule Spray",
    backToDashboard: "Back to Dashboard",
    
    // Login Page
    signIn: "Sign In",
    signUp: "Sign Up", 
    email: "Email",
    password: "Password",
    farmName: "Farm Name",
    confirmPassword: "Confirm Password",
    secureAuth: "Secure Authentication",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?", 
    createAccount: "Create Account",
    welcomeToGreenSense: "Welcome to GreenSense",
    smartAgriculturePlatform: "Smart Agriculture Platform for Sustainable Farming",
    aiPoweredCropMonitoring: "AI-Powered Crop Monitoring",
    aiPoweredDesc: "Advanced machine learning algorithms detect plant diseases and pest infections with 95% accuracy",
    precisionPesticide: "Precision Pesticide Application", 
    precisionPesticideDesc: "Reduce chemical usage by 60% with targeted spraying only where needed",
    realTimeAlerts: "Real-time Health Alerts",
    realTimeAlertsDesc: "Instant notifications help you take immediate action to protect your crops",
    
    // About Page
    aboutUs: "About Us",
    aboutTitle: "Revolutionizing Agriculture with Smart Technology",
    aboutDescription: "GreenSense is a cutting-edge agricultural technology platform that combines artificial intelligence, IoT sensors, and precision agriculture to help farmers optimize crop health while minimizing environmental impact. Our mission is to make sustainable farming accessible to farmers of all scales.",
    ourMission: "Our Mission", 
    missionTitle: "Sustainable Agriculture Through Innovation",
    missionDescription: "We believe that technology can solve agriculture's biggest challenges. By reducing pesticide usage by up to 60% and improving crop yields through precision monitoring, we're helping create a more sustainable future for farming communities worldwide.",
    keyFeatures: "Key Features",
    smartDetection: "Smart Disease Detection",
    smartDetectionDesc: "AI-powered image recognition identifies diseases and pests with 95% accuracy",
    automatedSpraying: "Automated Spraying System", 
    automatedSprayingDesc: "IoT-controlled sprayers apply pesticides only where needed, reducing waste",
    realTimeMonitoring: "Real-time Monitoring",
    realTimeMonitoringDesc: "24/7 monitoring of crop health with instant alerts and recommendations", 
    dataAnalytics: "Advanced Analytics",
    dataAnalyticsDesc: "Comprehensive data insights help optimize farming decisions and improve yields",
    ourTeam: "Our Team",
    
    // Help Page
    helpCenter: "Help Center",
    quickHelp: "Quick Help",
    systemOverview: "System Overview",
    systemOverviewDesc: "Learn how GreenSense works and its key features",
    troubleshooting: "Troubleshooting",
    troubleshootingDesc: "Common issues and their solutions",
    userGuide: "User Guide", 
    userGuideDesc: "Step-by-step instructions for using the platform",
    contactSupport: "Contact Support",
    phone: "Phone",
    emailSupport: "Email Support", 
    liveChat: "Live Chat",
    emergency: "Emergency Hotline",
    learningResources: "Learning Resources",
    downloadUserManual: "Download User Manual",
    watchTutorials: "Watch Video Tutorials", 
    faq: "Frequently Asked Questions",
    returnToDashboard: "Return to Dashboard"
  },
  
  hi: {
    // Navigation  
    dashboard: "डैशबोर्ड",
    about: "हमारे बारे में",
    login: "लॉगिन",
    help: "सहायता", 
    language: "भाषा",

    // Dashboard
    smartCropHealth: "स्मार्ट फसल स्वास्थ्य और कीट नियंत्रण",
    welcomeBack: "वापस स्वागत है, किसान",
    farmOverview: "फार्म अवलोकन",
    plotsMonitored: "निगरानी किए गए प्लॉट",
    pesticideReduction: "कीटनाशक में कमी",
    aiAccuracy: "एआई का पता लगाने की सटीकता",
    environmentalImpact: "पर्यावरणीय प्रभाव में कमी",
    quickActions: "त्वरित क्रियाएं",
    manualSpray: "मैन्युअल स्प्रे",
    autoMode: "ऑटो मोड",
    pesticideLevel: "कीटनाशक स्तर",
    fullTank: "पूरा टैंक",
    recentActivity: "हाल की गतिविधि", 
    pesticideApplied: "प्लॉट ए में कीटनाशक लगाया गया",
    infectionDetected: "प्लॉट सी में नया संक्रमण मिला",
    systemAlert: "सिस्टम रखरखाव पूरा हुआ",
    viewAllNotifications: "सभी सूचनाएं देखें",
    infectionTrend: "संक्रमण की प्रवृत्ति",
    last7Days: "पिछले 7 दिन",
    plot: "प्लॉट",
    healthy: "स्वस्थ",
    mildInfection: "हल्का संक्रमण",
    severeInfection: "गंभीर संक्रमण", 
    viewDetails: "विवरण देखें",
    
    // Plant Detail View
    plantHealthAnalysis: "पौधे का स्वास्थ्य विश्लेषण",
    healthScore: "स्वास्थ्य स्कोर",
    recommendation: "सिफारिश",
    sprayNow: "अभी स्प्रे करें",
    scheduleSpray: "स्प्रे शेड्यूल करें", 
    backToDashboard: "डैशबोर्ड पर वापस",
    
    // Login Page
    signIn: "साइन इन",
    signUp: "साइन अप",
    email: "ईमेल",
    password: "पासवर्ड",
    farmName: "फार्म का नाम",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    secureAuth: "सुरक्षित प्रमाणीकरण", 
    noAccount: "कोई खाता नहीं है?",
    haveAccount: "पहले से खाता है?",
    createAccount: "खाता बनाएं",
    welcomeToGreenSense: "ग्रीनसेंस में आपका स्वागत है",
    smartAgriculturePlatform: "टिकाऊ खेती के लिए स्मार्ट कृषि प्लेटफॉर्म",
    aiPoweredCropMonitoring: "एआई-संचालित फसल निगरानी",
    aiPoweredDesc: "उन्नत मशीन लर्निंग एल्गोरिदम 95% सटीकता के साथ पौधों की बीमारियों और कीट संक्रमण का पता लगाते हैं",
    precisionPesticide: "सटीक कीटनाशक अनुप्रयोग",
    precisionPesticideDesc: "केवल जरूरत के स्थान पर लक्षित छिड़काव के साथ रासायनिक उपयोग को 60% तक कम करें", 
    realTimeAlerts: "वास्तविक समय स्वास्थ्य अलर्ट",
    realTimeAlertsDesc: "तत्काल सूचनाएं आपकी फसलों की सुरक्षा के लिए तुरंत कार्रवाई करने में मदद करती हैं",
    
    // About Page
    aboutUs: "हमारे बारे में",
    aboutTitle: "स्मार्ट तकनीक से कृषि में क्रांति",
    aboutDescription: "ग्रीनसेंस एक अत्याधुनिक कृषि प्रौद्योगिकी प्लेटफॉर्म है जो कृत्रिम बुद्धिमत्ता, IoT सेंसर, और सटीक कृषि को जोड़कर किसानों को पर्यावरणीय प्रभाव को कम करते हुए फसल स्वास्थ्य को अनुकूलित करने में मदद करता है।", 
    ourMission: "हमारा मिशन",
    missionTitle: "नवाचार के माध्यम से टिकाऊ कृषि",
    missionDescription: "हमारा मानना है कि तकनीक कृषि की सबसे बड़ी चुनौतियों को हल कर सकती है। कीटनाशक के उपयोग को 60% तक कम करके और सटीक निगरानी के माध्यम से फसल की पैदावार में सुधार करके, हम दुनिया भर के कृषि समुदायों के लिए एक अधिक टिकाऊ भविष्य बनाने में मदद कर रहे हैं।",
    keyFeatures: "मुख्य विशेषताएं",
    smartDetection: "स्मार्ट रोग पहचान",
    smartDetectionDesc: "एआई-संचालित छवि पहचान 95% सटीकता के साथ बीमारियों और कीटों की पहचान करती है", 
    automatedSpraying: "स्वचालित छिड़काव प्रणाली",
    automatedSprayingDesc: "IoT-नियंत्रित स्प्रेयर केवल आवश्यकता के स्थान पर कीटनाशक लगाते हैं, बर्बादी कम करते हैं",
    realTimeMonitoring: "वास्तविक समय निगरानी",
    realTimeMonitoringDesc: "तत्काल अलर्ट और सिफारिशों के साथ फसल स्वास्थ्य की 24/7 निगरानी",
    dataAnalytics: "उन्नत विश्लेषण",
    dataAnalyticsDesc: "व्यापक डेटा अंतर्दृष्टि कृषि निर्णयों को अनुकूलित करने और पैदावार में सुधार करने में मदद करती है",
    ourTeam: "हमारी टीम",
    
    // Help Page
    helpCenter: "सहायता केंद्र",
    quickHelp: "त्वरित सहायता", 
    systemOverview: "सिस्टम अवलोकन",
    systemOverviewDesc: "जानें कि ग्रीनसेंस कैसे काम करता है और इसकी मुख्य विशेषताएं",
    troubleshooting: "समस्या निवारण",
    troubleshootingDesc: "सामान्य समस्याएं और उनके समाधान",
    userGuide: "उपयोगकर्ता गाइड",
    userGuideDesc: "प्लेटफॉर्म का उपयोग करने के लिए चरण-दर-चरण निर्देश",
    contactSupport: "सहायता से संपर्क करें",
    phone: "फोन",
    emailSupport: "ईमेल सहायता",
    liveChat: "लाइव चैट", 
    emergency: "आपातकालीन हॉटलाइन",
    learningResources: "शिक्षण संसाधन",
    downloadUserManual: "उपयोगकर्ता मैनुअल डाउनलोड करें",
    watchTutorials: "वीडियो ट्यूटोरियल देखें",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    returnToDashboard: "डैशबोर्ड पर वापस जाएं"
  },
  
  pa: {
    // Navigation
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    about: "ਸਾਡੇ ਬਾਰੇ",
    login: "ਲਾਗਇਨ", 
    help: "ਸਹਾਇਤਾ",
    language: "ਭਾਸ਼ਾ",

    // Dashboard
    smartCropHealth: "ਸਮਾਰਟ ਫਸਲ ਸਿਹਤ ਅਤੇ ਕੀਟ ਨਿਯੰਤਰਣ",
    welcomeBack: "ਵਾਪਸ ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ",
    farmOverview: "ਫਾਰਮ ਸੰਖੇਪ",
    plotsMonitored: "ਨਿਗਰਾਨੀ ਵਾਲੇ ਪਲਾਟ",
    pesticideReduction: "ਕੀਟਨਾਸ਼ਕ ਘਟਾਓ",
    aiAccuracy: "AI ਖੋਜ ਦੀ ਸਹੀਤਾ",
    environmentalImpact: "ਵਾਤਾਵਰਣ ਪ੍ਰਭਾਵ ਘਟਾਇਆ",
    quickActions: "ਤੇਜ਼ ਕਿਰਿਆਵਾਂ",
    manualSpray: "ਹੱਥੀਂ ਸਪਰੇਅ",
    autoMode: "ਆਟੋ ਮੋਡ",
    pesticideLevel: "ਕੀਟਨਾਸ਼ਕ ਪੱਧਰ", 
    fullTank: "ਪੂਰਾ ਟੈਂਕ",
    recentActivity: "ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ",
    pesticideApplied: "ਪਲਾਟ A ਵਿੱਚ ਕੀਟਨਾਸ਼ਕ ਲਾਇਆ ਗਿਆ",
    infectionDetected: "ਪਲਾਟ C ਵਿੱਚ ਨਵਾਂ ਸੰਕਰਮਣ ਮਿਲਿਆ",
    systemAlert: "ਸਿਸਟਮ ਰੱਖ-ਰਖਾਅ ਪੂਰਾ ਹੋਇਆ",
    viewAllNotifications: "ਸਾਰੀਆਂ ਸੂਚਨਾਵਾਂ ਵੇਖੋ",
    infectionTrend: "ਸੰਕਰਮਣ ਰੁਝਾਨ",
    last7Days: "ਪਿਛਲੇ 7 ਦਿਨ", 
    plot: "ਪਲਾਟ",
    healthy: "ਸਿਹਤਮੰਦ",
    mildInfection: "ਹਲਕਾ ਸੰਕਰਮਣ",
    severeInfection: "ਗੰਭੀਰ ਸੰਕਰਮਣ",
    viewDetails: "ਵੇਰਵੇ ਵੇਖੋ",
    
    // Plant Detail View
    plantHealthAnalysis: "ਪੌਧੇ ਦੀ ਸਿਹਤ ਜਾਂਚ",
    healthScore: "ਸਿਹਤ ਸਕੋਰ",
    recommendation: "ਸਿਫਾਰਸ਼",
    sprayNow: "ਹੁਣ ਸਪਰੇਅ ਕਰੋ",
    scheduleSpray: "ਸਪਰੇਅ ਸ਼ੈਡਿਊਲ ਕਰੋ",
    backToDashboard: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ",
    
    // Login Page
    signIn: "ਸਾਈਨ ਇਨ", 
    signUp: "ਸਾਈਨ ਅਪ",
    email: "ਈਮੇਲ",
    password: "ਪਾਸਵਰਡ",
    farmName: "ਫਾਰਮ ਦਾ ਨਾਮ",
    confirmPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    secureAuth: "ਸੁਰੱਖਿਅਤ ਪ੍ਰਮਾਣੀਕਰਣ",
    noAccount: "ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    haveAccount: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
    createAccount: "ਖਾਤਾ ਬਣਾਓ",
    welcomeToGreenSense: "ਗ੍ਰੀਨਸੈਂਸ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ",
    smartAgriculturePlatform: "ਟਿਕਾਊ ਖੇਤੀ ਲਈ ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਪਲੇਟਫਾਰਮ", 
    aiPoweredCropMonitoring: "AI-ਸੰਚਾਲਿਤ ਫਸਲ ਨਿਗਰਾਨੀ",
    aiPoweredDesc: "ਉੱਨਤ ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਐਲਗੋਰਿਦਮ 95% ਸਹੀਤਾ ਨਾਲ ਪੌਧਿਆਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਅਤੇ ਕੀਟ ਸੰਕਰਮਣ ਦਾ ਪਤਾ ਲਗਾਉਂਦੇ ਹਨ",
    precisionPesticide: "ਸਟੀਕ ਕੀਟਨਾਸ਼ਕ ਲਾਗੂ",
    precisionPesticideDesc: "ਸਿਰਫ਼ ਲੋੜੀਂਦੀ ਥਾਂ 'ਤੇ ਨਿਸ਼ਾਨਾ ਛਿੜਕਾਅ ਨਾਲ ਰਸਾਇਣਕ ਵਰਤੋਂ 60% ਤੱਕ ਘਟਾਓ",
    realTimeAlerts: "ਰੀਅਲ-ਟਾਈਮ ਸਿਹਤ ਚੇਤਾਵਨੀਆਂ",
    realTimeAlertsDesc: "ਤੁਰੰਤ ਸੂਚਨਾਵਾਂ ਤੁਹਾਡੀਆਂ ਫਸਲਾਂ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਤੁਰੰਤ ਕਾਰਵਾਈ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ", 
    
    // About Page
    aboutUs: "ਸਾਡੇ ਬਾਰੇ",
    aboutTitle: "ਸਮਾਰਟ ਤਕਨਾਲੋਜੀ ਨਾਲ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਕ੍ਰਾਂਤੀ",
    aboutDescription: "ਗ੍ਰੀਨਸੈਂਸ ਇੱਕ ਅਤਿ-ਆਧੁਨਿਕ ਖੇਤੀਬਾੜੀ ਤਕਨਾਲੋਜੀ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਕਿਰਤਮ ਬੁੱਧੀ, IoT ਸੈਂਸਰ, ਅਤੇ ਸਟੀਕ ਖੇਤੀਬਾੜੀ ਨੂੰ ਜੋੜ ਕੇ ਕਿਸਾਨਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਪ੍ਰਭਾਵ ਨੂੰ ਘੱਟ ਕਰਦੇ ਹੋਏ ਫਸਲ ਸਿਹਤ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    ourMission: "ਸਾਡਾ ਮਿਸ਼ਨ",
    missionTitle: "ਨਵਾਚਾਰ ਰਾਹੀਂ ਟਿਕਾਊ ਖੇਤੀਬਾੜੀ", 
    missionDescription: "ਸਾਡਾ ਵਿਸ਼ਵਾਸ ਹੈ ਕਿ ਤਕਨਾਲੋਜੀ ਖੇਤੀਬਾੜੀ ਦੀਆਂ ਸਭ ਤੋਂ ਵੱਡੀਆਂ ਚੁਣੌਤੀਆਂ ਨੂੰ ਹੱਲ ਕਰ ਸਕਦੀ ਹੈ। ਕੀਟਨਾਸ਼ਕ ਦੀ ਵਰਤੋਂ ਨੂੰ 60% ਤੱਕ ਘਟਾ ਕੇ ਅਤੇ ਸਟੀਕ ਨਿਗਰਾਨੀ ਰਾਹੀਂ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਵਿੱਚ ਸੁਧਾਰ ਕਰਕੇ, ਅਸੀਂ ਦੁਨੀਆ ਭਰ ਦੇ ਖੇਤੀਬਾੜੀ ਭਾਈਚਾਰਿਆਂ ਲਈ ਇੱਕ ਵਧੇਰੇ ਟਿਕਾਊ ਭਵਿੱਖ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਰਹੇ ਹਾਂ।",
    keyFeatures: "ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    smartDetection: "ਸਮਾਰਟ ਬਿਮਾਰੀ ਖੋਜ",
    smartDetectionDesc: "AI-ਸੰਚਾਲਿਤ ਚਿੱਤਰ ਪਛਾਣ 95% ਸਹੀਤਾ ਨਾਲ ਬਿਮਾਰੀਆਂ ਅਤੇ ਕੀਟਾਂ ਦੀ ਪਛਾਣ ਕਰਦੀ ਹੈ",
    automatedSpraying: "ਸਵੈਚਾਲਿਤ ਸਪਰੇਇੰਗ ਸਿਸਟਮ",
    automatedSprayingDesc: "IoT-ਨਿਯੰਤਰਿਤ ਸਪਰੇਅਰ ਸਿਰਫ਼ ਲੋੜੀਂਦੀ ਥਾਂ ਕੀਟਨਾਸ਼ਕ ਲਗਾਉਂਦੇ ਹਨ, ਬਰਬਾਦੀ ਘਟਾਉਂਦੇ ਹਨ", 
    realTimeMonitoring: "ਰੀਅਲ-ਟਾਈਮ ਨਿਗਰਾਨੀ",
    realTimeMonitoringDesc: "ਤੁਰੰਤ ਚੇਤਾਵਨੀਆਂ ਅਤੇ ਸਿਫਾਰਸ਼ਾਂ ਨਾਲ ਫਸਲ ਸਿਹਤ ਦੀ 24/7 ਨਿਗਰਾਨੀ",
    dataAnalytics: "ਉੱਨਤ ਵਿਸ਼ਲੇਸ਼ਣ",
    dataAnalyticsDesc: "ਵਿਆਪਕ ਡੇਟਾ ਸੂਝ ਖੇਤੀਬਾੜੀ ਫੈਸਲਿਆਂ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਅਤੇ ਪੈਦਾਵਾਰ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ",
    ourTeam: "ਸਾਡੀ ਟੀਮ",
    
    // Help Page
    helpCenter: "ਸਹਾਇਤਾ ਕੇਂਦਰ",
    quickHelp: "ਤੇਜ਼ ਸਹਾਇਤਾ",
    systemOverview: "ਸਿਸਟਮ ਸੰਖੇਪ", 
    systemOverviewDesc: "ਸਿੱਖੋ ਕਿ ਗ੍ਰੀਨਸੈਂਸ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    troubleshooting: "ਸਮੱਸਿਆ ਨਿਵਾਰਨ",
    troubleshootingDesc: "ਆਮ ਸਮੱਸਿਆਵਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਹੱਲ",
    userGuide: "ਯੂਜ਼ਰ ਗਾਈਡ",
    userGuideDesc: "ਪਲੇਟਫਾਰਮ ਵਰਤਣ ਲਈ ਕਦਮ-ਦਰ-ਕਦਮ ਹਦਾਇਤਾਂ",
    contactSupport: "ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    phone: "ਫੋਨ",
    emailSupport: "ਈਮੇਲ ਸਹਾਇਤਾ",
    liveChat: "ਲਾਈਵ ਚੈਟ",
    emergency: "ਐਮਰਜੈਂਸੀ ਹਾਟਲਾਈਨ", 
    learningResources: "ਸਿੱਖਣ ਦੇ ਸਾਧਨ",
    downloadUserManual: "ਯੂਜ਼ਰ ਮੈਨੁਅਲ ਡਾਊਨਲੋਡ ਕਰੋ",
    watchTutorials: "ਵੀਡੀਓ ਟਿਊਟੋਰਿਅਲ ਵੇਖੋ",
    faq: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਪ੍ਰਸ਼ਨ",
    returnToDashboard: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ"
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};
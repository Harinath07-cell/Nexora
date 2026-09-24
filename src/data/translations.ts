export type Language = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'mr' | 'bn' | 'or';

export interface Translations {
  // App & Navigation
  appName: string;
  tagline: string;
  getStarted: string;
  back: string;
  backToHome: string;
  
  // Home Page
  welcome: string;
  welcomeSubtitle: string;
  existingBusiness: string;
  existingBusinessDesc: string;
  hasSavings: string;
  hasSavingsDesc: string;
  needsLoan: string;
  needsLoanDesc: string;
  ministry: string;
  freeService: string;
  
  // Login Page
  yourName: string;
  namePlaceholder: string;
  yourAddress: string;
  addressPlaceholder: string;
  state: string;
  selectState: string;
  district: string;
  selectDistrict: string;
  village: string;
  villagePlaceholder: string;
  marginMoney: string;
  marginHelp: string;
  marginPlaceholder: string;
  community: string;
  selectCommunity: string;
  businessType: string;
  selectBusiness: string;
  preferredLanguage: string;
  audioInLanguage: string;
  viewFinancialPlan: string;
  minMargin: string;
  fillAll: string;
  
  // Financial Plan
  totalProject: string;
  loanAmount: string;
  financialPlan: string;
  editDetails: string;
  totalCost: string;
  yourMargin: string;
  quarterlyEMI: string;
  partnerBank: string;
  eligibility: string;
  ageRange: string;
  beneficiary: string;
  noDefault: string;
  kycDocs: string;
  locationProof: string;
  schemeRepayment: string;
  scheme: string;
  interest: string;
  tenure: string;
  moratorium: string;
  repaymentSchedule: string;
  quarter: string;
  date: string;
  status: string;
  amount: string;
  totalSummary: string;
  totalInterest: string;
  totalRepayment: string;
  wantReport: string;
  getAnalysis: string;
  generateReport: string;
  
  // Report
  businessReport: string;
  download: string;
  marketReach: string;
  opportunityAnalysis: string;
  swotAnalysis: string;
  threatIdentification: string;
  competitorMapping: string;
  productMarketValue: string;
  population: string;
  households: string;
  targetCustomers: string;
  distributionChannels: string;
  strengths: string;
  weaknesses: string;
  opportunities: string;
  threats: string;
  business: string;
  distance: string;
  rating: string;
  suggestedPricing: string;
  pricingTips: string;
  
  // Business Analysis
  businessAnalysis: string;
  fillDetails: string;
  basicInfo: string;
  businessName: string;
  businessNamePlaceholder: string;
  sector: string;
  selectSector: string;
  yearsInOperation: string;
  yearsPlaceholder: string;
  financialInfo: string;
  annualTurnover: string;
  turnoverPlaceholder: string;
  monthlyRevenue: string;
  revenuePlaceholder: string;
  monthlyExpenses: string;
  expensesPlaceholder: string;
  operations: string;
  numberOfEmployees: string;
  employeesPlaceholder: string;
  monthlySalary: string;
  salaryPlaceholder: string;
  existingLoans: string;
  existingLoansQuestion: string;
  loanAmountLabel: string;
  loanAmountPlaceholder: string;
  marketInfo: string;
  customersPerDay: string;
  customersPlaceholder: string;
  competitionLevel: string;
  selectCompetition: string;
  competitionLow: string;
  competitionMedium: string;
  competitionHigh: string;
  locationQuality: string;
  selectLocation: string;
  locationPrime: string;
  locationAverage: string;
  locationPoor: string;
  generateAnalysis: string;
  
  // Analysis Report
  overallHealth: string;
  excellent: string;
  good: string;
  needsAttention: string;
  financialHealth: string;
  operationalHealth: string;
  marketPosition: string;
  keyFinancialMetrics: string;
  netProfitMargin: string;
  grossMargin: string;
  debtToEquity: string;
  roi: string;
  operationalEfficiency: string;
  revenuePerEmployee: string;
  revenuePerSqFt: string;
  dailyRevenue: string;
  capacityUtilization: string;
  recommendations: string;
  highPriority: string;
  mediumPriority: string;
  lowPriority: string;
  category: string;
  impact: string;
  timeRequired: string;
  expectedBenefit: string;
  businessLocation: string;
  nearbyBanks: string;
  analysisComplete: string;
  healthScore: string;
  improvementsIdentified: string;
  
  // Loan Finder
  findLoan: string;
  findLoanSubtitle: string;
  loanNeeded: string;
  loanNeededHelp: string;
  loanNeededPlaceholder: string;
  marginRequired: string;
  marginRequiredSuffix: string;
  findLoanSchemes: string;
  
  // Common
  select: string;
  submit: string;
  cancel: string;
  yes: string;
  no: string;
  years: string;
  months: string;
  
  // Communities
  sc: string;
  st: string;
  obc: string;
  minority: string;
  general: string;
  
  // Business Types
  dairy: string;
  grocery: string;
  tailoring: string;
  agriculture: string;
  poultry: string;
  foodStall: string;
  handicrafts: string;
  weaving: string;
  repairShop: string;
  salon: string;
  horticulture: string;
  pharmacy: string;
  
  // Additional keys
  processing: string;
  docs: string;
}

const en: Translations = {
  appName: 'GramSahay',
  tagline: 'Your Village Business Guide',
  getStarted: 'Get Started',
  back: 'Back',
  backToHome: 'Back to Home',
  welcome: 'Welcome!',
  welcomeSubtitle: 'Get help to start your business with government schemes',
  existingBusiness: 'I have an existing business',
  existingBusinessDesc: 'Get a detailed report and analysis for your current business',
  hasSavings: 'I have savings, want to start new',
  hasSavingsDesc: 'Plan your new business with your available funds',
  needsLoan: 'I need a loan to start',
  needsLoanDesc: 'Find the right loan scheme for your business idea',
  ministry: 'Ministry of Social Justice & Empowerment',
  freeService: 'Free service for rural entrepreneurs',
  yourName: 'Your Name',
  namePlaceholder: 'Enter your full name',
  yourAddress: 'Your Address',
  addressPlaceholder: 'Enter your complete address',
  state: 'State',
  selectState: 'Select your state',
  district: 'District',
  selectDistrict: 'Select your district',
  village: 'Village / Town',
  villagePlaceholder: 'Enter your village or town name',
  marginMoney: 'Available Margin Money (₹)',
  marginHelp: 'This is 10% of total project cost. Example: If you have ₹1,00,000, total project will be ₹10,00,000',
  marginPlaceholder: 'Enter amount (e.g., 100000)',
  community: 'Community Category',
  selectCommunity: 'Select your community',
  businessType: 'Type of Business',
  selectBusiness: 'Select business type',
  preferredLanguage: 'Preferred Language (for audio)',
  audioInLanguage: 'Audio explanations will be in your selected language',
  viewFinancialPlan: 'View Financial Plan',
  minMargin: 'Minimum margin amount should be ₹10,000',
  fillAll: 'Please fill in all fields',
  totalProject: 'Total Project Cost',
  loanAmount: 'Loan Amount',
  financialPlan: 'Financial & Loan Plan',
  editDetails: 'Edit Details',
  totalCost: 'Total Cost',
  yourMargin: 'Your Margin',
  quarterlyEMI: 'Quarterly EMI',
  partnerBank: 'Partner Bank & Eligibility',
  eligibility: 'Eligibility Criteria',
  ageRange: 'Age: 18-65 years',
  beneficiary: 'beneficiary',
  noDefault: 'No prior loan default',
  kycDocs: 'Basic KYC documents',
  locationProof: 'Business location proof',
  schemeRepayment: 'Scheme & Repayment',
  scheme: 'Scheme',
  interest: 'Interest',
  tenure: 'Tenure',
  moratorium: 'Moratorium',
  repaymentSchedule: 'Repayment Schedule',
  quarter: 'Qtr',
  date: 'Date',
  status: 'Status',
  amount: 'Amount',
  totalSummary: 'Total Summary',
  totalInterest: 'Total Interest',
  totalRepayment: 'Total Repayment',
  wantReport: 'Want a complete business report?',
  getAnalysis: 'Get market analysis, SWOT, competitor mapping, and more',
  generateReport: 'Generate Business Report',
  businessReport: 'Business Feasibility Report',
  download: 'Download Report',
  marketReach: 'Market Reach',
  opportunityAnalysis: 'Opportunity Analysis',
  swotAnalysis: 'SWOT Analysis',
  threatIdentification: 'Threat Identification',
  competitorMapping: 'Competitor Mapping',
  productMarketValue: 'Product Market Value',
  population: 'Population (10km)',
  households: 'Households',
  targetCustomers: 'Target Customers',
  distributionChannels: 'Distribution Channels',
  strengths: 'Strengths',
  weaknesses: 'Weaknesses',
  opportunities: 'Opportunities',
  threats: 'Threats',
  business: 'Business',
  distance: 'Distance',
  rating: 'Rating',
  suggestedPricing: 'Suggested Pricing',
  pricingTips: 'Pricing Tips',
  businessAnalysis: 'Business Analysis',
  fillDetails: 'Fill in your business details',
  basicInfo: 'Basic Information',
  businessName: 'Business Name',
  businessNamePlaceholder: 'Enter your business name',
  sector: 'Sector',
  selectSector: 'Select sector',
  yearsInOperation: 'Years in Operation',
  yearsPlaceholder: 'e.g., 3',
  financialInfo: 'Financial Information',
  annualTurnover: 'Annual Turnover (₹)',
  turnoverPlaceholder: 'e.g., 1200000',
  monthlyRevenue: 'Monthly Revenue (₹)',
  revenuePlaceholder: 'e.g., 100000',
  monthlyExpenses: 'Monthly Expenses (₹)',
  expensesPlaceholder: 'e.g., 70000',
  operations: 'Operations',
  numberOfEmployees: 'Number of Employees',
  employeesPlaceholder: 'e.g., 5',
  monthlySalary: 'Monthly Salary Bill (₹)',
  salaryPlaceholder: 'e.g., 50000',
  existingLoans: 'Existing Loans',
  existingLoansQuestion: 'Do you have any existing loans?',
  loanAmountLabel: 'Total Loan Amount (₹)',
  loanAmountPlaceholder: 'e.g., 500000',
  marketInfo: 'Market Information',
  customersPerDay: 'Average Customers per Day',
  customersPlaceholder: 'e.g., 50',
  competitionLevel: 'Competition Level',
  selectCompetition: 'Select level',
  competitionLow: 'Low (1-2 similar businesses)',
  competitionMedium: 'Medium (3-5 similar businesses)',
  competitionHigh: 'High (6+ similar businesses)',
  locationQuality: 'Location Quality',
  selectLocation: 'Select quality',
  locationPrime: 'Prime (Main road, high footfall)',
  locationAverage: 'Average (Good location)',
  locationPoor: 'Poor (Interior, low footfall)',
  generateAnalysis: 'Generate Analysis Report',
  overallHealth: 'Overall Business Health',
  excellent: 'Excellent! Your business is thriving',
  good: 'Good, but there\'s room for improvement',
  needsAttention: 'Needs immediate attention',
  financialHealth: 'Financial Health',
  operationalHealth: 'Operational Health',
  marketPosition: 'Market Position',
  keyFinancialMetrics: 'Key Financial Metrics',
  netProfitMargin: 'Net Profit Margin',
  grossMargin: 'Gross Margin',
  debtToEquity: 'Debt-to-Equity',
  roi: 'ROI',
  operationalEfficiency: 'Operational Efficiency',
  revenuePerEmployee: 'Revenue per Employee',
  revenuePerSqFt: 'Revenue per Sq Ft',
  dailyRevenue: 'Daily Revenue',
  capacityUtilization: 'Capacity Utilization',
  recommendations: 'Recommendations for Improvement',
  highPriority: 'HIGH PRIORITY',
  mediumPriority: 'MEDIUM PRIORITY',
  lowPriority: 'LOW PRIORITY',
  category: 'Category',
  impact: 'Impact',
  timeRequired: 'Time Required',
  expectedBenefit: 'Expected Benefit',
  businessLocation: 'Business Location & Nearby Banks',
  nearbyBanks: 'Your business location and nearby banks/markets',
  analysisComplete: 'Analysis Complete!',
  healthScore: 'Your business health score is',
  improvementsIdentified: 'high-priority improvements identified.',
  findLoan: 'Find Your Loan',
  findLoanSubtitle: 'We\'ll help you find the right loan scheme',
  loanNeeded: 'How much loan do you need? (₹)',
  loanNeededHelp: 'Enter the loan amount you want to borrow',
  loanNeededPlaceholder: 'Enter loan amount (e.g., 500000)',
  marginRequired: 'You\'ll need to arrange',
  marginRequiredSuffix: 'as your margin (10%)',
  findLoanSchemes: 'Find Loan Schemes',
  select: 'Select',
  submit: 'Submit',
  cancel: 'Cancel',
  yes: 'Yes',
  no: 'No',
  years: 'years',
  months: 'months',
  sc: 'Scheduled Caste (SC)',
  st: 'Scheduled Tribe (ST)',
  obc: 'Other Backward Class (OBC)',
  minority: 'Minority Community',
  general: 'General Category',
  dairy: '🥛 Dairy & Milk Products',
  grocery: '🏪 Grocery / General Store',
  tailoring: '🧵 Tailoring & Textiles',
  agriculture: '🌾 Agriculture / Farming',
  poultry: '🐔 Poultry / Eggs',
  foodStall: '🍲 Food Stall / Canteen',
  handicrafts: '🎨 Handicrafts',
  weaving: '🧶 Handloom / Weaving',
  repairShop: '🔧 Repair / Service Shop',
  salon: '💇 Salon / Beauty Parlor',
  horticulture: '🌺 Horticulture / Nursery',
  pharmacy: '💊 Medical / Pharmacy',
  processing: 'Processing',
  docs: 'Docs',
};

const hi: Translations = {
  appName: 'ग्रामसहाय',
  tagline: 'आपका गाँव व्यापार मार्गदर्शक',
  getStarted: 'शुरू करें',
  back: 'वापस',
  backToHome: 'होम पर वापस',
  welcome: 'स्वागत है!',
  welcomeSubtitle: 'सरकारी योजनाओं के साथ अपना व्यवसाय शुरू करने में मदद लें',
  existingBusiness: 'मेरे पास मौजूदा व्यवसाय है',
  existingBusinessDesc: 'अपने वर्तमान व्यवसाय के लिए विस्तृत रिपोर्ट और विश्लेषण प्राप्त करें',
  hasSavings: 'मेरे पास बचत है, नया शुरू करना चाहता हूं',
  hasSavingsDesc: 'अपनी उपलब्ध राशि के साथ अपने नए व्यवसाय की योजना बनाएं',
  needsLoan: 'मुझे शुरू करने के लिए ऋण चाहिए',
  needsLoanDesc: 'अपने व्यवसाय विचार के लिए सही ऋण योजना खोजें',
  ministry: 'सामाजिक न्याय और सशक्तिकरण मंत्रालय',
  freeService: 'ग्रामीण उद्यमियों के लिए मुफ्त सेवा',
  yourName: 'आपका नाम',
  namePlaceholder: 'अपना पूरा नाम दर्ज करें',
  yourAddress: 'आपका पता',
  addressPlaceholder: 'अपना पूरा पता दर्ज करें',
  state: 'राज्य',
  selectState: 'अपना राज्य चुनें',
  district: 'जिला',
  selectDistrict: 'अपना जिला चुनें',
  village: 'गाँव / कस्बा',
  villagePlaceholder: 'अपने गाँव या कस्बे का नाम दर्ज करें',
  marginMoney: 'उपलब्ध मार्जिन राशि (₹)',
  marginHelp: 'यह कुल परियोजना लागत का 10% है। उदाहरण: यदि आपके पास ₹1,00,000 है, तो कुल परियोजना ₹10,00,000 होगी',
  marginPlaceholder: 'राशि दर्ज करें (जैसे, 100000)',
  community: 'सामुदायिक श्रेणी',
  selectCommunity: 'अपना समुदाय चुनें',
  businessType: 'व्यवसाय का प्रकार',
  selectBusiness: 'व्यवसाय प्रकार चुनें',
  preferredLanguage: 'पसंदीदा भाषा (ऑडियो के लिए)',
  audioInLanguage: 'ऑडियो व्याख्याएं आपकी चयनित भाषा में होंगी',
  viewFinancialPlan: 'वित्तीय योजना देखें',
  minMargin: 'न्यूनतम मार्जिन राशि ₹10,000 होनी चाहिए',
  fillAll: 'कृपया सभी फ़ील्ड भरें',
  totalProject: 'कुल परियोजना लागत',
  loanAmount: 'ऋण राशि',
  financialPlan: 'वित्तीय और ऋण योजना',
  editDetails: 'विवरण संपादित करें',
  totalCost: 'कुल लागत',
  yourMargin: 'आपका मार्जिन',
  quarterlyEMI: 'तिमाही EMI',
  partnerBank: 'साझेदार बैंक और पात्रता',
  eligibility: 'पात्रता मानदंड',
  ageRange: 'आयु: 18-65 वर्ष',
  beneficiary: 'लाभार्थी',
  noDefault: 'कोई पिछला ऋण चूक नहीं',
  kycDocs: 'बुनियादी KYC दस्तावेज',
  locationProof: 'व्यवसाय स्थान प्रमाण',
  schemeRepayment: 'योजना और चुकौती',
  scheme: 'योजना',
  interest: 'ब्याज',
  tenure: 'कार्यकाल',
  moratorium: 'स्थगन',
  repaymentSchedule: 'चुकौती कार्यक्रम',
  quarter: 'तिमाही',
  date: 'तारीख',
  status: 'स्थिति',
  amount: 'राशि',
  totalSummary: 'कुल सारांश',
  totalInterest: 'कुल ब्याज',
  totalRepayment: 'कुल चुकौती',
  wantReport: 'पूर्ण व्यवसाय रिपोर्ट चाहते हैं?',
  getAnalysis: 'बाजार विश्लेषण, SWOT, प्रतिस्पर्धी मैपिंग, और अधिक प्राप्त करें',
  generateReport: 'व्यवसाय रिपोर्ट बनाएं',
  businessReport: 'व्यवसाय व्यवहार्यता रिपोर्ट',
  download: 'रिपोर्ट डाउनलोड करें',
  marketReach: 'बाजार पहुंच',
  opportunityAnalysis: 'अवसर विश्लेषण',
  swotAnalysis: 'SWOT विश्लेषण',
  threatIdentification: 'खतरा पहचान',
  competitorMapping: 'प्रतिस्पर्धी मैपिंग',
  productMarketValue: 'उत्पाद बाजार मूल्य',
  population: 'जनसंख्या (10 किमी)',
  households: 'परिवार',
  targetCustomers: 'लक्षित ग्राहक',
  distributionChannels: 'वितरण चैनल',
  strengths: 'ताकत',
  weaknesses: 'कमजोरियां',
  opportunities: 'अवसर',
  threats: 'खतरे',
  business: 'व्यवसाय',
  distance: 'दूरी',
  rating: 'रेटिंग',
  suggestedPricing: 'सुझाया गया मूल्य',
  pricingTips: 'मूल्य निर्धारण युक्तियां',
  businessAnalysis: 'व्यवसाय विश्लेषण',
  fillDetails: 'अपने व्यवसाय का विवरण भरें',
  basicInfo: 'बुनियादी जानकारी',
  businessName: 'व्यवसाय का नाम',
  businessNamePlaceholder: 'अपने व्यवसाय का नाम दर्ज करें',
  sector: 'क्षेत्र',
  selectSector: 'क्षेत्र चुनें',
  yearsInOperation: 'संचालन में वर्ष',
  yearsPlaceholder: 'जैसे, 3',
  financialInfo: 'वित्तीय जानकारी',
  annualTurnover: 'वार्षिक टर्नओवर (₹)',
  turnoverPlaceholder: 'जैसे, 1200000',
  monthlyRevenue: 'मासिक राजस्व (₹)',
  revenuePlaceholder: 'जैसे, 100000',
  monthlyExpenses: 'मासिक खर्च (₹)',
  expensesPlaceholder: 'जैसे, 70000',
  operations: 'संचालन',
  numberOfEmployees: 'कर्मचारियों की संख्या',
  employeesPlaceholder: 'जैसे, 5',
  monthlySalary: 'मासिक वेतन बिल (₹)',
  salaryPlaceholder: 'जैसे, 50000',
  existingLoans: 'मौजूदा ऋण',
  existingLoansQuestion: 'क्या आपके पास कोई मौजूदा ऋण है?',
  loanAmountLabel: 'कुल ऋण राशि (₹)',
  loanAmountPlaceholder: 'जैसे, 500000',
  marketInfo: 'बाजार जानकारी',
  customersPerDay: 'प्रति दिन औसत ग्राहक',
  customersPlaceholder: 'जैसे, 50',
  competitionLevel: 'प्रतिस्पर्धा स्तर',
  selectCompetition: 'स्तर चुनें',
  competitionLow: 'कम (1-2 समान व्यवसाय)',
  competitionMedium: 'मध्यम (3-5 समान व्यवसाय)',
  competitionHigh: 'उच्च (6+ समान व्यवसाय)',
  locationQuality: 'स्थान गुणवत्ता',
  selectLocation: 'गुणवत्ता चुनें',
  locationPrime: 'प्रमुख (मुख्य सड़क, उच्च फुटफॉल)',
  locationAverage: 'औसत (अच्छा स्थान)',
  locationPoor: 'खराब (आंतरिक, कम फुटफॉल)',
  generateAnalysis: 'विश्लेषण रिपोर्ट बनाएं',
  overallHealth: 'समग्र व्यवसाय स्वास्थ्य',
  excellent: 'उत्कृष्ट! आपका व्यवसाय फल-फूल रहा है',
  good: 'अच्छा, लेकिन सुधार की गुंजाइश है',
  needsAttention: 'तत्काल ध्यान देने की आवश्यकता',
  financialHealth: 'वित्तीय स्वास्थ्य',
  operationalHealth: 'संचालन स्वास्थ्य',
  marketPosition: 'बाजार स्थिति',
  keyFinancialMetrics: 'प्रमुख वित्तीय मेट्रिक्स',
  netProfitMargin: 'शुद्ध लाभ मार्जिन',
  grossMargin: 'सकल मार्जिन',
  debtToEquity: 'ऋण-इक्विटी',
  roi: 'ROI',
  operationalEfficiency: 'संचालन दक्षता',
  revenuePerEmployee: 'प्रति कर्मचारी राजस्व',
  revenuePerSqFt: 'प्रति वर्ग फुट राजस्व',
  dailyRevenue: 'दैनिक राजस्व',
  capacityUtilization: 'क्षमता उपयोग',
  recommendations: 'सुधार के लिए सिफारिशें',
  highPriority: 'उच्च प्राथमिकता',
  mediumPriority: 'मध्यम प्राथमिकता',
  lowPriority: 'कम प्राथमिकता',
  category: 'श्रेणी',
  impact: 'प्रभाव',
  timeRequired: 'आवश्यक समय',
  expectedBenefit: 'अपेक्षित लाभ',
  businessLocation: 'व्यवसाय स्थान और निकटस्थ बैंक',
  nearbyBanks: 'आपका व्यवसाय स्थान और निकटस्थ बैंक/बाजार',
  analysisComplete: 'विश्लेषण पूर्ण!',
  healthScore: 'आपका व्यवसाय स्वास्थ्य स्कोर है',
  improvementsIdentified: 'उच्च-प्राथमिकता वाले सुधार पहचाने गए।',
  findLoan: 'अपना ऋण खोजें',
  findLoanSubtitle: 'हम आपको सही ऋण योजना खोजने में मदद करेंगे',
  loanNeeded: 'आपको कितना ऋण चाहिए? (₹)',
  loanNeededHelp: 'आप जिस ऋण राशि को उधार लेना चाहते हैं वह दर्ज करें',
  loanNeededPlaceholder: 'ऋण राशि दर्ज करें (जैसे, 500000)',
  marginRequired: 'आपको व्यवस्था करनी होगी',
  marginRequiredSuffix: 'आपके मार्जिन के रूप में (10%)',
  findLoanSchemes: 'ऋण योजनाएं खोजें',
  select: 'चुनें',
  submit: 'जमा करें',
  cancel: 'रद्द करें',
  yes: 'हाँ',
  no: 'नहीं',
  years: 'वर्ष',
  months: 'महीने',
  sc: 'अनुसूचित जाति (SC)',
  st: 'अनुसूचित जनजाति (ST)',
  obc: 'अन्य पिछड़ा वर्ग (OBC)',
  minority: 'अल्पसंख्यक समुदाय',
  general: 'सामान्य श्रेणी',
  dairy: '🥛 डेयरी और दूध उत्पाद',
  grocery: '🏪 किराना / जनरल स्टोर',
  tailoring: '🧵 सिलाई और कपड़ा',
  agriculture: '🌾 कृषि / खेती',
  poultry: '🐔 मुर्गी पालन / अंडे',
  foodStall: '🍲 खाने की दुकान / कैंटीन',
  handicrafts: '🎨 हस्तशिल्प',
  weaving: '🧶 हथकरघा / बुनाई',
  repairShop: '🔧 मरम्मत / सेवा दुकान',
  salon: '💇 सैलून / ब्यूटी पार्लर',
  horticulture: '🌺 बागवानी / नर्सरी',
  pharmacy: '💊 चिकित्सा / फार्मेसी',
  processing: 'प्रक्रिया',
  docs: 'दस्तावेज',
};

const ta: Translations = {
  appName: 'க்ராமசஹாய்',
  tagline: 'உங்கள் கிராம வணிக வழிகாட்டி',
  getStarted: 'தொடங்கு',
  back: 'பின்',
  backToHome: 'முகப்பிற்குத் திரும்பு',
  welcome: 'வரவேற்கிறோம்!',
  welcomeSubtitle: 'அரசு திட்டங்களுடன் உங்கள் வணிகத்தைத் தொடங்க உதவி பெறுங்கள்',
  existingBusiness: 'எனக்கு ஏற்கனவே வணிகம் உள்ளது',
  existingBusinessDesc: 'உங்கள் தற்போதைய வணிகத்திற்கான விரிவான அறிக்கை மற்றும் பகுப்பாய்வைப் பெறுங்கள்',
  hasSavings: 'எனிடம் சேமிப்பு உள்ளது, புதியதாகத் தொடங்க விரும்புகிறேன்',
  hasSavingsDesc: 'உங்கள் கிடைக்கும் நிதியுடன் உங்கள் புதிய வணிகத்தைத் திட்டமிடுங்கள்',
  needsLoan: 'தொடங்க கடன் தேவை',
  needsLoanDesc: 'உங்கள் வணிக யோசனைக்கு சரியான கடன் திட்டத்தைக் கண்டறியவும்',
  ministry: 'சமூக நீதி மற்றும் அதிகாரமளித்தல் அமைச்சகம்',
  freeService: 'கிராமப்புர தொழில்முனைவோருக்கு இலவச சேவை',
  yourName: 'உங்கள் பெயர்',
  namePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
  yourAddress: 'உங்கள் முகவரி',
  addressPlaceholder: 'உங்கள் முழு முகவரியை உள்ளிடவும்',
  state: 'மாநிலம்',
  selectState: 'உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
  district: 'மாவட்டம்',
  selectDistrict: 'உங்கள் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
  village: 'கிராமம் / நகரம்',
  villagePlaceholder: 'உங்கள் கிராமம் அல்லது நகரத்தின் பெயரை உள்ளிடவும்',
  marginMoney: 'கிடைக்கும் மார்ஜின் தொகை (₹)',
  marginHelp: 'இது மொத்த திட்ட செலவில் 10%. எடுத்துக்காட்டு: உங்களிடம் ₹1,00,000 இருந்தால், மொத்த திட்டம் ₹10,00,000 ஆக இருக்கும்',
  marginPlaceholder: 'தொகையை உள்ளிடவும் (எ.கா., 100000)',
  community: 'சமூக வகை',
  selectCommunity: 'உங்கள் சமூகத்தைத் தேர்ந்தெடுக்கவும்',
  businessType: 'வணிக வகை',
  selectBusiness: 'வணிக வகையைத் தேர்ந்தெடுக்கவும்',
  preferredLanguage: 'விரும்பிய மொழி (ஆடியோவுக்கு)',
  audioInLanguage: 'ஆடியோ விளக்கங்கள் நீங்கள் தேர்ந்தெடுத்த மொழியில் இருக்கும்',
  viewFinancialPlan: 'நிதி திட்டத்தைக் காண்க',
  minMargin: 'குறைந்தபட்ச மார்ஜின் தொகை ₹10,000 ஆக இருக்க வேண்டும்',
  fillAll: 'அனைத்து புலங்களையும் நிரப்பவும்',
  totalProject: 'மொத்த திட்ட செலவு',
  loanAmount: 'கடன் தொகை',
  financialPlan: 'நிதி & கடன் திட்டம்',
  editDetails: 'விவரங்களைத் திருத்து',
  totalCost: 'மொத்த செலவு',
  yourMargin: 'உங்கள் மார்ஜின்',
  quarterlyEMI: 'காலாண்டு EMI',
  partnerBank: 'பங்குதாரர் வங்கி & தகுதி',
  eligibility: 'தகுதி வரையறைகள்',
  ageRange: 'வயது: 18-65 வயது',
  beneficiary: 'பயனாளி',
  noDefault: 'முந்தைய கடன் இயல்புநிலை இல்லை',
  kycDocs: 'அடிப்படை KYC ஆவணங்கள்',
  locationProof: 'வணிக இருப்பிட சான்று',
  schemeRepayment: 'திட்டம் & திருப்பிச் செலுத்துதல்',
  scheme: 'திட்டம்',
  interest: 'வட்டி',
  tenure: 'கால அளவு',
  moratorium: 'மொரட்டோரியம்',
  repaymentSchedule: 'திருப்பிச் செலுத்தும் அட்டவணை',
  quarter: 'காலாண்டு',
  date: 'தேதி',
  status: 'நிலை',
  amount: 'தொகை',
  totalSummary: 'மொத்த சுருக்கம்',
  totalInterest: 'மொத்த வட்டி',
  totalRepayment: 'மொத்த திருப்பிச் செலுத்துதல்',
  wantReport: 'முழுமையான வணிக அறிக்கை வேண்டுமா?',
  getAnalysis: 'சந்தை பகுப்பாய்வு, SWOT, போட்டியாளர் மேப்பிங் மற்றும் பலவற்றைப் பெறுங்கள்',
  generateReport: 'வணிக அறிக்கையை உருவாக்கு',
  businessReport: 'வணிக சாத்தியக்கூறு அறிக்கை',
  download: 'அறிக்கையை பதிவிறக்க',
  marketReach: 'சந்தை அடைவு',
  opportunityAnalysis: 'வாய்ப்பு பகுப்பாய்வு',
  swotAnalysis: 'SWOT பகுப்பாய்வு',
  threatIdentification: 'அச்சுறுத்தல் அடையாளம்',
  competitorMapping: 'போட்டியாளர் மேப்பிங்',
  productMarketValue: 'தயாரிப்பு சந்தை மதிப்பு',
  population: 'மக்கள் தொகை (10 கி.மீ)',
  households: 'வீடுகள்',
  targetCustomers: 'இலக்கு வாடிக்கையாளர்கள்',
  distributionChannels: 'விநியோக சேனல்கள்',
  strengths: 'பலங்கள்',
  weaknesses: 'பலவீனங்கள்',
  opportunities: 'வாய்ப்புகள்',
  threats: 'அச்சுறுத்தல்கள்',
  business: 'வணிகம்',
  distance: 'தூரம்',
  rating: 'மதிப்பீடு',
  suggestedPricing: 'பரிந்துரைக்கப்பட்ட விலை',
  pricingTips: 'விலை நிர்ணய குறிப்புகள்',
  businessAnalysis: 'வணிக பகுப்பாய்வு',
  fillDetails: 'உங்கள் வணிக விவரங்களை நிரப்பவும்',
  basicInfo: 'அடிப்படை தகவல்',
  businessName: 'வணிகத்தின் பெயர்',
  businessNamePlaceholder: 'உங்கள் வணிகத்தின் பெயரை உள்ளிடவும்',
  sector: 'துறை',
  selectSector: 'துறையைத் தேர்ந்தெடுக்கவும்',
  yearsInOperation: 'செயல்பாட்டில் ஆண்டுகள்',
  yearsPlaceholder: 'எ.கா., 3',
  financialInfo: 'நிதி தகவல்',
  annualTurnover: 'ஆண்டு சுழற்சி (₹)',
  turnoverPlaceholder: 'எ.கா., 1200000',
  monthlyRevenue: 'மாதாந்திர வருவாய் (₹)',
  revenuePlaceholder: 'எ.கா., 100000',
  monthlyExpenses: 'மாதாந்திர செலவுகள் (₹)',
  expensesPlaceholder: 'எ.கா., 70000',
  operations: 'செயல்பாடுகள்',
  numberOfEmployees: 'ஊழியர்களின் எண்ணிக்கை',
  employeesPlaceholder: 'எ.கா., 5',
  monthlySalary: 'மாதாந்திர சம்பள பில் (₹)',
  salaryPlaceholder: 'எ.கா., 50000',
  existingLoans: 'நிலுவைக் கடன்கள்',
  existingLoansQuestion: 'உங்களுக்கு ஏதேனும் நிலுவைக் கடன்கள் உள்ளனவா?',
  loanAmountLabel: 'மொத்த கடன் தொகை (₹)',
  loanAmountPlaceholder: 'எ.கா., 500000',
  marketInfo: 'சந்தை தகவல்',
  customersPerDay: 'ஒரு நாளைக்கு சராசரி வாடிக்கையாளர்கள்',
  customersPlaceholder: 'எ.கா., 50',
  competitionLevel: 'போட்டி நிலை',
  selectCompetition: 'நிலையைத் தேர்ந்தெடுக்கவும்',
  competitionLow: 'குறைவு (1-2 ஒத்த வணிகங்கள்)',
  competitionMedium: 'நடுத்தரம் (3-5 ஒத்த வணிகங்கள்)',
  competitionHigh: 'உயர்வு (6+ ஒத்த வணிகங்கள்)',
  locationQuality: 'இருப்பிட தரம்',
  selectLocation: 'தரத்தைத் தேர்ந்தெடுக்கவும்',
  locationPrime: 'முதன்மை (முக்கிய சாலை, உயர் நடமாட்டம்)',
  locationAverage: 'சராசரி (நல்ல இருப்பிடம்)',
  locationPoor: 'மோசமான (உள்பகுதி, குறைந்த நடமாட்டம்)',
  generateAnalysis: 'பகுப்பாய்வு அறிக்கையை உருவாக்கு',
  overallHealth: 'ஒட்டுமொத்த வணிக स्वास्थ्यம்',
  excellent: 'அருமை! உங்கள் வணிகம் செழிக்கிறது',
  good: 'நல்லது, ஆனால் முன்னேற்றத்திற்கு இடம் உள்ளது',
  needsAttention: 'உடனடி கவனம் தேவை',
  financialHealth: 'நிதி स्वास्थ्यம்',
  operationalHealth: 'செயல்பாட்டு स्वास्थ्यம்',
  marketPosition: 'சந்தை நிலை',
  keyFinancialMetrics: 'முக்கிய நிதி அளவீடுகள்',
  netProfitMargin: 'நிகர லாப வரம்பு',
  grossMargin: 'மொத்த வரம்பு',
  debtToEquity: 'கடன்-பங்கு',
  roi: 'ROI',
  operationalEfficiency: 'செயல்பாட்டு திறன்',
  revenuePerEmployee: 'ஊழியர் ஒருவருக்கான வருவாய்',
  revenuePerSqFt: 'சதுர அடி ஒன்றுக்கான வருவாய்',
  dailyRevenue: 'தினசரி வருவாய்',
  capacityUtilization: 'திறன் பயன்பாடு',
  recommendations: 'முன்னேற்றத்திற்கான பரிந்துரைகள்',
  highPriority: 'உயர் முன்னுரிமை',
  mediumPriority: 'நடுத்தர முன்னுரிமை',
  lowPriority: 'குறைந்த முன்னுரிமை',
  category: 'வகை',
  impact: 'தாக்கம்',
  timeRequired: 'தேவைப்படும் நேரம்',
  expectedBenefit: 'எதிர்பார்க்கப்படும் நன்மை',
  businessLocation: 'வணிக இருப்பிடம் & அருகிலுள்ள வங்கிகள்',
  nearbyBanks: 'உங்கள் வணிக இருப்பிடம் மற்றும் அருகிலுள்ள வங்கிகள்/சந்தைகள்',
  analysisComplete: 'பகுப்பாய்வு முடிந்தது!',
  healthScore: 'உங்கள் வணிக स्वास्थ्य மதிப்பெண்',
  improvementsIdentified: 'உயர்-முன்னுரிமை முன்னேற்றங்கள் அடையாளம் காணப்பட்டன.',
  findLoan: 'உங்கள் கடனைக் கண்டறியவும்',
  findLoanSubtitle: 'சரியான கடன் திட்டத்தைக் கண்டறிய நாங்கள் உங்களுக்கு உதவுவோம்',
  loanNeeded: 'உங்களுக்கு எவ்வளவு கடன் தேவை? (₹)',
  loanNeededHelp: 'நீங்கள் கடன் வாங்க விரும்பும் தொகையை உள்ளிடவும்',
  loanNeededPlaceholder: 'கடன் தொகையை உள்ளிடவும் (எ.கா., 500000)',
  marginRequired: 'நீங்கள் ஏற்பாடு செய்ய வேண்டும்',
  marginRequiredSuffix: 'உங்கள் மார்ஜினாக (10%)',
  findLoanSchemes: 'கடன் திட்டங்களைக் கண்டறியவும்',
  select: 'தேர்ந்தெடு',
  submit: 'சமர்ப்பி',
  cancel: 'ரத்து',
  yes: 'ஆம்',
  no: 'இல்லை',
  years: 'ஆண்டுகள்',
  months: 'மாதங்கள்',
  sc: 'பட்டியல் சாதி (SC)',
  st: 'பட்டியல் பழங்குடி (ST)',
  obc: 'பிற பிற்படுத்தப்பட்ட வகுப்பு (OBC)',
  minority: 'சிறுபான்மை சமூகம்',
  general: 'பொது வகை',
  dairy: '🥛 பால் & பால் பொருட்கள்',
  grocery: '🏪 மளிகை / பொது கடை',
  tailoring: '🧵 தைத்தல் & ஜவுளி',
  agriculture: '🌾 வேளாண்மை / சாகுபடி',
  poultry: '🐔 கோழி வளர்ப்பு / முட்டைகள்',
  foodStall: '🍲 உணவு கடை / உணவகம்',
  handicrafts: '🎨 கைவினைப் பொருட்கள்',
  weaving: '🧶 கைத்தறி / நெசவு',
  repairShop: '🔧 பழுதுநீக்கம் / சேவை கடை',
  salon: '💇 சலூன் / அழகு சாலம்',
  horticulture: '🌺 தோட்டக்கலை / நர்சரி',
  pharmacy: '💊 மருத்துவம் / மருந்தகம்',
  processing: 'செயலாக்கம்',
  docs: 'ஆவணங்கள்',
};

export const translations: Record<Language, Translations> = {
  en,
  hi,
  ta,
  te: en,
  kn: en,
  ml: en,
  mr: en,
  bn: en,
  or: en,
};

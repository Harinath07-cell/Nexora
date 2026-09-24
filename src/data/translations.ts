export type Language = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'mr' | 'bn' | 'or';

export interface Translations {
  appName: string;
  tagline: string;
  getStarted: string;
  welcome: string;
  welcomeSubtitle: string;
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
  back: string;
  minMargin: string;
  fillAll: string;
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
  businessReport: string;
  download: string;
  sc: string;
  st: string;
  obc: string;
  minority: string;
  general: string;
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
  marketReach: string;
  opportunityAnalysis: string;
  swotAnalysis: string;
  threatIdentification: string;
  competitorMapping: string;
  productMarketValue: string;
}

const en: Translations = {
  appName: 'GramSahay',
  tagline: 'Your Village Business Guide',
  getStarted: 'Get Started',
  welcome: 'Welcome!',
  welcomeSubtitle: 'Get help to start your business with government schemes',
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
  back: 'Back',
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
  marketReach: 'Market Reach',
  opportunityAnalysis: 'Opportunity Analysis',
  swotAnalysis: 'SWOT Analysis',
  threatIdentification: 'Threat Identification',
  competitorMapping: 'Competitor Mapping',
  productMarketValue: 'Product Market Value',
};

const hi: Translations = {
  appName: 'ग्रामसहाय',
  tagline: 'आपका गाँव व्यापार मार्गदर्शक',
  getStarted: 'शुरू करें',
  welcome: 'स्वागत है!',
  welcomeSubtitle: 'सरकारी योजनाओं के साथ अपना व्यवसाय शुरू करने में मदद लें',
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
  back: 'वापस',
  minMargin: 'न्यूनतम मार्जिन राशि ₹10,000 होनी चाहिए',
  fillAll: 'कृपया सभी फ़ील्ड भरें',
  totalProject: 'कुल परियोजना लागत',
  loanAmount: 'लोन राशि',
  financialPlan: 'वित्तीय और लोन योजना',
  editDetails: 'विवरण संपादित करें',
  totalCost: 'कुल लागत',
  yourMargin: 'आपका मार्जिन',
  quarterlyEMI: 'तिमाही EMI',
  partnerBank: 'पार्टनर बैंक और पात्रता',
  eligibility: 'पात्रता मानदंड',
  ageRange: 'आयु: 18-65 वर्ष',
  beneficiary: 'लाभार्थी',
  noDefault: 'कोई पिछला लोन डिफॉल्ट नहीं',
  kycDocs: 'बुनियादी KYC दस्तावेज',
  locationProof: 'व्यवसाय स्थान प्रमाण',
  schemeRepayment: 'योजना और चुकौती',
  scheme: 'योजना',
  interest: 'ब्याज',
  tenure: 'अवधि',
  moratorium: 'मोरेटोरियम',
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
  marketReach: 'बाजार पहुंच',
  opportunityAnalysis: 'अवसर विश्लेषण',
  swotAnalysis: 'SWOT विश्लेषण',
  threatIdentification: 'खतरा पहचान',
  competitorMapping: 'प्रतिस्पर्धी मैपिंग',
  productMarketValue: 'उत्पाद बाजार मूल्य',
};

const ta: Translations = {
  appName: 'க்ராமசஹாய்',
  tagline: 'உங்கள் கிராம தொழில் வழிகாட்டி',
  getStarted: 'தொடங்கு',
  welcome: 'வரவேற்கிறோம்!',
  welcomeSubtitle: 'அரசு திட்டங்களுடன் உங்கள் தொழிலைத் தொடங்க உதவி பெறுங்கள்',
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
  marginMoney: 'கிடைக்கக்கூடிய விளிம்பு தொகை (₹)',
  marginHelp: 'இது மொத்த திட்ட செலவில் 10%. எடுத்துக்காட்டு: உங்களிடம் ₹1,00,000 இருந்தால், மொத்த திட்டம் ₹10,00,000 ஆக இருக்கும்',
  marginPlaceholder: 'தொகையை உள்ளிடவும் (எ.கா., 100000)',
  community: 'சமூக வகை',
  selectCommunity: 'உங்கள் சமூகத்தைத் தேர்ந்தெடுக்கவும்',
  businessType: 'தொழில் வகை',
  selectBusiness: 'தொழில் வகையைத் தேர்ந்தெடுக்கவும்',
  preferredLanguage: 'விரும்பிய மொழி (ஒலிக்கு)',
  audioInLanguage: 'ஒலி விளக்கங்கள் நீங்கள் தேர்ந்தெடுத்த மொழியில் இருக்கும்',
  viewFinancialPlan: 'நிதி திட்டத்தைப் பார்க்க',
  back: 'பின்',
  minMargin: 'குறைந்தபட்ச விளிம்பு தொகை ₹10,000 ஆக இருக்க வேண்டும்',
  fillAll: 'அனைத்து புலங்களையும் நிரப்பவும்',
  totalProject: 'மொத்த திட்ட செலவு',
  loanAmount: 'கடன் தொகை',
  financialPlan: 'நிதி & கடன் திட்டம்',
  editDetails: 'விவரங்களைத் திருத்து',
  totalCost: 'மொத்த செலவு',
  yourMargin: 'உங்கள் விளிம்பு',
  quarterlyEMI: 'காலாண்டு EMI',
  partnerBank: 'பங்குதாரர் வங்கி & தகுதி',
  eligibility: 'தகுதி அளவுகோல்கள்',
  ageRange: 'வயது: 18-65 வயது',
  beneficiary: 'பயனாளி',
  noDefault: 'முந்தைய கடன் இயல்புநிலை இல்லை',
  kycDocs: 'அடிப்படை KYC ஆவணங்கள்',
  locationProof: 'தொழில் இருப்பிட சான்று',
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
  wantReport: 'முழுமையான தொழில் அறிக்கை வேண்டுமா?',
  getAnalysis: 'சந்தை பகுப்பாய்வு, SWOT, போட்டியாளர் மேப்பிங் மற்றும் பலவற்றைப் பெறுங்கள்',
  generateReport: 'தொழில் அறிக்கையை உருவாக்கு',
  businessReport: 'தொழில் சாத்தியக்கூறு அறிக்கை',
  download: 'அறிக்கையை பதிவிறக்க',
  sc: 'பட்டியல் சாதி (SC)',
  st: 'பட்டியல் பழங்குடி (ST)',
  obc: 'பிற பிற்படுத்தப்பட்ட வகுப்பு (OBC)',
  minority: 'சிறுபான்மை சமூகம்',
  general: 'பொது வகை',
  dairy: '🥛 பால் & பால் பொருட்கள்',
  grocery: '🏪 பஞ்சகடை / பொது கடை',
  tailoring: '🧵 தையல் & ஜவுளி',
  agriculture: '🌾 வேளாண்மை / சாகுபடி',
  poultry: '🐔 கோழி வளர்ப்பு / முட்டைகள்',
  foodStall: '🍲 உணவு கடை / உணவகம்',
  handicrafts: '🎨 கைவினைப் பொருட்கள்',
  weaving: '🧶 கைத்தறி / நெசவு',
  repairShop: '🔧 பழுதுநீக்கம் / சேவை கடை',
  salon: '💇 சலூன் / அழகு சாலம்',
  horticulture: '🌺 தோட்டக்கலை / நர்சரி',
  pharmacy: '💊 மருத்துவம் / மருந்தகம்',
  marketReach: 'சந்தை அடைவு',
  opportunityAnalysis: 'வாய்ப்பு பகுப்பாய்வு',
  swotAnalysis: 'SWOT பகுப்பாய்வு',
  threatIdentification: 'அச்சுறுத்தல் அடையாளம்',
  competitorMapping: 'போட்டியாளர் மேப்பிங்',
  productMarketValue: 'தயாரிப்பு சந்தை மதிப்பு',
};

export const translations: Record<Language, Translations> = {
  en,
  hi,
  ta,
  te: en, // Telugu - using English as fallback
  kn: en, // Kannada - using English as fallback
  ml: en, // Malayalam - using English as fallback
  mr: en, // Marathi - using English as fallback
  bn: en, // Bengali - using English as fallback
  or: en, // Odia - using English as fallback
};

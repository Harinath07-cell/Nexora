import { BUSINESS_STATISTICS, MARKET_PRICES, SCHEME_DETAILS } from './realData';

export const BUSINESS_TYPES = [
  { value: 'dairy', label: 'dairy' },
  { value: 'grocery', label: 'grocery' },
  { value: 'tailoring', label: 'tailoring' },
  { value: 'agriculture', label: 'agriculture' },
  { value: 'poultry', label: 'poultry' },
  { value: 'food_stall', label: 'foodStall' },
  { value: 'handicrafts', label: 'handicrafts' },
  { value: 'weaving', label: 'weaving' },
  { value: 'repair_shop', label: 'repairShop' },
  { value: 'salon', label: 'salon' },
  { value: 'horticulture', label: 'horticulture' },
  { value: 'pharmacy', label: 'pharmacy' },
];

export const COMMUNITIES = [
  { value: 'sc', label: 'sc' },
  { value: 'st', label: 'st' },
  { value: 'obc', label: 'obc' },
  { value: 'minority', label: 'minority' },
  { value: 'general', label: 'general' },
];

export const PARTNER_BANKS = [
  { name: 'State Bank of India (SBI)', processing: '7-14 Days', docs: 'Aadhaar, PAN, Address Proof' },
  { name: 'Punjab National Bank (PNB)', processing: '7-14 Days', docs: 'Aadhaar, PAN, Address Proof' },
  { name: 'Canara Bank', processing: '10-15 Days', docs: 'Aadhaar, PAN, Address Proof' },
  { name: 'India Post Payments Bank', processing: '5-10 Days', docs: 'Aadhaar, PAN, Address Proof' },
  { name: 'District Cooperative Bank', processing: '7-14 Days', docs: 'Aadhaar, PAN, Address Proof' },
];

export interface FinancialResult {
  totalCost: number;
  loanAmount: number;
  margin: number;
  scheme: 'micro' | 'term';
  schemeName: string;
  interestRate: number;
  tenureYears: number;
  moratoriumMonths: number;
  quarterlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  schedule: Array<{ quarter: number; date: string; status: string; amount: number }>;
}

export function calculateFinancials(margin: number): FinancialResult {
  const totalCost = margin / 0.10;
  const loanAmount = totalCost * 0.90;

  let scheme: 'micro' | 'term';
  let schemeName: string;
  let interestRate: number;
  let tenureYears: number;
  let moratoriumMonths: number;

  if (totalCost <= SCHEME_DETAILS.microFinance.maxProjectCost) {
    scheme = 'micro';
    schemeName = SCHEME_DETAILS.microFinance.name;
    interestRate = SCHEME_DETAILS.microFinance.interestRate;
    tenureYears = SCHEME_DETAILS.microFinance.tenureYears;
    moratoriumMonths = SCHEME_DETAILS.microFinance.moratoriumMonths;
  } else {
    scheme = 'term';
    schemeName = SCHEME_DETAILS.termLoan.name;
    interestRate = SCHEME_DETAILS.termLoan.interestRate;
    tenureYears = SCHEME_DETAILS.termLoan.tenureYears;
    moratoriumMonths = SCHEME_DETAILS.termLoan.moratoriumMonths;
  }

  const totalQuarters = tenureYears * 4;
  const moratoriumQuarters = Math.ceil(moratoriumMonths / 3);
  const repaymentQuarters = totalQuarters - moratoriumQuarters;
  const quarterlyRate = interestRate / 100 / 4;

  let quarterlyEMI = 0;
  if (quarterlyRate > 0 && repaymentQuarters > 0) {
    quarterlyEMI = loanAmount * quarterlyRate * Math.pow(1 + quarterlyRate, repaymentQuarters) /
      (Math.pow(1 + quarterlyRate, repaymentQuarters) - 1);
  }

  const totalPayment = quarterlyEMI * repaymentQuarters;
  const totalInterest = totalPayment - loanAmount;

  const schedule = [];
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() + 3);

  for (let q = 1; q <= Math.min(totalQuarters, 12); q++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + (q - 1) * 3);
    const dateStr = date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
    const isMoratorium = q <= moratoriumQuarters;

    schedule.push({
      quarter: q,
      date: dateStr,
      status: isMoratorium ? 'Moratorium (No EMI)' : 'EMI Due',
      amount: isMoratorium ? 0 : quarterlyEMI,
    });
  }

  return {
    totalCost,
    loanAmount,
    margin,
    scheme,
    schemeName,
    interestRate,
    tenureYears,
    moratoriumMonths,
    quarterlyEMI,
    totalInterest,
    totalPayment,
    schedule,
  };
}

export interface ReportData {
  marketReach: {
    population: number;
    households: number;
    targetCustomers: number;
    channels: string[];
  };
  opportunity: string[];
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  threats: Array<{ name: string; description: string; severity: 'high' | 'medium' | 'low' }>;
  competitors: Array<{ name: string; distance: string; rating: string }>;
  pricing: { suggested: string; tips: string[] };
  statistics?: {
    survivalRate: number;
    avgRevenue: number;
    profitMargin: number;
    setupTime: string;
    source: string;
  };
}

export function generateReportData(businessType: string): ReportData {
  const population = 15000 + Math.floor(Math.random() * 10000);
  const households = Math.floor(population / 4.5);
  const targetCustomers = Math.floor(households * 0.2);

  const businessData: Record<string, ReportData> = {
    dairy: {
      marketReach: {
        population,
        households,
        targetCustomers,
        channels: ['Local market', 'Door-to-door delivery', 'Weekly haat', 'Nearby towns'],
      },
      opportunity: [
        'Growing demand for organic milk',
        'Can add value products (paneer, ghee, curd)',
        'NABARD dairy entrepreneurship scheme available',
        'Limited organized competition in rural areas',
      ],
      swot: {
        strengths: ['Daily demand - steady income', 'Government subsidy available', 'Low skill barrier', 'Can start small and grow'],
        weaknesses: ['Requires daily attention', 'Milk spoilage risk without cold storage', 'Initial animal purchase cost', 'Veterinary care dependency'],
        opportunities: ['Growing demand for organic milk', 'Value-added products (paneer, ghee)', 'NABARD scheme support', 'Nearby town market access'],
        threats: ['Disease outbreak in cattle', 'Feed cost fluctuation', 'Large dairy companies entering', 'Summer milk yield drops'],
      },
      threats: [
        { name: 'Disease Outbreak', description: 'Foot-and-mouth or mastitis can affect entire herd', severity: 'high' },
        { name: 'Feed Cost Rise', description: 'Cattle feed prices increase 15-20% in summer', severity: 'medium' },
        { name: 'Large Competitors', description: 'Amul/Mother Dairy entering rural markets', severity: 'medium' },
        { name: 'Veterinary Access', description: 'No vet within 10km - emergency risk', severity: 'high' },
      ],
      competitors: [
        { name: 'Local Dairy Farm', distance: '3 km', rating: '4.2' },
        { name: 'Milk Collection Center', distance: '5 km', rating: '3.8' },
        { name: 'Amul Outlet', distance: '12 km', rating: '4.5' },
      ],
      pricing: {
        suggested: `₹${MARKET_PRICES.dairy.milk.min}-${MARKET_PRICES.dairy.milk.max}/${MARKET_PRICES.dairy.milk.unit} milk, ₹${MARKET_PRICES.dairy.paneer.min}-${MARKET_PRICES.dairy.paneer.max}/${MARKET_PRICES.dairy.paneer.unit} paneer, ₹${MARKET_PRICES.dairy.curd.min}-${MARKET_PRICES.dairy.curd.max}/${MARKET_PRICES.dairy.curd.unit} curd (Source: Agmarknet)`,
        tips: ['Match local mandi/haat prices', 'Offer home delivery for regular customers', 'Premium pricing for organic/farm-fresh', 'Bundle products for better margins'],
      },
      statistics: {
        survivalRate: BUSINESS_STATISTICS.dairy.survivalRate3Years,
        avgRevenue: BUSINESS_STATISTICS.dairy.avgMonthlyRevenue,
        profitMargin: BUSINESS_STATISTICS.dairy.profitMargin,
        setupTime: BUSINESS_STATISTICS.dairy.setupTime,
        source: BUSINESS_STATISTICS.dairy.source,
      },
    },
    default: {
      marketReach: {
        population,
        households,
        targetCustomers: Math.floor(households * 0.15),
        channels: ['Local market', 'Word of mouth', 'Nearby villages', 'Social media'],
      },
      opportunity: [
        'Growing rural economy',
        'Digital payment adoption',
        'Government scheme benefits',
        'Untapped local demand',
      ],
      swot: {
        strengths: ['Local market knowledge', 'Government support available', 'Low initial investment', 'Community trust factor'],
        weaknesses: ['Limited formal training', 'Small initial capital', 'Dependence on local market', 'Infrastructure challenges'],
        opportunities: ['Growing rural economy', 'Digital payment adoption', 'Government scheme benefits', 'Untapped local demand'],
        threats: ['Seasonal income fluctuation', 'Competition from nearby towns', 'Supply chain disruptions', 'Weather/climate dependency'],
      },
      threats: [
        { name: 'Market Competition', description: 'Similar businesses in nearby town', severity: 'medium' },
        { name: 'Supply Chain', description: 'Limited supplier options in area', severity: 'medium' },
        { name: 'Infrastructure', description: 'Road connectivity issues in monsoon', severity: 'low' },
        { name: 'Seasonal Demand', description: 'Income fluctuates with seasons', severity: 'medium' },
      ],
      competitors: [
        { name: 'Local Business 1', distance: '2 km', rating: '4.0' },
        { name: 'Local Business 2', distance: '5 km', rating: '3.8' },
        { name: 'Town Competitor', distance: '10 km', rating: '4.2' },
      ],
      pricing: {
        suggested: 'Market rate based on local demand and competition',
        tips: ['Research competitor prices', 'Offer value-added services', 'Build customer loyalty', 'Adjust for seasonal demand'],
      },
      statistics: {
        survivalRate: 75,
        avgRevenue: 35000,
        profitMargin: 30,
        setupTime: '1-3 months',
        source: 'MSME Ministry Annual Report 2022-23',
      },
    },
  };

  return businessData[businessType] || businessData.default;
}

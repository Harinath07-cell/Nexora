import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import MapComponent from '../components/MapComponent';
import { getCityData } from '../data/cityData';

interface BusinessMetrics {
  // Financial Metrics
  grossProfitMargin: number;
  netProfitMargin: number;
  operatingProfitMargin: number;
  debtToEquityRatio: number;
  currentRatio: number;
  returnOnInvestment: number;
  
  // Operational Metrics
  revenuePerEmployee: number;
  revenuePerSqFt: number;
  employeeProductivity: number;
  capacityUtilization: number;
  
  // Market Metrics
  customerAcquisitionCost: number;
  averageTransactionValue: number;
  dailyRevenue: number;
  monthlyGrowthRate: number;
  
  // Health Score
  overallHealthScore: number;
  financialHealth: number;
  operationalHealth: number;
  marketHealth: number;
}

interface Recommendation {
  category: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
  implementationTime: string;
  estimatedBenefit: string;
}

export default function BusinessAnalysisReport() {
  const { userData, setScreen } = useApp();
  const { t } = useLanguage();

  const analysis = useMemo(() => {
    const data = userData as any;
    
    // Calculate metrics
    const monthlyRevenue = Number(data.monthlyRevenue) || 0;
    const monthlyExpenses = Number(data.monthlyExpenses) || 0;
    const annualTurnover = Number(data.annualTurnover) || 0;
    const numberOfEmployees = Number(data.numberOfEmployees) || 1;
    const businessArea = Number(data.businessArea) || 1;
    const monthlySalary = Number(data.monthlySalary) || 0;
    const loanAmount = Number(data.loanAmount) || 0;
    const loanEMI = Number(data.loanEMI) || 0;
    const averageCustomerPerDay = Number(data.averageCustomerPerDay) || 0;
    const averageTransactionValue = Number(data.averageTransactionValue) || 0;
    const monthlyRent = Number(data.monthlyRent) || 0;
    const workingHours = Number(data.workingHours) || 8;
    const daysPerWeek = Number(data.daysPerWeek) || 6;

    // Financial Metrics
    const grossProfit = monthlyRevenue - (monthlyExpenses - monthlySalary - monthlyRent);
    const grossProfitMargin = (grossProfit / monthlyRevenue) * 100;
    const netProfit = monthlyRevenue - monthlyExpenses - loanEMI;
    const netProfitMargin = (netProfit / monthlyRevenue) * 100;
    const operatingProfit = monthlyRevenue - monthlyExpenses;
    const operatingProfitMargin = (operatingProfit / monthlyRevenue) * 100;
    
    const debtToEquityRatio = loanAmount > 0 ? loanAmount / (annualTurnover * 0.1) : 0;
    const currentRatio = (monthlyRevenue * 3) / (monthlyExpenses * 1.5); // Simplified
    
    const totalInvestment = annualTurnover * 0.3; // Assume 30% of turnover is investment
    const returnOnInvestment = (netProfit * 12 / totalInvestment) * 100;

    // Operational Metrics
    const revenuePerEmployee = monthlyRevenue / numberOfEmployees;
    const revenuePerSqFt = monthlyRevenue / businessArea;
    const employeeProductivity = revenuePerEmployee;
    
    const totalWorkingHoursPerMonth = workingHours * daysPerWeek * 4;
    const capacityUtilization = (averageCustomerPerDay * workingHours) / totalWorkingHoursPerMonth * 100;

    // Market Metrics
    const dailyRevenue = averageCustomerPerDay * averageTransactionValue;
    const customerAcquisitionCost = monthlyExpenses * 0.1 / (averageCustomerPerDay * 30); // 10% of expenses on acquisition
    const monthlyGrowthRate = 5; // Assume 5% growth for established businesses

    // Health Scores (0-100)
    const financialHealth = Math.min(100, Math.max(0, 
      (netProfitMargin > 20 ? 40 : netProfitMargin > 10 ? 30 : 20) +
      (debtToEquityRatio < 1 ? 30 : debtToEquityRatio < 2 ? 20 : 10) +
      (currentRatio > 1.5 ? 30 : currentRatio > 1 ? 20 : 10)
    ));

    const operationalHealth = Math.min(100, Math.max(0,
      (revenuePerEmployee > 50000 ? 40 : revenuePerEmployee > 30000 ? 30 : 20) +
      (capacityUtilization > 70 ? 30 : capacityUtilization > 50 ? 20 : 10) +
      (operatingProfitMargin > 15 ? 30 : operatingProfitMargin > 10 ? 20 : 10)
    ));

    const marketHealth = Math.min(100, Math.max(0,
      (data.competitionLevel === 'low' ? 40 : data.competitionLevel === 'medium' ? 30 : 20) +
      (data.location === 'prime' ? 30 : data.location === 'average' ? 20 : 10) +
      (averageCustomerPerDay > 50 ? 30 : averageCustomerPerDay > 20 ? 20 : 10)
    ));

    const overallHealthScore = (financialHealth + operationalHealth + marketHealth) / 3;

    const metrics: BusinessMetrics = {
      grossProfitMargin,
      netProfitMargin,
      operatingProfitMargin,
      debtToEquityRatio,
      currentRatio,
      returnOnInvestment,
      revenuePerEmployee,
      revenuePerSqFt,
      employeeProductivity,
      capacityUtilization,
      customerAcquisitionCost,
      averageTransactionValue,
      dailyRevenue,
      monthlyGrowthRate,
      overallHealthScore,
      financialHealth,
      operationalHealth,
      marketHealth,
    };

    // Generate recommendations
    const recommendations: Recommendation[] = [];

    // Financial recommendations
    if (netProfitMargin < 10) {
      recommendations.push({
        category: 'Financial',
        priority: 'high',
        title: 'Improve Profit Margins',
        description: 'Your net profit margin is below 10%. Consider increasing prices by 5-10% or reducing operational costs.',
        impact: 'Could increase monthly profit by ₹' + Math.round(monthlyRevenue * 0.05).toLocaleString('en-IN'),
        implementationTime: '1-2 months',
        estimatedBenefit: '5-10% increase in net profit'
      });
    }

    if (debtToEquityRatio > 2) {
      recommendations.push({
        category: 'Financial',
        priority: 'high',
        title: 'Reduce Debt Burden',
        description: 'Your debt-to-equity ratio is high. Focus on reducing existing loans before taking new ones.',
        impact: 'Could save ₹' + Math.round(loanEMI * 0.2).toLocaleString('en-IN') + ' per month in interest',
        implementationTime: '6-12 months',
        estimatedBenefit: '20% reduction in interest costs'
      });
    }

    // Operational recommendations
    if (revenuePerEmployee < 30000) {
      recommendations.push({
        category: 'Operational',
        priority: 'medium',
        title: 'Optimize Workforce',
        description: 'Revenue per employee is low. Consider training existing staff or optimizing workforce size.',
        impact: 'Could increase productivity by 20-30%',
        implementationTime: '2-3 months',
        estimatedBenefit: '₹' + Math.round(monthlySalary * 0.15).toLocaleString('en-IN') + ' monthly savings'
      });
    }

    if (capacityUtilization < 50) {
      recommendations.push({
        category: 'Operational',
        priority: 'medium',
        title: 'Increase Capacity Utilization',
        description: 'Your capacity utilization is below 50%. Focus on marketing to increase customer footfall.',
        impact: 'Could increase revenue by 30-40%',
        implementationTime: '3-6 months',
        estimatedBenefit: '₹' + Math.round(monthlyRevenue * 0.3).toLocaleString('en-IN') + ' additional monthly revenue'
      });
    }

    // Market recommendations
    if (data.competitionLevel === 'high') {
      recommendations.push({
        category: 'Market',
        priority: 'medium',
        title: 'Differentiate from Competition',
        description: 'High competition in your area. Focus on unique selling propositions and customer service.',
        impact: 'Could increase customer retention by 25%',
        implementationTime: '2-4 months',
        estimatedBenefit: '15-20% increase in repeat customers'
      });
    }

    if (data.location === 'poor') {
      recommendations.push({
        category: 'Market',
        priority: 'high',
        title: 'Improve Location Visibility',
        description: 'Your location has low footfall. Invest in signage, online presence, and delivery services.',
        impact: 'Could increase customers by 40-50%',
        implementationTime: '1-3 months',
        estimatedBenefit: '₹' + Math.round(monthlyRevenue * 0.2).toLocaleString('en-IN') + ' additional monthly revenue'
      });
    }

    // Pricing recommendations
    const industryAvgMargin = data.sector === 'Retail Trade' ? 15 : data.sector === 'Food & Beverage' ? 25 : 20;
    if (grossProfitMargin < industryAvgMargin) {
      recommendations.push({
        category: 'Pricing',
        priority: 'high',
        title: 'Review Pricing Strategy',
        description: `Your gross margin (${grossProfitMargin.toFixed(1)}%) is below industry average (${industryAvgMargin}%). Consider increasing prices.`,
        impact: 'Could increase revenue by 10-15%',
        implementationTime: '1 month',
        estimatedBenefit: '₹' + Math.round(monthlyRevenue * 0.1).toLocaleString('en-IN') + ' additional monthly revenue'
      });
    }

    // Cost reduction recommendations
    if (monthlyRent / monthlyRevenue > 0.15) {
      recommendations.push({
        category: 'Cost Reduction',
        priority: 'medium',
        title: 'Optimize Rental Costs',
        description: 'Rent is consuming more than 15% of revenue. Consider renegotiating or relocating.',
        impact: 'Could save ₹' + Math.round(monthlyRent * 0.2).toLocaleString('en-IN') + ' per month',
        implementationTime: '3-6 months',
        estimatedBenefit: '20% reduction in rental costs'
      });
    }

    // Growth recommendations
    if (overallHealthScore > 70) {
      recommendations.push({
        category: 'Growth',
        priority: 'low',
        title: 'Scale Your Business',
        description: 'Your business is healthy. Consider expanding to new locations or adding new product lines.',
        impact: 'Could double revenue in 12-18 months',
        implementationTime: '6-12 months',
        estimatedBenefit: '100% revenue growth'
      });
    }

    // Challenge-based recommendations
    if (data.mainChallenges.includes('Cash flow problems')) {
      recommendations.push({
        category: 'Financial',
        priority: 'high',
        title: 'Improve Cash Flow Management',
        description: 'Implement strict credit policies and maintain 3-month expense reserve.',
        impact: 'Could eliminate cash flow issues',
        implementationTime: '1-2 months',
        estimatedBenefit: 'Stable operations and reduced stress'
      });
    }

    if (data.mainChallenges.includes('Low customer footfall')) {
      recommendations.push({
        category: 'Marketing',
        priority: 'high',
        title: 'Boost Customer Footfall',
        description: 'Invest in local marketing, social media presence, and customer loyalty programs.',
        impact: 'Could increase customers by 30-40%',
        implementationTime: '2-3 months',
        estimatedBenefit: '₹' + Math.round(monthlyRevenue * 0.25).toLocaleString('en-IN') + ' additional monthly revenue'
      });
    }

    return {
      metrics,
      recommendations: recommendations.sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }),
      data,
    };
  }, [userData]);

  const getHealthColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthBg = (score: number) => {
    if (score >= 70) return 'bg-green-50 border-green-200';
    if (score >= 50) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'bg-red-100 text-red-800 border-red-200';
    if (priority === 'medium') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white text-lg font-bold">📊</div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Business Analysis Report</h1>
              <p className="text-xs text-gray-500">{analysis.data.businessName}</p>
            </div>
          </div>
          <button onClick={() => setScreen('home')} className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100">
            ← Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Overall Health Score */}
        <div className={`rounded-2xl shadow-md p-6 mb-6 border-2 ${getHealthBg(analysis.metrics.overallHealthScore)}`}>
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Overall Business Health</h2>
            <div className={`text-6xl font-bold ${getHealthColor(analysis.metrics.overallHealthScore)} mb-2`}>
              {analysis.metrics.overallHealthScore.toFixed(0)}%
            </div>
            <p className="text-gray-600">
              {analysis.metrics.overallHealthScore >= 70 ? '✅ Excellent! Your business is thriving' :
               analysis.metrics.overallHealthScore >= 50 ? '⚠️ Good, but there\'s room for improvement' :
               '❌ Needs immediate attention'}
            </p>
          </div>
        </div>

        {/* Health Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`rounded-xl shadow-md p-5 border-2 ${getHealthBg(analysis.metrics.financialHealth)}`}>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className={`text-3xl font-bold ${getHealthColor(analysis.metrics.financialHealth)}`}>
                {analysis.metrics.financialHealth.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">Financial Health</div>
            </div>
          </div>
          <div className={`rounded-xl shadow-md p-5 border-2 ${getHealthBg(analysis.metrics.operationalHealth)}`}>
            <div className="text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <div className={`text-3xl font-bold ${getHealthColor(analysis.metrics.operationalHealth)}`}>
                {analysis.metrics.operationalHealth.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">Operational Health</div>
            </div>
          </div>
          <div className={`rounded-xl shadow-md p-5 border-2 ${getHealthBg(analysis.metrics.marketHealth)}`}>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className={`text-3xl font-bold ${getHealthColor(analysis.metrics.marketHealth)}`}>
                {analysis.metrics.marketHealth.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">Market Position</div>
            </div>
          </div>
        </div>

        {/* Key Financial Metrics */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span> Key Financial Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-xs text-gray-600 mb-1">Net Profit Margin</p>
              <p className="text-2xl font-bold text-blue-700">{analysis.metrics.netProfitMargin.toFixed(1)}%</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-xs text-gray-600 mb-1">Gross Margin</p>
              <p className="text-2xl font-bold text-green-700">{analysis.metrics.grossProfitMargin.toFixed(1)}%</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-xs text-gray-600 mb-1">Debt-to-Equity</p>
              <p className="text-2xl font-bold text-purple-700">{analysis.metrics.debtToEquityRatio.toFixed(2)}</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">ROI</p>
              <p className="text-2xl font-bold text-orange-700">{analysis.metrics.returnOnInvestment.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        {/* Operational Metrics */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Operational Efficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-xs text-gray-600 mb-1">Revenue per Employee</p>
              <p className="text-2xl font-bold text-blue-700">₹{Math.round(analysis.metrics.revenuePerEmployee).toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-xs text-gray-600 mb-1">Revenue per Sq Ft</p>
              <p className="text-2xl font-bold text-green-700">₹{Math.round(analysis.metrics.revenuePerSqFt).toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-xs text-gray-600 mb-1">Daily Revenue</p>
              <p className="text-2xl font-bold text-purple-700">₹{Math.round(analysis.metrics.dailyRevenue).toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="text-xs text-gray-600 mb-1">Capacity Utilization</p>
              <p className="text-2xl font-bold text-orange-700">{analysis.metrics.capacityUtilization.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Recommendations for Improvement
          </h3>
          <div className="space-y-4">
            {analysis.recommendations.map((rec, index) => (
              <div key={index} className={`rounded-xl p-5 border-2 ${getPriorityColor(rec.priority)}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🔵'}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{rec.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">Category: {rec.category}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    rec.priority === 'high' ? 'bg-red-200 text-red-800' :
                    rec.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {rec.priority.toUpperCase()} PRIORITY
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{rec.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">💰 Impact</p>
                    <p className="font-semibold text-gray-800">{rec.impact}</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">⏱️ Time Required</p>
                    <p className="font-semibold text-gray-800">{rec.implementationTime}</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">📈 Expected Benefit</p>
                    <p className="font-semibold text-gray-800">{rec.estimatedBenefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Location Map */}
        {analysis.data.village && analysis.data.district && analysis.data.state && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🗺️</span> Business Location & Nearby Banks
            </h3>
            <MapComponent
              height="400px"
              zoom={13}
              showBanks={true}
              showMarkets={true}
              userLocation={{
                lat: getCityData(analysis.data.district)?.coordinates.lat || 11.0168,
                lng: getCityData(analysis.data.district)?.coordinates.lng || 76.9558,
                address: `${analysis.data.village}, ${analysis.data.district}, ${analysis.data.state}`
              }}
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              Your business location and nearby banks/markets
            </p>
          </div>
        )}

        {/* Summary */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Analysis Complete!</h3>
          <p className="text-green-100 mb-4">
            Your business health score is {analysis.metrics.overallHealthScore.toFixed(0)}%. 
            {analysis.recommendations.filter(r => r.priority === 'high').length} high-priority improvements identified.
          </p>
          <button
            onClick={() => setScreen('home')}
            className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-md"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

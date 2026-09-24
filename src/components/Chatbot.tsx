import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BUSINESS_STATISTICS, MARKET_PRICES, SCHEME_DETAILS } from '../data/realData';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface Intent {
  name: string;
  keywords: string[];
  response: (context?: any) => string;
}

export default function Chatbot() {
  const { userData } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Namaste! 🙏 I am GramSahay AI Assistant. I can help you with:\n\n• Loan eligibility and schemes\n• EMI calculations\n• Business advice\n• Market information\n• Required documents\n\nHow can I help you today?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  // Define intents with NLP-like keyword matching
  const intents: Intent[] = [
    {
      name: 'loan_eligibility',
      keywords: ['loan', 'eligible', 'scheme', 'qualification', 'apply for loan', 'get loan'],
      response: () => {
        const micro = SCHEME_DETAILS.microFinance;
        const term = SCHEME_DETAILS.termLoan;
        
        return `Based on current government schemes, you may be eligible for:\n\n📋 **${micro.name}** (if project ≤ ₹${(micro.maxProjectCost / 100000).toFixed(2)} lakh)\n• Interest: ${micro.interestRate}% per year\n• Tenure: ${micro.tenureYears} years\n• Moratorium: ${micro.moratoriumMonths} months\n• Margin Required: ${micro.marginRequired}%\n\n📋 **${term.name}** (if project > ₹${(micro.maxProjectCost / 100000).toFixed(2)} lakh)\n• Interest: ${term.interestRate}% per year\n• Tenure: ${term.tenureYears} years\n• Moratorium: ${term.moratoriumMonths} months\n• Margin Required: ${term.marginRequired}%\n\n💡 **Source**: ${micro.ministry}\n\nWould you like to know about required documents?`;
      },
    },
    {
      name: 'emi_calculation',
      keywords: ['emi', 'installment', 'payment', 'monthly payment', 'quarterly payment', 'how much to pay'],
      response: () => {
        const exampleLoan = 500000;
        const rate = 8.0;
        const years = 7;
        const quarterlyRate = rate / 100 / 4;
        const totalQuarters = years * 4;
        const emi = (exampleLoan * quarterlyRate * Math.pow(1 + quarterlyRate, totalQuarters)) / 
                    (Math.pow(1 + quarterlyRate, totalQuarters) - 1);
        const totalPayment = emi * totalQuarters;
        const totalInterest = totalPayment - exampleLoan;
        
        return `💰 **EMI Calculation Example**\n\nFor a ₹${(exampleLoan / 100000).toFixed(1)} lakh loan at ${rate}% for ${years} years:\n• Quarterly EMI: ₹${Math.round(emi).toLocaleString('en-IN')}\n• Total Interest: ₹${Math.round(totalInterest).toLocaleString('en-IN')}\n• Total Repayment: ₹${Math.round(totalPayment).toLocaleString('en-IN')}\n\n📅 First 6 months: No EMI (moratorium period)\n\n💡 **Formula Used**:\nEMI = P × r × (1+r)^n / ((1+r)^n - 1)\nWhere P = Principal, r = quarterly rate, n = total quarters\n\nWould you like me to calculate for your specific amount?`;
      },
    },
    {
      name: 'documents',
      keywords: ['document', 'paperwork', 'required', 'need', 'papers', 'what documents'],
      response: () => {
        const docs = SCHEME_DETAILS.microFinance.documentsRequired;
        
        return `📄 **Required Documents**\n\n${docs.map((doc) => `✅ ${doc}`).join('\n')}\n\n💡 **Important Tips:**\n• Keep original + 2 photocopies of each\n• All documents should be self-attested\n• Caste certificate must be from competent authority\n• Bank passbook should be updated\n• Photographs should be recent (last 3 months)\n\n📋 **Document Checklist:**\n□ Aadhaar Card\n□ PAN Card\n□ Caste Certificate\n□ Bank Passbook\n□ Address Proof\n□ Business Plan\n□ Quotations\n\nNeed help with application process?`;
      },
    },
    {
      name: 'business_advice',
      keywords: ['business', 'start', 'advice', 'tips', 'success', 'how to start', 'guidance'],
      response: () => {
        const stats = BUSINESS_STATISTICS;
        const avgSurvival = Object.values(stats).reduce((sum, b) => sum + b.survivalRate3Years, 0) / Object.keys(stats).length;
        
        return `💡 **Business Success Tips**\n\n✅ **Start Small**: Begin with minimal investment\n✅ **Market Research**: Understand local demand\n✅ **Quality Focus**: Maintain consistent quality\n✅ **Customer Service**: Build relationships\n✅ **Financial Planning**: Keep 3-6 months working capital\n\n📊 **Real Statistics** (Source: MSME Ministry):\n• Average 3-year survival rate: ${avgSurvival.toFixed(0)}%\n• Best performing: Pharmacy (88%), Agriculture (85%)\n• Average monthly revenue: ₹35,000-60,000\n• Average profit margin: 20-40%\n\n🎯 **Key Success Factors:**\n1. Location selection\n2. Understanding customer needs\n3. Competitive pricing\n4. Quality products/services\n5. Good customer relationships\n\nWould you like specific advice for your business type?`;
      },
    },
    {
      name: 'market_info',
      keywords: ['market', 'price', 'demand', 'competition', 'customers', 'sell', 'pricing'],
      response: () => {
        const prices = MARKET_PRICES;
        
        return `📊 **Market Insights**\n\n🔍 **Research Methods:**\n• Visit local markets/haats\n• Talk to existing business owners\n• Check competitor prices\n• Understand seasonal demand\n\n💰 **Sample Market Prices** (Source: Agmarknet):\n\n**Dairy Products:**\n• Milk: ₹${prices.dairy.milk.min}-${prices.dairy.milk.max}/${prices.dairy.milk.unit}\n• Paneer: ₹${prices.dairy.paneer.min}-${prices.dairy.paneer.max}/${prices.dairy.paneer.unit}\n\n**Grocery Items:**\n• Rice: ₹${prices.grocery.rice.min}-${prices.grocery.rice.max}/${prices.grocery.rice.unit}\n• Oil: ₹${prices.grocery.oil.min}-${prices.grocery.oil.max}/${prices.grocery.oil.unit}\n\n💡 **Pricing Strategy:**\n• Research local competition\n• Consider your costs + 20-30% margin\n• Adjust for quality and service\n• Offer competitive rates initially\n\n📈 **Demand Analysis:**\n• Daily essentials: High demand\n• Seasonal items: Variable demand\n• Services: Steady demand\n\nNeed help with specific market research?`;
      },
    },
    {
      name: 'application_process',
      keywords: ['apply', 'process', 'how to', 'procedure', 'steps', 'where to go'],
      response: () => {
        const process = SCHEME_DETAILS.microFinance.applicationProcess;
        
        return `📝 **Application Process**\n\n${process.map((step, i) => `**Step ${i + 1}:** ${step}`).join('\n\n')}\n\n⏱️ **Timeline**: 15-30 days total\n\n📍 **Where to Apply:**\n• State Channelizing Agency (SCA) offices\n• District Industries Centers\n• Nationalized banks\n• Cooperative banks\n\n📞 **Helpline**: ${SCHEME_DETAILS.microFinance.helpline}\n🌐 **Website**: ${SCHEME_DETAILS.microFinance.officialWebsite}\n\n💡 **Tips:**\n• Visit during morning hours (less crowd)\n• Carry all documents in a folder\n• Keep photocopies ready\n• Ask for application receipt\n\nNeed more details?`;
      },
    },
    {
      name: 'greeting',
      keywords: ['hello', 'hi', 'namaste', 'hey', 'good morning', 'good evening'],
      response: () => `Namaste! 🙏 How can I help you today?\n\nI can assist with:\n• Loan eligibility & schemes\n• EMI calculations\n• Required documents\n• Business advice\n• Market information\n• Application process\n\nWhat would you like to know?`,
    },
    {
      name: 'thanks',
      keywords: ['thank', 'thanks', 'dhanyavad', 'appreciate'],
      response: () => `You're welcome! 😊\n\nBest of luck with your business venture!\n\nRemember:\n• Start small, dream big\n• Keep learning\n• Never give up\n\nFeel free to ask anytime! 🙏`,
    },
    {
      name: 'eligibility_criteria',
      keywords: ['eligibility', 'criteria', 'who can apply', 'qualification', 'requirements'],
      response: () => {
        const criteria = SCHEME_DETAILS.microFinance.eligibilityCriteria;
        
        return `✅ **Eligibility Criteria**\n\n${criteria.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n\n🎯 **Who Can Apply:**\n• SC/ST/OBC/Minority community members\n• Age 18-65 years\n• Annual income below specified limits\n• No prior loan defaults\n• Willing to undergo training\n\n💡 **Special Provisions:**\n• Women entrepreneurs: Priority consideration\n• First-time entrepreneurs: Additional support\n• Rural areas: Higher approval rates\n\nNeed help understanding if you qualify?`;
      },
    },
    {
      name: 'interest_rates',
      keywords: ['interest', 'rate', 'percentage', 'how much interest', 'roi'],
      response: () => {
        return `💰 **Interest Rates** (Source: RBI & Ministry)\n\n📋 **Government Schemes:**\n• Micro Finance Scheme: 6.5% per year\n• Term Loan Scheme: 8.0% per year\n• MUDRA Shishu: 9.0% per year\n• MUDRA Kishore: 10.0% per year\n• MUDRA Tarun: 11.0% per year\n\n📊 **Comparison with Market:**\n• Bank loans: 9-12% per year\n• NBFC loans: 12-18% per year\n• Microfinance: 18-24% per year\n\n💡 **Government schemes offer lowest rates!**\n\n📈 **Interest Calculation:**\n• Calculated on reducing balance\n• Charged quarterly\n• No prepayment penalty\n\nNeed EMI calculation?`;
      },
    },
  ];

  // NLP-like intent matching with scoring
  const matchIntent = (input: string): Intent | null => {
    const lowerInput = input.toLowerCase();
    let bestMatch: Intent | null = null;
    let highestScore = 0;

    for (const intent of intents) {
      let score = 0;
      for (const keyword of intent.keywords) {
        if (lowerInput.includes(keyword)) {
          score += keyword.length; // Longer keyword matches score higher
          if (lowerInput === keyword) {
            score += 10; // Exact match bonus
          }
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = intent;
      }
    }

    return highestScore > 0 ? bestMatch : null;
  };

  const generateResponse = (userInput: string): string => {
    const intent = matchIntent(userInput);
    
    if (intent) {
      return intent.response(userData);
    }

    // Default response with suggestions
    return `I'm here to help you with:\n\n💰 **Loans & Schemes**\n• Eligibility criteria\n• Interest rates\n• Application process\n\n📊 **Business Planning**\n• EMI calculations\n• Market research\n• Success tips\n\n📄 **Documentation**\n• Required papers\n• Application forms\n• Verification process\n\n💡 **Try asking:**\n• "What documents do I need?"\n• "How to calculate EMI?"\n• "Tell me about market prices"\n• "What is the application process?"\n\nPlease ask me anything specific! 🙏`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = generateResponse(currentInput);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all z-50 animate-bounce"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold">GramSahay Assistant</h3>
                <p className="text-xs text-green-100">NLP-powered • Real data</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 text-2xl"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {msg.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-green-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

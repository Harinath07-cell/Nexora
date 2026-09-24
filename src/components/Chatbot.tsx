import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const { userData } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Namaste! 🙏 I'm your GramSahay assistant. I can help you with loan eligibility, EMI calculations, business advice, and more. What would you like to know?`,
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('loan') || lowerInput.includes('eligible')) {
        botResponse = `Based on your margin of ₹${userData.margin.toLocaleString('en-IN')}, you qualify for ${userData.margin / 0.1 <= 140000 ? 'Micro Finance Scheme' : 'Term Loan Scheme'}. Would you like to know more about EMI or documents?`;
      } else if (lowerInput.includes('emi') || lowerInput.includes('installment')) {
        const margin = userData.margin || 100000;
        const projectCost = margin / 0.1;
        const loanAmount = projectCost * 0.9;
        const isMicro = projectCost <= 140000;
        const rate = isMicro ? 6.5 : 8.0;
        const years = isMicro ? 3 : 7;
        const quarterlyRate = rate / 100 / 4;
        const totalQuarters = years * 4;
        const moratoriumQuarters = Math.ceil((isMicro ? 3 : 6) / 3);
        const repaymentQuarters = totalQuarters - moratoriumQuarters;
        const emi = loanAmount * quarterlyRate * Math.pow(1 + quarterlyRate, repaymentQuarters) / (Math.pow(1 + quarterlyRate, repaymentQuarters) - 1);
        
        botResponse = `Your quarterly EMI would be approximately ₹${Math.round(emi).toLocaleString('en-IN')}. This is for a ${years}-year loan at ${rate}% interest.`;
      } else if (lowerInput.includes('document') || lowerInput.includes('paperwork')) {
        botResponse = `You'll need: Aadhaar Card, PAN Card, Caste Certificate, Bank Passbook, Address Proof, and Business Plan. Keep original + 2 photocopies of each.`;
      } else if (lowerInput.includes('business') || lowerInput.includes('tips')) {
        botResponse = `Great choice! Focus on quality, build customer relationships, keep proper accounts, and reinvest profits for growth. Would you like market price information?`;
      } else {
        botResponse = `I can help you with loan eligibility, EMI calculations, required documents, business tips, and market information. What would you like to know?`;
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all z-50"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
      <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
            🤖
          </div>
          <div>
            <h3 className="font-bold">GramSahay Assistant</h3>
            <p className="text-xs text-green-100">AI-powered help</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white hover:text-green-200 text-2xl">
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-green-600 text-white'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
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
            className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

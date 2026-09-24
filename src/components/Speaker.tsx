import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface SpeakerProps {
  text: string;
  className?: string;
}

export default function Speaker({ text, className = '' }: SpeakerProps) {
  const { userData } = useApp();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set language based on user preference
        const langMap: Record<string, string> = {
          en: 'en-IN',
          hi: 'hi-IN',
          ta: 'ta-IN',
          te: 'te-IN',
          kn: 'kn-IN',
          ml: 'ml-IN',
          mr: 'mr-IN',
          bn: 'bn-IN',
          or: 'or-IN',
        };
        
        utterance.lang = langMap[userData.language] || 'en-IN';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors ${className}`}
      title={isSpeaking ? 'Stop speaking' : 'Listen'}
    >
      <span className="text-xl">{isSpeaking ? '⏸️' : '🔊'}</span>
      <span className="text-sm font-medium">{isSpeaking ? 'Stop' : 'Listen'}</span>
    </button>
  );
}

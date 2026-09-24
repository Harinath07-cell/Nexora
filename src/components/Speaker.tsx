import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface SpeakerProps {
  text: string;
  className?: string;
}

export default function Speaker({ text, className = '' }: SpeakerProps) {
  const { userData } = useApp();
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Clean text for better speech synthesis
  const cleanTextForSpeech = (text: string): string => {
    return text
      .replace(/[📋💰📅📄✅💡📊🎯📍🔍📝⏱️📞🌐□]/g, '') // Remove emojis
      .replace(/\*\*/g, '') // Remove markdown bold
      .replace(/\n+/g, '. ') // Replace newlines with periods
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim();
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const cleanedText = cleanTextForSpeech(text);
        const utterance = new SpeechSynthesisUtterance(cleanedText);
        
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
        
        // Adjust speech parameters for clarity
        utterance.rate = 0.85; // Slightly slower for better understanding
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        // Try to find a voice that matches the language
        const voices = window.speechSynthesis.getVoices();
        const targetLang = utterance.lang;
        const matchingVoice = voices.find(voice => 
          voice.lang === targetLang || voice.lang.startsWith(targetLang.split('-')[0])
        );
        
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors ${className}`}
      title={isSpeaking ? 'Stop speaking' : 'Listen'}
      aria-label={isSpeaking ? 'Stop speaking' : 'Listen to content'}
    >
      <span className="text-xl">{isSpeaking ? '⏸️' : '🔊'}</span>
      <span className="text-sm font-medium">{isSpeaking ? 'Stop' : 'Listen'}</span>
      {isSpeaking && (
        <span className="flex gap-0.5">
          <span className="w-1 h-3 bg-white rounded-full animate-pulse"></span>
          <span className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </span>
      )}
    </button>
  );
}

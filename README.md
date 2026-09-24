# GramSahay - AI Business Advisory for Rural Entrepreneurs

**Problem Statement ID:** 26091  
**Ministry:** Ministry of Social Justice and Empowerment  
**Theme:** Agriculture, FoodTech & Rural Development

## 🎯 Overview

GramSahay is a multilingual web application that helps rural micro-entrepreneurs in India start their own businesses by providing:
- Financial planning and loan eligibility calculation
- Business feasibility reports
- AI-powered chatbot assistance
- Multilingual audio support (9 Indian languages)
- Address-based location tracking

## ✨ Key Features

### 1. **Complete Address Collection**
The first page now includes comprehensive address fields:
- Full address (text area)
- State (dropdown with 17 Indian states)
- District (text input)
- Village/Town (text input)

### 2. **Multilingual Support**
- **9 Indian Languages**: English, Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Odia
- Global language selector always visible in top-right corner
- Instant language switching without page reload
- Audio explanations in selected language

### 3. **Financial Planning**
- Automatic calculation of project cost (Margin ÷ 10%)
- Loan amount calculation (90% of project cost)
- Scheme auto-selection:
  - **Micro Finance Scheme** (≤₹1.40 Lakh): 6.5% interest, 3 years, 3-month moratorium
  - **Term Loan Scheme** (>₹1.40 Lakh): 8% interest, 7 years, 6-month moratorium
- Quarterly EMI calculation with moratorium period
- Complete repayment schedule

### 4. **Business Feasibility Report**
All 6 modules as per problem statement:
1. **Market Reach** - Population, households, target customers
2. **Opportunity Analysis** - Market gaps and opportunities
3. **SWOT Analysis** - Strengths, Weaknesses, Opportunities, Threats
4. **Threat Identification** - Local risks with severity levels
5. **Competitor Mapping** - Nearby businesses analysis
6. **Product Market Value** - Pricing strategies and tips

### 5. **AI Chatbot**
- Intent-based natural language understanding
- Contextual responses based on user data
- Handles queries about loans, EMI, documents, business tips, market prices
- Quick reply buttons for easy interaction

### 6. **Audio Support**
- Text-to-speech using Web Speech API
- Support for all 9 Indian languages
- Audio explanations on Financial Plan and Report pages
- No API keys required - works offline in browser

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "GramSahay - AI Business Advisory with address tracking"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gramsahay.git
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Framework Preset: Vite
- Click "Deploy"

Your app will be live in ~2 minutes!

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Web Speech API** - Text-to-speech (built-in browser API)
- **No backend required** - 100% client-side

## 📱 User Flow

1. **Login Page** - Enter:
   - Name
   - **Complete Address** (new!)
   - State, District, Village/Town
   - Available margin money (₹)
   - Community category
   - Business type
   - Preferred language

2. **Financial Plan** - View:
   - Total cost, loan amount, margin, EMI
   - Partner bank & eligibility
   - Scheme details
   - Repayment schedule
   - Listen to summary (audio)

3. **Business Report** - View:
   - All 6 feasibility modules
   - Download report as text file
   - Listen to summary (audio)

## 🌐 Language Support

The application supports 9 Indian languages:
- 🇬🇧 English
- 🇮🇳 हिन्दी (Hindi)
- 🇮🇳 தமிழ் (Tamil)
- 🇮🇳 తెలుగు (Telugu)
- 🇮🇳 ಕನ್ನಡ (Kannada)
- 🇮🇳 മലയാളം (Malayalam)
- 🇮🇳 मराठी (Marathi)
- 🇮🇳 বাংলা (Bengali)
- 🇮🇳 ଓଡ଼ିଆ (Odia)

## 💬 Chatbot Usage

Click the green chat button (bottom-right) to:
- Ask about loan eligibility
- Get EMI calculations
- Know required documents
- Get business advice
- Check market prices
- Learn marketing strategies

## 🔊 Audio Features

- Click "🔊 Listen" buttons to hear content
- Audio plays in your selected language
- Works offline (browser built-in)
- Clear, slow speech for better understanding

## 📊 Data Sources

All calculations based on actual Indian Government scheme guidelines:
- **Micro Finance Scheme**: 6.5% interest, 3 years, 3-month moratorium
- **Term Loan Scheme**: 8% interest, 7 years, 6-month moratorium
- **Margin Requirement**: 10% of total project cost
- **Loan Coverage**: 90% of total project cost

## 🎨 Design Principles

1. **Simple** - One task per screen, minimal clicks
2. **Accessible** - Large buttons, clear labels, audio support
3. **Trustworthy** - Official scheme information
4. **Mobile-first** - Works perfectly on low-end Android phones
5. **Multilingual** - 9 Indian languages with instant switching

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is developed for Smart India Hackathon 2026.  
Problem Statement: SIH26091  
Ministry: Ministry of Social Justice and Empowerment

---

**Built with ❤️ for Rural India**

*GramSahay - Your Village Business Guide*

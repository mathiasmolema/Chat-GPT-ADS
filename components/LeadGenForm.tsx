import React, { useState } from 'react';
import { FinalResult, FormData } from '../types';

interface LeadGenFormProps {
  result: FinalResult;
}

const LeadGenForm: React.FC<LeadGenFormProps> = ({ result }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    challenge: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', { score: result.overallScore, ...formData });
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-seeders-dark to-seeders-teal/20 p-10 rounded-[40px] text-center border border-seeders-teal/30">
        <div className="w-20 h-20 bg-seeders-teal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-seeders-teal/30">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-white mb-4">Request Received!</h3>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Thank you, {formData.name}. We'll analyze your score of {Math.round(result.overallScore)} and contact you within 24 hours to discuss your strategy.
        </p>
      </div>
    );
  }

  // Configurations based on score
  const isNotReady = result.overallScore <= 40;
  const isFair = result.overallScore > 40 && result.overallScore <= 65;
  const isGood = result.overallScore > 65 && result.overallScore <= 85;
  const isExcellent = result.overallScore > 85;

  let bgClass = "bg-seeders-box";
  let borderClass = "border-white/10";
  let headline = "Ready to discuss your strategy?";
  let copy = "Our experts can help you interpret these results.";
  let btnText = "Get in Touch";

  if (isNotReady) {
    bgClass = "bg-gradient-to-br from-seeders-dark via-[#000B5A] to-seeders-orange/20";
    borderClass = "border-seeders-orange/50";
    headline = "Need Help Getting Ready?";
    copy = "Your score shows you have significant work ahead. Don't worry - that's what experts are for! Seeders Agency specializes in preparing businesses for ChatGPT Ads.";
    btnText = "Schedule Free Strategy Session";
  } else if (isFair) {
    bgClass = "bg-gradient-to-br from-seeders-dark to-seeders-yellow/10";
    borderClass = "border-seeders-yellow/50";
    headline = "Want to Fast-Track Your Progress?";
    copy = "You're on the right track, but there's still opportunity for improvement. Seeders Agency can help you take the final steps.";
    btnText = "Get a Second Opinion";
  } else if (isGood) {
    bgClass = "bg-gradient-to-br from-seeders-dark to-seeders-cyan/10";
    borderClass = "border-seeders-cyan/50";
    headline = "Ready for the Next Step?";
    copy = "You're almost ready! Want to ensure you're optimally prepared? Let Seeders Agency review your strategy.";
    btnText = "Review My Strategy";
  } else if (isExcellent) {
    bgClass = "bg-gradient-to-br from-seeders-dark to-seeders-teal/10";
    borderClass = "border-seeders-teal/50";
    headline = "Excellent Work! Ready to Launch?";
    copy = "You're exceptionally well-prepared. Want to be an early adopter? Seeders Agency can help with implementation.";
    btnText = "Launch with Seeders";
  }

  return (
    <div className={`p-8 md:p-12 rounded-[40px] border ${borderClass} ${bgClass} shadow-2xl relative overflow-hidden`}>
      <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-4 border border-white/20 backdrop-blur-md">
             Seeders Agency
          </span>
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4 leading-tight">
            {headline}
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {copy}
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-seeders-teal rounded-full"></div> Expert Review</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-seeders-teal rounded-full"></div> Actionable Roadmap</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-seeders-teal rounded-full"></div> Confidential Strategy</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-6 rounded-[30px] border border-white/10 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2">Name *</label>
              <input 
                required 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-seeders-teal focus:ring-1 focus:ring-seeders-teal transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2">Company *</label>
              <input 
                required 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-seeders-teal focus:ring-1 focus:ring-seeders-teal transition-all"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2">Email *</label>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-seeders-teal focus:ring-1 focus:ring-seeders-teal transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-seeders-teal focus:ring-1 focus:ring-seeders-teal transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2">Biggest Challenge</label>
            <textarea 
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              rows={2}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-seeders-teal focus:ring-1 focus:ring-seeders-teal transition-all"
              placeholder="What's holding you back?"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-full font-heading font-bold text-lg transition-all transform active:scale-95 shadow-lg
              ${isNotReady ? 'bg-gradient-to-r from-seeders-orange to-red-500 hover:shadow-orange-500/30' : 
                isExcellent ? 'bg-gradient-to-r from-seeders-teal to-emerald-500 hover:shadow-emerald-500/30' : 
                'bg-gradient-to-r from-seeders-dark to-seeders-cyan hover:shadow-cyan-500/30'}
              text-white flex items-center justify-center gap-2`}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : btnText}
          </button>
          
          <p className="text-center text-xs text-gray-500">
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default LeadGenForm;
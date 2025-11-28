import React, { useRef } from 'react';
import { 
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell 
} from 'recharts';
import { Download, RefreshCcw, Share2, Mail } from 'lucide-react';
import { FinalResult, CategoryScore } from '../types';
import LeadGenForm from './LeadGenForm';

interface ResultsDashboardProps {
  result: FinalResult;
  onReset: () => void;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ result, onReset }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getRecommendation = (cat: CategoryScore) => {
    if (cat.score >= 80) return "Maintain excellence. You are fully prepared in this area.";
    if (cat.score >= 60) return "Good foundation, but refine your approach for better results.";
    if (cat.score >= 40) return "Preparation required. Focus on building core capabilities here.";
    return "Significant gaps identified. Immediate action required before launch.";
  };

  // Prepare chart data
  const chartData = result.categoryScores.map(cat => ({
    subject: cat.name,
    A: cat.score,
    fullMark: 100,
    fill: cat.color
  }));

  const lowestCategories = [...result.categoryScores].sort((a, b) => a.score - b.score).slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12" ref={scrollRef}>
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-seeders-teal text-lg font-heading font-bold uppercase tracking-wider mb-2">Assessment Complete</h2>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
          Your Readiness Score
        </h1>
      </div>

      {/* Hero Score & Gauge */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div className="bg-seeders-box rounded-[50px] p-10 text-center border border-white/10 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-seeders-dark/50 to-transparent pointer-events-none" />
           
           <div className="relative z-10">
             <div 
               className="w-48 h-48 mx-auto rounded-full flex items-center justify-center border-8 mb-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
               style={{ borderColor: result.statusColor }}
             >
               <div className="text-center">
                 <span className="block text-6xl font-heading font-extrabold text-white">{Math.round(result.overallScore)}</span>
                 <span className="text-gray-400 text-sm">out of 100</span>
               </div>
             </div>
             
             <h3 className="text-3xl font-heading font-bold mb-2" style={{ color: result.statusColor }}>
               {result.status}
             </h3>
             <p className="text-gray-300 font-sans px-4">
               {result.status === 'Excellent' && "You are exceptionally well-prepared to lead the market."}
               {result.status === 'Good' && "You're almost there. Minor tweaks will maximize your ROI."}
               {result.status === 'Fair' && "Foundational work is needed to ensure campaign success."}
               {result.status === 'Not Ready' && "Significant preparation is recommended before investing ad spend."}
             </p>
           </div>
        </div>

        <div className="h-[400px] bg-seeders-box rounded-[50px] p-6 border border-white/10 shadow-xl">
          <h3 className="text-center text-white font-heading font-bold mb-4">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid stroke="#444" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#bbb', fontSize: 12 }} />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#00C995"
                strokeWidth={3}
                fill="#00C995"
                fillOpacity={0.4}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2B2B2B', borderColor: '#444', color: '#fff' }}
                itemStyle={{ color: '#00C995' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-heading font-bold text-white mb-6">Performance by Category</h3>
          {result.categoryScores.map((cat) => (
            <div key={cat.id} className="bg-seeders-box rounded-[30px] p-6 border-l-8 border border-white/5 shadow-md hover:shadow-lg transition-shadow" style={{ borderLeftColor: cat.color }}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-heading font-bold text-white">{cat.name}</h4>
                <span className="text-2xl font-bold" style={{ color: cat.color }}>{Math.round(cat.score)}%</span>
              </div>
              <div className="w-full bg-black/30 h-2 rounded-full mb-4">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${cat.score}%`, backgroundColor: cat.color }}
                />
              </div>
              <p className="text-gray-400 text-sm font-sans">{getRecommendation(cat)}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-seeders-box to-seeders-dark rounded-[40px] p-8 border border-white/10 h-full">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-seeders-teal">★</span> Key Opportunities
            </h3>
            <div className="space-y-6">
              {lowestCategories.map((cat, idx) => (
                <div key={idx} className="bg-black/20 rounded-2xl p-4">
                  <span className="text-xs uppercase tracking-widest font-bold block mb-1" style={{ color: cat.color }}>
                    Priority #{idx + 1}
                  </span>
                  <h4 className="text-white font-bold mb-2">{cat.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Improving your score in {cat.name} will have the biggest impact on your readiness.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Roadmap */}
      <div className="mb-20">
        <h3 className="text-3xl font-heading font-bold text-white mb-8 text-center">Your Action Roadmap</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-seeders-graphite rounded-[30px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-black text-6xl group-hover:opacity-20 transition-opacity">1</div>
            <h4 className="text-xl font-heading font-bold text-seeders-dark mb-4">Quick Wins (0-1 Month)</h4>
            <ul className="space-y-3 font-sans text-seeders-graphite/80">
              <li className="flex items-start gap-2">• <span>Audit existing content for conversational gaps.</span></li>
              <li className="flex items-start gap-2">• <span>Set up GA4 event tracking for attribution.</span></li>
              <li className="flex items-start gap-2">• <span>Build a basic FAQ page based on real support tickets.</span></li>
            </ul>
          </div>
          
          <div className="bg-seeders-box border border-white/10 rounded-[30px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-white opacity-5 font-heading font-black text-6xl group-hover:opacity-10 transition-opacity">2</div>
            <h4 className="text-xl font-heading font-bold text-seeders-teal mb-4">Short Term (1-3 Months)</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li className="flex items-start gap-2">• <span>Create segmented landing pages for AI traffic.</span></li>
              <li className="flex items-start gap-2">• <span>Allocate 10% budget for initial testing.</span></li>
              <li className="flex items-start gap-2">• <span>Train team on conversational marketing intent.</span></li>
            </ul>
          </div>

          <div className="bg-seeders-box border border-white/10 rounded-[30px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-white opacity-5 font-heading font-black text-6xl group-hover:opacity-10 transition-opacity">3</div>
            <h4 className="text-xl font-heading font-bold text-seeders-cyan mb-4">Long Term (3-6 Months)</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li className="flex items-start gap-2">• <span>Implement full multi-touch attribution.</span></li>
              <li className="flex items-start gap-2">• <span>Automate CRM flows based on intent data.</span></li>
              <li className="flex items-start gap-2">• <span>Scale successful campaigns to new segments.</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lead Generation Section */}
      <div id="contact-form" className="mb-20">
        <LeadGenForm result={result} />
      </div>

      {/* Footer / Actions */}
      <div className="flex flex-col md:flex-row justify-center gap-4 border-t border-white/10 pt-10">
        <button 
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-heading font-semibold"
        >
          <RefreshCcw size={18} /> Start Over
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-heading font-semibold">
          <Download size={18} /> Download PDF
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-heading font-semibold">
          <Share2 size={18} /> Share Results
        </button>
      </div>
    </div>
  );
};

export default ResultsDashboard;
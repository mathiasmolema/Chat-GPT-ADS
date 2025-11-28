import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, CATEGORIES } from './constants';
import { Answers, FinalResult, CategoryScore } from './types';
import Quiz from './components/Quiz';
import ResultsDashboard from './components/ResultsDashboard';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setScreen('results');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScreen('intro');
  };

  // Calculate results
  const result: FinalResult | null = useMemo(() => {
    if (screen !== 'results') return null;

    const categoryScores: CategoryScore[] = CATEGORIES.map(cat => {
      const catQuestions = QUESTIONS.filter(q => q.categoryId === cat.id);
      if (catQuestions.length === 0) return { id: cat.id, name: cat.name, score: 0, color: cat.color };

      const sum = catQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);
      const avg = sum / catQuestions.length;
      return {
        id: cat.id,
        name: cat.name,
        score: avg,
        color: cat.color
      };
    });

    let weightedSum = 0;
    categoryScores.forEach(catScore => {
        const catDef = CATEGORIES.find(c => c.id === catScore.id);
        if (catDef) {
            weightedSum += catScore.score * catDef.weight;
        }
    });

    let status: FinalResult['status'] = 'Not Ready';
    let statusColor = '#FF8000';

    if (weightedSum > 85) {
      status = 'Excellent';
      statusColor = '#00C995';
    } else if (weightedSum > 65) {
      status = 'Good';
      statusColor = '#00CEFF';
    } else if (weightedSum > 40) {
      status = 'Fair';
      statusColor = '#FFE30B';
    }

    return {
      overallScore: weightedSum,
      categoryScores,
      status,
      statusColor
    };
  }, [answers, screen]);

  return (
    <div className="min-h-screen bg-seeders-graphite text-white font-sans selection:bg-seeders-teal selection:text-white overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-seeders-dark rounded-full blur-[120px] opacity-60"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-seeders-teal rounded-full blur-[150px] opacity-10"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-gradient-to-br from-seeders-dark to-seeders-teal rounded-xl flex items-center justify-center font-heading font-black text-xl shadow-lg border border-white/10">S</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden md:inline">Seeders Agency</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center py-20">
        <AnimatePresence mode="wait">
          
          {screen === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-4xl mx-auto px-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
              >
                <span className="text-seeders-teal font-bold tracking-wider text-sm uppercase">Free Assessment Tool</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-tight">
                Are you ready for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-seeders-cyan to-seeders-teal">ChatGPT Ads?</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                The next revolution in advertising is here. Evaluate your content, strategy, and technical infrastructure in 5 minutes to see if you can lead the pack.
              </p>
              
              <button 
                onClick={handleStart}
                className="bg-gradient-to-r from-seeders-dark to-seeders-teal px-10 py-5 rounded-full text-xl font-heading font-bold shadow-[0_0_40px_rgba(0,201,149,0.4)] hover:shadow-[0_0_60px_rgba(0,201,149,0.6)] hover:scale-105 transition-all duration-300 group"
              >
                Start Assessment <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </button>
              
              <div className="mt-16 flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Trust Indicators / Fake Logos for visual balance */}
                <div className="h-8 w-24 bg-white/20 rounded"></div>
                <div className="h-8 w-24 bg-white/20 rounded"></div>
                <div className="h-8 w-24 bg-white/20 rounded"></div>
              </div>
            </motion.div>
          )}

          {screen === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <Quiz 
                currentQuestionIndex={currentQuestionIndex}
                answers={answers}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrev={handlePrev}
              />
            </motion.div>
          )}

          {screen === 'results' && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <ResultsDashboard result={result} onReset={handleReset} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
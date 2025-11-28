import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Question } from '../types';
import { QUESTIONS } from '../constants';

interface QuizProps {
  currentQuestionIndex: number;
  answers: { [key: number]: number };
  onAnswer: (questionId: number, value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Quiz: React.FC<QuizProps> = ({ currentQuestionIndex, answers, onAnswer, onNext, onPrev }) => {
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-10 relative z-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-seeders-teal text-sm font-bold font-heading mb-2">
          <span>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 w-full bg-seeders-box rounded-full overflow-hidden border border-white/10">
          <motion.div 
            className="h-full bg-gradient-to-r from-seeders-dark to-seeders-teal"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-seeders-box p-8 rounded-[40px] border border-white/5 shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.value;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => {
                        onAnswer(currentQuestion.id, option.value);
                    }}
                    className={`w-full text-left p-5 rounded-[20px] transition-all duration-300 border-2 flex items-center justify-between group
                      ${isSelected 
                        ? 'border-seeders-teal bg-seeders-teal/10 shadow-[0_0_20px_rgba(0,201,149,0.2)]' 
                        : 'border-white/10 hover:border-seeders-teal/50 hover:bg-white/5 bg-transparent'
                      }`}
                  >
                    <span className={`text-lg font-sans ${isSelected ? 'text-white font-bold' : 'text-gray-300 group-hover:text-white'}`}>
                      {option.text}
                    </span>
                    
                    {isSelected && (
                      <CheckCircle2 className="w-6 h-6 text-seeders-teal flex-shrink-0 ml-4" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={onPrev}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold transition-colors
            ${currentQuestionIndex === 0 
              ? 'opacity-0 pointer-events-none' 
              : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
        >
          <ArrowLeft size={20} />
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!isAnswered}
          className={`flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold transition-all shadow-lg
            ${isAnswered
              ? 'bg-gradient-to-r from-seeders-dark to-seeders-teal text-white hover:shadow-[0_0_30px_rgba(0,201,149,0.4)] hover:scale-105'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
        >
          {currentQuestionIndex === QUESTIONS.length - 1 ? 'See Results' : 'Next'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
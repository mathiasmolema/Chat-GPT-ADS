import { CategoryDef, Question } from './types';

export const CATEGORIES: CategoryDef[] = [
  { id: 'content', name: 'Content & Offering', weight: 0.30, color: '#00C995' }, // Teal
  { id: 'knowledge', name: 'AI Knowledge', weight: 0.20, color: '#00CEFF' }, // Cyan
  { id: 'technical', name: 'Technical Infra', weight: 0.20, color: '#FFE30B' }, // Yellow
  { id: 'budget', name: 'Budget', weight: 0.15, color: '#FF8000' }, // Orange
  { id: 'strategy', name: 'Strategy', weight: 0.15, color: '#C00CEB' }, // Purple
];

export const QUESTIONS: Question[] = [
  // A. Content & Offering (8 questions)
  {
    id: 1,
    categoryId: 'content',
    question: "How well are your products/services described on your website?",
    options: [
      { id: '1a', text: "Minimal / unclear descriptions", value: 0 },
      { id: '1b', text: "Basic descriptions", value: 33 },
      { id: '1c', text: "Detailed & structured descriptions", value: 66 },
      { id: '1d', text: "Comprehensive with benefits, use cases & FAQs", value: 100 },
    ]
  },
  {
    id: 2,
    categoryId: 'content',
    question: "Do you have content that answers common customer questions?",
    options: [
      { id: '2a', text: "No FAQ or help content", value: 0 },
      { id: '2b', text: "Basic FAQ section", value: 33 },
      { id: '2c', text: "Extensive FAQ & blog articles", value: 66 },
      { id: '2d', text: "Comprehensive knowledge base with search", value: 100 },
    ]
  },
  {
    id: 3,
    categoryId: 'content',
    question: "Is your content optimized for natural language and conversational queries?",
    options: [
      { id: '3a', text: "No, traditional SEO keywords only", value: 0 },
      { id: '3b', text: "Somewhat conversational", value: 33 },
      { id: '3c', text: "Yes, we write how people talk", value: 66 },
      { id: '3d', text: "Fully optimized for AI & voice search", value: 100 },
    ]
  },
  {
    id: 4,
    categoryId: 'content',
    question: "Do you have clear value propositions for different customer segments?",
    options: [
      { id: '4a', text: "Generic messaging for everyone", value: 0 },
      { id: '4b', text: "Some basic segmentation", value: 33 },
      { id: '4c', text: "Clear messaging per group", value: 66 },
      { id: '4d', text: "Personalized value props with specific use cases", value: 100 },
    ]
  },
  {
    id: 5,
    categoryId: 'content',
    question: "How quickly can you create new landing pages or campaigns?",
    options: [
      { id: '5a', text: "Weeks to months", value: 0 },
      { id: '5b', text: "1-2 weeks", value: 33 },
      { id: '5c', text: "Within days using templates", value: 66 },
      { id: '5d', text: "Same day with modular system", value: 100 },
    ]
  },
  {
    id: 6,
    categoryId: 'content',
    question: "Do you have customer testimonials and social proof ready?",
    options: [
      { id: '6a', text: "No testimonials/reviews", value: 0 },
      { id: '6b', text: "A few testimonials", value: 33 },
      { id: '6c', text: "Good collection of reviews & cases", value: 66 },
      { id: '6d', text: "Extensive social proof everywhere", value: 100 },
    ]
  },
  {
    id: 7,
    categoryId: 'content',
    question: "Are your product comparisons and differentiation points clearly documented?",
    options: [
      { id: '7a', text: "Not documented / unclear", value: 0 },
      { id: '7b', text: "Basic comparison info", value: 33 },
      { id: '7c', text: "Clear differentiation vs competitors", value: 66 },
      { id: '7d', text: "Detailed comparison charts & USPs", value: 100 },
    ]
  },
  {
    id: 8,
    categoryId: 'content',
    question: "Do you have content for every stage of the customer journey?",
    options: [
      { id: '8a', text: "Only product-focused", value: 0 },
      { id: '8b', text: "Some awareness & consideration content", value: 33 },
      { id: '8c', text: "Most funnel stages covered", value: 66 },
      { id: '8d', text: "Complete strategy from awareness to retention", value: 100 },
    ]
  },
  
  // B. AI Knowledge (5 questions)
  {
    id: 9,
    categoryId: 'knowledge',
    question: "How familiar is your team with AI-powered advertising platforms?",
    options: [
      { id: '9a', text: "No experience", value: 0 },
      { id: '9b', text: "Basic awareness, no hands-on", value: 33 },
      { id: '9c', text: "Some experimentation", value: 66 },
      { id: '9d', text: "Active AI tool usage & understanding", value: 100 },
    ]
  },
  {
    id: 10,
    categoryId: 'knowledge',
    question: "Do you understand the difference between keyword-based and intent-based advertising?",
    options: [
      { id: '10a', text: "Not familiar", value: 0 },
      { id: '10b', text: "Heard of it, unclear on execution", value: 33 },
      { id: '10c', text: "Understand well", value: 66 },
      { id: '10d', text: "Already optimizing for intent", value: 100 },
    ]
  },
  {
    id: 11,
    categoryId: 'knowledge',
    question: "Have you experimented with native advertising or sponsored content?",
    options: [
      { id: '11a', text: "No experience", value: 0 },
      { id: '11b', text: "Tried once or twice", value: 33 },
      { id: '11c', text: "Regular native campaigns", value: 66 },
      { id: '11d', text: "Native ads are a core strategy", value: 100 },
    ]
  },
  {
    id: 12,
    categoryId: 'knowledge',
    question: "Does your team understand conversational marketing principles?",
    options: [
      { id: '12a', text: "No knowledge", value: 0 },
      { id: '12b', text: "Basic understanding", value: 33 },
      { id: '12c', text: "Good grasp, starting to implement", value: 66 },
      { id: '12d', text: "Expert level, fully implemented", value: 100 },
    ]
  },
  {
    id: 13,
    categoryId: 'knowledge',
    question: "Are you monitoring AI search trends and developments?",
    options: [
      { id: '13a', text: "Not following", value: 0 },
      { id: '13b', text: "Occasionally reading news", value: 33 },
      { id: '13c', text: "Regularly staying updated", value: 66 },
      { id: '13d', text: "Dedicated person tracking AI trends", value: 100 },
    ]
  },

  // C. Technical (4 questions)
  {
    id: 14,
    categoryId: 'technical',
    question: "Is your website mobile-optimized with fast loading times?",
    options: [
      { id: '14a', text: "Slow & not mobile-friendly", value: 0 },
      { id: '14b', text: "Basic mobile responsiveness", value: 33 },
      { id: '14c', text: "Good mobile experience & decent speed", value: 66 },
      { id: '14d', text: "Excellent Core Web Vitals", value: 100 },
    ]
  },
  {
    id: 15,
    categoryId: 'technical',
    question: "Do you have proper analytics and conversion tracking in place?",
    options: [
      { id: '15a', text: "No tracking/analytics", value: 0 },
      { id: '15b', text: "Basic Google Analytics", value: 33 },
      { id: '15c', text: "GA4 with event tracking & goals", value: 66 },
      { id: '15d', text: "Advanced analytics with attribution", value: 100 },
    ]
  },
  {
    id: 16,
    categoryId: 'technical',
    question: "Can you track and attribute conversions from new channels?",
    options: [
      { id: '16a', text: "No attribution system", value: 0 },
      { id: '16b', text: "Basic last-click", value: 33 },
      { id: '16c', text: "Multi-touch attribution", value: 66 },
      { id: '16d', text: "Advanced attribution with data integration", value: 100 },
    ]
  },
  {
    id: 17,
    categoryId: 'technical',
    question: "Is your CRM/email system ready to handle new lead sources?",
    options: [
      { id: '17a', text: "No CRM/lead management", value: 0 },
      { id: '17b', text: "Basic CRM, manual processes", value: 33 },
      { id: '17c', text: "Good CRM with some automation", value: 66 },
      { id: '17d', text: "Fully automated routing & nurturing", value: 100 },
    ]
  },

  // D. Budget (3 questions)
  {
    id: 18,
    categoryId: 'budget',
    question: "How much monthly budget could you allocate to test ChatGPT Ads?",
    options: [
      { id: '18a', text: "Less than $500", value: 0 },
      { id: '18b', text: "$500 - $2,000", value: 33 },
      { id: '18c', text: "$2,000 - $5,000", value: 66 },
      { id: '18d', text: "More than $5,000", value: 100 },
    ]
  },
  {
    id: 19,
    categoryId: 'budget',
    question: "Do you have dedicated marketing resources for new channel testing?",
    options: [
      { id: '19a', text: "No dedicated resources", value: 0 },
      { id: '19b', text: "Some time from existing team", value: 33 },
      { id: '19c', text: "Dedicated digital marketing specialist", value: 66 },
      { id: '19d', text: "Full team ready for expansion", value: 100 },
    ]
  },
  {
    id: 20,
    categoryId: 'budget',
    question: "What is your approach to marketing experimentation budget?",
    options: [
      { id: '20a', text: "No budget for testing", value: 0 },
      { id: '20b', text: "Very limited experimental budget", value: 33 },
      { id: '20c', text: "10-20% set aside for testing", value: 66 },
      { id: '20d', text: "Substantial innovation budget (20%+)", value: 100 },
    ]
  },

  // E. Strategy (5 questions)
  {
    id: 21,
    categoryId: 'strategy',
    question: "How quickly can your organization adopt new marketing channels?",
    options: [
      { id: '21a', text: "Very slow, months needed", value: 0 },
      { id: '21b', text: "Several weeks for buy-in", value: 33 },
      { id: '21c', text: "Can move in 2-3 weeks", value: 66 },
      { id: '21d', text: "Highly agile, test within days", value: 100 },
    ]
  },
  {
    id: 22,
    categoryId: 'strategy',
    question: "Do you regularly test new advertising platforms?",
    options: [
      { id: '22a', text: "Stick to traditional only", value: 0 },
      { id: '22b', text: "Occasionally try new", value: 33 },
      { id: '22c', text: "Test 1-2 new channels yearly", value: 66 },
      { id: '22d', text: "Constantly experimenting", value: 100 },
    ]
  },
  {
    id: 23,
    categoryId: 'strategy',
    question: "Is your customer journey clearly mapped out?",
    options: [
      { id: '23a', text: "No documented journey", value: 0 },
      { id: '23b', text: "Basic understanding of touchpoints", value: 33 },
      { id: '23c', text: "Well-documented journey map", value: 66 },
      { id: '23d', text: "Data-driven journey with optimization", value: 100 },
    ]
  },
  {
    id: 24,
    categoryId: 'strategy',
    question: "Do you have clear KPIs and success metrics for new channel testing?",
    options: [
      { id: '24a', text: "No defined metrics", value: 0 },
      { id: '24b', text: "Basic metrics (clicks/impressions)", value: 33 },
      { id: '24c', text: "Good KPIs including conversions & ROI", value: 66 },
      { id: '24d', text: "Advanced metrics with LTV & attribution", value: 100 },
    ]
  },
  {
    id: 25,
    categoryId: 'strategy',
    question: "How data-driven is your marketing decision-making?",
    options: [
      { id: '25a', text: "Mostly gut feeling", value: 0 },
      { id: '25b', text: "Some data considered", value: 33 },
      { id: '25c', text: "Data-informed decisions", value: 66 },
      { id: '25d', text: "Fully data-driven with A/B testing", value: 100 },
    ]
  }
];
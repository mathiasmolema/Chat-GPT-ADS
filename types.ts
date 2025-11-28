export type CategoryId = 'content' | 'knowledge' | 'technical' | 'budget' | 'strategy';

export interface Option {
  id: string;
  text: string;
  value: number; // 0, 33, 66, 100
}

export interface Question {
  id: number;
  categoryId: CategoryId;
  question: string;
  options: Option[];
}

export interface CategoryDef {
  id: CategoryId;
  name: string;
  weight: number;
  color: string;
}

export interface Answers {
  [questionId: number]: number; // Maps question ID to score value
}

export interface CategoryScore {
  id: CategoryId;
  name: string;
  score: number;
  color: string;
}

export interface FinalResult {
  overallScore: number;
  categoryScores: CategoryScore[];
  status: 'Not Ready' | 'Fair' | 'Good' | 'Excellent';
  statusColor: string;
}

export interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  challenge: string;
}
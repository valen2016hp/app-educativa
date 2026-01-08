export interface ActivityLogEntry {
  id: string;
  subjectId: string;
  topicId: string;
  levelId: string;
  score: number;
  maxScore: number;
  duration: number;
  timestamp: string;
}

export interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  activityLog: ActivityLogEntry[];
  addActivity: (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

// New Types for Phase 3
export type QuestionType = 'multiple-choice' | 'comparator' | 'numeric';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  correctAnswer: string | number;
  options?: string[]; // Only for multiple-choice
  feedback: string; // Helpful text if they get it wrong
}
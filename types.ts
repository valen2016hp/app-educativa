
export type ActionType = 
  | 'TEST_COMPLETED' 
  | 'PRACTICE_COMPLETED' 
  | 'VIEW_INFOGRAPHIC' 
  | 'VIEW_PRESENTATION' 
  | 'VIEW_VIDEO' 
  | 'VIEW_AUDIO'
  | 'VIEW_FLASHCARDS'
  | 'VIEW_GAME'
  | 'VIEW_MATERIAL';

export interface ActivityLogEntry {
  id: string;
  action: ActionType;
  subjectId: string;
  topicId: string;
  levelId: string; // e.g., 'facil', 'evaluacion-medio', or 'general'
  score?: number;     // Optional: Only for tests
  maxScore?: number;  // Optional: Only for tests
  duration?: number;  // Optional: Time spent in seconds
  timestamp: string;
  details?: string;   // Extra info (e.g., "Viewed Slide 1")
}

export interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  activityLog: ActivityLogEntry[];
  addActivity: (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
  downloadReport: () => void; // New function
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export type QuestionType = 'multiple-choice' | 'comparator' | 'numeric';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  correctAnswer: string | number;
  options?: string[]; // Only for multiple-choice
  feedback: string; // Helpful text if they get it wrong
}

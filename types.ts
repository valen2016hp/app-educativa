
export type ActionType = 
  | 'TEST_COMPLETED' 
  | 'PRACTICE_COMPLETED' 
  | 'VIEW_INFOGRAPHIC' 
  | 'VIEW_PRESENTATION' 
  | 'VIEW_VIDEO' 
  | 'VIEW_AUDIO'
  | 'VIEW_FLASHCARDS'
  | 'VIEW_GAME'
  | 'VIEW_VOCABULARY'
  | 'VIEW_MATERIAL';

export interface ActivityLogEntry {
  id: string;
  action: ActionType;
  subjectId: string;
  topicId: string;
  levelId: string;
  score?: number;
  maxScore?: number;
  duration?: number;
  timestamp: string;
  details?: string;
}

export interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  activityLog: ActivityLogEntry[];
  addActivity: (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
  downloadReport: () => void;
  magicKey: string;
  isSyncing: boolean;
  setMagicKey: (key: string) => void;
  pullHistoryFromCloud: (key: string) => Promise<void>;
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
  options?: string[];
  feedback: string;
}


import { Rocket, Sparkles, Brain, Zap } from 'lucide-react';

export type GameType = 'memory'; // We can add 'sorting' or 'quiz' later

export interface GamePair {
  id: string;
  itemA: string; // Text or content for first card
  itemB: string; // Text or content for matching card
  color?: string; // Optional specific color
}

export interface GameConfig {
  id: string;
  type: GameType;
  title: string;
  description: string;
  pairs: GamePair[];
}

// Registry
const GAMES_REGISTRY: Record<string, GameConfig> = {
  // TOPIC: La Terra
  'coneixement-medi-2t_terra': {
    id: 'game-terra-memory',
    type: 'memory',
    title: 'Memoria Galáctica',
    description: 'Empareja los conceptos del espacio.',
    pairs: [
      { id: 'pair1', itemA: 'Sol', itemB: 'Estrella' },
      { id: 'pair2', itemA: 'Terra', itemB: 'Planeta Blau' },
      { id: 'pair3', itemA: 'Lluna', itemB: 'Satèl·lit' },
      { id: 'pair4', itemA: 'Mart', itemB: 'Planeta Vermell' },
      { id: 'pair5', itemA: 'Júpiter', itemB: 'Gegant Gasós' },
      { id: 'pair6', itemA: 'Saturn', itemB: 'Anells' },
    ]
  },
  
  // Placeholder Human Body
  'natural-science-1t_human-body': {
    id: 'game-body-memory',
    type: 'memory',
    title: 'Body Match',
    description: 'Match organs to their function.',
    pairs: [
      { id: 'pair1', itemA: 'Heart', itemB: 'Pumps Blood' },
      { id: 'pair2', itemA: 'Lungs', itemB: 'Breathing' },
      { id: 'pair3', itemA: 'Brain', itemB: 'Thinking' },
      { id: 'pair4', itemA: 'Stomach', itemB: 'Digestion' },
    ]
  }
};

export const getGameForTopic = (subjectId: string, topicId: string): GameConfig | null => {
  const key = `${subjectId}_${topicId}`;
  return GAMES_REGISTRY[key] || null;
};

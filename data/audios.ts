
export interface AudioItem {
  id: string;
  title: string;
  src: string;
  description?: string;
}

// Registry of audio files mapping "subjectId_topicId" to a list of audio tracks.
const AUDIO_REGISTRY: Record<string, AudioItem[]> = {
  // TOPIC: La Terra (Conteixement del medi 2T)
  'coneixement-medi-2t_terra': [
    { 
      id: 'audio-terra-1', 
      title: 'Lliçó 1: La Terra i els seus moviments', 
      src: '/assets/audios/sociales/2tcap3.m4a',
      description: 'Escolta l\'explicació sobre la rotació i translació.' 
    },
  ],
  
  // Example Placeholder for Human Body
  'natural-science-1t_human-body': [
    { 
      id: 'audio-body-1', 
      title: 'The Skeleton Song', 
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder example
      description: 'Fun song about bones.' 
    }
  ]
};

export const getAudiosForTopic = (subjectId: string, topicId: string): AudioItem[] => {
  const key = `${subjectId}_${topicId}`;
  return AUDIO_REGISTRY[key] || [];
};

// data/infographics.ts

export interface InfographicItem {
  id: string;
  title: string;
  src: string; // URL to the image (e.g., "/assets/infografias/...")
  color?: string; // Fallback color if image fails
}

// Registry of infographic images mapping "subjectId_topicId" to a list of images.
const INFOGRAPHICS_REGISTRY: Record<string, InfographicItem[]> = {
  // TOPIC: La Terra
'coneixement-medi-2t_hidrosfera': [
    { 
      id: 'hidrosfera-0', 
      title: 'General', 
      src: '/assets/infografias/sociales/2t/hidrosfera0.png' 
    },
  ],

  'coneixement-medi-2t_atmosfera': [
    { 
      id: 'atmosfera-0', 
      title: 'General', 
      src: '/assets/infografias/sociales/2t/atmosfera0.png' 
    },
    { 
      id: 'atmosfera-1', 
      title: 'Atmosfera', 
      src: '/assets/infografias/sociales/2t/atmosfera1.png' 
    },
  ],

  'coneixement-medi-2t_terra': [
    { 
      id: 'terra-1', 
      title: 'General', 
      src: '/assets/infografias/sociales/2t/terra0.png' 
    },
    { 
      id: 'terra-2', 
      title: 'Sistema Solar', 
      src: '/assets/infografias/sociales/2t/terra1.png' 
    },
    { 
      id: 'terra-3', 
      title: 'La Terra', 
      src: '/assets/infografias/sociales/2t/terra2.png' 
    },
    { 
      id: 'terra-4', 
      title: 'La Luna', 
      src: '/assets/infografias/sociales/2t/terra3.png' 
    },
  ],
};

export const getInfographicsForTopic = (subjectId: string, topicId: string): InfographicItem[] => {
  const key = `${subjectId}_${topicId}`;
  return INFOGRAPHICS_REGISTRY[key] || [];
};
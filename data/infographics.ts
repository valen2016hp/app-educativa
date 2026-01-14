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
  
  // TOPIC: Human Body
  'natural-science-1t_human-body': [
    { 
      id: 'body-1', 
      title: 'Sistema Digestivo', 
      src: '/assets/infografias/human-body/digestivo.png' 
    },
    { 
      id: 'body-2', 
      title: 'Sistema Respiratorio', 
      src: '/assets/infografias/human-body/respiratorio.png' 
    },
    { 
      id: 'body-3', 
      title: 'Esqueleto', 
      src: '/assets/infografias/human-body/esqueleto.png' 
    },
    { 
      id: 'body-4', 
      title: 'Músculos', 
      src: '/assets/infografias/human-body/musculos.png' 
    },
    { 
      id: 'body-5', 
      title: 'Cerebro', 
      src: '/assets/infografias/human-body/cerebro.png' 
    },
  ]
};

export const getInfographicsForTopic = (subjectId: string, topicId: string): InfographicItem[] => {
  const key = `${subjectId}_${topicId}`;
  return INFOGRAPHICS_REGISTRY[key] || [];
};
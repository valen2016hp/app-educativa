
export interface VideoItem {
  id: string;
  title: string;
  src: string;
  description?: string;
  poster?: string; // Optional thumbnail image
}

// Registry of video files mapping "subjectId_topicId" to a list of videos.
const VIDEO_REGISTRY: Record<string, VideoItem[]> = {
  // TOPIC: La Terra (Conteixement del medi 2T)
  'coneixement-medi-2t_terra': [
    { 
      id: 'video-terra-1', 
      title: 'El Sistema Solar 3D', 
      // Path convention: /assets/videos/:materia/:filename
      src: '/assets/videos/sociales/2tcap3.mp4',
      description: 'Viatge al·lucinant pel nostre sistema.',
      poster: 'https://placehold.co/600x400/1e293b/FFF?text=Sistema+Solar' 
    },
   
  ],
  
  // Example Placeholder
  'natural-science-1t_human-body': [
    { 
      id: 'video-body-1', 
      title: 'How digestion works', 
      src: '/assets/videos/natural-science/digestion.mp4',
      description: 'Follow the food!' 
    }
  ]
};

export const getVideosForTopic = (subjectId: string, topicId: string): VideoItem[] => {
  const key = `${subjectId}_${topicId}`;
  return VIDEO_REGISTRY[key] || [];
};

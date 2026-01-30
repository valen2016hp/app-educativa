// data/presentations.ts

// This file registers the list of images (Diapositivas) for each topic's presentation.

export const PRESENTATIONS_REGISTRY: Record<string, string[]> = {
  // EXAMPLE:
  // 'subjectId_topicId': [
  //   '/assets/presentaciones/topic/Diapositiva1.º',
  //   '/assets/presentaciones/topic/Diapositiva2.JPG',
  // ]

  // TOPIC: La Terra
  // Make sure to put your images in public/assets/presentaciones/sociales/2t/terra/
  'coneixement-medi-2t_terra': [
    '/assets/presentaciones/sociales/2t/terra/Diapositiva1.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva2.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva3.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva4.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva5.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva6.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva7.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva8.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva9.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva10.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva11.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva12.JPG',
    '/assets/presentaciones/sociales/2t/terra/Diapositiva13.JPG',
  ],

  // TOPIC: Human Body
  'coneixement-medi-2t_atmosfera': [
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva1.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva2.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva3.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva4.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva5.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva6.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva7.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva8.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva9.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva10.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva11.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva12.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva13.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva14.jpg',
    '/assets/presentaciones/sociales/2t/atmosfera/Diapositiva15.jpg',
  ]
};

export const getSlidesForTopic = (subjectId: string, topicId: string): string[] => {
  const key = `${subjectId}_${topicId}`;
  return PRESENTATIONS_REGISTRY[key] || [];
};
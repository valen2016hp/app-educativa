
export interface FlashcardItem {
  id: string;
  question: string;
  answer: string;
}

// Registry of flashcards mapping "subjectId_topicId" to a list of cards.
const FLASHCARDS_REGISTRY: Record<string, FlashcardItem[]> = {
  // TOPIC: La Terra (Conteixement del medi 2T)
  'coneixement-medi-2t_terra': [
    { id: 'fc1', question: 'Quina forma té la Terra?', answer: 'Géoide' },
    { id: 'fc2', question: 'Quin és el satèl·lit de la Terra?', answer: 'La Lluna' },
    { id: 'fc3', question: 'Quan triga la rotació?', answer: '24 hores' },
    { id: 'fc4', question: 'Quan triga la translació?', answer: '365 dies' },
    { id: 'fc5', question: 'Quina capa és líquida?', answer: 'Hidrosfera' },
    { id: 'fc6', question: 'Quina capa és aire?', answer: 'Atmosfera' },
    { id: 'fc7', question: 'Quina capa és roca?', answer: 'Geosfera' },
    { id: 'fc8', question: 'En quina galàxia estem?', answer: 'Via Làctia' },
    { id: 'fc9', question: 'Quin moviment fa les estacions?', answer: 'Translació' },
    { id: 'fc10', question: 'Quin moviment fa el dia i nit?', answer: 'Rotació' },
    // Extra cards to test pagination
    { id: 'fc11', question: 'El Sol és un planeta?', answer: 'No, és una estrella' },
    { id: 'fc12', question: 'La Lluna té llum pròpia?', answer: 'No, reflecteix el Sol' },
  ],
  
  // Example Placeholder
  'natural-science-1t_human-body': [
    { id: 'hb1', question: 'How many bones do we have?', answer: '206' },
    { id: 'hb2', question: 'Which organ pumps blood?', answer: 'Heart' },
  ]
};

export const getFlashcardsForTopic = (subjectId: string, topicId: string): FlashcardItem[] => {
  const key = `${subjectId}_${topicId}`;
  return FLASHCARDS_REGISTRY[key] || [];
};

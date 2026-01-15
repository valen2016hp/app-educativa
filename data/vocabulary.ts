
export interface VocabularyItem {
  id: string;
  word: string;
  definition: string;
  example: string;
}

// Registry: "subjectId_topicId" -> List of words
const VOCABULARY_REGISTRY: Record<string, VocabularyItem[]> = {
  // TOPIC: La Terra
  'coneixement-medi-2t_terra': [
    {
      id: 'v1',
      word: 'Atmosfera',
      definition: 'Capa de gasos que envolta la Terra. Ens protegeix del Sol i ens permet respirar.',
      example: 'Els núvols es formen a l\'atmosfera.'
    },
    {
      id: 'v2',
      word: 'Geosfera',
      definition: 'La part rocosa i sòlida del nostre planeta, des de la superfície fins al nucli.',
      example: 'Les muntanyes formen part de la geosfera.'
    },
    {
      id: 'v3',
      word: 'Hidrosfera',
      definition: 'Tota l\'aigua que hi ha a la Terra: oceans, rius, llacs, gel i vapor.',
      example: 'Els peixos viuen a la hidrosfera.'
    },
    {
      id: 'v4',
      word: 'Rotació',
      definition: 'El moviment de la Terra girant sobre si mateixa com una baldufa. Dura 24 hores.',
      example: 'La rotació provoca el dia i la nit.'
    },
    {
      id: 'v5',
      word: 'Translació',
      definition: 'El viatge de la Terra al voltant del Sol. Dura 365 dies (un any).',
      example: 'La translació provoca les estacions de l\'any.'
    },
    {
      id: 'v6',
      word: 'Equador',
      definition: 'Una línia imaginària que divideix la Terra en dues meitats: Hemisferi Nord i Sud.',
      example: 'A l\'Equador fa molta calor tot l\'any.'
    },
    {
      id: 'v7',
      word: 'Satèl·lit',
      definition: 'Un cos celeste que gira al voltant d\'un planeta. La Lluna és el nostre.',
      example: 'La Lluna és l\'únic satèl·lit natural de la Terra.'
    },
    {
      id: 'v8',
      word: 'Òrbita',
      definition: 'El camí corbat que segueix la Terra al voltant del Sol.',
      example: 'La Terra mai surt de la seva òrbita.'
    },
    {
      id: 'v9',
      word: 'Gravetat',
      definition: 'La força invisible que ens manté enganxats al terra perquè no sortim volant.',
      example: 'Si saltes, la gravetat et fa tornar a baixar.'
    },
    {
      id: 'v10',
      word: 'Eix',
      definition: 'Una línia invisible que travessa la Terra de Pol Nord a Pol Sud.',
      example: 'La Terra està una mica inclinada sobre el seu eix.'
    }, {
      id: 'v11',
      word: 'Eix',
      definition: 'Una línia invisible que travessa la Terra de Pol Nord a Pol Sud.',
      example: 'La Terra està una mica inclinada sobre el seu eix.'
    }
  ],
  
  // Placeholder Human Body
  'natural-science-1t_human-body': [
    {
      id: 'b1',
      word: 'Heart',
      definition: 'A muscular organ that pumps blood through the body.',
      example: 'The heart beats faster when you run.'
    },
    {
      id: 'b2',
      word: 'Lungs',
      definition: 'Organs in your chest that help you breathe air.',
      example: 'We fill our lungs with fresh air.'
    }
  ]
};

export const getVocabularyForTopic = (subjectId: string, topicId: string): VocabularyItem[] => {
  const key = `${subjectId}_${topicId}`;
  return VOCABULARY_REGISTRY[key] || [];
};

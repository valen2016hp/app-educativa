import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'eval-1',
    type: 'multiple-choice',
    prompt: "Què és l'atmosfera?",
    options: [
      "Una capa d'aire que envolta la Terra",
      "Una capa de roques sota el mar",
      "El conjunt de tots els oceans",
      "La part sòlida del planeta"
    ],
    correctAnswer: "Una capa d'aire que envolta la Terra",
    feedback: "¡Muy bien, sigue así!"
  },
  {
    id: 'eval-2',
    type: 'numeric',
    prompt: "Fins a quants quilòmetres d'altura arriba la Troposfera? (Escriu només el número)",
    options: [],
    correctAnswer: "12",
    feedback: "¡Genial, vas por buen camino!"
  },
  {
    id: 'eval-3',
    type: 'comparator',
    prompt: "Classifica: On es troba la capa d'Ozó?",
    options: ["Estratosfera", "Exosfera"],
    correctAnswer: "Estratosfera",
    feedback: "¡Excelente concentración!"
  },
  {
    id: 'eval-4',
    type: 'multiple-choice',
    prompt: "A quina capa es produeixen les aurores boreals?",
    options: [
      "Termosfera",
      "Mesosfera",
      "Troposfera",
      "Estratosfera"
    ],
    correctAnswer: "Termosfera",
    feedback: "¡Buen trabajo, continúa!"
  },
  {
    id: 'eval-5',
    type: 'comparator',
    prompt: "Classifica: Gas necessari per a la fotosíntesi.",
    options: ["Diòxid de carboni", "Oxigen"],
    correctAnswer: "Diòxid de carboni",
    feedback: "¡Lo estás haciendo genial!"
  },
  {
    id: 'eval-6',
    type: 'multiple-choice',
    prompt: "Quina funció té l'efecte hivernacle?",
    options: [
      "Retenir la calor perquè la temperatura sigui estable",
      "Crear aurores boreals",
      "Destruir els meteorits",
      "Filtrar els raigs ultraviolats"
    ],
    correctAnswer: "Retenir la calor perquè la temperatura sigui estable",
    feedback: "¡Sigue esforzándote, tú puedes!"
  },
  {
    id: 'eval-7',
    type: 'numeric',
    prompt: "A quants quilòmetres de distància es localitza l'Exosfera? (Escriu el número sense punts)",
    options: [],
    correctAnswer: "10000",
    feedback: "¡Fantástico, no te rindas!"
  },
  {
    id: 'eval-8',
    type: 'multiple-choice',
    prompt: "Què és el vent?",
    options: [
      "L'aire en moviment",
      "La quantitat de vapor d'aigua",
      "El pes de l'aire",
      "L'aigua que cau dels núvols"
    ],
    correctAnswer: "L'aire en moviment",
    feedback: "¡Buen intento, sigue adelante!"
  },
  {
    id: 'eval-9',
    type: 'comparator',
    prompt: "Classifica: Quantitat de calor que hi ha a l'aire.",
    options: ["Temperatura", "Humitat"],
    correctAnswer: "Temperatura",
    feedback: "¡Estupendo, a por la siguiente!"
  },
  {
    id: 'eval-10',
    type: 'multiple-choice',
    prompt: "Com és la pressió atmosfèrica a la muntanya comparada amb la costa?",
    options: [
      "Més petita",
      "Més gran",
      "Igual",
      "Inexistent"
    ],
    correctAnswer: "Més petita",
    feedback: "¡Bien pensado, confía en ti!"
  },
  {
    id: 'eval-11',
    type: 'comparator',
    prompt: "Classifica: Estat de l'atmosfera en un moment determinat.",
    options: ["Temps Atmosfèric", "Clima"],
    correctAnswer: "Temps Atmosfèric",
    feedback: "¡Maravilloso, sigue así!"
  },
  {
    id: 'eval-12',
    type: 'multiple-choice',
    prompt: "Quins són els factors principals que determinen el clima?",
    options: [
      "Latitud, altitud i distància del mar",
      "Vent, pluja i neu",
      "Els núvols i el sol",
      "La contaminació i els meteorits"
    ],
    correctAnswer: "Latitud, altitud i distància del mar",
    feedback: "¡Muy bien, estás progresando!"
  },
  {
    id: 'eval-13',
    type: 'comparator',
    prompt: "Classifica: Zona on els raigs del Sol incideixen de manera directa.",
    options: ["Equador", "Pol Nord"],
    correctAnswer: "Equador",
    feedback: "¡Genial, mantén el ritmo!"
  },
  {
    id: 'eval-14',
    type: 'numeric',
    prompt: "Fins a quants quilòmetres arriba aproximadament l'Estratosfera? (Escriu només el número)",
    options: [],
    correctAnswer: "50",
    feedback: "¡Buen trabajo, ánimo!"
  },
  {
    id: 'eval-15',
    type: 'multiple-choice',
    prompt: "Com afecta la distància del mar a la temperatura?",
    options: [
      "Suavitza les temperatures a la costa",
      "Fa que faci més fred a la costa",
      "No afecta la temperatura",
      "Fa que plogui menys a la costa"
    ],
    correctAnswer: "Suavitza les temperatures a la costa",
    feedback: "¡Excelente, sigue concentrada!"
  },
  {
    id: 'eval-16',
    type: 'comparator',
    prompt: "Classifica: Clima de la zona del mar Cantàbric.",
    options: ["Clima Oceànic", "Clima Mediterrani"],
    correctAnswer: "Clima Oceànic",
    feedback: "¡Lo estás haciendo muy bien!"
  },
  {
    id: 'eval-17',
    type: 'multiple-choice',
    prompt: "Quina característica defineix el Clima Continental (interior)?",
    options: [
      "Temperatures extremes (molt baixes a l'hivern, altes a l'estiu)",
      "Temperatures suaus tot l'any",
      "Pluges molt abundants sempre",
      "Temperatures constants sense canvis"
    ],
    correctAnswer: "Temperatures extremes (molt baixes a l'hivern, altes a l'estiu)",
    feedback: "¡Bravo, sigue así!"
  },
  {
    id: 'eval-18',
    type: 'comparator',
    prompt: "Classifica: Clima de les Illes Canàries.",
    options: ["Clima Subtropical", "Clima de Muntanya"],
    correctAnswer: "Clima Subtropical",
    feedback: "¡Fantástico esfuerzo!"
  },
  {
    id: 'eval-19',
    type: 'multiple-choice',
    prompt: "Com són les precipitacions al Clima Mediterrani?",
    options: [
      "Escasses i irregulars",
      "Abundants tot l'any",
      "Sempre en forma de neu",
      "Inexistents"
    ],
    correctAnswer: "Escasses i irregulars",
    feedback: "¡Casi lo tienes, muy bien!"
  },
  {
    id: 'eval-20',
    type: 'multiple-choice',
    prompt: "On trobem el Clima de Muntanya a Espanya?",
    options: [
      "Als Pirineus i sistemes muntanyosos",
      "A les Illes Balears",
      "A la depressió del Guadalquivir",
      "A tota la costa mediterrània"
    ],
    correctAnswer: "Als Pirineus i sistemes muntanyosos",
    feedback: "¡Perfecto, has terminado!"
  }
];
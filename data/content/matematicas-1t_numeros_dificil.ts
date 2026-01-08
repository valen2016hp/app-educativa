import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'numeric',
    prompt: "Escribe el número: 4 Decenas de Millar y 15 Unidades de Millar.",
    options: ["55000"],
    correctAnswer: "55000",
    feedback: "¡Ojo de exploradora! 40.000 + 15.000 son 55.000. ¡Increíble comienzo!"
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    prompt: "En el número 78.702, ¿cuántas unidades vale el primer 7?",
    options: ["700 unidades", "7.000 unidades", "70.000 unidades"],
    correctAnswer: "70.000 unidades",
    feedback: "¡Casi! El primer 7 está en las Decenas de Millar. ¡Sigue así!"
  },
  {
    id: 'q3',
    type: 'comparator',
    prompt: "Compara estos números: 99.090 ___ 99.900",
    options: ["<", ">"],
    correctAnswer: "<",
    feedback: "¡Muy bien! 900 es mucho más grande que 90. ¡Vas genial!"
  },
  {
    id: 'q4',
    type: 'numeric',
    prompt: "Escribe el valor del número romano C.",
    options: ["100"],
    correctAnswer: "100",
    feedback: "¡Perfecto! La C de Centena vale cien. ¡Eres una experta!"
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "Aproxima 67.800 a la decena de millar más cercana.",
    options: ["60.000", "70.000"],
    correctAnswer: "70.000",
    feedback: "¡Eso es! Como pasa de 65.000, redondeamos hacia arriba."
  },
  {
    id: 'q6',
    type: 'multiple-choice',
    prompt: "Cómo se escribe el ordinal 40.º?",
    options: ["Cuarentavo", "Cuadragésimo", "Cuatrigésimo"],
    correctAnswer: "Cuadragésimo",
    feedback: "¡Casi! Es una palabra difícil: Cua-dra-gé-si-mo. ¡Repítelo con orgullo!"
  },
  {
    id: 'q7',
    type: 'numeric',
    prompt: "Escribe en cifras: noventa y nueve mil noventa y nueve.",
    options: ["99099"],
    correctAnswer: "99099",
    feedback: "¡Ojo! El número es 99.099. ¡No dejes que los nueves te líen!"
  },
  {
    id: 'q8',
    type: 'numeric',
    prompt: "Qué número es el romano XCIX?",
    options: ["99"],
    correctAnswer: "99",
    feedback: "¡Súper! XC es 90 e IX es 9. ¡Sumamos y sale 99!"
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    prompt: "Cuántas centenas completas hay en 2 unidades de millar?",
    options: ["2 centenas", "20 centenas", "200 centenas"],
    correctAnswer: "20 centenas",
    feedback: "¡Bien pensado! En cada millar caben 10 centenas. ¡Dos millares son 20!"
  },
  {
    id: 'q10',
    type: 'comparator',
    prompt: "Compara: 49.999 ___ 5 Decenas de Millar.",
    options: ["<", ">"],
    correctAnswer: "<",
    feedback: "¡Por los pelos! 5 DM son 50.000. ¡Gana por una unidad!"
  },
  {
    id: 'q11',
    type: 'numeric',
    prompt: "Calcula: 8 millares, 25 centenas y 3 unidades.",
    options: ["10503"],
    correctAnswer: "10503",
    feedback: "¡Casi! 8.000 + 2.500 + 3 = 10.503. ¡Un reto de campeona!"
  },
  {
    id: 'q12',
    type: 'multiple-choice',
    prompt: "Cómo se llama el número ordinal 50.º?",
    options: ["Cincuentavo", "Quincuagésimo", "Quintogésimo"],
    correctAnswer: "Quincuagésimo",
    feedback: "¡Increíble! Es el Quincuagésimo. ¡Valentina, eres una profesional!"
  },
  {
    id: 'q13',
    type: 'numeric',
    prompt: "Escribe el valor de LXXXVIII.",
    options: ["88"],
    correctAnswer: "88",
    feedback: "¡Bravo! 50 + 30 + 8. ¡Has descifrado el código romano!"
  },
  {
    id: 'q14',
    type: 'multiple-choice',
    prompt: "Aproxima 9.500 al millar más cercano.",
    options: ["9.000", "10.000"],
    correctAnswer: "10.000",
    feedback: "¡Recuerda! Con el 5 siempre saltamos al número mayor."
  },
  {
    id: 'q15',
    type: 'numeric',
    prompt: "Cuántas decenas hay en una unidad de millar?",
    options: ["100"],
    correctAnswer: "100",
    feedback: "¡Misión cumplida! 100 decenas forman un millar. ¡Eres una genia!"
  }
];

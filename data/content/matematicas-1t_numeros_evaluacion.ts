import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'eval-1',
    type: 'numeric',
    prompt: "Escribe en cifras el número: cinco mil doscientos uno.",
    options: ["5201"],
    correctAnswer: "5201",
    feedback: "¡Muy bien! Sigue así, campeona."
  },
  {
    id: 'eval-2',
    type: 'multiple-choice',
    prompt: "En el número 43.025, ¿qué posición ocupa el 4?",
    options: ["Decenas de millar", "Unidades de millar", "Centenas"],
    correctAnswer: "Decenas de millar",
    feedback: "¡Excelente! Estás muy atenta."
  },
  {
    id: 'eval-3',
    type: 'comparator',
    prompt: "Compara estos números: 12.500 ___ 12.050",
    options: ["<", ">"],
    correctAnswer: ">",
    feedback: "¡Eso es! Tu ojo de exploradora no falla."
  },
  {
    id: 'eval-4',
    type: 'numeric',
    prompt: "Cuántas unidades son 3 decenas de millar?",
    options: ["30000"],
    correctAnswer: "30000",
    feedback: "¡Bravo! Tienes un cerebro matemático brillante."
  },
  {
    id: 'eval-5',
    type: 'multiple-choice',
    prompt: "Cómo se lee el número ordinal 12.º?",
    options: ["Undécimo", "Duodécimo", "Decimosegundo"],
    correctAnswer: "Duodécimo",
    feedback: "¡Genial! Los ordinales te salen fenomenal."
  },
  {
    id: 'eval-6',
    type: 'numeric',
    prompt: "Qué valor tiene el número romano XXIV?",
    options: ["24"],
    correctAnswer: "24",
    feedback: "¡Súper! Los números romanos son pan comido para ti."
  },
  {
    id: 'eval-7',
    type: 'multiple-choice',
    prompt: "Aproxima el número 87 a la decena más cercana.",
    options: ["80", "90"],
    correctAnswer: "90",
    feedback: "¡Bien hecho! Estás concentrada al máximo."
  },
  {
    id: 'eval-8',
    type: 'numeric',
    prompt: "Escribe el número anterior al 10.000.",
    options: ["9999"],
    correctAnswer: "9999",
    feedback: "¡Increíble! Valentina, eres una experta."
  },
  {
    id: 'eval-9',
    type: 'multiple-choice',
    prompt: "Descompón 7.402. ¿Cuántas centenas hay?",
    options: ["0 centenas", "4 centenas", "7 centenas"],
    correctAnswer: "4 centenas",
    feedback: "¡Eso es! El lugar de las centenas es tuyo."
  },
  {
    id: 'eval-10',
    type: 'comparator',
    prompt: "Compara: 1 Decena de Millar ___ 9.999",
    options: ["<", ">"],
    correctAnswer: ">",
    feedback: "¡Exacto! El 10.000 siempre gana al 9.999."
  },
  {
    id: 'eval-11',
    type: 'numeric',
    prompt: "Escribe en romano el número 10.",
    options: ["X"],
    correctAnswer: "X",
    feedback: "¡Perfecto! Un trazo cruzado y listo."
  },
  {
    id: 'eval-12',
    type: 'multiple-choice',
    prompt: "Aproxima 3.200 al millar más cercano.",
    options: ["3.000", "4.000"],
    correctAnswer: "3.000",
    feedback: "¡Buen trabajo! Tienes mucha puntería."
  },
  {
    id: 'eval-13',
    type: 'multiple-choice',
    prompt: "Cómo se llama el número ordinal 30.º?",
    options: ["Trigésimo", "Treintavo", "Tercero"],
    correctAnswer: "Trigésimo",
    feedback: "¡Brillante! Una palabra difícil y la has acertado."
  },
  {
    id: 'eval-14',
    type: 'numeric',
    prompt: "Escribe el número formado por 5 DM y 8 U.",
    options: ["50008"],
    correctAnswer: "50008",
    feedback: "¡Súper Valentina! Los ceros no te engañan."
  },
  {
    id: 'eval-15',
    type: 'numeric',
    prompt: "Qué valor tiene el número romano XLIX?",
    options: ["49"],
    correctAnswer: "49",
    feedback: "¡Impresionante! Ese era un reto muy difícil."
  },
  {
    id: 'eval-16',
    type: 'multiple-choice',
    prompt: "Cuántas unidades son 50 centenas?",
    options: ["500", "5.000", "50.000"],
    correctAnswer: "5.000",
    feedback: "¡Muy bien! Las centenas ya no tienen secretos."
  },
  {
    id: 'eval-17',
    type: 'multiple-choice',
    prompt: "Cómo se escribe 40 en números romanos?",
    options: ["XXXX", "XL", "LX"],
    correctAnswer: "XL",
    feedback: "¡Genial! A 50 le quitas 10 y sale 40."
  },
  {
    id: 'eval-18',
    type: 'comparator',
    prompt: "Compara: 30.200 ___ 30.200",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Claro! Son gemelos, son iguales."
  },
  {
    id: 'eval-19',
    type: 'numeric',
    prompt: "Cuál es el número ordinal que va tras el vigésimo noveno?",
    options: ["Trigésimo"],
    correctAnswer: "Trigésimo",
    feedback: "¡Bravísimo! Has llegado a la cima de los ordinales."
  },
  {
    id: 'eval-20',
    type: 'multiple-choice',
    prompt: "Aproxima 89.000 a la decena de millar más cercana.",
    options: ["80.000", "90.000"],
    correctAnswer: "90.000",
    feedback: "¡Misión cumplida! Eres la reina de las matemáticas."
  }
];

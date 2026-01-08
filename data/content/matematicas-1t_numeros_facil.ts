import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'numeric',
    prompt: "Escribe el número: 4 Centenas, 3 Decenas y 2 Unidades.",
    options: ["432"],
    correctAnswer: "432",
    feedback: "¡Ojo de exploradora! 4C + 3D + 2U forman el 432. ¡Buen inicio!"
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: "Compara estos números: 375 ___ 357.",
    options: ["<", ">"],
    correctAnswer: ">",
    feedback: "¡Casi! 375 es más grande que 357. ¡Sigue así, Valentina!"
  },
  {
    id: 'q3',
    type: 'numeric',
    prompt: "Completa: 1 Unidad de Millar (UM) son 1.000 unidades.",
    options: ["1000"],
    correctAnswer: "1000",
    feedback: "¡Genial! 1 UM siempre vale mil unidades. ¡Eres una experta!"
  },
  {
    id: 'q4',
    type: 'numeric',
    prompt: "¿Cuántas unidades son 1 Decena de Millar (DM)?",
    options: ["10000"],
    correctAnswer: "10000",
    feedback: "¡Bravo! Una DM son diez mil unidades. ¡Lo tienes!"
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "¿Cuántas cifras tiene el número 15.368?",
    options: ["4 cifras", "5 cifras", "6 cifras"],
    correctAnswer: "5 cifras",
    feedback: "¡Excelente! Los números de decena de millar tienen 5 cifras."
  },
  {
    id: 'q6',
    type: 'numeric',
    prompt: "Calcula: 4 Decenas de Millar son... unidades.",
    options: ["40000"],
    correctAnswer: "40000",
    feedback: "¡Increíble! 4 DM son cuarenta mil. ¡Valentina al poder!"
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    prompt: "Descompón 4.087: ¿Cuántas Decenas hay?",
    options: ["0 decenas", "8 decenas", "7 decenas"],
    correctAnswer: "8 decenas",
    feedback: "¡Muy bien! El 8 ocupa el lugar de las decenas. ¡Gran vista!"
  },
  {
    id: 'q8',
    type: 'comparator',
    prompt: "Compara: 34.920 ___ 34.532.",
    options: ["<", ">"],
    correctAnswer: ">",
    feedback: "¡Exacto! 920 es mayor que 532. ¡Misión cumplida!"
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    prompt: "Aproxima 74 a la decena más cercana.",
    options: ["70", "80"],
    correctAnswer: "70",
    feedback: "¡Ojo! Como 4 es menor que 5, nos quedamos en 70. ¡Bien!"
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    prompt: "Aproxima 379 a la centena más cercana.",
    options: ["300", "400"],
    correctAnswer: "400",
    feedback: "¡Casi! 379 está más cerca de 400. ¡Sigue concentrada!"
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "Aproxima 2.578 al millar más cercano.",
    options: ["2.000", "3.000"],
    correctAnswer: "3.000",
    feedback: "¡Recuerda! Si es 5 o más, subimos al siguiente millar."
  },
  {
    id: 'q12',
    type: 'multiple-choice',
    prompt: "¿Cómo se lee el número ordinal 11.º?",
    options: ["Undécimo", "Decimoprimero", "Onceno"],
    correctAnswer: "Undécimo",
    feedback: "¡Ojo de exploradora! 11.º se dice Undécimo. ¡Muy bien!"
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "¿Cuál es el nombre del número 20.º?",
    options: ["Veinteavo", "Vigésimo", "Decimosexto"],
    correctAnswer: "Vigésimo",
    feedback: "¡Eso es! El puesto 20 es el Vigésimo. ¡Increíble!"
  },
  {
    id: 'q14',
    type: 'numeric',
    prompt: "Suma en romano: ¿Cuánto vale VI?",
    options: ["6"],
    correctAnswer: "6",
    feedback: "¡Bingo! V (5) + I (1) es igual a 6. ¡Súper!"
  },
  {
    id: 'q15',
    type: 'numeric',
    prompt: "Resta en romano: ¿Cuánto vale IV?",
    options: ["4"],
    correctAnswer: "4",
    feedback: "¡Perfecto! Al poner la I a la izquierda, restamos 5 - 1."
  }
];

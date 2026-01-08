import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'mult-d-1',
    type: 'numeric',
    prompt: "Calcula: 120 x 4",
    options: ["480"],
    correctAnswer: "480",
    feedback: "¡Casi! 12 x 4 son 48, y luego añades el cero. ¡Tú puedes!"
  },
  {
    id: 'mult-d-2',
    type: 'numeric',
    prompt: "Calcula: 5 x (10 - 2)",
    options: ["40"],
    correctAnswer: "40",
    feedback: "¡Ojo de exploradora! Primero el paréntesis: 5 x 8. ¡Muy bien!"
  },
  {
    id: 'mult-d-3',
    type: 'numeric',
    prompt: "Calcula: 40 x 50",
    options: ["2000"],
    correctAnswer: "2000",
    feedback: "¡Genial! 4 x 5 son 20, y pones los dos ceros... ¡2.000!"
  },
  {
    id: 'mult-d-4',
    type: 'multiple-choice',
    prompt: "¿Qué factores dan como producto 15?",
    options: ["2 y 7", "3 y 5", "4 y 4"],
    correctAnswer: "3 y 5",
    feedback: "¡Eso es! 3 veces 5 es igual a 15. ¡Gran lógica!"
  },
  {
    id: 'mult-d-5',
    type: 'multiple-choice',
    prompt: "Estima: 499 x 2. ¿A qué número se acerca?",
    options: ["800", "900", "1.000"],
    correctAnswer: "1.000",
    feedback: "¡Perfecto! 500 x 2 son 1.000. ¡Eres una maestra estimando!"
  },
  {
    id: 'mult-d-6',
    type: 'numeric',
    prompt: "Calcula: 1.500 x 2",
    options: ["3000"],
    correctAnswer: "3000",
    feedback: "¡Bravo! El doble de 1.500 es 3.000. ¡Valentina al poder!"
  },
  {
    id: 'mult-d-7',
    type: 'numeric',
    prompt: "Calcula: (2 x 5) x 8",
    options: ["80"],
    correctAnswer: "80",
    feedback: "¡Increíble! 10 x 8 son 80. ¡Has usado la propiedad asociativa!"
  },
  {
    id: 'mult-d-8',
    type: 'multiple-choice',
    prompt: "Para multiplicar 6 x 12, podemos hacer 6 x (10 + 2).",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Exacto! Es la propiedad distributiva. ¡Qué inteligente!"
  },
  {
    id: 'mult-d-9',
    type: 'numeric',
    prompt: "Calcula: 25 x 4",
    options: ["100"],
    correctAnswer: "100",
    feedback: "¡Súper! 4 monedas de 25 céntimos hacen 100. ¡Lo tienes!"
  },
  {
    id: 'mult-d-10',
    type: 'numeric',
    prompt: "Calcula: 700 x 30",
    options: ["21000"],
    correctAnswer: "21000",
    feedback: "¡Bravísimo! 7 x 3 son 21 y añades tres ceros. ¡21.000!"
  },
  {
    id: 'mult-d-11',
    type: 'numeric',
    prompt: "Valentina tiene 12 filas de 5 flores. ¿Cuántas flores hay?",
    options: ["60"],
    correctAnswer: "60",
    feedback: "¡Magnífico! 12 x 5 son 60. ¡Qué jardín tan bonito!"
  },
  {
    id: 'mult-d-12',
    type: 'comparator',
    prompt: "Compara: 20 x 5 ___ 25 x 4",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Perfecto! Las dos operaciones dan 100. ¡Son gemelas!"
  },
  {
    id: 'mult-d-13',
    type: 'numeric',
    prompt: "Calcula: 8 x (20 + 3)",
    options: ["184"],
    correctAnswer: "184",
    feedback: "¡Casi! 160 + 24 son 184. ¡Un reto de campeona!"
  },
  {
    id: 'mult-d-14',
    type: 'multiple-choice',
    prompt: "Si un factor es 0, ¿cuál es el producto?",
    options: ["El otro factor", "Cero", "Diez"],
    correctAnswer: "Cero",
    feedback: "¡Eso es! El cero siempre gana en la multiplicación."
  },
  {
    id: 'mult-d-15',
    type: 'numeric',
    prompt: "Reto Final: 10 x 10 x 10",
    options: ["1000"],
    correctAnswer: "1000",
    feedback: "¡MISIÓN CUMPLIDA! Valentina, has conquistado la multiplicación difícil."
  }
];

import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'm-m-1',
    type: 'numeric',
    prompt: "Calcula: (2 x 3) x 4",
    options: ["24"],
    correctAnswer: "24",
    feedback: "¡Casi! Primero el paréntesis: 6 x 4. ¡Tú puedes, Valentina!"
  },
  {
    id: 'm-m-2',
    type: 'multiple-choice',
    prompt: "¿Qué propiedad usamos en: 3 x (2 + 5)?",
    options: ["Asociativa", "Distributiva", "Conmutativa"],
    correctAnswer: "Distributiva",
    feedback: "¡Ojo de exploradora! Repartimos el 3 entre el 2 y el 5. ¡Bien!"
  },
  {
    id: 'm-m-3',
    type: 'numeric',
    prompt: "Calcula: 25 x 100",
    options: ["2500"],
    correctAnswer: "2500",
    feedback: "¡Genial! Has puesto los dos ceros al final del 25. ¡Súper!"
  },
  {
    id: 'm-m-4',
    type: 'numeric',
    prompt: "Si una bolsa tiene 20 caramelos, ¿cuántos hay en 4 bolsas?",
    options: ["80"],
    correctAnswer: "80",
    feedback: "¡Bravo! 2 x 4 es 8, así que 20 x 4 son 80. ¡Increíble!"
  },
  {
    id: 'm-m-5',
    type: 'multiple-choice',
    prompt: "Estima: 31 x 4. ¿A qué número se acerca?",
    options: ["120", "150", "200"],
    correctAnswer: "120",
    feedback: "¡Muy bien! 30 x 4 son 120. ¡Eres una experta estimando!"
  },
  {
    id: 'm-m-6',
    type: 'numeric',
    prompt: "Calcula: 2 x (5 x 10)",
    options: ["100"],
    correctAnswer: "100",
    feedback: "¡Perfecto! 2 x 50 son 100. ¡Has llegado a la centena!"
  },
  {
    id: 'm-m-7',
    type: 'comparator',
    prompt: "Compara: 4 x 10 ___ 5 x 8",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Exacto! Los dos productos valen 40. ¡Son iguales!"
  },
  {
    id: 'm-m-8',
    type: 'numeric',
    prompt: "Valentina tiene 12 cajas con 10 lápices cada una. ¿Cuántos lápices tiene?",
    options: ["120"],
    correctAnswer: "120",
    feedback: "¡Bravo! Has multiplicado por 10 perfectamente. ¡Sigue así!"
  },
  {
    id: 'm-m-9',
    type: 'numeric',
    prompt: "Calcula: 7 x 200",
    options: ["1400"],
    correctAnswer: "1400",
    feedback: "¡Increíble! 7 x 2 son 14, más los dos ceros... ¡1.400!"
  },
  {
    id: 'm-m-10',
    type: 'multiple-choice',
    prompt: "En 5 x (4 + 2), ¿qué operación se hace primero?",
    options: ["La suma", "La multiplicación"],
    correctAnswer: "La suma",
    feedback: "¡Eso es! El paréntesis siempre es el jefe y va primero."
  },
  {
    id: 'm-m-11',
    type: 'numeric',
    prompt: "Calcula: El triple de 100",
    options: ["300"],
    correctAnswer: "300",
    feedback: "¡Súper! 3 x 100 son 300. ¡Valentina al poder!"
  },
  {
    id: 'm-m-12',
    type: 'numeric',
    prompt: "Si multiplicas un número por cero, el producto es...",
    options: ["0"],
    correctAnswer: "0",
    feedback: "¡Bingo! El cero es como un agujero negro en la multiplicación."
  },
  {
    id: 'm-m-13',
    type: 'multiple-choice',
    prompt: "Estima: 89 x 2. ¿Es casi 90 x 2?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Casi! Redondear al 90 hace el cálculo mucho más fácil."
  },
  {
    id: 'm-m-14',
    type: 'numeric',
    prompt: "Calcula: 6 x 1.000",
    options: ["6000"],
    correctAnswer: "6000",
    feedback: "¡Perfecto! Tres ceros para el seis. ¡Eres una profesional!"
  },
  {
    id: 'm-m-15',
    type: 'numeric',
    prompt: "Reto Final: 2 x 3 x 5",
    options: ["30"],
    correctAnswer: "30",
    feedback: "¡LO LOGRASTE! 6 x 5 son 30. ¡Nivel medio superado, Valentina!"
  }
];

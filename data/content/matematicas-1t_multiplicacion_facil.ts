import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'mult-f-1',
    type: 'multiple-choice',
    prompt: "La multiplicación es una suma de números...",
    options: ["Diferentes", "Iguales", "Muy grandes"],
    correctAnswer: "Iguales",
    feedback: "¡Ojo de exploradora! Sumar 2+2+2 es lo mismo que 2 x 3. ¡Bien!"
  },
  {
    id: 'mult-f-2',
    type: 'numeric',
    prompt: "Calcula: 2 + 2 + 2 es igual a 2 x ...",
    options: ["3"],
    correctAnswer: "3",
    feedback: "¡Genial! El número 2 se repite 3 veces. ¡Eres una experta!"
  },
  {
    id: 'mult-f-3',
    type: 'multiple-choice',
    prompt: "¿Cómo llamamos a los números que se multiplican?",
    options: ["Sumandos", "Factores", "Productos"],
    correctAnswer: "Factores",
    feedback: "¡Casi! Los números que multiplicas son los factores. ¡Sigue así!"
  },
  {
    id: 'mult-f-4',
    type: 'multiple-choice',
    prompt: "¿Cómo llamamos al resultado de la multiplicación?",
    options: ["Total", "Diferencia", "Producto"],
    correctAnswer: "Producto",
    feedback: "¡Bravo! El producto es el nombre del resultado final."
  },
  {
    id: 'mult-f-5',
    type: 'numeric',
    prompt: "Calcula: 5 x 10 es igual a...",
    options: ["50"],
    correctAnswer: "50",
    feedback: "¡Increíble! Solo tienes que añadir un cero al 5. ¡Súper!"
  },
  {
    id: 'mult-f-6',
    type: 'multiple-choice',
    prompt: "Si 3 x 4 es 12, ¿cuánto es 4 x 3?",
    options: ["7", "12", "15"],
    correctAnswer: "12",
    feedback: "¡Exacto! El orden de los factores no cambia el producto."
  },
  {
    id: 'mult-f-7',
    type: 'numeric',
    prompt: "Calcula: El doble de 7 es...",
    options: ["14"],
    correctAnswer: "14",
    feedback: "¡Perfecto! 7 + 7 o 7 x 2 son 14. ¡Valentina al poder!"
  },
  {
    id: 'mult-f-8',
    type: 'numeric',
    prompt: "Si tienes 3 sobres con 5 cromos cada uno, ¿cuántos cromos hay?",
    options: ["15"],
    correctAnswer: "15",
    feedback: "¡Bravo! 5 + 5 + 5 son 15 cromos en total."
  },
  {
    id: 'mult-f-9',
    type: 'comparator',
    prompt: "Compara: 2 x 4 ___ 4 x 2",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Ojo de exploradora! Son iguales gracias a la propiedad conmutativa."
  },
  {
    id: 'mult-f-10',
    type: 'numeric',
    prompt: "Calcula: 8 x 1 es igual a...",
    options: ["8"],
    correctAnswer: "8",
    feedback: "¡Muy bien! Cualquier número multiplicado por 1 se queda igual."
  },
  {
    id: 'mult-f-11',
    type: 'numeric',
    prompt: "Calcula: 10 x 100 es igual a...",
    options: ["1000"],
    correctAnswer: "1000",
    feedback: "¡Genial! Has unido los ceros para formar el mil."
  },
  {
    id: 'mult-f-12',
    type: 'multiple-choice',
    prompt: "El triple de un número es multiplicar por...",
    options: ["Por 2", "Por 3", "Por 4"],
    correctAnswer: "Por 3",
    feedback: "¡Eso es! El triple significa tener tres veces lo mismo."
  },
  {
    id: 'mult-f-13',
    type: 'numeric',
    prompt: "Calcula: El triple de 5 es...",
    options: ["15"],
    correctAnswer: "15",
    feedback: "¡Súper! 5 + 5 + 5 son 15. ¡Lo tienes dominado!"
  },
  {
    id: 'mult-f-14',
    type: 'numeric',
    prompt: "En 2 x 6 = 12, ¿cuál es el producto?",
    options: ["12"],
    correctAnswer: "12",
    feedback: "¡Perfecto! El producto es el resultado de la misión."
  },
  {
    id: 'mult-f-15',
    type: 'numeric',
    prompt: "Reto: ¿Cuánto es 0 x 1.000?",
    options: ["0"],
    correctAnswer: "0",
    feedback: "¡LO LOGRASTE! El cero siempre gana y lo vuelve todo cero."
  }
];

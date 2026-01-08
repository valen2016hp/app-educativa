import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'eval-m-1',
    type: 'numeric',
    prompt: "Calcula: 2 + 2 + 2 + 2 es igual a 2 x ...",
    options: ["4"],
    correctAnswer: "4",
    feedback: "¡Muy bien! Estás demostrando lo que sabes."
  },
  {
    id: 'eval-m-2',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el resultado de multiplicar?",
    options: ["Factor", "Producto", "Diferencia"],
    correctAnswer: "Producto",
    feedback: "¡Excelente! Conoces perfectamente los términos."
  },
  {
    id: 'eval-m-3',
    type: 'numeric',
    prompt: "Calcula: El doble de 9.",
    options: ["18"],
    correctAnswer: "18",
    feedback: "¡Bravo! Tu cálculo mental es fantástico."
  },
  {
    id: 'eval-m-4',
    type: 'numeric',
    prompt: "Calcula: El triple de 6.",
    options: ["18"],
    correctAnswer: "18",
    feedback: "¡Increíble! Valentina, eres una experta."
  },
  {
    id: 'eval-m-5',
    type: 'multiple-choice',
    prompt: "¿Cuánto es 0 x 545?",
    options: ["0", "545", "1"],
    correctAnswer: "0",
    feedback: "¡Genial! El cero no tiene rival."
  },
  {
    id: 'eval-m-6',
    type: 'comparator',
    prompt: "Compara: 3 x 4 ___ 2 x 6",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Eso es! Tu ojo de exploradora es muy agudo."
  },
  {
    id: 'eval-m-7',
    type: 'numeric',
    prompt: "Calcula: 8 x 100",
    options: ["800"],
    correctAnswer: "800",
    feedback: "¡Perfecto! Los ceros son pan comido para ti."
  },
  {
    id: 'eval-m-8',
    type: 'multiple-choice',
    prompt: "Cambiar el orden de los factores no cambia el producto.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Muy bien! Dominas la propiedad conmutativa."
  },
  {
    id: 'eval-m-9',
    type: 'numeric',
    prompt: "Calcula: (2 x 2) x 5",
    options: ["20"],
    correctAnswer: "20",
    feedback: "¡Súper! Los paréntesis no te frenan."
  },
  {
    id: 'eval-m-10',
    type: 'numeric',
    prompt: "Calcula: 4 x (2 + 3)",
    options: ["20"],
    correctAnswer: "20",
    feedback: "¡Bravísimo! Sabes repartir muy bien los números."
  },
  {
    id: 'eval-m-11',
    type: 'multiple-choice',
    prompt: "En 7 x (5 - 2), ¿qué haces primero?",
    options: ["El paréntesis", "La multiplicación"],
    correctAnswer: "El paréntesis",
    feedback: "¡Exacto! Siempre sigues las reglas."
  },
  {
    id: 'eval-m-12',
    type: 'numeric',
    prompt: "Calcula: 15 x 10",
    options: ["150"],
    correctAnswer: "150",
    feedback: "¡Genial! Tienes mucha agilidad mental."
  },
  {
    id: 'eval-m-13',
    type: 'comparator',
    prompt: "Compara: 40 x 2 ___ 10 x 8",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Impresionante! Sabes comparar resultados como una jefa."
  },
  {
    id: 'eval-m-14',
    type: 'multiple-choice',
    prompt: "Estima: 21 x 4. ¿Es casi 20 x 4?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Bien hecho! Tu puntería estimando es de 10."
  },
  {
    id: 'eval-m-15',
    type: 'numeric',
    prompt: "Calcula: 300 x 3",
    options: ["900"],
    correctAnswer: "900",
    feedback: "¡Súper Valentina! Los números grandes te obedecen."
  },
  {
    id: 'eval-m-16',
    type: 'numeric',
    prompt: "Calcula: 5 x 40",
    options: ["200"],
    correctAnswer: "200",
    feedback: "¡Fabuloso! Estás muy concentrada."
  },
  {
    id: 'eval-m-17',
    type: 'multiple-choice',
    prompt: "La propiedad distributiva reparte el factor por la suma.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Brillante! Conoces todas las propiedades."
  },
  {
    id: 'eval-m-18',
    type: 'numeric',
    prompt: "Calcula: 2 x 400",
    options: ["800"],
    correctAnswer: "800",
    feedback: "¡Perfecto! El doble de 400 es pan comido."
  },
  {
    id: 'eval-m-19',
    type: 'numeric',
    prompt: "Tienes 5 cajas con 6 lápices. ¿Cuántos lápices hay?",
    options: ["30"],
    correctAnswer: "30",
    feedback: "¡Magnífico! Has resuelto el problema final."
  },
  {
    id: 'eval-m-20',
    type: 'numeric',
    prompt: "Reto: ¿Cuánto es 1 x 9.999?",
    options: ["9999"],
    correctAnswer: "9999",
    feedback: "¡Misión Final Cumplida! Eres la reina de la multiplicación."
  }
];

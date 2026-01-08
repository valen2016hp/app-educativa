import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'eval-sr-1',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el resultado de una suma?",
    options: ["Sustraendo", "Suma o Total", "Diferencia"],
    correctAnswer: "Suma o Total",
    feedback: "¡Buen trabajo! Sigue demostrando lo que sabes."
  },
  {
    id: 'eval-sr-2',
    type: 'multiple-choice',
    prompt: "En la resta, el número más grande se llama...",
    options: ["Minuendo", "Sustraendo", "Diferencia"],
    correctAnswer: "Minuendo",
    feedback: "¡Excelente! Estás muy concentrada."
  },
  {
    id: 'eval-sr-3',
    type: 'numeric',
    prompt: "Calcula esta suma mental: 1.500 + 500.",
    options: ["2000"],
    correctAnswer: "2000",
    feedback: "¡Genial! Tu cerebro matemático funciona de maravilla."
  },
  {
    id: 'eval-sr-4',
    type: 'multiple-choice',
    prompt: "La propiedad conmutativa dice que el orden...",
    options: ["Cambia el total", "No cambia el total"],
    correctAnswer: "No cambia el total",
    feedback: "¡Muy bien! Conoces las reglas de la suma."
  },
  {
    id: 'eval-sr-5',
    type: 'numeric',
    prompt: "Calcula: (10 + 5) - 2.",
    options: ["13"],
    correctAnswer: "13",
    feedback: "¡Bravo! Operas con paréntesis perfectamente."
  },
  {
    id: 'eval-sr-6',
    type: 'multiple-choice',
    prompt: "¿Qué operación se hace siempre primero?",
    options: ["La de fuera", "La del paréntesis"],
    correctAnswer: "La del paréntesis",
    feedback: "¡Eso es! Sigues los pasos correctamente."
  },
  {
    id: 'eval-sr-7',
    type: 'numeric',
    prompt: "Resta mentalmente: 4.000 - 1.000.",
    options: ["3000"],
    correctAnswer: "3000",
    feedback: "¡Increíble! Los millares son pan comido para ti."
  },
  {
    id: 'eval-sr-8',
    type: 'multiple-choice',
    prompt: "Estima 39 + 21. ¿A qué número se acerca?",
    options: ["50", "60", "70"],
    correctAnswer: "60",
    feedback: "¡Perfecto! Tienes muy buena puntería estimando."
  },
  {
    id: 'eval-sr-9',
    type: 'numeric',
    prompt: "Si el minuendo es 10 y la diferencia es 7, ¿cuál es el sustraendo?",
    options: ["3"],
    correctAnswer: "3",
    feedback: "¡Magnífico! Has resuelto el misterio de la resta."
  },
  {
    id: 'eval-sr-10',
    type: 'multiple-choice',
    prompt: "Para hacer la prueba de la resta hay que...",
    options: ["Sumar", "Restar", "Multiplicar"],
    correctAnswer: "Sumar",
    feedback: "¡Exacto! Sumar sustraendo y diferencia es la clave."
  },
  {
    id: 'eval-sr-11',
    type: 'numeric',
    prompt: "Calcula: 12.000 + 8.000.",
    options: ["20000"],
    correctAnswer: "20000",
    feedback: "¡Súper! Has llegado a la decena de millar."
  },
  {
    id: 'eval-sr-12',
    type: 'comparator',
    prompt: "Compara: 500 + 500 ___ 1.500 - 500",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Bien visto! Los dos resultados son iguales."
  },
  {
    id: 'eval-sr-13',
    type: 'numeric',
    prompt: "Tengo 50 euros y gasto 15. ¿Cuántos euros quedan?",
    options: ["35"],
    correctAnswer: "35",
    feedback: "¡Buen trabajo! Sabes gestionar muy bien el dinero."
  },
  {
    id: 'eval-sr-14',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama la propiedad de agrupar sumandos?",
    options: ["Conmutativa", "Asociativa"],
    correctAnswer: "Asociativa",
    feedback: "¡Genial! Los nombres difíciles no te frenan."
  },
  {
    id: 'eval-sr-15',
    type: 'numeric',
    prompt: "Completa: 100 - ... = 90.",
    options: ["10"],
    correctAnswer: "10",
    feedback: "¡Bravo! Tienes mucha agilidad mental."
  },
  {
    id: 'eval-sr-16',
    type: 'multiple-choice',
    prompt: "Si sumas cero a un número, el resultado es...",
    options: ["Cero", "El mismo número"],
    correctAnswer: "El mismo número",
    feedback: "¡Correcto! El cero es como un espejo en la suma."
  },
  {
    id: 'eval-sr-17',
    type: 'numeric',
    prompt: "Calcula: 250 + 250 + 250.",
    options: ["750"],
    correctAnswer: "750",
    feedback: "¡Increíble! Has sumado tres números a la vez."
  },
  {
    id: 'eval-sr-18',
    type: 'numeric',
    prompt: "Resta: 10.000 - 1.",
    options: ["9999"],
    correctAnswer: "9999",
    feedback: "¡Fabuloso! Conoces bien los números grandes."
  },
  {
    id: 'eval-sr-19',
    type: 'multiple-choice',
    prompt: "Estima 8.900 - 1.100. ¿Es casi 9.000 - 1.000?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Muy bien! Estimar millares se te da fenomenal."
  },
  {
    id: 'eval-sr-20',
    type: 'numeric',
    prompt: "Reto Final: 5 + 5 + 5 + 5.",
    options: ["20"],
    correctAnswer: "20",
    feedback: "¡Misión final cumplida! Valentina, eres una campeona de las matemáticas."
  }
];

import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'sr-1',
    type: 'multiple-choice',
    prompt: "¿Cómo se llaman los números que se usan para sumar?",
    options: ["Restandos", "Sumandos", "Totales"],
    correctAnswer: "Sumandos",
    feedback: "¡Ojo de exploradora! Los números que sumamos se llaman sumandos. ¡Buen comienzo!"
  },
  {
    id: 'sr-2',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el resultado de una resta?",
    options: ["Suma", "Diferencia", "Minuendo"],
    correctAnswer: "Diferencia",
    feedback: "¡Casi! Al resultado de la resta lo llamamos diferencia. ¡Sigue así!"
  },
  {
    id: 'sr-3',
    type: 'numeric',
    prompt: "Calcula esta suma mental: 300 + 200.",
    options: ["500"],
    correctAnswer: "500",
    feedback: "¡Genial! 3 más 2 son 5, así que son 500. ¡Eres una experta!"
  },
  {
    id: 'sr-4',
    type: 'numeric',
    prompt: "Si tienes 10 caramelos y regalas 4, ¿cuántos te quedan?",
    options: ["6"],
    correctAnswer: "6",
    feedback: "¡Bravo! Una resta perfecta. ¡Valentina al poder!"
  },
  {
    id: 'sr-5',
    type: 'multiple-choice',
    prompt: "Si 5 + 3 es 8, ¿cuánto es 3 + 5?",
    options: ["7", "8", "9"],
    correctAnswer: "8",
    feedback: "¡Exacto! Da igual el orden, el resultado es el mismo. ¡Muy bien!"
  },
  {
    id: 'sr-6',
    type: 'numeric',
    prompt: "En la resta 10 - 2 = 8, ¿cuál es el minuendo?",
    options: ["10"],
    correctAnswer: "10",
    feedback: "¡Ojo! El minuendo es el número más grande, el que va primero."
  },
  {
    id: 'sr-7',
    type: 'multiple-choice',
    prompt: "Aproxima 21 + 39 a la decena: ¿Es casi 20 + 40?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Increíble! Estimar nos ayuda a calcular más rápido."
  },
  {
    id: 'sr-8',
    type: 'numeric',
    prompt: "Suma mentalmente: 450 + 10.",
    options: ["460"],
    correctAnswer: "460",
    feedback: "¡Perfecto! Solo has tenido que subir una decena. ¡Súper!"
  },
  {
    id: 'sr-9',
    type: 'numeric',
    prompt: "Resta mentalmente: 100 - 1.",
    options: ["99"],
    correctAnswer: "99",
    feedback: "¡Casi! Si a 100 le quitas 1, llegas al 99. ¡Buen intento!"
  },
  {
    id: 'sr-10',
    type: 'multiple-choice',
    prompt: "¿Qué propiedad dice que (2+3)+4 es igual a 2+(3+4)?",
    options: ["Asociativa", "Conmutativa"],
    correctAnswer: "Asociativa",
    feedback: "¡Bien! Al agrupar números usamos la propiedad asociativa."
  },
  {
    id: 'sr-11',
    type: 'numeric',
    prompt: "¿Qué número falta? 50 + ... = 60.",
    options: ["10"],
    correctAnswer: "10",
    feedback: "¡Eso es! 10 unidades hacen la siguiente decena."
  },
  {
    id: 'sr-12',
    type: 'multiple-choice',
    prompt: "Si el sustraendo es 2 y la diferencia es 3, ¿el minuendo es 5?",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Recuerda! Si sumas lo que quitaste y lo que queda, tienes el total."
  },
  {
    id: 'sr-13',
    type: 'numeric',
    prompt: "Tengo 20 euros. Gasto 5. ¿Cuántos euros tengo ahora?",
    options: ["15"],
    correctAnswer: "15",
    feedback: "¡Muy bien! Sabes manejar muy bien tus ahorros."
  },
  {
    id: 'sr-14',
    type: 'comparator',
    prompt: "Compara estos resultados: 10 + 5 ___ 20 - 5",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Ojo de exploradora! Los dos resultados son 15. ¡Son iguales!"
  },
  {
    id: 'sr-15',
    type: 'numeric',
    prompt: "Suma tres números: 1 + 2 + 3.",
    options: ["6"],
    correctAnswer: "6",
    feedback: "¡Misión cumplida! Valentina, has dominado las sumas y restas."
  }
];

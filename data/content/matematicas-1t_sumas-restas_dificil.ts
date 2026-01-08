import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'srd-1',
    type: 'numeric',
    prompt: "Calcula: (5.000 + 2.000) - 3.000",
    options: ["4000"],
    correctAnswer: "4000",
    feedback: "¡Ojo de exploradora! Primero los paréntesis: 7.000 - 3.000. ¡Tú puedes!"
  },
  {
    id: 'srd-2',
    type: 'numeric',
    prompt: "Busca el número: 10.000 - ... = 8.500",
    options: ["1500"],
    correctAnswer: "1500",
    feedback: "¡Casi! Si a 10.000 le quitas 1.500, quedan 8.500. ¡Sigue así!"
  },
  {
    id: 'srd-3',
    type: 'multiple-choice',
    prompt: "¿En qué operación no se puede cambiar el orden?",
    options: ["En la suma", "En la resta", "En ambas"],
    correctAnswer: "En la resta",
    feedback: "¡Exacto! A 5 no le puedes quitar 10. ¡Eres muy lista!"
  },
  {
    id: 'srd-4',
    type: 'numeric',
    prompt: "Calcula: 25.000 + 15.000",
    options: ["40000"],
    correctAnswer: "40000",
    feedback: "¡Bravo! 25 más 15 son 40, así que son 40.000. ¡Increíble!"
  },
  {
    id: 'srd-5',
    type: 'multiple-choice',
    prompt: "Si el minuendo es 1.000 y la diferencia es 400, ¿cuál es el sustraendo?",
    options: ["600", "1.400", "400"],
    correctAnswer: "600",
    feedback: "¡Bien pensado! 1.000 menos 600 son 400. ¡Gran lógica!"
  },
  {
    id: 'srd-6',
    type: 'numeric',
    prompt: "Calcula: 12.500 - (2.000 + 500)",
    options: ["10000"],
    correctAnswer: "10000",
    feedback: "¡Eso es! Quitas 2.500 en total y te quedan 10.000 exactos."
  },
  {
    id: 'srd-7',
    type: 'comparator',
    prompt: "Compara: 45.000 - 5.000 ___ 30.000 + 10.000",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Increíble! Los dos lados dan 40.000. ¡Son iguales!"
  },
  {
    id: 'srd-8',
    type: 'numeric',
    prompt: "Valentina tiene 30.000 puntos y gasta 1.500. ¿Cuántos puntos quedan?",
    options: ["28500"],
    correctAnswer: "28500",
    feedback: "¡Casi! 30.000 menos 1.000 son 29.000, menos 500... ¡28.500!"
  },
  {
    id: 'srd-9',
    type: 'multiple-choice',
    prompt: "Para estimar 14.800 - 5.100, ¿qué resta es mejor?",
    options: ["15.000 - 5.000", "14.000 - 6.000"],
    correctAnswer: "15.000 - 5.000",
    feedback: "¡Perfecto! Redondear al millar más cercano es la mejor estrategia."
  },
  {
    id: 'srd-10',
    type: 'numeric',
    prompt: "Calcula: 80.000 - 1",
    options: ["79999"],
    correctAnswer: "79999",
    feedback: "¡Brillante! Has bajado un escalón al 79.999. ¡Qué puntería!"
  },
  {
    id: 'srd-11',
    type: 'multiple-choice',
    prompt: "En la suma (4 + 6) + 5, ¿qué sumamos primero?",
    options: ["4 + 6", "6 + 5", "Da igual"],
    correctAnswer: "4 + 6",
    feedback: "¡Exacto! El paréntesis manda y se hace siempre primero."
  },
  {
    id: 'srd-12',
    type: 'numeric',
    prompt: "Calcula: El doble de 15.000 menos 10.000",
    options: ["20000"],
    correctAnswer: "20000",
    feedback: "¡Bravísimo! 30.000 menos 10.000 son 20.000. ¡Eres una jefa!"
  },
  {
    id: 'srd-13',
    type: 'numeric',
    prompt: "Si el sustraendo es 8.000 y la diferencia es 2.000, ¿cuál es el minuendo?",
    options: ["10000"],
    correctAnswer: "10000",
    feedback: "¡Súper! Sumas los dos números y sale el total de arriba: 10.000."
  },
  {
    id: 'srd-14',
    type: 'comparator',
    prompt: "Compara: 100.000 - 50.000 ___ 25.000 + 25.000",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Misión casi lograda! Las dos operaciones dan 50.000."
  },
  {
    id: 'srd-15',
    type: 'numeric',
    prompt: "Reto Final: 20.000 + 20.000 - 5.000",
    options: ["35000"],
    correctAnswer: "35000",
    feedback: "¡LO LOGRASTE! Valentina, eres la maestra de las sumas y restas."
  }
];

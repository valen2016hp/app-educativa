import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'srm-1',
    type: 'multiple-choice',
    prompt: "¿Qué propiedad dice que 1.200 + 3.000 es igual a 3.000 + 1.200?",
    options: ["Asociativa", "Conmutativa", "Distributiva"],
    correctAnswer: "Conmutativa",
    feedback: "¡Ojo de exploradora! Cambiar el orden de los sumandos no cambia el resultado. ¡Bien!"
  },
  {
    id: 'srm-2',
    type: 'numeric',
    prompt: "Si el minuendo es 500 y el sustraendo es 150, ¿cuál es la diferencia?",
    options: ["350"],
    correctAnswer: "350",
    feedback: "¡Casi! 500 menos 100 son 400, y quitas 50 más... ¡350! ¡Sigue así!"
  },
  {
    id: 'srm-3',
    type: 'multiple-choice',
    prompt: "Para hacer la prueba de la resta, sumas el sustraendo y...",
    options: ["El minuendo", "La diferencia", "Otro sumando"],
    correctAnswer: "La diferencia",
    feedback: "¡Eso es! Si sumas lo que quitaste y lo que queda, sale el total."
  },
  {
    id: 'srm-4',
    type: 'numeric',
    prompt: "Estima el resultado de 4.900 + 2.100 (redondeando a los millares).",
    options: ["7000"],
    correctAnswer: "7000",
    feedback: "¡Bravo! 5.000 + 2.000 son 7.000. ¡Qué buen cálculo mental!"
  },
  {
    id: 'srm-5',
    type: 'numeric',
    prompt: "Calcula: 2.500 + cuánto falta para llegar a 3.000?",
    options: ["500"],
    correctAnswer: "500",
    feedback: "¡Perfecto! 500 unidades más y completas el siguiente millar."
  },
  {
    id: 'srm-6',
    type: 'multiple-choice',
    prompt: "¿Cómo agrupamos en la propiedad asociativa de la suma?",
    options: ["Usando comas", "Usando paréntesis", "Cambiando el orden"],
    correctAnswer: "Usando paréntesis",
    feedback: "¡Exacto! Los paréntesis nos dicen qué números sumar primero."
  },
  {
    id: 'srm-7',
    type: 'numeric',
    prompt: "Resta mentalmente: 1.500 - 600.",
    options: ["900"],
    correctAnswer: "900",
    feedback: "¡Casi! Si a 15 le quitas 6 son 9, así que son 900. ¡Tú puedes!"
  },
  {
    id: 'srm-8',
    type: 'comparator',
    prompt: "Compara: 4.000 + 2.000 ___ 9.000 - 4.000",
    options: ["<", ">", "="],
    correctAnswer: ">",
    feedback: "¡Muy bien! 6.000 es más grande que 5.000. ¡Eres una genia!"
  },
  {
    id: 'srm-9',
    type: 'numeric',
    prompt: "En la resta 8.000 - 2.000 = 6.000, ¿cuál es la diferencia?",
    options: ["6000"],
    correctAnswer: "6000",
    feedback: "¡Eso es! La diferencia es el nombre del resultado. ¡Buen trabajo!"
  },
  {
    id: 'srm-10',
    type: 'multiple-choice',
    prompt: "Estima la resta: 8.100 - 2.900. ¿Es casi 8.000 - 3.000?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Increíble! Redondear nos ayuda a saber el resultado aproximado."
  },
  {
    id: 'srm-11',
    type: 'numeric',
    prompt: "Suma: 1.100 + 1.100 + 1.100.",
    options: ["3300"],
    correctAnswer: "3300",
    feedback: "¡Bravísimo! Tres veces once son treinta y tres. ¡Lo tienes!"
  },
  {
    id: 'srm-12',
    type: 'multiple-choice',
    prompt: "Si sumas 0 a cualquier número, el resultado es el mismo número.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Exacto! El cero es el elemento neutro de la suma."
  },
  {
    id: 'srm-13',
    type: 'numeric',
    prompt: "Valentina tiene 1.200 puntos y gana 800 más. ¿Cuántos puntos tiene?",
    options: ["2000"],
    correctAnswer: "2000",
    feedback: "¡Increíble! 1.200 + 800 forman 2.000 exactos. ¡Misión cumplida!"
  },
  {
    id: 'srm-14',
    type: 'numeric',
    prompt: "Si a 5.000 le quitas 250, ¿cuántos quedan?",
    options: ["4750"],
    correctAnswer: "4750",
    feedback: "¡Casi! 5.000 - 200 son 4.800, y quitas 50 más... 4.750. ¡Ánimo!"
  },
  {
    id: 'srm-15',
    type: 'multiple-choice',
    prompt: "¿Qué operación es la inversa de la suma?",
    options: ["La multiplicación", "La resta", "La división"],
    correctAnswer: "La resta",
    feedback: "¡Perfecto! Sumar es poner y restar es quitar. ¡Has terminado el nivel medio!"
  }
];

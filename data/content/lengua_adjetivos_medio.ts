import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: "Completa la palabra: El coche es nue__o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Ojo de exploradora! Las palabras que terminan en -evo siempre van con V."
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    prompt: "Completa la palabra: El pelaje es sua__e.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Casi! Recuerda que los adjetivos terminados en -ave se escriben con V."
  },
  {
    id: 'q3',
    type: 'comparator',
    prompt: "Clasifica: 'Tres lápices'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Numeral",
    feedback: "¡Muy bien! Tres es una cantidad exacta, por eso es un Numeral."
  },
  {
    id: 'q4',
    type: 'comparator',
    prompt: "Clasifica: 'Muchos juguetes'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Piénsalo! 'Muchos' no nos dice el número exacto (no sabemos cuántos hay), es Indefinido."
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "¿Cuál está bien escrita?",
    options: ["Octabo", "Octavo"],
    correctAnswer: "Octavo",
    feedback: "¡Recuerda la regla! Las terminaciones en -avo siempre van con V."
  },
  {
    id: 'q6',
    type: 'numeric',
    prompt: "¿Qué número representa el cuarto curso?",
    options: [],
    correctAnswer: "4",
    feedback: "¡Exacto! Cuarto viene del número 4. Indica el orden."
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    prompt: "Completa: Es un niño muy creati__o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Genial! Los adjetivos que acaban en -ivo siempre llevan V."
  },
  {
    id: 'q8',
    type: 'comparator',
    prompt: "Clasifica: 'Algunos pájaros'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Ojo! 'Algunos' es una cantidad misteriosa, no exacta. Es Indefinido."
  },
  {
    id: 'q9',
    type: 'comparator',
    prompt: "Clasifica: 'Segundo puesto'.",
    options: ["Cardinal", "Ordinal"],
    correctAnswer: "Ordinal",
    feedback: "¡Correcto! Indica el orden de llegada, así que es Ordinal."
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    prompt: "Completa: El mensaje fue bre__e.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Recuerda! Las palabras terminadas en -eve se escriben con V."
  },
  {
    id: 'q11',
    type: 'numeric',
    prompt: "Escribe el número: Doce.",
    options: [],
    correctAnswer: "12",
    feedback: "¡Muy bien! Es una docena."
  },
  {
    id: 'q12',
    type: 'comparator',
    prompt: "Clasifica: 'Pocos deberes'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Casi! No sabemos cuántos son exactamente, por eso es Indefinido."
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "El toro es bra__o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Ojo de exploradora! La terminación -avo siempre se escribe con V."
  },
  {
    id: 'q14',
    type: 'comparator',
    prompt: "Clasifica: 'Dos hermanos'.",
    options: ["Cardinal", "Ordinal"],
    correctAnswer: "Cardinal",
    feedback: "¡Eso es! Sirve para contar cantidades exactas (1, 2, 3...), es Cardinal."
  },
  {
    id: 'q15',
    type: 'comparator',
    prompt: "Clasifica: 'Varios días'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Ánimo! 'Varios' no es un número concreto, es Indefinido."
  }
];

import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'h1',
    type: 'multiple-choice',
    prompt: "Completa: El anciano era muy longe_o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Bien visto! Longevo significa que vive mucho tiempo. Termina en -evo, así que va con V."
  },
  {
    id: 'h2',
    type: 'numeric',
    prompt: "¿Qué número es el undécimo?",
    options: [],
    correctAnswer: "11",
    feedback: "¡Exacto! Undécimo va después del décimo. Es el número 11."
  },
  {
    id: 'h3',
    type: 'comparator',
    prompt: "Clasifica: 'Bastantes dudas'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Correcto! 'Bastantes' es una cantidad grande pero imprecisa, por eso es Indefinido."
  },
  {
    id: 'h4',
    type: 'multiple-choice',
    prompt: "Completa: Es un gas noci__o (dañino).",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Ojo de exploradora! Las palabras terminadas en -ivo siempre se escriben con V."
  },
  {
    id: 'h5',
    type: 'numeric',
    prompt: "¿Qué número es el duodécimo?",
    options: [],
    correctAnswer: "12",
    feedback: "¡Genial! Duodécimo suena a dos y diez... ¡es el 12!"
  },
  {
    id: 'h6',
    type: 'comparator',
    prompt: "Clasifica: 'Ningún problema'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Muy bien! 'Ningún' indica inexistencia, pero no es un número exacto. Es Indefinido."
  },
  {
    id: 'h7',
    type: 'multiple-choice',
    prompt: "El prisionero está fugiti__o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Eso es! Fugitivo termina en -ivo, así que siempre con V."
  },
  {
    id: 'h8',
    type: 'comparator',
    prompt: "Clasifica: 'Vigésimo aniversario'.",
    options: ["Cardinal", "Ordinal"],
    correctAnswer: "Ordinal",
    feedback: "¡Perfecto! Nos dice el orden (posición 20), así que es Ordinal."
  },
  {
    id: 'h9',
    type: 'multiple-choice',
    prompt: "Completa: Una persona compasi__a.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Bien pensado! La terminación es -iva, siempre con V."
  },
  {
    id: 'h10',
    type: 'numeric',
    prompt: "¿Qué número representa el trigésimo piso?",
    options: [],
    correctAnswer: "30",
    feedback: "¡Impresionante! Trigésimo viene de tres... ¡es el 30!"
  },
  {
    id: 'h11',
    type: 'comparator',
    prompt: "Clasifica: 'Cualquier día'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Indefinido",
    feedback: "¡Exacto! No sabemos qué día específico es, así que es Indefinido."
  },
  {
    id: 'h12',
    type: 'multiple-choice',
    prompt: "Completa: En tiempos del Imperio, él era escla__o.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Recuerda! Las palabras terminadas en -avo se escriben con V."
  },
  {
    id: 'h13',
    type: 'comparator',
    prompt: "Clasifica: 'Triple salto'.",
    options: ["Numeral", "Indefinido"],
    correctAnswer: "Numeral",
    feedback: "¡Correcto! Triple significa exactamente tres veces. Es un Numeral (multiplicativo)."
  },
  {
    id: 'h14',
    type: 'numeric',
    prompt: "Escribe el número: Decimoquinto.",
    options: [],
    correctAnswer: "15",
    feedback: "¡Muy bien! Décimo (10) + quinto (5) = 15."
  },
  {
    id: 'h15',
    type: 'multiple-choice',
    prompt: "Completa: Tomó una decisión decisi__a.",
    options: ["b", "v"],
    correctAnswer: "v",
    feedback: "¡Misión cumplida! Decisiva termina en -iva, por lo tanto se escribe con V."
  }
];

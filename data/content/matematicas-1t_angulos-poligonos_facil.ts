import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'ap-f-1',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el punto donde se unen los lados?",
    options: ["Esquina", "Vértice", "Centro"],
    correctAnswer: "Vértice",
    feedback: "¡Ojo de exploradora! El punto de unión se llama vértice. ¡Bien!"
  },
  {
    id: 'ap-f-2',
    type: 'numeric',
    prompt: "Un ángulo recto mide exactamente... grados.",
    options: ["90"],
    correctAnswer: "90",
    feedback: "¡Genial! Como la esquina de un folio, mide 90 grados."
  },
  {
    id: 'ap-f-3',
    type: 'multiple-choice',
    prompt: "¿Qué usamos para medir ángulos?",
    options: ["Regla", "Transportador", "Compás"],
    correctAnswer: "Transportador",
    feedback: "¡Bravo! El transportador es nuestra herramienta mágica de ángulos."
  },
  {
    id: 'ap-f-4',
    type: 'numeric',
    prompt: "¿Cuántos lados tiene un triángulo?",
    options: ["3"],
    correctAnswer: "3",
    feedback: "¡Perfecto! Tri-ángulo viene de tres. ¡Eres una experta!"
  },
  {
    id: 'ap-f-5',
    type: 'multiple-choice',
    prompt: "Un ángulo menor que 90 grados es...",
    options: ["Agudo", "Obtuso", "Recto"],
    correctAnswer: "Agudo",
    feedback: "¡Casi! Es agudo porque es pequeñito y 'pincha'. ¡Ánimo!"
  },
  {
    id: 'ap-f-6',
    type: 'numeric',
    prompt: "¿Cuántos lados tiene un cuadrado?",
    options: ["4"],
    correctAnswer: "4",
    feedback: "¡Eso es! El cuadrado es un cuadrilátero de 4 lados."
  },
  {
    id: 'ap-f-7',
    type: 'multiple-choice',
    prompt: "Un ángulo mayor que 90 grados es...",
    options: ["Agudo", "Obtuso", "Recto"],
    correctAnswer: "Obtuso",
    feedback: "¡Muy bien! Los ángulos abiertos se llaman obtusos."
  },
  {
    id: 'ap-f-8',
    type: 'numeric',
    prompt: "¿Cuántos lados tiene un pentágono?",
    options: ["5"],
    correctAnswer: "5",
    feedback: "¡Increíble! Como los dedos de una mano, tiene 5 lados."
  },
  {
    id: 'ap-f-9',
    type: 'comparator',
    prompt: "Compara: Ángulo Agudo ___ Ángulo Recto",
    options: ["<", ">"],
    correctAnswer: "<",
    feedback: "¡Exacto! El agudo siempre es más pequeño que el recto."
  },
  {
    id: 'ap-f-10',
    type: 'multiple-choice',
    prompt: "¿Los polígonos tienen líneas curvas?",
    options: ["Sí", "No"],
    correctAnswer: "No",
    feedback: "¡Ojo! Los polígonos solo tienen líneas rectas cerradas."
  },
  {
    id: 'ap-f-11',
    type: 'numeric',
    prompt: "¿Cuántos lados tiene un hexágono?",
    options: ["6"],
    correctAnswer: "6",
    feedback: "¡Bravísimo! El hexágono tiene 6 lados. ¡Sigue así!"
  },
  {
    id: 'ap-f-12',
    type: 'multiple-choice',
    prompt: "La abertura de un ángulo se llama...",
    options: ["Largo", "Amplitud", "Peso"],
    correctAnswer: "Amplitud",
    feedback: "¡Eso es! La amplitud nos dice cuánto se abre el ángulo."
  },
  {
    id: 'ap-f-13',
    type: 'numeric',
    prompt: "Si un polígono tiene 4 vértices, tiene ... lados.",
    options: ["4"],
    correctAnswer: "4",
    feedback: "¡Genial! Siempre hay el mismo número de vértices que de lados."
  },
  {
    id: 'ap-f-14',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el polígono de 3 lados?",
    options: ["Cuadrado", "Triángulo", "Círculo"],
    correctAnswer: "Triángulo",
    feedback: "¡Perfecto! Valentina, eres la reina de las formas."
  },
  {
    id: 'ap-f-15',
    type: 'numeric',
    prompt: "Reto: ¿Cuánto miden dos ángulos rectos juntos?",
    options: ["180"],
    correctAnswer: "180",
    feedback: "¡LO LOGRASTE! 90 + 90 son 180. ¡Nivel fácil superado!"
  }
];

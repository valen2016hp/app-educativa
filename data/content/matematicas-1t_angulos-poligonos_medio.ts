import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'ap-m-1',
    type: 'multiple-choice',
    prompt: "Un ángulo de 180 grados se llama...",
    options: ["Ángulo Recto", "Ángulo Llano", "Ángulo Agudo"],
    correctAnswer: "Ángulo Llano",
    feedback: "¡Ojo de exploradora! 180 grados es una línea recta, por eso es llano."
  },
  {
    id: 'ap-m-2',
    type: 'comparator',
    prompt: "Compara: Ángulo Obtuso ___ Ángulo Recto",
    options: [">", "<"],
    correctAnswer: ">",
    feedback: "¡Muy bien! El obtuso es más abierto que el recto (90º)."
  },
  {
    id: 'ap-m-3',
    type: 'multiple-choice',
    prompt: "Un triángulo con 3 lados iguales es...",
    options: ["Isósceles", "Equilátero", "Escaleno"],
    correctAnswer: "Equilátero",
    feedback: "¡Bravo! 'Equi' significa igual. ¡Tiene todos los lados igualitos!"
  },
  {
    id: 'ap-m-4',
    type: 'numeric',
    prompt: "¿Cuántos vértices tiene un octógono?",
    options: ["8"],
    correctAnswer: "8",
    feedback: "¡Genial! Un octógono tiene 8 lados y 8 vértices. ¡Como un pulpo!"
  },
  {
    id: 'ap-m-5',
    type: 'multiple-choice',
    prompt: "Si dos líneas nunca se cruzan, son...",
    options: ["Secantes", "Paralelas", "Perpendiculares"],
    correctAnswer: "Paralelas",
    feedback: "¡Exacto! Son como las vías del tren, siempre a la misma distancia."
  },
  {
    id: 'ap-m-6',
    type: 'multiple-choice',
    prompt: "Un triángulo con 2 lados iguales es...",
    options: ["Isósceles", "Equilátero", "Escaleno"],
    correctAnswer: "Isósceles",
    feedback: "¡Perfecto! El isósceles tiene dos lados como dos gotas de agua."
  },
  {
    id: 'ap-m-7',
    type: 'numeric',
    prompt: "¿Cómo se llama el polígono de 7 lados?",
    options: ["Heptágono"],
    correctAnswer: "Heptágono",
    feedback: "¡Increíble! Hepta significa siete. ¡Qué buena memoria!"
  },
  {
    id: 'ap-m-8',
    type: 'multiple-choice',
    prompt: "Un ángulo de 45 grados es un ángulo...",
    options: ["Agudo", "Obtuso", "Recto"],
    correctAnswer: "Agudo",
    feedback: "¡Eso es! Como mide menos de 90 grados, es agudo."
  },
  {
    id: 'ap-m-9',
    type: 'multiple-choice',
    prompt: "Los cuadriláteros tienen siempre 4 lados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Muy bien! El nombre 'cuadri' ya nos da la pista del 4."
  },
  {
    id: 'ap-m-10',
    type: 'numeric',
    prompt: "¿Cuántos ángulos tiene un pentágono?",
    options: ["5"],
    correctAnswer: "5",
    feedback: "¡Súper! Tiene 5 lados, 5 vértices y 5 ángulos."
  },
  {
    id: 'ap-m-11',
    type: 'multiple-choice',
    prompt: "Un triángulo con lados diferentes es...",
    options: ["Isósceles", "Equilátero", "Escaleno"],
    correctAnswer: "Escaleno",
    feedback: "¡Casi! El escaleno tiene todos sus lados de distinto tamaño."
  },
  {
    id: 'ap-m-12',
    type: 'comparator',
    prompt: "Compara: 130 grados ___ Ángulo Recto",
    options: [">", "<"],
    correctAnswer: ">",
    feedback: "¡Bravo! 130 es más que 90, así que es mayor."
  },
  {
    id: 'ap-m-13',
    type: 'multiple-choice',
    prompt: "El perímetro es la suma de los...",
    options: ["Ángulos", "Lados", "Vértices"],
    correctAnswer: "Lados",
    feedback: "¡Excelente! El perímetro es como la valla que rodea el polígono."
  },
  {
    id: 'ap-m-14',
    type: 'numeric',
    prompt: "¿Cuántos lados tiene un decágono?",
    options: ["10"],
    correctAnswer: "10",
    feedback: "¡Bravísimo! El decágono tiene 10 lados. ¡Eres una genia!"
  },
  {
    id: 'ap-m-15',
    type: 'multiple-choice',
    prompt: "Reto: ¿Un cuadrado es un cuadrilátero?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡MISIÓN CUMPLIDA! El cuadrado tiene 4 lados, ¡es el rey de los cuadriláteros!"
  }
];

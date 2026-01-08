import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'eval-ap-1',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el **punto** donde se unen los lados?",
    options: ["Esquina", "Vértice", "Centro"],
    correctAnswer: "Vértice",
    feedback: "¡Muy bien! Sigue demostrando lo que sabes."
  },
  {
    id: 'eval-ap-2',
    type: 'numeric',
    prompt: "Un ángulo **recto** mide exactamente... grados.",
    options: ["90"],
    correctAnswer: "90",
    feedback: "¡Excelente! Estás muy atenta."
  },
  {
    id: 'eval-ap-3',
    type: 'multiple-choice',
    prompt: "¿Cómo se llama el ángulo de **180 grados**?",
    options: ["Recto", "Agudo", "Llano"],
    correctAnswer: "Llano",
    feedback: "¡Eso es! Tu ojo de exploradora no falla."
  },
  {
    id: 'eval-ap-4',
    type: 'numeric',
    prompt: "¿Cuántos **lados** tiene un triángulo?",
    options: ["3"],
    correctAnswer: "3",
    feedback: "¡Bravo! Tienes un cerebro matemático brillante."
  },
  {
    id: 'eval-ap-5',
    type: 'multiple-choice',
    prompt: "Un ángulo **menor** de 90 grados es...",
    options: ["Agudo", "Obtuso", "Recto"],
    correctAnswer: "Agudo",
    feedback: "¡Genial! Los ángulos te salen fenomenal."
  },
  {
    id: 'eval-ap-6',
    type: 'multiple-choice',
    prompt: "Un triángulo con **3 lados iguales** es...",
    options: ["Isósceles", "Equilátero", "Escaleno"],
    correctAnswer: "Equilátero",
    feedback: "¡Súper! Las formas son pan comido para ti."
  },
  {
    id: 'eval-ap-7',
    type: 'numeric',
    prompt: "¿Cuántos **lados** tiene un hexágono?",
    options: ["6"],
    correctAnswer: "6",
    feedback: "¡Bien hecho! Estás concentrada al máximo."
  },
  {
    id: 'eval-ap-8',
    type: 'multiple-choice',
    prompt: "Un triángulo con un **ángulo recto** es un...",
    options: ["Acutángulo", "Rectángulo", "Obtusángulo"],
    correctAnswer: "Rectángulo",
    feedback: "¡Increíble! Valentina, eres una experta."
  },
  {
    id: 'eval-ap-9',
    type: 'multiple-choice',
    prompt: "Los cuadriláteros tienen siempre **4 lados**.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Eso es! Los cuadriláteros no tienen secretos para ti."
  },
  {
    id: 'eval-ap-10',
    type: 'numeric',
    prompt: "¿Cuántos **vértices** tiene un octógono?",
    options: ["8"],
    correctAnswer: "8",
    feedback: "¡Exacto! Tienes mucha agilidad mental."
  },
  {
    id: 'eval-ap-11',
    type: 'multiple-choice',
    prompt: "Un ángulo de **120 grados** es un ángulo...",
    options: ["Agudo", "Obtuso", "Recto"],
    correctAnswer: "Obtuso",
    feedback: "¡Perfecto! Identificas los ángulos muy rápido."
  },
  {
    id: 'eval-ap-12',
    type: 'comparator',
    prompt: "**Compara**: Ángulo Agudo ___ Ángulo Obtuso",
    options: ["<", ">", "="],
    correctAnswer: "<",
    feedback: "¡Buen trabajo! Tienes mucha puntería."
  },
  {
    id: 'eval-ap-13',
    type: 'multiple-choice',
    prompt: "Un triángulo con **2 lados iguales** es...",
    options: ["Isósceles", "Equilátero", "Escaleno"],
    correctAnswer: "Isósceles",
    feedback: "¡Brillante! Una palabra difícil y la has acertado."
  },
  {
    id: 'eval-ap-14',
    type: 'numeric',
    prompt: "En un triángulo, los 3 ángulos **suman**...",
    options: ["180"],
    correctAnswer: "180",
    feedback: "¡Súper Valentina! Los números te obedecen."
  },
  {
    id: 'eval-ap-15',
    type: 'multiple-choice',
    prompt: "Tiene 4 lados iguales pero **no** ángulos rectos.",
    options: ["Cuadrado", "Rombo", "Trapecio"],
    correctAnswer: "Rombo",
    feedback: "¡Impresionante! Ese era un reto muy difícil."
  },
  {
    id: 'eval-ap-16',
    type: 'numeric',
    prompt: "Triángulo con lados de 3cm, 3cm y 3cm. **Perímetro**...",
    options: ["9"],
    correctAnswer: "9",
    feedback: "¡Muy bien! Los perímetros ya no tienen secretos."
  },
  {
    id: 'eval-ap-17',
    type: 'multiple-choice',
    prompt: "¿Cómo se llaman las líneas que **nunca** se cruzan?",
    options: ["Secantes", "Paralelas", "Perpendiculares"],
    correctAnswer: "Paralelas",
    feedback: "¡Genial! Conoces muy bien las líneas."
  },
  {
    id: 'eval-ap-18',
    type: 'comparator',
    prompt: "**Compara**: Ángulo de 90º ___ Ángulo Recto",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Claro! Son gemelos, son iguales."
  },
  {
    id: 'eval-ap-19',
    type: 'numeric',
    prompt: "¿Cuántos **ángulos** tiene un pentágono?",
    options: ["5"],
    correctAnswer: "5",
    feedback: "¡Bravísimo! Has llegado a la cima de los polígonos."
  },
  {
    id: 'eval-ap-20',
    type: 'multiple-choice',
    prompt: "**Reto**: ¿Un círculo es un polígono?",
    options: ["No", "Sí"],
    correctAnswer: "No",
    feedback: "¡Misión final cumplida! Valentina, eres una campeona."
  }
];

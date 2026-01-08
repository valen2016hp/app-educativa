import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'ap-d-1',
    type: 'numeric',
    prompt: "En un triángulo, los 3 ángulos suman... grados.",
    options: ["180"],
    correctAnswer: "180",
    feedback: "¡Increíble! Es una regla mágica: ¡siempre suman 180 grados!"
  },
  {
    id: 'ap-d-2',
    type: 'multiple-choice',
    prompt: "Un triángulo con un ángulo recto es un...",
    options: ["Acutángulo", "Rectángulo", "Obtusángulo"],
    correctAnswer: "Rectángulo",
    feedback: "¡Exacto! Se llama así porque tiene un ángulo recto de 90º."
  },
  {
    id: 'ap-d-3',
    type: 'multiple-choice',
    prompt: "Si un polígono tiene todos sus lados iguales es...",
    options: ["Normal", "Regular", "Irregular"],
    correctAnswer: "Regular",
    feedback: "¡Bravo! Regular significa que todo en él es igualito."
  },
  {
    id: 'ap-d-4',
    type: 'multiple-choice',
    prompt: "Un triángulo con un ángulo obtuso es un...",
    options: ["Acutángulo", "Rectángulo", "Obtusángulo"],
    correctAnswer: "Obtusángulo",
    feedback: "¡Muy bien! Su nombre viene de su ángulo más abierto."
  },
  {
    id: 'ap-d-5',
    type: 'multiple-choice',
    prompt: "Tiene 4 lados iguales pero no ángulos rectos.",
    options: ["Cuadrado", "Rombo", "Trapecio"],
    correctAnswer: "Rombo",
    feedback: "¡Ojo de exploradora! Es el rombo. ¡Tiene forma de cometa!"
  },
  {
    id: 'ap-d-6',
    type: 'numeric',
    prompt: "Un ángulo que da la vuelta completa mide...",
    options: ["360"],
    correctAnswer: "360",
    feedback: "¡Perfecto! Una vuelta entera son 360 grados. ¡Eres una genia!"
  },
  {
    id: 'ap-d-7',
    type: 'multiple-choice',
    prompt: "¿Los cuadrados y rectángulos son paralelogramos?",
    options: ["Sí", "No"],
    correctAnswer: "Sí",
    feedback: "¡Eso es! Sus lados opuestos siempre son paralelos."
  },
  {
    id: 'ap-d-8',
    type: 'multiple-choice',
    prompt: "Un triángulo con 3 ángulos agudos es un...",
    options: ["Acutángulo", "Rectángulo", "Obtusángulo"],
    correctAnswer: "Acutángulo",
    feedback: "¡Genial! 'Agudo' y 'Acutángulo' empiezan casi igual."
  },
  {
    id: 'ap-d-9',
    type: 'numeric',
    prompt: "Cuadrado de 5 cm de lado. ¿Su perímetro es...?",
    options: ["20"],
    correctAnswer: "20",
    feedback: "¡Bravísimo! 5 + 5 + 5 + 5 = 20 cm. ¡Qué buen cálculo!"
  },
  {
    id: 'ap-d-10',
    type: 'multiple-choice',
    prompt: "Lados iguales 2 a 2 y no ángulos rectos.",
    options: ["Romboide", "Rectángulo", "Cuadrado"],
    correctAnswer: "Romboide",
    feedback: "¡Increíble! Es como un rectángulo que se ha inclinado."
  },
  {
    id: 'ap-d-11',
    type: 'numeric',
    prompt: "¿Cuánto suman los 4 ángulos de un cuadrado?",
    options: ["360"],
    correctAnswer: "360",
    feedback: "¡Súper! 4 ángulos de 90º suman 360º en total."
  },
  {
    id: 'ap-d-12',
    type: 'comparator',
    prompt: "Compara: Ángulo Llano ___ Dos Ángulos Rectos",
    options: ["=", "<", ">"],
    correctAnswer: "=",
    feedback: "¡Excelente! 180 es igual a 90 + 90. ¡Son gemelos!"
  },
  {
    id: 'ap-d-13',
    type: 'multiple-choice',
    prompt: "Un trapecio tiene solo 2 lados paralelos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    feedback: "¡Perfecto! Esa es la característica secreta del trapecio."
  },
  {
    id: 'ap-d-14',
    type: 'numeric',
    prompt: "Hexágono regular de 2 cm de lado. Perímetro...",
    options: ["12"],
    correctAnswer: "12",
    feedback: "¡Brillante! 6 lados x 2 cm = 12 cm de perímetro."
  },
  {
    id: 'ap-d-15',
    type: 'multiple-choice',
    prompt: "Reto: ¿Puede un triángulo tener 2 ángulos rectos?",
    options: ["No", "Sí"],
    correctAnswer: "No",
    feedback: "¡MISIÓN FINAL LOGRADA! No puede, porque se pasaría de 180º."
  }
];

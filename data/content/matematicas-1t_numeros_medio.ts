import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'numeric',
    prompt: "Escribe el número formado por 12 centenas y 5 unidades.",
    options: ["1205"],
    correctAnswer: "1205",
    feedback: "¡Ojo de exploradora! 10 centenas ya forman un millar. ¡Casi lo tienes!"
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    prompt: "En el número 54.302, ¿qué valor tiene la cifra 4?",
    options: ["400 unidades", "4.000 unidades", "40.000 unidades"],
    correctAnswer: "4.000 unidades",
    feedback: "¡Casi! El 4 está en las unidades de millar. ¡Buen intento!"
  },
  {
    id: 'q3',
    type: 'comparator',
    prompt: "Compara estos números: 89.099 ___ 89.100",
    options: ["<", ">"],
    correctAnswer: "<",
    feedback: "¡Recuerda que 100 es mayor que 99! ¡Sigue así, Valentina!"
  },
  {
    id: 'q4',
    type: 'numeric',
    prompt: "Escribe el número que va justo antes del 30.000.",
    options: ["29999"],
    correctAnswer: "29999",
    feedback: "¡Casi! Si a 30.000 le quitas uno, llegas al 29.999. ¡Ánimo!"
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "Aproxima el número 12.840 a la unidad de millar más cercana.",
    options: ["12.000", "13.000"],
    correctAnswer: "13.000",
    feedback: "¡Ojo! Como 840 es más de la mitad, subimos al 13.000."
  },
  {
    id: 'q6',
    type: 'multiple-choice',
    prompt: "Aproxima el número 45.390 a la centena más cercana.",
    options: ["45.300", "45.400"],
    correctAnswer: "45.400",
    feedback: "¡Recuerda mirar las decenas! 90 está muy cerca de la siguiente centena."
  },
  {
    id: 'q7',
    type: 'numeric',
    prompt: "Si sumas 2 decenas de millar a 15.000, ¿qué número obtienes?",
    options: ["35000"],
    correctAnswer: "35000",
    feedback: "¡Casi! 20.000 más 15.000 son 35.000. ¡Tú puedes!"
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    prompt: "Cómo se escribe el número 44 en números romanos?",
    options: ["XLIIII", "XLIV", "LXIV"],
    correctAnswer: "XLIV",
    feedback: "¡Casi! Recuerda que 40 es XL y 4 es IV. ¡Buen trabajo!"
  },
  {
    id: 'q9',
    type: 'numeric',
    prompt: "Cuál es el valor del número romano LIX?",
    options: ["59"],
    correctAnswer: "59",
    feedback: "¡Muy bien! L es 50 e IX es 9. ¡Eres una experta!"
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    prompt: "Cómo se llama el número ordinal 25.º?",
    options: ["Vigésimo quinto", "Vigesimoquinto", "Veinteavo"],
    correctAnswer: "Vigesimoquinto",
    feedback: "¡Ojo! Los ordinales del 21 al 29 se escriben en una palabra."
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "Cómo se llama el número ordinal 30.º?",
    options: ["Treintavo", "Trigésimo", "Treintésimo"],
    correctAnswer: "Trigésimo",
    feedback: "¡Eso es! El número 30 en una carrera es el trigésimo."
  },
  {
    id: 'q12',
    type: 'numeric',
    prompt: "Escribe con cifras: sesenta mil ochenta y dos.",
    options: ["60082"],
    correctAnswer: "60082",
    feedback: "¡Ojo de exploradora! No te olvides del cero en las centenas."
  },
  {
    id: 'q13',
    type: 'comparator',
    prompt: "Compara: 10 DM ___ 1 UM",
    options: ["<", ">"],
    correctAnswer: ">",
    feedback: "¡Casi! 10 decenas de millar es mucho más que un millar."
  },
  {
    id: 'q14',
    type: 'multiple-choice',
    prompt: "Qué número romano representa el 90?",
    options: ["LXXXX", "XC", "CM"],
    correctAnswer: "XC",
    feedback: "¡Recuerda! A 100 (C) le quitamos 10 (X) para hacer 90."
  },
  {
    id: 'q15',
    type: 'numeric',
    prompt: "Cuántas unidades son 3 decenas de millar y 2 centenas?",
    options: ["30200"],
    correctAnswer: "30200",
    feedback: "¡Excelente! 30.000 más 200 forman el 30.200. ¡Misión final lograda!"
  }
];

import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: '¿Qué fracción representa la mitad de una pizza?',
    options: ['1/3', '1/2', '1/4', '2/3'],
    correctAnswer: '1/2',
    feedback: 'Recuerda: La mitad significa partir algo en 2 partes iguales.',
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: 'Compara estas fracciones: 1/2 ___ 1/4',
    correctAnswer: '>',
    feedback: 'Piensa: ¿Qué es más grande? ¿Media tarta o un cuarto de tarta?',
  },
  {
    id: 'q3',
    type: 'numeric',
    prompt: 'Si tienes 4 manzanas y te comes 2, ¿qué fracción te queda? (Escribe la respuesta ej: 1/2)',
    correctAnswer: '1/2',
    feedback: '4 manzanas es el total. 2 es la parte. 2/4 es lo mismo que...',
  }
];
import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'p1',
    type: 'multiple-choice',
    prompt: '¿Cuál es la forma del planeta Tierra?',
    correctAnswer: 'Esférica',
    options: ['Plana', 'Esférica', 'Cuadrada', 'Triangular'],
    feedback: 'Recuerda que la Tierra es como una pelota, ¡es una esfera!'
  },
  {
    id: 'p2',
    type: 'comparator',
    prompt: 'La Tierra está formada mayormente por...',
    correctAnswer: 'Agua',
    options: ['Agua', 'Tierra'],
    feedback: '¡Fíjate en los océanos! Cubren casi todo el planeta.'
  },
  {
    id: 'p3',
    type: 'multiple-choice',
    prompt: '¿Cómo se llama el movimiento de la Tierra girando sobre sí misma?',
    correctAnswer: 'Rotación',
    options: ['Traslación', 'Rotación', 'Saltación', 'Vibración'],
    feedback: 'Es como una peonza que ROTA sobre sí misma.'
  },
  {
    id: 'p4',
    type: 'numeric',
    prompt: '¿Cuántas horas tarda la Tierra en dar una vuelta completa sobre sí misma?',
    correctAnswer: '24',
    feedback: 'Es lo que dura un día completo. Piensa en el número de horas.'
  },
  {
    id: 'p5',
    type: 'multiple-choice',
    prompt: '¿Qué nos da el Sol?',
    correctAnswer: 'Luz y calor',
    options: ['Frío y oscuridad', 'Luz y calor', 'Lluvia y viento'],
    feedback: 'El Sol es una gran bola de fuego que nos calienta e ilumina.'
  },
  {
    id: 'p6',
    type: 'comparator',
    prompt: '¿La Luna es una estrella o un satélite?',
    correctAnswer: 'Satélite',
    options: ['Estrella', 'Satélite'],
    feedback: 'La Luna gira alrededor de la Tierra, ¡así que es su satélite!'
  },
  {
    id: 'p7',
    type: 'multiple-choice',
    prompt: '¿En qué estación hace más calor?',
    correctAnswer: 'Verano',
    options: ['Invierno', 'Verano', 'Otoño', 'Primavera'],
    feedback: 'Es cuando vamos a la playa y comemos helados.'
  },
  {
    id: 'p8',
    type: 'numeric',
    prompt: '¿Cuántas estaciones tiene el año?',
    correctAnswer: '4',
    feedback: 'Primavera, Verano, Otoño e Invierno. ¡Cuéntalas!'
  },
  {
    id: 'p9',
    type: 'comparator',
    prompt: 'El movimiento alrededor del Sol se llama...',
    correctAnswer: 'Traslación',
    options: ['Rotación', 'Traslación'],
    feedback: 'La Tierra se TRASLADA (viaja) alrededor del Sol.'
  },
  {
    id: 'p10',
    type: 'multiple-choice',
    prompt: '¿Qué usamos para orientarnos y saber dónde está el Norte?',
    correctAnswer: 'La brújula',
    options: ['Un reloj', 'La brújula', 'Un termómetro'],
    feedback: 'Es un instrumento con una aguja imantada que señala el Norte.'
  }
];
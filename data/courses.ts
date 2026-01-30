// data\courses.ts
import { 
  Calculator,
  Sigma, 
  Asterisk,
  Triangle,
  BookOpen, 
  Divide, 
  Percent, 
  Pencil, 
  MessageCircle, 
  Book,
  Globe,
  Binary,
  Turtle,
  PersonStanding,
  BookMarked,
  House,
  Store,
  CloudSun,
  Earth,
  EarthIcon,
  CloudRain,
} from 'lucide-react';

export const COURSES_DATA = [
  {
    id: 'matematicas-1t',
    name: 'Matemáticas 1T',
    icon: Calculator,
    description: 'Números, sumas y formas divertidas.',
    colorClass: 'bg-pink-500',
    topics: [
      { id: 'numeros', name: 'Números', icon: Binary, description: 'Números de 4 y 5 cifras' },
      { id: 'sumas-restas', name: 'Sumas y restas', icon: Sigma, description: 'Números de 4 y 5 cifras' },
      { id: 'multiplicacion', name: 'Multiplicación', icon: Asterisk, description: 'Multiplica con 1 y 2 cifras y aprende las propiedades.' },
      { id: 'angulos-poligonos', name: 'Ángulos y polígonos', icon: Triangle, description: 'Triangulos, cuadriláteros, paralelogramos.' },
    ]
  },
  {
    id: 'natural-science-1t',
    name: 'Natural Science 1T',
    icon: Turtle,
    description: 'Exploring the Earth, body, and tech!',
    colorClass: 'bg-blue-500',
    topics: [
      { id: 'human-body', name: 'How do our bodies work?', icon: PersonStanding, description: 'Body systems that support life.' },
    ]
  },
  {
    id: 'coneixement-medi-1t',
    name: 'coneixement del medi 1T',
    icon: BookMarked,
    description: 'Descobrim la història, cultures.',
    colorClass: 'bg-yellow-500',
    topics: [
      { id: 'civilitzaciones', name: 'Les civilitzaciones clàssiques', icon: Store  , description: 'Antigues cultures, grans civilitzacions i llegats.' },
    ]
  },
  {
    id: 'coneixement-medi-2t',
    name: 'coneixement del medi 2T',
    icon: Earth,
    description: 'La Terra i els seus elements',
    colorClass: 'bg-yellow-500',
    topics: [
      { id: 'terra', name: "El nostre planeta: La Terra", icon: EarthIcon  , description: 'La Terra' },
      { id: 'atmosfera', name: "L'atmosfera", icon: CloudSun  , description: 'Atmosfera i clima terrestre' },
      { id: 'hidrosfera', name: "La hidrosfera", icon: CloudRain  , description: 'Hidrosfera' },
    ]
  },
  {
    id: 'lengua',
    name: 'Lengua',
    icon: BookOpen,
    description: 'Lectura, palabras y cuentos mágicos.',
    colorClass: 'bg-emerald-500',
    topics: [
      { id: 'adjetivos', name: 'Adjetivos y numerales ', icon: Book, description: 'Adjetivos con v - Numerales e indefinidos' },
      { id: 'gramatica', name: 'Gramática', icon: Pencil, description: 'Escribir bien' },
      { id: 'vocabulario', name: 'Vocabulario', icon: MessageCircle, description: 'Palabras nuevas' },
      { id: 'comprension', name: 'Lectura', icon: Book, description: 'Entender cuentos' },
    ]
  },
  {
    id: 'ingles',
    name: 'Inglés',
    icon: Globe,
    description: 'Hello! Aprende palabras nuevas.',
    colorClass: 'bg-orange-500',
    topics: [
      { id: 'colors', name: 'Colors', icon: Globe, description: 'Red, Blue, Green...' },
      { id: 'animals', name: 'Animals', icon: Globe, description: 'Cat, Dog, Lion...' },
    ]
  }
];

export const getSubjectById = (id: string) => COURSES_DATA.find(c => c.id === id);
export const getTopicById = (subjectId: string, topicId: string) => {
  const subject = getSubjectById(subjectId);
  return subject?.topics.find(t => t.id === topicId);
};
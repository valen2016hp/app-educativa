
import { Question } from '../../types';

export const questions: Question[] = [
  // FÀCILS (6)
  {
    id: 'eval-1',
    type: 'multiple-choice',
    prompt: "Com s'anomena la galàxia on vivim?",
    options: ["Via Làctia", "Andròmeda", "Sombrero"],
    correctAnswer: "Via Làctia",
    feedback: "Molt bon intent, continua així!"
  },
  {
    id: 'eval-2',
    type: 'comparator',
    prompt: "Quin d'aquests astres és un planeta?",
    options: ["Terra", "Sol"],
    correctAnswer: "Terra",
    feedback: "Gairebé ho tens, segueix concentrada!"
  },
  {
    id: 'eval-3',
    type: 'numeric',
    prompt: "Quantes hores triga la Terra a fer una volta sobre si mateixa?",
    options: [],
    correctAnswer: "24",
    feedback: "Bon esforç, tu pots!"
  },
  {
    id: 'eval-4',
    type: 'multiple-choice',
    prompt: "Com s'anomena la capa de tota l'aigua del planeta?",
    options: ["Atmosfera", "Hidrosfera", "Geosfera"],
    correctAnswer: "Hidrosfera",
    feedback: "Continua així, ho estàs fent molt bé!"
  },
  {
    id: 'eval-5',
    type: 'comparator',
    prompt: "Quin és el satèl·lit natural de la Terra?",
    options: ["Lluna", "Mart"],
    correctAnswer: "Lluna",
    feedback: "Molt bona feina, no t'aturis!"
  },
  {
    id: 'eval-6',
    type: 'multiple-choice',
    prompt: "Com es diu la capa de gasos que envolta la Terra?",
    options: ["Geosfera", "Atmosfera", "Hidrosfera"],
    correctAnswer: "Atmosfera",
    feedback: "Estàs molt a prop, segueix!"
  },

  // MITJANES (8)
  {
    id: 'eval-7',
    type: 'multiple-choice',
    prompt: "Quina és la forma real de la Terra?",
    options: ["Esfera perfecta", "Geoida", "Plana"],
    correctAnswer: "Geoida",
    feedback: "Bon intent, segueix així!"
  },
  {
    id: 'eval-8',
    type: 'numeric',
    prompt: "Cada quants anys tenim un any de traspàs?",
    options: [],
    correctAnswer: "4",
    feedback: "Molt bona concentració!"
  },
  {
    id: 'eval-9',
    type: 'numeric',
    prompt: "Quants dies triga la Lluna a completar el seu cicle?",
    options: [],
    correctAnswer: "28",
    feedback: "Ànims, tu pots amb tot!"
  },
  {
    id: 'eval-10',
    type: 'multiple-choice',
    prompt: "Com es diu la línia de Latitud 0º?",
    options: ["Equador", "Meridià de Greenwich", "Tròpic"],
    correctAnswer: "Equador",
    feedback: "Continua així, Valentina!"
  },
  {
    id: 'eval-11',
    type: 'multiple-choice',
    prompt: "A quina capa de l'atmosfera es formen els núvols?",
    options: ["Estratosfera", "Troposfera", "Exosfera"],
    correctAnswer: "Troposfera",
    feedback: "Ho estàs fent genial!"
  },
  {
    id: 'eval-12',
    type: 'comparator',
    prompt: "El moviment de rotació provoca...",
    options: ["Dia i nit", "Les estacions"],
    correctAnswer: "Dia i nit",
    feedback: "Gairebé ho tens!"
  },
  {
    id: 'eval-13',
    type: 'comparator',
    prompt: "El moviment de translació provoca...",
    options: ["Les estacions", "Dia i nit"],
    correctAnswer: "Les estacions",
    feedback: "Molt bona feina!"
  },
  {
    id: 'eval-14',
    type: 'multiple-choice',
    prompt: "Quan la Lluna té forma de D, és...",
    options: ["Quart creixent", "Quart minvant", "Lluna plena"],
    correctAnswer: "Quart creixent",
    feedback: "Segueix així, ho fas molt bé!"
  },

  // DIFÍCILS (6)
  {
    id: 'eval-15',
    type: 'multiple-choice',
    prompt: "Quin efecte desvia el vent per la rotació?",
    options: ["Efecte Coriolis", "Efecte Doppler", "Efecte Hivernacle"],
    correctAnswer: "Efecte Coriolis",
    feedback: "Molt bon esforç, segueix!"
  },
  {
    id: 'eval-16',
    type: 'multiple-choice',
    prompt: "A quina capa està la capa d'ozó?",
    options: ["Troposfera", "Estratosfera", "Mesosfera"],
    correctAnswer: "Estratosfera",
    feedback: "Ànims, ja gairebé acabes!"
  },
  {
    id: 'eval-17',
    type: 'numeric',
    prompt: "A quants km/h gira la Terra a l'Equador?",
    options: [],
    correctAnswer: "1670",
    feedback: "Increïble esforç!"
  },
  {
    id: 'eval-18',
    type: 'numeric',
    prompt: "Quants milions d'anys té la Terra?",
    options: [],
    correctAnswer: "4500",
    feedback: "Ets molt valenta, segueix!"
  },
  {
    id: 'eval-19',
    type: 'multiple-choice',
    prompt: "Com es diu la capa de les plaques tectòniques?",
    options: ["Astenosfera", "Litosfera", "Nucli"],
    correctAnswer: "Litosfera",
    feedback: "Molt bona feina!"
  },
  {
    id: 'eval-20',
    type: 'multiple-choice',
    prompt: "Quin meridià s'usa com a referència 0º?",
    options: ["Greenwich", "Equador", "Andes"],
    correctAnswer: "Greenwich",
    feedback: "Has arribat al final, molt bé!"
  }
];

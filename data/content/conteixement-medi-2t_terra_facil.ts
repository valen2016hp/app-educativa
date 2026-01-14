
import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: "Com s'anomena la galàxia on es troba el nostre Sistema Solar?",
    options: ["Andròmeda", "Via Làctia", "Sombrero"],
    correctAnswer: "Via Làctia",
    feedback: "Fantàstic! La Via Làctia és com el nostre barri gegant a l'univers."
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: "Quin d'aquests dos astres és un planeta i no un estel?",
    options: ["Sol", "Terra"],
    correctAnswer: "Terra",
    feedback: "Molt bé! La Terra és el planeta on vivim, mentre que el Sol és el nostre estel."
  },
  {
    id: 'q3',
    type: 'numeric',
    prompt: "Quantes hores triga la Terra a fer una volta completa sobre si mateixa (rotació)?",
    options: [],
    correctAnswer: "24",
    feedback: "Exacte! Aquestes 24 hores formen un dia sencer amb el seu dia i la seva nit."
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    prompt: "Com s'anomena la capa de la Terra formada per tota l'aigua (oceans, rius, gel)?",
    options: ["Atmosfera", "Geosfera", "Hidrosfera"],
    correctAnswer: "Hidrosfera",
    feedback: "Aigua a la vista! La Hidrosfera inclou tota l'aigua del planeta en els seus tres estats."
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "Quin moviment de la Terra dóna lloc a la successió del dia i la nit?",
    options: ["Rotació", "Translació", "Òrbita"],
    correctAnswer: "Rotació",
    feedback: "Així es fa! La Terra gira com una baldufa sobre el seu eix de rotació."
  },
  {
    id: 'q6',
    type: 'numeric',
    prompt: "Quants dies triga la Terra a fer una volta completa al voltant del Sol?",
    options: [],
    correctAnswer: "365",
    feedback: "Impressionant! Aquests 365 dies és el que anomenem un any."
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    prompt: "Si veiem la Lluna amb forma de lletra D, en quina fase es troba?",
    options: ["Quart minvant", "Quart creixent", "Lluna nova"],
    correctAnswer: "Quart creixent",
    feedback: "Recorda el truc: la Lluna és una mentonera! Si té forma de D, és que Creix (Quart creixent)."
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    prompt: "Com s'anomena la part gasosa (l'aire) que envolta la Terra i ens permet respirar?",
    options: ["Geosfera", "Atmosfera", "Hidrosfera"],
    correctAnswer: "Atmosfera",
    feedback: "Respirem fons! L'Atmosfera és la capa de gasos indispensable per a la vida."
  },
  {
    id: 'q9',
    type: 'comparator',
    prompt: "On podem trobar els continents i les muntanyes?",
    options: ["Geosfera", "Atmosfera"],
    correctAnswer: "Geosfera",
    feedback: "Ulls d'exploradora! La Geosfera és la part rocosa i sòlida del nostre planeta."
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    prompt: "Quin moviment fa que tinguem les quatre estacions (primavera, estiu, tardor i hivern)?",
    options: ["Rotació", "Translació", "Inèrcia"],
    correctAnswer: "Translació",
    feedback: "Molt bé! El viatge de la Terra al voltant del Sol es diu translació."
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "En quina fase de la Lluna no veiem gens de llum a la seva superfície?",
    options: ["Lluna plena", "Lluna nova", "Quart creixent"],
    correctAnswer: "Lluna nova",
    feedback: "Gairebé no es veu! A la Lluna nova, el Sol no il·lumina la cara que mirem nosaltres."
  },
  {
    id: 'q12',
    type: 'numeric',
    prompt: "Quants dies triga la Lluna a fer una volta completa al nostre planeta?",
    options: [],
    correctAnswer: "28",
    feedback: "Molt bona memòria! Cada 28 dies la Lluna completa el seu cicle al voltant de la Terra."
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "Si la Lluna té forma de lletra C, quina fase és?",
    options: ["Quart creixent", "Lluna plena", "Quart minvant"],
    correctAnswer: "Quart minvant",
    feedback: "Ben vist! Si té forma de C, la Lluna ens diu la veritat i és que Minva (Quart minvant)."
  },
  {
    id: 'q14',
    type: 'numeric',
    prompt: "Quantes fases lunars principals hi ha?",
    options: [],
    correctAnswer: "4",
    feedback: "Exacte! Són la Lluna nova, Quart creixent, Lluna plena i Quart minvant."
  },
  {
    id: 'q15',
    type: 'comparator',
    prompt: "Qui és l'únic satèl·lit natural de la Terra?",
    options: ["Sol", "Lluna"],
    correctAnswer: "Lluna",
    feedback: "Brilles com una estrella! La Lluna és el nostre únic satèl·lit i ens acompanya cada nit."
  }
];

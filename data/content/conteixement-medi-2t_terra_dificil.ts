import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: "Com s'anomena l'efecte que desvia la trajectòria dels vents a causa de la rotació de la Terra?",
    options: ["Efecte Coriolis", "Efecte Doppler", "Efecte Hivernacle"],
    correctAnswer: "Efecte Coriolis",
    feedback: "Ets una experta! L'Efecte Coriolis fa que els vents girin cap a la dreta a l'hemisferi nord i cap a l'esquerra al sud."
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: "Quina d'aquestes dues subcapes de la geosfera és rígida i inclou l'escorça?",
    options: ["Astenosfera", "Litosfera"],
    correctAnswer: "Litosfera",
    feedback: "Molt precís! La Litosfera és la capa externa i rígida que es trenca en les famoses plaques tectòniques."
  },
  {
    id: 'q3',
    type: 'numeric',
    prompt: "Quants milions d'anys té, aproximadament, el nostre planeta Terra?",
    options: [],
    correctAnswer: "4500",
    feedback: "Impressionant! La Terra té uns 4500 milions d'anys. És una història molt, molt llarga!"
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    prompt: "Quin nom rep el percentatge de radiació solar que la superfície terrestre reflecteix cap a l'espai?",
    options: ["Radiació gamma", "Albedo", "Magnetisme"],
    correctAnswer: "Albedo",
    feedback: "Brillant! L'Albedo és alt a la neu (perquè reflecteix molta llum) i baix a l'asfalt negre."
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "En quina capa externa de l'atmosfera orbiten els satèl·lits artificials i la Estació Espacial Internacional?",
    options: ["Troposfera", "Termosfera", "Estratosfera"],
    correctAnswer: "Termosfera",
    feedback: "Cap a les estrelles! La Termosfera és on es troben la majoria de satèl·lits i on es formen les aurores boreals."
  },
  {
    id: 'q6',
    type: 'numeric',
    prompt: "A quina velocitat aproximada (en km/h) gira la Terra sobre si mateixa a la línia de l'Equador?",
    options: [],
    correctAnswer: "1670",
    feedback: "Vas més ràpid que un avió! A l'Equador ens movem a 1670 km/h sense ni tan sols adonar-nos-en."
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    prompt: "Com s'anomena el procés on una placa tectònica s'enfonsa sota una altra cap al mantell?",
    options: ["Sedimentació", "Subducció", "Erosió"],
    correctAnswer: "Subducció",
    feedback: "Ets una gran geòloga! La Subducció és la responsable de molts volcans i terratrèmols poderosos."
  },
  {
    id: 'q8',
    type: 'comparator',
    prompt: "Quan el supercontinent Pangea es va dividir, quina part formava el continent del nord?",
    options: ["Gondwana", "Lauràsia"],
    correctAnswer: "Lauràsia",
    feedback: "Molt bona memòria! Lauràsia va donar lloc a l'actual Amèrica del Nord, Europa i Àsia."
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    prompt: "Quin científic va proposar per primer cop la teoria de la Deriva Continental l'any 1912?",
    options: ["Alfred Wegener", "Charles Darwin", "Isaac Newton"],
    correctAnswer: "Alfred Wegener",
    feedback: "Exacte! Alfred Wegener es va fixar que els continents encaixaven com les peces d'un trencaclosques."
  },
  {
    id: 'q10',
    type: 'numeric',
    prompt: "Quants metres de profunditat té, aproximadament, la Fossa de les Marianes, el punt més profund de l'oceà?",
    options: [],
    correctAnswer: "11000",
    feedback: "Al fons de tot! Són uns 11000 metres, suficient per submergir l'Everest i que encara sobri espai!"
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "Què mou les plaques tectòniques des de l'interior del mantell terrestre?",
    options: ["Corrents de convecció", "El vent solar", "Les marees"],
    correctAnswer: "Corrents de convecció",
    feedback: "Increïble! Els corrents de convecció són com l'aigua bullint que mou les plaques des de sota."
  },
  {
    id: 'q12',
    type: 'comparator',
    prompt: "L'escorça de la Terra és més densa sota els oceans o sota els continents?",
    options: ["Escorça Continental", "Escorça Oceànica"],
    correctAnswer: "Escorça Oceànica",
    feedback: "Ben vist! L'escorça oceànica és més fina però molt més densa i pesada que la continental."
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "Com s'anomena el moviment d'oscil·lació de l'eix de la Terra, similar al d'una baldufa quan perd força?",
    options: ["Translació", "Precessió", "Nutació"],
    correctAnswer: "Precessió",
    feedback: "Ets una experta en astronomia! La Precessió fa que l'estrella que marca el nord canviï molt lentament."
  },
  {
    id: 'q14',
    type: 'numeric',
    prompt: "Quants anys triga la Terra a completar un cicle sencer de precessió?",
    options: [],
    correctAnswer: "26000",
    feedback: "És un cicle gegantí! Triga uns 26000 anys a fer una volta completa com una baldufa."
  },
  {
    id: 'q15',
    type: 'multiple-choice',
    prompt: "Quina part del nucli terrestre es troba en estat líquid i crea el camp magnètic?",
    options: ["Nucli Intern", "Nucli Extern", "Manto Superior"],
    correctAnswer: "Nucli Extern",
    feedback: "Exploradora total! El Nucli Extern és de ferro líquid en moviment, i això ens protegeix del Sol amb un camp magnètic."
  }
];

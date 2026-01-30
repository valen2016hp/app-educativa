import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'h-q1',
    type: 'multiple-choice',
    prompt: "Què és la hidrosfera?",
    options: ["La capa formada per l'aigua de la Terra", "La capa de gasos", "La part de roques", "El nom d'un oceà"],
    correctAnswer: "La capa formada per l'aigua de la Terra",
    feedback: "Molt bé! Recorda que 'hidro' significa aigua, així que és la capa d'aigua del planeta."
  },
  {
    id: 'h-q2',
    type: 'comparator',
    prompt: "Com són les aigües dels oceans i els mars?",
    options: ["Salades", "Dolces"],
    correctAnswer: "Salades",
    feedback: "Exacte! L'aigua marina té sal, a diferència de la dels rius."
  },
  {
    id: 'h-q3',
    type: 'numeric',
    prompt: "En quants estats podem trobar l'aigua a la Terra segons el cicle? (Escriu el número)",
    options: [],
    correctAnswer: "3",
    feedback: "Correcte! L'aigua es presenta en estat sòlid, líquid i gasós."
  },
  {
    id: 'h-q4',
    type: 'multiple-choice',
    prompt: "Com es diu quan l'aigua cau dels núvols com a pluja o neu?",
    options: ["Precipitació", "Evaporació", "Condensació", "Filtració"],
    correctAnswer: "Precipitació",
    feedback: "Molt bé! Quan l'aigua 'cau' del cel, l'anomenem precipitació."
  },
  {
    id: 'h-q5',
    type: 'comparator',
    prompt: "On neixen normalment els rius?",
    options: ["A la muntanya", "Al mar"],
    correctAnswer: "A la muntanya",
    feedback: "Així es fa! Els rius comencen el seu camí des de llocs alts."
  },
  {
    id: 'h-q6',
    type: 'multiple-choice',
    prompt: "Quin d'aquests és un oceà?",
    options: ["Atlàntic", "Mediterrani", "Caspì", "Nil"],
    correctAnswer: "Atlàntic",
    feedback: "Genial! L'Atlàntic és un dels cinc grans oceans del món."
  },
  {
    id: 'h-q7',
    type: 'numeric',
    prompt: "Quants oceans hi ha a la Terra segons el text?",
    options: [],
    correctAnswer: "5",
    feedback: "Molt bé! Pacífic, Atlàntic, Índic, Àrtic i Antàrtic."
  },
  {
    id: 'h-q8',
    type: 'comparator',
    prompt: "L'aigua de les glaceres és dolça o salada?",
    options: ["Dolça", "Salada"],
    correctAnswer: "Dolça",
    feedback: "Correcte! Tot i ser gel, és aigua continental i per tant és dolça."
  },
  {
    id: 'h-q9',
    type: 'multiple-choice',
    prompt: "Com s'anomena el terreny per on passa un riu?",
    options: ["Llera", "Cabal", "Afluent", "Font"],
    correctAnswer: "Llera",
    feedback: "Ben fet! La llera és com el carril o el camí del riu."
  },
  {
    id: 'h-q10',
    type: 'numeric',
    prompt: "En quants trams o cursos es divideix un riu?",
    options: [],
    correctAnswer: "3",
    feedback: "Així és: curs alt, curs mitjà i curs baix."
  },
  {
    id: 'h-q11',
    type: 'multiple-choice',
    prompt: "Què és un afluent?",
    options: ["Un riu que desemboca en un altre riu", "Un llac molt petit", "Aigua subterrània", "El final del riu"],
    correctAnswer: "Un riu que desemboca en un altre riu",
    feedback: "Exacte! Un afluent no va directe al mar, sinó que ajuda a un altre riu."
  },
  {
    id: 'h-q12',
    type: 'comparator',
    prompt: "On és més ample un riu?",
    options: ["Al curs baix", "Al curs alt"],
    correctAnswer: "Al curs baix",
    feedback: "Molt bé! Al final del recorregut la llera té la seva màxima amplada."
  },
  {
    id: 'h-q13',
    type: 'multiple-choice',
    prompt: "Què s'anomena 'cabal'?",
    options: ["La quantitat d'aigua que porta un riu", "El soroll de l'aigua", "La velocitat del vent", "La temperatura del mar"],
    correctAnswer: "La quantitat d'aigua que porta un riu",
    feedback: "Correcte! Si un riu va molt ple, diem que té molt cabal."
  },
  {
    id: 'h-q14',
    type: 'numeric',
    prompt: "A quin curs correspon el naixement del riu?",
    options: [],
    correctAnswer: "1",
    feedback: "Això és! El naixement és al curs alt, la primera part del riu."
  },
  {
    id: 'h-q15',
    type: 'multiple-choice',
    prompt: "Què són els aiguamolls?",
    options: ["Zones de terra baixa que s'inunden", "Muntanyes de gel", "Coves sota el mar", "Rius subterranis"],
    correctAnswer: "Zones de terra baixa que s'inunden",
    feedback: "Molt bé! Són llocs on l'aigua i la terra es barregen."
  }
];
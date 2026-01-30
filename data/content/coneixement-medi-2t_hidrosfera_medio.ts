import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'h-m-q1',
    type: 'multiple-choice',
    prompt: "Gràcies a què és possible la conservació de l'aigua a la Terra?",
    options: ["Als canvis d'estat", "A la sal del mar", "A les muntanyes", "A la lluna"],
    correctAnswer: "Als canvis d'estat",
    feedback: "Molt bé! Sense els canvis d'estat (líquid, gas, sòlid) l'aigua no podria circular."
  },
  {
    id: 'h-m-q2',
    type: 'comparator',
    prompt: "En el procés d'evaporació, qui és el responsable d'escalfar l'aigua?",
    options: ["El Sol", "El vent"],
    correctAnswer: "El Sol",
    feedback: "Correcte! L'escalfor del Sol és el motor que inicia el cicle de l'aigua."
  },
  {
    id: 'h-m-q3',
    type: 'multiple-choice',
    prompt: "Què passa durant la condensació?",
    options: ["El vapor es refreda i forma núvols", "L'aigua cau com a neu", "L'aigua es filtra sota terra", "L'aigua es torna salada"],
    correctAnswer: "El vapor es refreda i forma núvols",
    feedback: "Perfecte! La condensació és quan el gas es torna líquid en gotetes petites."
  },
  {
    id: 'h-m-q4',
    type: 'numeric',
    prompt: "Quantes acumulacions d'aigua continental superficial s'esmenten (rius, llacs...)?",
    options: [],
    correctAnswer: "4",
    feedback: "Així és: rius, llacs i llacunes, aiguamolls i glaceres."
  },
  {
    id: 'h-m-q5',
    type: 'multiple-choice',
    prompt: "Com s'anomenen les acumulacions d'aigua subterrània?",
    options: ["Aqüífers", "Glaceres", "Afluents", "Llacs"],
    correctAnswer: "Aqüífers",
    feedback: "Ben dit! Els aqüífers són com magatzems d'aigua sota els nostres peus."
  },
  {
    id: 'h-m-q6',
    type: 'comparator',
    prompt: "On hi ha més pendent en un riu?",
    options: ["Al curs alt", "Al curs mitjà"],
    correctAnswer: "Al curs alt",
    feedback: "Molt bé! El pendent és fort perquè el riu baixa per la muntanya."
  },
  {
    id: 'h-m-q7',
    type: 'multiple-choice',
    prompt: "A quin curs arriba el riu a la plana?",
    options: ["Curs mitjà", "Curs alt", "Curs baix", "Al naixement"],
    correctAnswer: "Curs mitjà",
    feedback: "Correcte! Al curs mitjà el pendent és ja més moderat."
  },
  {
    id: 'h-m-q8',
    type: 'comparator',
    prompt: "Quin d'aquests és un mètode artificial per treure aigua de terra?",
    options: ["Pous", "Fonts"],
    correctAnswer: "Pous",
    feedback: "Exacte! Els pous els fem nosaltres; les fonts ragen soles."
  },
  {
    id: 'h-m-q9',
    type: 'multiple-choice',
    prompt: "Quina característica té el cabal al curs alt?",
    options: ["És escàs", "És el més abundant", "És salat", "No té aigua"],
    correctAnswer: "És escàs",
    feedback: "Molt bé! Com que acaba de néixer, encara porta poqueta aigua."
  },
  {
    id: 'h-m-q10',
    type: 'numeric',
    prompt: "En quin número de curs (1, 2 o 3) es troba la desembocadura?",
    options: [],
    correctAnswer: "3",
    feedback: "Així es fa! La desembocadura marca el final del curs baix."
  },
  {
    id: 'h-m-q11',
    type: 'multiple-choice',
    prompt: "Què són les llacunes?",
    options: ["Acumulacions d'aigua en depressions", "Rius subterranis", "Llocs on l'aigua es torna neu", "Mars petits"],
    correctAnswer: "Acumulacions d'aigua en depressions",
    feedback: "Genial! Ocupen zones on el relleu s'enfonsa una mica."
  },
  {
    id: 'h-m-q12',
    type: 'comparator',
    prompt: "Com és la llera al curs alt?",
    options: ["Estreta", "Màxima amplada"],
    correctAnswer: "Estreta",
    feedback: "Correcte! En el primer tram el riu és molt estret."
  },
  {
    id: 'h-m-q13',
    type: 'multiple-choice',
    prompt: "Què passa quan l'aigua cau com a precipitació?",
    options: ["Llisca per la terra fins a rius i mars", "S'atura per sempre", "Es torna salada a l'instant", "Vola directament al Sol"],
    correctAnswer: "Llisca per la terra fins a rius i mars",
    feedback: "Molt bé! Així es tanca el cercle per tornar a començar."
  },
  {
    id: 'h-m-q14',
    type: 'numeric',
    prompt: "Quants grans grups d'aigua hi ha a la Terra segons la seva salinitat?",
    options: [],
    correctAnswer: "2",
    feedback: "Exacte: Aigües marines i aigües continentals."
  },
  {
    id: 'h-m-q15',
    type: 'comparator',
    prompt: "Quina d'aquestes és una forma natural d'aflorament de l'aigua subterrània?",
    options: ["Deus o fonts", "Pous"],
    correctAnswer: "Deus o fonts",
    feedback: "Perfecte! Les deus o fonts són sortides naturals de l'aigua."
  }
];
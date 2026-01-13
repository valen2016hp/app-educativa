import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: "Què és l'atmosfera?",
    options: [
      "La capa d'aire que envolta la Terra",
      "La part sòlida de la Terra",
      "El conjunt de mars i oceans",
      "Els boscos i les muntanyes"
    ],
    correctAnswer: "La capa d'aire que envolta la Terra",
    feedback: "¡Muy bien! La atmósfera es como una gran manta de aire que protege nuestro planeta."
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: "Quin gas necessitem les persones per respirar?",
    options: ["Oxigen", "Diòxid de carboni"],
    correctAnswer: "Oxigen",
    feedback: "¡Exacto! El oxígeno es el 'supergas' que necesitamos los seres humanos para vivir."
  },
  {
    id: 'q3',
    type: 'multiple-choice',
    prompt: "A quina capa de l'atmosfera es formen els núvols?",
    options: [
      "Troposfera",
      "Estratosfera",
      "Exosfera",
      "Mesosfera"
    ],
    correctAnswer: "Troposfera",
    feedback: "¡Genial! La troposfera es la capa más bajita, donde vivimos nosotros y donde ocurren las lluvias."
  },
  {
    id: 'q4',
    type: 'numeric',
    prompt: "Quants graus marca el termòmetre quan l'aigua es congela? (Escriu el número)",
    options: [],
    correctAnswer: "0",
    feedback: "¡Perfecto! A los 0 grados hace tanto frío que el agua se vuelve hielo."
  },
  {
    id: 'q5',
    type: 'comparator',
    prompt: "Quin instrument serveix per mesurar la temperatura?",
    options: ["Termòmetre", "Pluviòmetre"],
    correctAnswer: "Termòmetre",
    feedback: "¡Bien hecho! El termómetro nos dice si hace calor o hay que ponerse abrigo."
  },
  {
    id: 'q6',
    type: 'multiple-choice',
    prompt: "Què mesura el pluviòmetre?",
    options: [
      "La quantitat de pluja que cau",
      "La velocitat del vent",
      "La temperatura de l'aire",
      "La direcció del vent"
    ],
    correctAnswer: "La quantitat de pluja que cau",
    feedback: "¡Correcto! 'Pluvio' viene de lluvia, así que mide cuánta agua ha caído."
  },
  {
    id: 'q7',
    type: 'comparator',
    prompt: "Classifica: La calamarsa (pedra) és aigua en estat...",
    options: ["Sòlid", "Líquid"],
    correctAnswer: "Sòlid",
    feedback: "¡Eso es! La calamarsa es hielo, y el hielo es sólido y duro."
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    prompt: "Què és el vent?",
    options: [
      "Aire en moviment",
      "Aire calent quiet",
      "Núvols que corren",
      "Vapor d'aigua"
    ],
    correctAnswer: "Aire en moviment",
    feedback: "¡Muy bien! Cuando el aire viaja de un sitio a otro, lo llamamos viento."
  },
  {
    id: 'q9',
    type: 'comparator',
    prompt: "Diferencia: 'Avui plou molt' es refereix al...",
    options: ["Temps", "Clima"],
    correctAnswer: "Temps",
    feedback: "¡Exacto! El 'Tiempo' es lo que pasa hoy mismo, como cuando miras por la ventana."
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    prompt: "Què li passa a la temperatura quan som a prop del mar?",
    options: [
      "És més suau",
      "És molt més freda",
      "És molt més calorosa",
      "El mar no canvia la temperatura"
    ],
    correctAnswer: "És més suau",
    feedback: "¡Bien pensado! El mar guarda el calorcito y hace que el clima sea más agradable."
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "Com és el Clima Oceànic (al nord d'Espanya)?",
    options: [
      "Plujós i amb paisatges verds",
      "Molt sec i calorós",
      "Amb neu tot l'any",
      "Desertic"
    ],
    correctAnswer: "Plujós i amb paisatges verds",
    feedback: "¡Correcto! Allí llueve bastante, por eso los bosques están siempre tan bonitos y verdes."
  },
  {
    id: 'q12',
    type: 'comparator',
    prompt: "Classifica: El clima de les Illes Canàries.",
    options: ["Subtropical", "Muntanya"],
    correctAnswer: "Subtropical",
    feedback: "¡Genial! Están cerca de África, así que tienen un clima calentito llamado Subtropical."
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "Quina capa ens protegeix dels raigs dolents del Sol (ultraviolats)?",
    options: [
      "Capa d'Ozó",
      "Els núvols",
      "El vent",
      "La boira"
    ],
    correctAnswer: "Capa d'Ozó",
    feedback: "¡Súper! La capa de ozono es el escudo solar de nuestro planeta."
  },
  {
    id: 'q14',
    type: 'comparator',
    prompt: "On fa més fred, a la platja o al cim d'una muntanya?",
    options: ["Muntanya", "Platja"],
    correctAnswer: "Muntanya",
    feedback: "¡Lógico! Cuanto más alto subimos, más fresquito hace. ¡A abrigarse!"
  },
  {
    id: 'q15',
    type: 'numeric',
    prompt: "Quantes capes principals té l'atmosfera? (Troposfera, Estratosfera, Mesosfera, Termosfera, Exosfera)",
    options: [],
    correctAnswer: "5",
    feedback: "¡Bien contado! Son 5 capas, como un edificio de 5 plantas hecho de aire."
  }
];
import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'med-1',
    type: 'multiple-choice',
    prompt: "Quin és el gas més abundant a l'atmosfera (78%)?",
    options: [
      "Nitrogen",
      "Oxigen",
      "Diòxid de carboni",
      "Vapor d'aigua"
    ],
    correctAnswer: "Nitrogen",
    feedback: "¡Sorpresa! Aunque respiramos oxígeno, el nitrógeno es el gas que ocupa más espacio en el aire."
  },
  {
    id: 'med-2',
    type: 'comparator',
    prompt: "On es troba la capa d'Ozó que ens protegeix?",
    options: ["Troposfera", "Estratosfera"],
    correctAnswer: "Estratosfera",
    feedback: "¡Exacto! La capa de ozono está en el segundo piso (Estratosfera), actuando como unas gafas de sol gigantes."
  },
  {
    id: 'med-3',
    type: 'multiple-choice',
    prompt: "Què passa amb la temperatura quan pugem a molta altitud?",
    options: [
      "La temperatura baixa (fa més fred)",
      "La temperatura puja (fa més calor)",
      "La temperatura es queda igual",
      "L'aire desapareix de cop"
    ],
    correctAnswer: "La temperatura baixa (fa més fred)",
    feedback: "¡Correcto! Por eso en la cima de las montañas altas hay nieve incluso en verano."
  },
  {
    id: 'med-4',
    type: 'comparator',
    prompt: "Quin instrument mesura la pressió de l'aire?",
    options: ["Baròmetre", "Anemòmetre"],
    correctAnswer: "Baròmetre",
    feedback: "¡Bien! El barómetro nos dice cuánto 'pesa' el aire sobre nosotros."
  },
  {
    id: 'med-5',
    type: 'multiple-choice',
    prompt: "Per què les temperatures a la costa són més suaus?",
    options: [
      "Perquè el mar s'escalfa i es refreda lentament",
      "Perquè a la costa sempre fa sol",
      "Perquè els peixos donen calor",
      "Perquè hi ha menys núvols"
    ],
    correctAnswer: "Perquè el mar s'escalfa i es refreda lentament",
    feedback: "¡Muy bien! El mar funciona como un regulador térmico, evitando cambios bruscos de temperatura."
  },
  {
    id: 'med-6',
    type: 'comparator',
    prompt: "Diferencia: Instrument per saber la direcció del vent.",
    options: ["Penell", "Anemòmetre"],
    correctAnswer: "Penell",
    feedback: "¡Eso es! El penell (o veleta) señala hacia dónde va el viento, el anemómetro mide su velocidad."
  },
  {
    id: 'med-7',
    type: 'multiple-choice',
    prompt: "Quina és la característica principal del Clima Mediterrani a l'estiu?",
    options: [
      "Calorós i molt sec",
      "Fred i plujós",
      "Suau i amb molta boira",
      "Constantment nevat"
    ],
    correctAnswer: "Calorós i molt sec",
    feedback: "¡Correcto! En el Mediterráneo, los veranos son famosos por el sol y la poca lluvia (sequía)."
  },
  {
    id: 'med-8',
    type: 'numeric',
    prompt: "Quants factors principals modifiquen el clima? (Latitud, Altitud i Distància al mar)",
    options: [],
    correctAnswer: "3",
    feedback: "¡Perfecto! Son los 3 grandes 'trucos' de la naturaleza para cambiar el clima de un lugar."
  },
  {
    id: 'med-9',
    type: 'comparator',
    prompt: "Classifica: El bosc de Fulla Caduca (arbres que perden la fulla) és típic del clima...",
    options: ["Oceànic", "Mediterrani"],
    correctAnswer: "Oceànic",
    feedback: "¡Bien visto! En el clima Oceánico llueve tanto que los árboles pueden permitirse renovar todas sus hojas cada año."
  },
  {
    id: 'med-10',
    type: 'multiple-choice',
    prompt: "Què és l'efecte hivernacle natural?",
    options: [
      "Un fenomen que reté calor i permet la vida",
      "Un tipus de cultiu de tomaqueres",
      "La contaminació dels cotxes",
      "El fred extrem dels pols"
    ],
    correctAnswer: "Un fenomen que reté calor i permet la vida",
    feedback: "¡Exacto! Sin este efecto 'manta', la Tierra sería una bola de hielo congelada."
  },
  {
    id: 'med-11',
    type: 'comparator',
    prompt: "On es produeixen les Aurores Boreals?",
    options: ["Termosfera", "Troposfera"],
    correctAnswer: "Termosfera",
    feedback: "¡Genial! Ocurren muy arriba, en la Termosfera, donde el sol choca con la atmósfera."
  },
  {
    id: 'med-12',
    type: 'multiple-choice',
    prompt: "Com es diu el procés on el vapor d'aigua es converteix en núvol (líquid)?",
    options: [
      "Condensació",
      "Evaporació",
      "Precipitació",
      "Fusió"
    ],
    correctAnswer: "Condensació",
    feedback: "¡Correcto! El gas se enfría y se 'condensa' formando gotitas pequeñitas que vemos como nubes."
  },
  {
    id: 'med-13',
    type: 'multiple-choice',
    prompt: "Quin clima té temperatures extremes (molt fred a l'hivern, molt calor a l'estiu)?",
    options: [
      "Continental (Interior)",
      "Oceànic",
      "Subtropical",
      "De Muntanya"
    ],
    correctAnswer: "Continental (Interior)",
    feedback: "¡Bien! Al estar lejos del mar, la tierra se calienta y enfría muy rápido, creando temperaturas extremas."
  },
  {
    id: 'med-14',
    type: 'comparator',
    prompt: "Quin instrument mesura la humitat de l'aire?",
    options: ["Higròmetre", "Termòmetre"],
    correctAnswer: "Higròmetre",
    feedback: "¡Bravo! El higrómetro nos dice cuánto vapor de agua invisible hay flotando a nuestro alrededor."
  },
  {
    id: 'med-15',
    type: 'numeric',
    prompt: "A quina alçada aproximada (en km) acaba la Troposfera? (Escriu 12, 50 o 100)",
    options: [],
    correctAnswer: "12",
    feedback: "¡Muy bien! Es una capa finita, de unos 12 km, donde ocurre todo el clima que conocemos."
  }
];
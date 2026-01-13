import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'hard-1',
    type: 'multiple-choice',
    prompt: "A quina capa de l'atmosfera es desintegren la majoria de meteorits?",
    options: [
      "Mesosfera",
      "Troposfera",
      "Estratosfera",
      "Exosfera"
    ],
    correctAnswer: "Mesosfera",
    feedback: "¡Impresionante! La Mesosfera es el escudo que quema las rocas espaciales antes de que lleguen al suelo."
  },
  {
    id: 'hard-2',
    type: 'comparator',
    prompt: "Diferencia: Vegetació formada per arbustos alts i espessos al clima Mediterrani.",
    options: ["Màquia", "Garriga"],
    correctAnswer: "Màquia",
    feedback: "¡Exacto! La Màquia es densa y casi no deja pasar; la Garriga es más bajita y con hierbas aromáticas."
  },
  {
    id: 'hard-3',
    type: 'numeric',
    prompt: "Quin percentatge d'Oxigen hi ha aproximadament a l'aire? (Escriu el número: 21, 50 o 78)",
    options: [],
    correctAnswer: "21",
    feedback: "¡Correcto! Solo el 21% es oxígeno, pero es justo lo que necesitamos para vivir."
  },
  {
    id: 'hard-4',
    type: 'multiple-choice',
    prompt: "Què indiquen les isobares en un mapa del temps?",
    options: [
      "Línies que uneixen punts amb la mateixa pressió atmosfèrica",
      "Línies que marquen la temperatura de l'aigua",
      "El camí que fan els ocells migratoris",
      "Les zones on plourà segur"
    ],
    correctAnswer: "Línies que uneixen punts amb la mateixa pressió atmosfèrica",
    feedback: "¡Brillante! Las isobaras nos ayudan a predecir si vendrá un anticiclón o una borrasca."
  },
  {
    id: 'hard-5',
    type: 'comparator',
    prompt: "Classifica: Zona d'alta pressió que porta temps estable i assolellat.",
    options: ["Anticicló", "Borrasca"],
    correctAnswer: "Anticicló",
    feedback: "¡Muy bien! El Anticiclón 'aplasta' las nubes y nos deja cielos despejados."
  },
  {
    id: 'hard-6',
    type: 'multiple-choice',
    prompt: "Quina és la vegetació típica de les Illes Canàries (Clima Subtropical)?",
    options: [
      "Laurisilva i Drago",
      "Fagedes i Rouredes",
      "Avets i Pi Negre",
      "Cactus i Palmeres només"
    ],
    correctAnswer: "Laurisilva i Drago",
    feedback: "¡Fantástico! La Laurisilva es un bosque húmedo muy antiguo, casi mágico, típico de allí."
  },
  {
    id: 'hard-7',
    type: 'numeric',
    prompt: "Fins a quants quilòmetres d'altura arriba aproximadament l'Exosfera (límit amb l'espai)?",
    options: [],
    correctAnswer: "10000",
    feedback: "¡Increíble! Es la capa más externa y lejana, donde orbitan nuestros satélites."
  },
  {
    id: 'hard-8',
    type: 'multiple-choice',
    prompt: "Què és l'amplitud tèrmica?",
    options: [
      "La diferència entre la temperatura màxima i la mínima",
      "La calor que fa a l'estiu",
      "La quantitat de roba que portem",
      "La velocitat a la que canvia el vent"
    ],
    correctAnswer: "La diferència entre la temperatura màxima i la mínima",
    feedback: "¡Exacto! Es la 'distancia' entre el momento más frío y el más caliente del día o del año."
  },
  {
    id: 'hard-9',
    type: 'comparator',
    prompt: "On és més alta la pressió atmosfèrica?",
    options: ["Nivell del mar", "Cim d'una muntanya"],
    correctAnswer: "Nivell del mar",
    feedback: "¡Lógico! Abajo tenemos toda la columna de aire encima de nuestras cabezas, por eso pesa más."
  },
  {
    id: 'hard-10',
    type: 'multiple-choice',
    prompt: "Per què a l'Estratosfera augmenta la temperatura?",
    options: [
      "Perquè la capa d'ozó absorbeix els raigs ultraviolats",
      "Perquè està més a prop del nucli de la Terra",
      "Perquè hi ha molts volcans",
      "No augmenta, sempre disminueix"
    ],
    correctAnswer: "Perquè la capa d'ozó absorbeix els raigs ultraviolats",
    feedback: "¡Muy bien deducido! Al atrapar la energía del sol, la capa de ozono se calienta."
  },
  {
    id: 'hard-11',
    type: 'comparator',
    prompt: "Classifica: Arbres típics del Clima Oceànic (fulla caduca).",
    options: ["Roure i Faig", "Alzina i Suro"],
    correctAnswer: "Roure i Faig",
    feedback: "¡Perfecto! El Roble (Roure) y el Haya (Faig) necesitan mucha humedad y pierden la hoja en invierno."
  },
  {
    id: 'hard-12',
    type: 'numeric',
    prompt: "Quants anys de dades es necessiten per definir el clima d'una zona? (Mínim)",
    options: [],
    correctAnswer: "30",
    feedback: "¡Eso es! No basta con mirar un día; los científicos necesitan estudiar al menos 30 años de datos."
  },
  {
    id: 'hard-13',
    type: 'multiple-choice',
    prompt: "Quina característica defineix la Vegetació de Muntanya?",
    options: [
      "Està esglaonada en pisos segons l'altitud",
      "És tota igual des de baix fins a dalt",
      "Només hi ha cactus",
      "No hi ha arbres, només herba"
    ],
    correctAnswer: "Està esglaonada en pisos segons l'altitud",
    feedback: "¡Correcto! A medida que subes, cambia el paisaje: cultivos, luego pinos, y al final solo prados."
  },
  {
    id: 'hard-14',
    type: 'comparator',
    prompt: "Diferencia: Clima amb estius frescos i hiverns suaus, amb pluges regulars.",
    options: ["Oceànic", "Continental"],
    correctAnswer: "Oceànic",
    feedback: "¡Bien! El Oceánico es suave y húmedo. El Continental es el 'bestia' de los extremos."
  },
  {
    id: 'hard-15',
    type: 'multiple-choice',
    prompt: "Quin gas és el principal responsable de l'augment de l'efecte hivernacle artificial?",
    options: [
      "Diòxid de carboni (CO2)",
      "Oxigen (O2)",
      "Nitrogen (N)",
      "Argó (Ar)"
    ],
    correctAnswer: "Diòxid de carboni (CO2)",
    feedback: "¡Importante saberlo! El exceso de CO2 por la contaminación está calentando demasiado el planeta."
  }
];
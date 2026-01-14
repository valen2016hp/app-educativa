
import { Question } from '../../types';

export const questions: Question[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    prompt: "En quina capa de l'atmosfera es produeixen els fenòmens meteorològics com la pluja o la neu?",
    options: ["Estratosfera", "Troposfera", "Mesosfera"],
    correctAnswer: "Troposfera",
    feedback: "Molt bé! La Troposfera és la capa més baixa i és on hi ha prou aire i vapor d'aigua per formar els núvols."
  },
  {
    id: 'q2',
    type: 'comparator',
    prompt: "Si viatgem cap a l'interior del planeta, quina d'aquestes dues capes de la Geosfera trobarem primer?",
    options: ["Mantell", "Escorça"],
    correctAnswer: "Escorça",
    feedback: "Ets una gran geòloga! L'Escorça és la pell fina i rocosa de la Terra on caminem."
  },
  {
    id: 'q3',
    type: 'numeric',
    prompt: "Cada quants anys s'afegeix un dia al calendari per crear un any de traspàs?",
    options: [],
    correctAnswer: "4",
    feedback: "Exacte! Com que un any dura realment 365 dies i 6 hores, cada 4 anys sumem aquestes hores per fer un dia extra."
  },
  {
    id: 'q4',
    type: 'multiple-choice',
    prompt: "Com s'anomena la línia imaginària que divideix la Terra en l'Hemisferi Nord i l'Hemisferi Sud?",
    options: ["Meridià de Greenwich", "Equador", "Tròpic de Càncer"],
    correctAnswer: "Equador",
    feedback: "Perfecte! L'Equador és el cinturó imaginari que divideix el nostre planeta exactament per la meitat."
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    prompt: "Quin fenomen es produeix quan la Lluna s'interposa exactament entre el Sol i la Terra?",
    options: ["Eclipsi de Lluna", "Eclipsi de Sol", "Marea alta"],
    correctAnswer: "Eclipsi de Sol",
    feedback: "Quina vista! En un eclipsi de Sol, la Lluna ens tapa la llum del nostre estel per uns minuts."
  },
  {
    id: 'q6',
    type: 'numeric',
    prompt: "Quants graus d'inclinació té aproximadament l'eix de la Terra?",
    options: [],
    correctAnswer: "23",
    feedback: "Impressionant! Aquesta inclinació de 23 graus és la responsable que tinguem estacions diferents."
  },
  {
    id: 'q7',
    type: 'multiple-choice',
    prompt: "Quin és el gas més abundant a l'aire de la nostra atmosfera?",
    options: ["Oxigen", "Dioxid de carboni", "Nitrogen"],
    correctAnswer: "Nitrogen",
    feedback: "Sorpresa! Tot i que necessitem l'oxigen per respirar, el Nitrogen ocupa quasi el 80% de l'aire."
  },
  {
    id: 'q8',
    type: 'comparator',
    prompt: "Quin tipus d'aigua és més abundant a la Hidrosfera terrestre?",
    options: ["Aigua dolça", "Aigua salada"],
    correctAnswer: "Aigua salada",
    feedback: "Així és! El 97% de l'aigua del món és salada i es troba als oceans i mars."
  },
  {
    id: 'q9',
    type: 'multiple-choice',
    prompt: "Com anomenem la distància angular d'un punt qualsevol de la Terra respecte al Meridià de Greenwich?",
    options: ["Latitud", "Longitud", "Altitud"],
    correctAnswer: "Longitud",
    feedback: "Molt precisa! La Longitud ens indica si un punt està a l'est o a l'oest del meridià principal."
  },
  {
    id: 'q10',
    type: 'numeric',
    prompt: "Quants minuts triga aproximadament la llum del Sol a arribar a la Terra?",
    options: [],
    correctAnswer: "8",
    feedback: "Viatges a la velocitat de la llum! Triga uns 8 minuts a creuar l'espai fins a nosaltres."
  },
  {
    id: 'q11',
    type: 'multiple-choice',
    prompt: "En quina capa de l'atmosfera es troba la capa d'ozó que ens protegeix dels raigs ultraviolats?",
    options: ["Troposfera", "Estratosfera", "Exosfera"],
    correctAnswer: "Estratosfera",
    feedback: "Gran record! L'Estratosfera guarda l'ozó, que actua com unes ulleres de sol per a tot el planeta."
  },
  {
    id: 'q12',
    type: 'comparator',
    prompt: "Quin d'aquests dos punts de l'òrbita terrestre representa la distància més propera al Sol?",
    options: ["Afeli", "Periheli"],
    correctAnswer: "Periheli",
    feedback: "Ben jugat! El Periheli és quan la Terra està més a prop del Sol, tot i que no és quan fa més calor!"
  },
  {
    id: 'q13',
    type: 'multiple-choice',
    prompt: "Quina força és la principal responsable de les marees als nostres oceans?",
    options: ["El magnetisme", "La gravetat de la Lluna", "El vent"],
    correctAnswer: "La gravetat de la Lluna",
    feedback: "Increïble! La gravetat de la Lluna estira l'aigua dels oceans cap a ella com un imant gegant."
  },
  {
    id: 'q14',
    type: 'numeric',
    prompt: "A quina temperatura aproximada es troba el nucli intern de la Terra (en graus Celsius)?",
    options: [],
    correctAnswer: "6000",
    feedback: "Quina calor! El centre de la Terra està a uns 6000 graus, gairebé tant calent com la superfície del Sol."
  },
  {
    id: 'q15',
    type: 'multiple-choice',
    prompt: "Com s'anomena la forma real de la Terra, que està una mica aplanada pels pols?",
    options: ["Esfera", "Geoida", "Cercle"],
    correctAnswer: "Geoida",
    feedback: "Ets una experta! La Terra no és una pilota perfecta, la seva forma científica s'anomena Geoida."
  }
];

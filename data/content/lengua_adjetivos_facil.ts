import { Question } from '../../types';

export const questions: Question[] = [
{
id: 'q1',
type: "multiple-choice",
prompt: "Completa la palabra: El pelaje del conejo es muy sua__e.",
options: ["b", "v"],
correctAnswer: "v",
feedback: "¡Genial! Los adjetivos terminados en -ave se escriben siempre con v."
},
{
id: 'q2',
type: "multiple-choice",
prompt: "¿Cuál de estas palabras está escrita correctamente?",
options: ["Nuebo", "Nuevo", "Nüevo"],
correctAnswer: "Nuevo",
feedback: "¡Así es! Las palabras terminadas en -evo van con v."
},
{
id: 'q3',
type: "comparator",
prompt: "Lee la frase: 'Tengo tres lápices'. La palabra 'tres' es un...",
options: ["Numeral", "Indefinido", "="],
correctAnswer: "Numeral",
feedback: "¡Correcto! Tres es una cantidad exacta, por eso es un numeral."
},
{
id: 'q4',
type: "multiple-choice",
prompt: "Selecciona el adjetivo que significa 'que crea cosas nuevas'.",
options: ["Creatibo", "Creativo"],
correctAnswer: "Creativo",
feedback: "¡Muy bien! Las terminaciones -ivo e -iva se escriben con v."
},
{
id: 'q5',
type: "comparator",
prompt: "En 'Hay muchos alumnos', la palabra 'muchos' es...",
options: ["Numeral", "Indefinido", "="],
correctAnswer: "Indefinido",
feedback: "¡Exacto! Muchos no nos dice el número exacto, es una cantidad imprecisa."
},
{
id: 'q6',
type: "multiple-choice",
prompt: "¿Cuál de estos es un numeral ordinal (indica orden)?",
options: ["Cuatro", "Cuarto"],
correctAnswer: "Cuarto",
feedback: "¡Perfecto! Cuarto indica la posición (orden), mientras que cuatro es la cantidad."
},
{
id: 'q7',
type: "multiple-choice",
prompt: "El antónimo (contrario) de 'antiguo' es...",
options: ["Biejo", "Moderno", "Nuebo"],
correctAnswer: "Moderno",
feedback: "¡Bien pensado! Aunque 'nuevo' también es contrario, aquí buscamos la palabra bien escrita o con sentido."
},
{
id: 'q8',
type: "numeric",
prompt: "Si vives en el quinto piso, ¿qué número pulsas en el ascensor?",
options: [],
correctAnswer: "5",
feedback: "¡Bravo! El numeral ordinal quinto corresponde al número 5."
},
{
id: 'q9',
type: "multiple-choice",
prompt: "Completa la frase: Fue una reunión muy bre__e (corta).",
options: ["be", "ve"],
correctAnswer: "ve",
feedback: "¡Correcto! Los adjetivos terminados en -eve se escriben con v."
},
{
id: 'q10',
type: "multiple-choice",
prompt: "¿Qué palabra es un indefinido?",
options: ["Diez", "Algunos", "Primero"],
correctAnswer: "Algunos",
feedback: "¡Estupendo! Algunos no dice cuántos hay exactamente."
},
{
id: 'q11',
type: "multiple-choice",
prompt: "El león del cuento era muy fiero y bra__o.",
options: ["v", "b"],
correctAnswer: "v",
feedback: "¡Sigue así! Las terminaciones -avo y -ava se escriben con v."
},
{
id: 'q12',
type: "comparator",
prompt: "Clasifica la palabra destacada: 'Llegué en primer lugar'.",
options: ["Cardinal", "Ordinal", "="],
correctAnswer: "Ordinal",
feedback: "¡Muy bien! Primero indica el orden de llegada."
},
{
id: 'q13',
type: "multiple-choice",
prompt: "Elige la opción correcta para: 'Una actitud positi__a'.",
options: ["b", "v"],
correctAnswer: "v",
feedback: "¡Correcto! Recuerda la regla: -iva siempre con v."
},
{
id: 'q14',
type: "multiple-choice",
prompt: "¿Qué grupo contiene solo numerales cardinales?",
options: ["Uno, dos, tres", "Primero, segundo, tercero", "Muchos, pocos, bastantes"],
correctAnswer: "Uno, dos, tres",
feedback: "¡Excelente! Los cardinales son los números que usamos para contar cantidades exactas."
},
{
id: 'q15',
type: "multiple-choice",
prompt: "Selecciona la palabra bien escrita:",
options: ["Octabo", "Octavo", "Octauo"],
correctAnswer: "Octavo",
feedback: "¡Lo tienes! Octavo viene de ocho y termina en -avo, por eso va con v."
}
];
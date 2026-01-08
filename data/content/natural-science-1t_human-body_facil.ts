import { Question } from '../../types';

export const questions: Question[] = [
  { id: 'e1', type: 'multiple-choice', prompt: "All living things are made of small **cells**.", options: ["Tissues", "Cells", "Organs"], correctAnswer: "Cells", feedback: "¡Correcto! Las **cells** (células) son los bloques básicos de la vida." },
  { id: 'e2', type: 'multiple-choice', prompt: "**Unicellular** organisms only have one **cell**.", options: ["One", "Many", "Zero"], correctAnswer: "One", feedback: "¡Bien hecho! Los seres **unicellular** tienen una sola célula." },
  { id: 'e3', type: 'multiple-choice', prompt: "Groups of the same cell form **tissues**.", options: ["Systems", "Organs", "Tissues"], correctAnswer: "Tissues", feedback: "¡Exacto! Los **tissues** (tejidos) son grupos de células iguales." },
  { id: 'e4', type: 'multiple-choice', prompt: "The **stomach** is part of the **digestive system**.", options: ["Respiratory", "Digestive", "Excretory"], correctAnswer: "Digestive", feedback: "¡Así es! El **stomach** (estómago) ayuda a digerir la comida." },
  { id: 'e5', type: 'multiple-choice', prompt: "The **stomach** pushes food into the **small intestine**.", options: ["Heart", "Small intestine", "Lungs"], correctAnswer: "Small intestine", feedback: "¡Genial! Los nutrientes pasan a la sangre en el **small intestine**." },
  { id: 'e6', type: 'multiple-choice', prompt: "We take **oxygen** from the air to **breathe**.", options: ["Water", "Oxygen", "Food"], correctAnswer: "Oxygen", feedback: "¡Muy bien! Usamos los **lungs** para obtener **oxygen** (oxígeno)." },
  { id: 'e7', type: 'multiple-choice', prompt: "The **diaphragm** is a muscle for **breathing**.", options: ["Heart", "Trachea", "Diaphragm"], correctAnswer: "Diaphragm", feedback: "¡Correcto! El **diaphragm** (diafragma) ayuda a los pulmones." },
  { id: 'e8', type: 'multiple-choice', prompt: "The **heart** pumps **blood** around the body.", options: ["Blood", "Air", "Nutrients"], correctAnswer: "Blood", feedback: "¡Exacto! El **heart** (corazón) reparte la **blood** (sangre)." },
  { id: 'e9', type: 'multiple-choice', prompt: "The **kidneys** remove waste from the **blood**.", options: ["Lungs", "Kidneys", "Stomach"], correctAnswer: "Kidneys", feedback: "¡Bien! Los **kidneys** (riñones) filtran los desechos de la sangre." },
  { id: 'e10', type: 'multiple-choice', prompt: "A baby grows inside the **uterus**.", options: ["Ovaries", "Vagina", "Uterus"], correctAnswer: "Uterus", feedback: "¡Correcto! El **uterus** (útero) protege al bebé mientras crece." },
  { id: 'e11', type: 'multiple-choice', prompt: "The **trachea** is a tube for **air**.", options: ["Food", "Air", "Water"], correctAnswer: "Air", feedback: "¡Bien! La **trachea** (traquea) es por donde pasa el aire." },
  { id: 'e12', type: 'multiple-choice', prompt: "**Nutrients** from food go into the **blood**.", options: ["Waste", "Blood", "Air"], correctAnswer: "Blood", feedback: "¡Eso es! Los **nutrients** (nutrientes) viajan por la sangre." },
  { id: 'e13', type: 'multiple-choice', prompt: "**Waste** leaves the body as **urine**.", options: ["Urine", "Blood", "Oxygen"], correctAnswer: "Urine", feedback: "¡Correcto! La **urine** (orina) es una forma de eliminar desechos." },
  { id: 'e14', type: 'multiple-choice', prompt: "The **ovaries** are part of the female **system**.", options: ["Male", "Female", "Respiratory"], correctAnswer: "Female", feedback: "¡Exacto! Los **ovaries** (ovarios) son del sistema reproductor femenino." },
  { id: 'e15', type: 'multiple-choice', prompt: "Humans are **multicellular** and have many **cells**.", options: ["One", "Many", "Zero"], correctAnswer: "Many", feedback: "¡Muy bien! Somos **multicellular** porque tenemos billones de células." }
];

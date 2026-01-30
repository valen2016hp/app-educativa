// // data\content\index.ts
// import { Question } from '../../types';
// import { questions as mat1t_frac_facil } from './matematicas1t_fracciones_facil';

// import { questions as len_adj_v_facil } from './lengua_adjetivos_facil';
// import { questions as len_adj_v_medio } from './lengua_adjetivos_medio';
// import { questions as len_adj_v_dificil } from './lengua_adjetivos_dificil';
// import { questions as len_adj_v_evaluacion } from './lengua_adjetivos_evaluacion';

// import { questions as mat1t_num_facil } from './matematicas-1t_numeros_facil';
// import { questions as mat1t_num_medio } from './matematicas-1t_numeros_medio';
// import { questions as mat1t_num_dificil } from './matematicas-1t_numeros_dificil';
// import { questions as mat1t_num_evaluacion } from './matematicas-1t_numeros_evaluacion';

// import { questions as mat1t_sumres_facil } from './matematicas-1t_sumas-restas_facil';
// import { questions as mat1t_sumres_medio } from './matematicas-1t_sumas-restas_medio';
// import { questions as mat1t_sumres_dificil } from './matematicas-1t_sumas-restas_dificil';
// import { questions as mat1t_sumres_evaluacion } from './matematicas-1t_sumas-restas_evaluacion';

// import { questions as mat1t_mult_facil } from './matematicas-1t_multiplicacion_facil';
// import { questions as mat1t_mult_medio } from './matematicas-1t_multiplicacion_medio';
// import { questions as mat1t_mult_dificil } from './matematicas-1t_multiplicacion_dificil';
// import { questions as mat1t_mult_evaluacion } from './matematicas-1t_multiplicacion_evaluacion';

// import { questions as mat1t_angupoli_facil } from './matematicas-1t_angulos-poligonos_facil';
// import { questions as mat1t_angupoli_medio } from './matematicas-1t_angulos-poligonos_medio';
// import { questions as mat1t_angupoli_dificil } from './matematicas-1t_angulos-poligonos_dificil';
// import { questions as mat1t_angupoli_evaluacion } from './matematicas-1t_angulos-poligonos_evaluacion';

// import { questions as natsci_body_facil } from './natural-science-1t_human-body_facil';
// import { questions as natsci_body_medio } from './natural-science-1t_human-body_medio';
// import { questions as natsci_body_dificil } from './natural-science-1t_human-body_dificil';
// import { questions as natsci_body_evaluacion } from './natural-science-1t_human-body_evaluacion';

// import { questions as conteimedi_civi_facil } from './coneixement-medi-1t_civilitzaciones_facil';
// import { questions as conteimedi_civi_medio } from './coneixement-medi-1t_civilitzaciones_medio';
// import { questions as conteimedi_civi_dificil } from './coneixement-medi-1t_civilitzaciones_dificil';
// import { questions as conteimedi_civi_evaluacion } from './coneixement-medi-1t_civilitzaciones_evaluacion';

// import { questions as conteimedi_terra_facil } from './coneixement-medi-2t_terra_facil';
// import { questions as conteimedi_terra_medio } from './coneixement-medi-2t_terra_medio';
// import { questions as conteimedi_terra_dificil } from './coneixement-medi-2t_terra_dificil';
// import { questions as conteimedi_terra_evaluacionfacil } from './coneixement-medi-2t_terra_evaluacion-facil';
// import { questions as conteimedi_terra_evaluacionmedio } from './coneixement-medi-2t_terra_evaluacion-medio';
// import { questions as conteimedi_terra_evaluaciondificil } from './coneixement-medi-2t_terra_evaluacion-dificil';

// // Type for our content dictionary
// type ContentMap = {
//   [key: string]: Question[];
// };

// // --- THE REGISTRY ---
// // Register new files here using the format: "subject_topic_level"
// const contentRegistry: ContentMap = {
//   'coneixement-medi-2t_terra_facil': conteimedi_terra_facil,
//   'coneixement-medi-2t_terra_medio': conteimedi_terra_medio,
//   'coneixement-medi-2t_terra_dificil': conteimedi_terra_dificil,
//   'coneixement-medi-2t_terra_evaluacion-facil': conteimedi_terra_evaluacionfacil,
//   'coneixement-medi-2t_terra_evaluacion-medio': conteimedi_terra_evaluacionmedio,
//   'coneixement-medi-2t_terra_evaluacion-dificil': conteimedi_terra_evaluaciondificil,

//   'matematicas1t_fracciones_facil': mat1t_frac_facil,

//   'lengua_adjetivos_facil': len_adj_v_facil,
//   'lengua_adjetivos_medio': len_adj_v_medio,
//   'lengua_adjetivos_dificil': len_adj_v_dificil,
//   'lengua_adjetivos_evaluacion': len_adj_v_evaluacion,

//   'matematicas-1t_numeros_facil': mat1t_num_facil,
//   'matematicas-1t_numeros_medio': mat1t_num_medio,
//   'matematicas-1t_numeros_dificil': mat1t_num_dificil,
//   'matematicas-1t_numeros_evaluacion': mat1t_num_evaluacion,

//   'matematicas-1t_sumas-restas_facil': mat1t_sumres_facil,
//   'matematicas-1t_sumas-restas_medio': mat1t_sumres_medio,
//   'matematicas-1t_sumas-restas_dificil': mat1t_sumres_dificil,
//   'matematicas-1t_sumas-restas_evaluacion': mat1t_sumres_evaluacion,
  
//   'matematicas-1t_multiplicacion_facil': mat1t_mult_facil,
//   'matematicas-1t_multiplicacion_medio': mat1t_mult_medio,
//   'matematicas-1t_multiplicacion_dificil': mat1t_mult_dificil,
//   'matematicas-1t_multiplicacion_evaluacion': mat1t_mult_evaluacion,

//   'matematicas-1t_angulos-poligonos_facil': mat1t_angupoli_facil,
//   'matematicas-1t_angulos-poligonos_medio': mat1t_angupoli_medio,
//   'matematicas-1t_angulos-poligonos_dificil': mat1t_angupoli_dificil,
//   'matematicas-1t_angulos-poligonos_evaluacion': mat1t_angupoli_evaluacion,

//   'natural-science-1t_human-body_facil': natsci_body_facil,
//   'natural-science-1t_human-body_medio': natsci_body_medio,
//   'natural-science-1t_human-body_dificil': natsci_body_dificil,
//   'natural-science-1t_human-body_evaluacion': natsci_body_evaluacion,

//   'coneixement-medi-1t_civilitzaciones_facil': conteimedi_civi_facil,
//   'coneixement-medi-1t_civilitzaciones_medio': conteimedi_civi_medio,
//   'coneixement-medi-1t_civilitzaciones_dificil': conteimedi_civi_dificil,
//   'coneixement-medi-1t_civilitzaciones_evaluacion': conteimedi_civi_evaluacion,

//   'coneixement-medi-2t_atmosfera_facil': conteimedi_atmo_facil,
//   'coneixement-medi-2t_atmosfera_medio': conteimedi_atmo_medio,
//   'coneixement-medi-2t_atmosfera_dificil': conteimedi_atmo_dificil,
//   'coneixement-medi-2t_atmosfera_evaluacion': conteimedi_atmo_evaluacion,
// };

// export const getContentForLevel = (
//   subjectId: string, 
//   topicId: string, 
//   levelId: string
// ): Question[] | null => {
//   const key = `${subjectId}_${topicId}_${levelId}`;
//   return contentRegistry[key] || null;
// };

// data\content\index.ts
import { Question } from '../../types';

import { questions as coneixement2t_hidrosfera_facil } from './coneixement-medi-2t_hidrosfera_facil';
import { questions as coneixement2t_hidrosfera_medio } from './coneixement-medi-2t_hidrosfera_medio';
import { questions as coneixement2t_hidrosfera_dificil } from './coneixement-medi-2t_hidrosfera_dificil';
import { questions as coneixement2t_hidrosfera_evafacil } from './coneixement-medi-2t_hidrosfera_evaluacion-facil';
import { questions as coneixement2t_hidrosfera_evamedio } from './coneixement-medi-2t_hidrosfera_evaluacion-medio';
import { questions as coneixement2t_hidrosfera_evadificil } from './coneixement-medi-2t_atmosfera_evaluacion-dificil';

import { questions as coneixement2t_atmosfera_facil } from './coneixement-medi-2t_atmosfera_facil';
import { questions as coneixement2t_atmosfera_medio } from './coneixement-medi-2t_atmosfera_medio';
import { questions as coneixement2t_atmosfera_dificil } from './coneixement-medi-2t_atmosfera_dificil';
import { questions as coneixement2t_atmosfera_evafacil } from './coneixement-medi-2t_atmosfera_evaluacion-facil';
import { questions as coneixement2t_atmosfera_evamedio } from './coneixement-medi-2t_atmosfera_evaluacion-medio';
import { questions as coneixement2t_atmosfera_evadificil } from './coneixement-medi-2t_atmosfera_evaluacion-dificil';

import { questions as coneixement2t_terra_facil } from './coneixement-medi-2t_terra_facil';
import { questions as coneixement2t_terra_medio } from './coneixement-medi-2t_terra_medio';
import { questions as coneixement2t_terra_dificil } from './coneixement-medi-2t_terra_dificil';
import { questions as coneixement2t_terra_evafacil } from './coneixement-medi-2t_terra_evaluacion-facil';
import { questions as coneixement2t_terra_evamedio } from './coneixement-medi-2t_terra_evaluacion-medio';
import { questions as coneixement2t_terra_evadificil } from './coneixement-medi-2t_terra_evaluacion-dificil';

// NOTE: Content files are currently missing in the local environment.
// Commenting out imports to prevent build errors.
// When adding content files back, uncomment these lines.

/*
import { questions as mat1t_frac_facil } from './matematicas1t_fracciones_facil';
... (kept existing comments for brevity if needed, but for now just adding the new active one)
*/

// Type for our content dictionary
type ContentMap = {
  [key: string]: Question[];
};

// --- THE REGISTRY ---
// Register new files here using the format: "subject_topic_level"
const contentRegistry: ContentMap = {
  // Registered the placeholder for "La Terra" topic at "Fácil" level
  'coneixement-medi-2t_hidrosfera_facil': coneixement2t_hidrosfera_facil,
  'coneixement-medi-2t_hidrosfera_medio': coneixement2t_hidrosfera_medio,
  'coneixement-medi-2t_hidrosfera_dificil': coneixement2t_hidrosfera_dificil,
  'coneixement-medi-2t_hidrosfera_evaluacion-facil': coneixement2t_hidrosfera_evafacil,
  'coneixement-medi-2t_hidrosfera_evaluacion-medio': coneixement2t_hidrosfera_evamedio,
  'coneixement-medi-2t_hidrosfera_evaluacion-dificil': coneixement2t_hidrosfera_evadificil,
  
  'coneixement-medi-2t_atmosfera_facil': coneixement2t_atmosfera_facil,
  'coneixement-medi-2t_atmosfera_medio': coneixement2t_atmosfera_medio,
  'coneixement-medi-2t_atmosfera_dificil': coneixement2t_atmosfera_dificil,
  'coneixement-medi-2t_atmosfera_evaluacion-facil': coneixement2t_atmosfera_evafacil,
  'coneixement-medi-2t_atmosfera_evaluacion-medio': coneixement2t_atmosfera_evamedio,
  'coneixement-medi-2t_atmosfera_evaluacion-dificil': coneixement2t_atmosfera_evadificil,

  'coneixement-medi-2t_terra_facil': coneixement2t_terra_facil,
  'coneixement-medi-2t_terra_medio': coneixement2t_terra_medio,
  'coneixement-medi-2t_terra_dificil': coneixement2t_terra_dificil,
  'coneixement-medi-2t_terra_evaluacion-facil': coneixement2t_terra_evafacil,
  'coneixement-medi-2t_terra_evaluacion-medio': coneixement2t_terra_evamedio,
  'coneixement-medi-2t_terra_evaluacion-dificil': coneixement2t_terra_evadificil,
  
};

export const getContentForLevel = (
  subjectId: string, 
  topicId: string, 
  levelId: string
): Question[] | null => {
  const key = `${subjectId}_${topicId}_${levelId}`;
  return contentRegistry[key] || null;
};
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sprout, Zap, Mountain, ClipboardCheck, ArrowLeft } from 'lucide-react';
import { getTopicById } from '../data/courses';

const LevelSelect: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  
  const topicData = getTopicById(asignatura || '', tema || '');

  const levels = [
    { 
      id: 'facil', 
      name: 'Fácil', 
      icon: Sprout, 
      description: 'Para empezar suave',
      colors: 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200',
      iconColor: 'text-green-600'
    },
    { 
      id: 'medio', 
      name: 'Medio', 
      icon: Zap, 
      description: 'Para entrenar duro',
      colors: 'bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200',
      iconColor: 'text-orange-600'
    },
    { 
      id: 'dificil', 
      name: 'Difícil', 
      icon: Mountain, 
      description: 'Para expertos',
      colors: 'bg-red-50 border-red-300 text-red-800 hover:bg-red-100',
      iconColor: 'text-red-600'
    },
    { 
      id: 'evaluacion-facil', 
      name: 'Evaluación fácil', 
      icon: ClipboardCheck, 
      description: 'Nivel fácil',
      colors: 'bg-violet-100 border-violet-300 text-violet-800 hover:bg-violet-200',
      iconColor: 'text-violet-600'
    },
    { 
      id: 'evaluacion-medio', 
      name: 'Evaluación medio', 
      icon: ClipboardCheck, 
      description: 'Nivel medio',
      colors: 'bg-violet-100 border-violet-300 text-violet-800 hover:bg-violet-200',
      iconColor: 'text-violet-600'
    },
    { 
      id: 'evaluacion-dificil', 
      name: 'Evaluación difícil', 
      icon: ClipboardCheck, 
      description: 'Nivel difícil',
      colors: 'bg-violet-100 border-violet-300 text-violet-800 hover:bg-violet-200',
      iconColor: 'text-violet-600'
    },
  ];

  if (!topicData) {
     return (
       <div className="text-center py-12">
         <p>Tema no encontrado.</p>
         <Link to={`/${asignatura}`} className="underline">Volver atrás</Link>
       </div>
     );
  }

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center pb-2">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-dyslexia-blue mb-2">
          Elige tu desafío
        </h2>
        <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border-2 border-dyslexia-blue/20 shadow-sm">
           <span className="text-xl text-gray-500">Tema:</span>
           <span className="text-xl font-bold text-dyslexia-accent">{topicData.name}</span>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <Link
              key={level.id}
              to={`/${asignatura}/${tema}/${level.id}`}
              className={`group flex flex-col justify-between p-6 rounded-3xl border-4 ${level.colors} shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-64`}
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 bg-white/60 rounded-2xl backdrop-blur-sm ${level.iconColor}`}>
                  <Icon size={40} strokeWidth={2.5} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 px-2 py-1 rounded text-sm font-bold">
                  Vamos!
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-3xl font-bold mb-1">{level.name}</h3>
                <p className="font-medium opacity-80">{level.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelect;
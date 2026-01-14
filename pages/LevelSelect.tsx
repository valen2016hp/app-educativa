import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Image as ImageIcon, 
  Presentation, 
  Headphones, 
  Video, 
  FileText, 
  Pencil, 
  GraduationCap, 
  Gamepad2, 
  BookA, 
  List,
  ArrowLeft
} from 'lucide-react';
import { getTopicById } from '../data/courses';

const LevelSelect: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  
  const topicData = getTopicById(asignatura || '', tema || '');

  // 10-Card Grid Configuration
  const activities = [
    { 
      id: 'infografias', 
      label: 'Infografías', 
      icon: ImageIcon, 
      color: 'bg-purple-100 border-purple-300 text-purple-700 hover:bg-purple-200',
      iconColor: 'text-purple-600',
      description: 'Ver esquemas'
    },
    { 
      id: 'presentacion', 
      label: 'Presentación', 
      icon: Presentation, 
      color: 'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200',
      iconColor: 'text-blue-600',
      description: 'Diapositivas'
    },
    { 
      id: 'audio', 
      label: 'Audio', 
      icon: Headphones, 
      color: 'bg-green-100 border-green-300 text-green-700 hover:bg-green-200',
      iconColor: 'text-green-600',
      description: 'Escuchar'
    },
    { 
      id: 'video', 
      label: 'Vídeo', 
      icon: Video, 
      color: 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200',
      iconColor: 'text-red-600',
      description: 'Ver lección'
    },
    { 
      id: 'fichas', 
      label: 'Fichas', 
      icon: FileText, 
      color: 'bg-orange-100 border-orange-300 text-orange-700 hover:bg-orange-200',
      iconColor: 'text-orange-600',
      description: 'Material PDF'
    },
    { 
      id: 'practica', 
      label: 'Práctica', 
      icon: Pencil, 
      color: 'bg-yellow-100 border-yellow-300 text-yellow-700 hover:bg-yellow-200',
      iconColor: 'text-yellow-600',
      description: 'Ejercicios'
    },
    { 
      id: 'evaluacion', 
      label: 'Evaluación', 
      icon: GraduationCap, 
      color: 'bg-pink-100 border-pink-300 text-pink-700 hover:bg-pink-200',
      iconColor: 'text-pink-600',
      description: 'Examen'
    },
    { 
      id: 'juegos', 
      label: 'Juegos', 
      icon: Gamepad2, 
      color: 'bg-teal-100 border-teal-300 text-teal-700 hover:bg-teal-200',
      iconColor: 'text-teal-600',
      description: 'Divertirse'
    },
    { 
      id: 'vocabulario', 
      label: 'Vocabulario', 
      icon: BookA, 
      color: 'bg-indigo-100 border-indigo-300 text-indigo-700 hover:bg-indigo-200',
      iconColor: 'text-indigo-600',
      description: 'Glosario'
    },
    { 
      id: 'resumen', 
      label: 'Resumen', 
      icon: List, 
      color: 'bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200',
      iconColor: 'text-cyan-600',
      description: 'Repaso'
    },
  ];

  if (!topicData) {
     return (
       <div className="text-center py-12">
         <p className="text-xl text-gray-500">Tema no encontrado.</p>
         <Link to={`/${asignatura}`} className="mt-4 inline-flex items-center gap-2 text-dyslexia-blue font-bold hover:underline">
           <ArrowLeft size={20} />
           Volver atrás
         </Link>
       </div>
     );
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 w-full h-[calc(100vh-120px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
         <div>
            <h2 className="text-2xl font-bold text-dyslexia-blue leading-none">
              ¿Qué quieres hacer hoy?
            </h2>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
               <span>Tema:</span>
               <span className="font-bold text-dyslexia-accent">{topicData.name}</span>
            </div>
         </div>
      </div>

      {/* Grid container - Flex-1 to take remaining space, min-h-0 to allow shrinking */}
      <div className="flex-1 min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-full">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={`/${asignatura}/${tema}/${item.id}`}
                className={`group flex flex-col items-center justify-center p-2 rounded-2xl border-4 ${item.color} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full`}
              >
                <div className={`p-3 bg-white/70 rounded-full backdrop-blur-sm mb-2 ${item.iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                
                <div className="text-center w-full">
                  <h3 className="text-lg font-bold leading-tight mb-0.5 w-full">{item.label}</h3>
                  <p className="text-xs font-bold opacity-70 hidden sm:block w-full">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;
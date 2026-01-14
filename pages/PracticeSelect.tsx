import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Feather, TrendingUp, Flame, Star } from 'lucide-react';
import { getTopicById } from '../data/courses';

const PracticeSelect: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const topicData = getTopicById(asignatura || '', tema || '');

  const levels = [
    {
      id: 'facil',
      name: 'Fácil',
      description: 'Para empezar',
      icon: Feather,
      colorClass: 'bg-green-100 border-green-400 text-green-700',
      hoverClass: 'hover:bg-green-200 hover:scale-[1.02]',
      stars: 1,
    },
    {
      id: 'medio',
      name: 'Medio',
      description: 'Un poco más de reto',
      icon: TrendingUp,
      colorClass: 'bg-orange-100 border-orange-400 text-orange-700',
      hoverClass: 'hover:bg-orange-200 hover:scale-[1.02]',
      stars: 2,
    },
    {
      id: 'dificil',
      name: 'Difícil',
      description: '¡Solo expertos!',
      icon: Flame,
      colorClass: 'bg-red-100 border-red-400 text-red-700',
      hoverClass: 'hover:bg-red-200 hover:scale-[1.02]',
      stars: 3,
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full h-[calc(100vh-120px)] flex flex-col">
      {/* Header - Compact */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="p-1.5 bg-white border-2 border-dyslexia-blue rounded-full hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-dyslexia-blue" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-dyslexia-blue leading-none">Zona de Práctica</h2>
            <p className="text-base text-gray-600 mt-1">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty Cards - Full Height Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-0">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <Link
              key={level.id}
              to={`/${asignatura}/${tema}/${level.id}`} // Links to the Exercise Engine
              className={`group relative flex flex-col items-center justify-center p-4 rounded-3xl border-4 ${level.colorClass} shadow-md transition-all duration-300 ${level.hoverClass} active:translate-y-1 active:shadow-none cursor-pointer h-full`}
            >
              {/* Star Rating */}
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < level.stars ? 'fill-current' : 'opacity-20'} transition-all duration-500`} 
                  />
                ))}
              </div>

              {/* Icon */}
              <div className="bg-white/80 p-6 rounded-full mb-4 shadow-sm backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Icon size={48} strokeWidth={2.5} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-center">{level.name}</h3>
              <p className="text-center text-base font-medium opacity-80 leading-snug">
                {level.description}
              </p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/50 px-4 py-1 rounded-full font-bold text-sm">
                ¡Jugar!
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PracticeSelect;
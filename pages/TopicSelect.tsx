import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Search, Frown } from 'lucide-react';
import { getSubjectById } from '../data/courses';

const TopicSelect: React.FC = () => {
  const { asignatura } = useParams<{ asignatura: string }>();
  const [searchTerm, setSearchTerm] = useState('');

  const subjectData = getSubjectById(asignatura || '');

  if (!subjectData) {
    return (
      <div className="text-center py-12">
        <Frown size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-3xl font-bold text-gray-600">¡Ups! No encontramos esa asignatura.</h2>
        <Link to="/" className="mt-6 inline-block bg-dyslexia-blue text-white px-6 py-3 rounded-xl font-bold">
          Volver a Inicio
        </Link>
      </div>
    );
  }

  const filteredTopics = subjectData.topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      
      {/* Header Section 
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b-4 border-dashed border-dyslexia-blue/20 pb-6">
        <div>
          <h2 className="text-4xl font-bold capitalize text-dyslexia-blue mb-2">
            {subjectData.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-lg">
            {subjectData.description}
          </p>
        </div>
        
        
        <div className="relative w-full md:w-auto min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Buscar tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-4 border-gray-200 focus:border-dyslexia-blue focus:ring-4 focus:ring-blue-100 transition-all font-bold text-lg"
          />
        </div>
      </div>
      */}

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link
              key={topic.id}
              to={`/${asignatura}/${topic.id}`}
              className="group relative flex flex-col items-center text-center p-6 bg-white rounded-3xl border-4 border-dyslexia-blue shadow-[6px_6px_0px_0px_#1A365D] hover:shadow-[3px_3px_0px_0px_#1A365D] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              <div className={`p-5 rounded-2xl ${subjectData.colorClass} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={40} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-dyslexia-blue mb-2">
                {topic.name}
              </h3>
              
              <p className="text-gray-500 font-medium leading-tight mb-6">
                {topic.description}
              </p>

              <div className="mt-auto flex items-center gap-2 text-dyslexia-accent font-bold group-hover:gap-4 transition-all">
                <span>Comenzar</span>
                <ArrowRight size={24} />
              </div>
            </Link>
          );
        })}

        {filteredTopics.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500 bg-white/50 rounded-3xl border-2 border-dashed border-gray-300">
            <p className="text-xl">No encontramos temas con ese nombre.</p>
            <button 
              onClick={() => setSearchTerm('')} 
              className="mt-2 text-dyslexia-blue underline font-bold"
            >
              Ver todos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicSelect;
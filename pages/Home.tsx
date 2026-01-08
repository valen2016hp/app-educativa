import React, { useState } from 'react';
import { Calculator, BookOpen, Globe, Search, Turtle, BookMarked } from 'lucide-react';
import SubjectCard from '../components/SubjectCard';
import { useUser } from '../context/UserContext';

const SUBJECTS = [
  {
    id: 'matematicas-1t',
    name: 'Matemáticas 1T',
    icon: Calculator,
    description: 'Números, sumas y formas divertidas.',
    colorClass: 'bg-pink-500',
  },
  {
    id: 'natural-science-1t',
    name: 'Natural Science 1T',
    icon: Turtle,
    description: 'Exploring the Earth, body, and tech!',
    colorClass: 'bg-blue-500',
  },
  {
    id: 'coneixement-medi-1t',
    name: 'Coneixement del medi 1T',
    icon: BookMarked,
    description: 'Descobrim la Terra, història, cultures.',
    colorClass: 'bg-yellow-500',
  },
  {
    id: 'lengua',
    name: 'Lengua',
    icon: BookOpen,
    description: 'Lectura, palabras y cuentos mágicos.',
    colorClass: 'bg-emerald-500',
  },
  {
    id: 'ingles',
    name: 'Inglés',
    icon: Globe,
    description: 'Hello! Aprende palabras nuevas.',
    colorClass: 'bg-orange-500',
  },
];

const Home: React.FC = () => {
  const { userName } = useUser();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = SUBJECTS.filter(subject => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-dyslexia-blue">
          ¡Hola, {userName}! 👋
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ¿Qué quieres aprender hoy? Elige una aventura.
        </p>
      </section>

      {/* Search Bar 
      <div className="max-w-xl mx-auto relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-gray-400" size={28} />
        </div>
        <input 
          type="text"
          placeholder="Buscar asignatura..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-14 pr-6 py-4 text-xl rounded-2xl border-4 border-dyslexia-blue/30 focus:border-dyslexia-blue focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-400 bg-white"
        />
      </div>
      */}

      {/* Launch Box (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
        {filteredSubjects.map((subject) => (
          <SubjectCard key={subject.id} {...subject} />
        ))}
        
        {filteredSubjects.length === 0 && (
          <div className="col-span-full text-center py-12 bg-white/50 rounded-3xl border-2 border-dashed border-gray-300">
            <p className="text-xl text-gray-500">No encontramos esa asignatura 😔</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-dyslexia-blue font-bold underline hover:text-dyslexia-accent"
            >
              Ver todas las asignaturas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
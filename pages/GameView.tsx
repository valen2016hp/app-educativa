
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Brain, Rocket } from 'lucide-react';
import { getGamesForTopic, GameConfig } from '../data/games';
import { getTopicById } from '../data/courses';
import MemoryGame from '../components/MemoryGame';
import SolarSystemGame from '../components/SolarSystemGame';

const GameView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  
  const topicData = getTopicById(asignatura || '', tema || '');
  const games = getGamesForTopic(asignatura || '', tema || '');

  const [selectedGame, setSelectedGame] = useState<GameConfig | null>(null);

  // If there are no games
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] animate-in fade-in">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 text-center max-w-lg">
          <Gamepad2 size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">No hay juegos disponibles</h2>
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="mt-6 inline-flex items-center gap-2 bg-dyslexia-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-dyslexia-accent transition-colors"
          >
            <ArrowLeft size={20} /> Volver
          </Link>
        </div>
      </div>
    );
  }

  // If a game is selected, render it
  if (selectedGame) {
    // Render the specific game component based on type
    if (selectedGame.type === 'solar-system') {
        return (
            <SolarSystemGame 
                gameConfig={selectedGame}
                subjectId={asignatura || ''}
                topicId={tema || ''}
                onExit={() => setSelectedGame(null)}
            />
        );
    }
    
    // Default to Memory Game
    return (
      <MemoryGame 
        gameConfig={selectedGame} 
        subjectId={asignatura || ''}
        topicId={tema || ''}
        onExit={() => setSelectedGame(null)}
      />
    );
  }

  // If multiple games exist and none selected, show Menu
  return (
    <div className="animate-in fade-in duration-500 w-full h-[calc(100vh-6rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="p-1.5 bg-white border-2 border-dyslexia-blue rounded-full hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-dyslexia-blue" />
          </Link>
          <div className="leading-tight">
            <h2 className="text-2xl font-bold text-dyslexia-blue">Zona de Juegos</h2>
            <p className="text-sm text-gray-600">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Game Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className="group relative flex flex-col items-center p-8 bg-white rounded-[2.5rem] border-4 border-dyslexia-blue shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
          >
            <div className={`p-6 rounded-full mb-6 transition-transform group-hover:scale-110 shadow-md ${game.type === 'solar-system' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>
              {game.type === 'solar-system' ? <Rocket size={64} /> : <Brain size={64} />}
            </div>
            
            <h3 className="text-3xl font-bold text-dyslexia-blue mb-2">{game.title}</h3>
            <p className="text-xl text-gray-500 font-medium text-center">{game.description}</p>
            
            <div className="mt-6 bg-dyslexia-blue text-white px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              ¡Jugar Ahora!
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameView;

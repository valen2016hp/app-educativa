
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Trophy, Gamepad2, Sparkles, Star, CheckCircle } from 'lucide-react';
import { getGameForTopic, GameConfig } from '../data/games';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

// Internal types for the Memory Game state
interface CardState {
  uniqueId: string;
  pairId: string;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  colorClass: string;
}

const COLORS = [
  'bg-red-100 border-red-300 text-red-800',
  'bg-blue-100 border-blue-300 text-blue-800',
  'bg-green-100 border-green-300 text-green-800',
  'bg-yellow-100 border-yellow-300 text-yellow-800',
  'bg-purple-100 border-purple-300 text-purple-800',
  'bg-pink-100 border-pink-300 text-pink-800',
];

const GameView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  
  const topicData = getTopicById(asignatura || '', tema || '');
  const gameConfig = getGameForTopic(asignatura || '', tema || '');

  // Game State
  const [cards, setCards] = useState<CardState[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);

  // Initialize Game
  useEffect(() => {
    if (gameConfig) {
      startNewGame();
    }
  }, [gameConfig]);

  // Timer
  useEffect(() => {
    let interval: any;
    if (!gameWon && cards.length > 0) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameWon, cards]);

  const startNewGame = () => {
    if (!gameConfig) return;

    // Create matched pairs
    const newCards: CardState[] = [];
    gameConfig.pairs.forEach((pair, index) => {
      const color = COLORS[index % COLORS.length];
      
      // Card A
      newCards.push({
        uniqueId: `${pair.id}-A`,
        pairId: pair.id,
        content: pair.itemA,
        isFlipped: false,
        isMatched: false,
        colorClass: color
      });

      // Card B
      newCards.push({
        uniqueId: `${pair.id}-B`,
        pairId: pair.id,
        content: pair.itemB,
        isFlipped: false,
        isMatched: false,
        colorClass: color
      });
    });

    // Shuffle
    const shuffled = newCards.sort(() => Math.random() - 0.5);
    
    setCards(shuffled);
    setFlippedIds([]);
    setMoves(0);
    setGameWon(false);
    setTimer(0);
  };

  const handleCardClick = (uniqueId: string) => {
    // Block input if processing, card already matched, or card already flipped
    if (isProcessing) return;
    const clickedCard = cards.find(c => c.uniqueId === uniqueId);
    if (!clickedCard || clickedCard.isMatched || clickedCard.isFlipped) return;

    // Flip the clicked card immediately so the user sees it
    const newCards = cards.map(c => 
      c.uniqueId === uniqueId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedIds = [...flippedIds, uniqueId];
    setFlippedIds(newFlippedIds);

    // Check if we now have 2 cards flipped
    if (newFlippedIds.length === 2) {
      setIsProcessing(true); // Stop user from clicking more cards
      setMoves(m => m + 1);

      const id1 = newFlippedIds[0];
      const id2 = newFlippedIds[1];
      const card1 = newCards.find(c => c.uniqueId === id1);
      const card2 = newCards.find(c => c.uniqueId === id2);

      const isMatch = card1 && card2 && card1.pairId === card2.pairId;

      // DELAY: 2.5 seconds to let the student read both cards
      setTimeout(() => {
        setCards(prev => prev.map(c => {
          if (c.uniqueId === id1 || c.uniqueId === id2) {
             // If match: set matched=true, leave flipped=true
             // If no match: set flipped=false
             return isMatch 
                ? { ...c, isMatched: true, isFlipped: true }
                : { ...c, isFlipped: false };
          }
          return c;
        }));
        
        setFlippedIds([]);
        setIsProcessing(false);
      }, 2500);
    }
  };

  // Check win in effect
  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
      setGameWon(true);
      addActivity({
        action: 'VIEW_GAME',
        subjectId: asignatura || 'unknown',
        topicId: tema || 'unknown',
        levelId: 'general',
        score: 100, // Arbitrary score for game completion
        duration: timer
      });
    }
  }, [cards]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameConfig) {
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

  if (gameWon) {
    return (
      <div className="animate-in zoom-in-95 duration-500 w-full h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] border-8 border-yellow-400 shadow-2xl text-center max-w-2xl w-full mx-4">
          <div className="flex justify-center mb-6">
             <Trophy size={80} className="text-yellow-500 animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-dyslexia-blue mb-4">¡Juego Completado!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Has encontrado todas las parejas en <span className="font-bold text-dyslexia-accent">{formatTime(timer)}</span> con <span className="font-bold text-dyslexia-accent">{moves}</span> intentos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={startNewGame}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <RefreshCw size={24} /> Jugar Otra Vez
            </button>
            <Link 
              to={`/${asignatura}/${tema}`} 
              className="flex items-center justify-center gap-2 bg-dyslexia-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-dyslexia-accent transition-colors shadow-lg"
            >
              <ArrowLeft size={24} /> Volver al Tema
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 w-full h-[calc(100vh-6rem)] flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="p-1.5 bg-white border-2 border-dyslexia-blue rounded-full hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-dyslexia-blue" />
          </Link>
          <div className="leading-tight">
            <h2 className="text-xl font-bold text-dyslexia-blue">{gameConfig.title}</h2>
            <p className="text-sm text-gray-600 hidden sm:block">
              {gameConfig.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border-2 border-dyslexia-blue shadow-sm">
          <div className="text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">Tiempo</p>
            <p className="font-bold text-dyslexia-blue">{formatTime(timer)}</p>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-xs text-gray-400 font-bold uppercase">Intentos</p>
            <p className="font-bold text-dyslexia-blue">{moves}</p>
          </div>
          <button 
            onClick={startNewGame} 
            className="ml-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
            title="Reiniciar"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex-1 min-h-0 pb-2 flex items-center justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full h-full max-w-4xl max-h-full overflow-y-auto p-2">
          {cards.map((card) => (
            <div 
              key={card.uniqueId}
              className="group [perspective:1000px] cursor-pointer h-full min-h-[100px]"
              onClick={() => handleCardClick(card.uniqueId)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  card.isFlipped ? '[transform:rotateY(180deg)]' : ''
                } ${
                  card.isMatched ? 'scale-95 cursor-default' : 'hover:scale-105 active:scale-95'
                }`}
              >
                {/* FRONT (Face Down) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-dyslexia-blue rounded-2xl shadow-md flex items-center justify-center border-4 border-white">
                  <Star className="text-yellow-400/50 w-1/2 h-1/2" />
                </div>

                {/* BACK (Face Up) */}
                <div 
                  className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl shadow-md flex items-center justify-center p-2 text-center border-4 ${
                    card.isMatched ? 'bg-green-100 border-green-500 ring-4 ring-green-200' : card.colorClass
                  }`}
                >
                  <p className="font-bold text-sm md:text-xl break-words leading-tight">
                    {card.content}
                  </p>
                  {card.isMatched && (
                    <div className="absolute top-1 right-1">
                      <CheckCircle size={20} className="text-green-600 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameView;

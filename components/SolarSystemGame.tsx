
import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw, Rocket, CheckCircle, Info, Maximize, Minimize, ZoomIn, ZoomOut } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { GameConfig } from '../data/games';

interface Planet {
  id: string;
  name: string;
  color: string;
  size: number; // relative size (px)
  orbitSize: number; // percentage of container (relative to min dimension)
  speed: number; // seconds for full rotation
}

const PLANETS: Planet[] = [
  { id: 'mercurio', name: 'Mercurio', color: 'bg-stone-400', size: 16, orbitSize: 14, speed: 5 },
  { id: 'venus', name: 'Venus', color: 'bg-orange-300', size: 24, orbitSize: 22, speed: 8 },
  { id: 'tierra', name: 'Tierra', color: 'bg-blue-500', size: 26, orbitSize: 32, speed: 12 },
  { id: 'marte', name: 'Marte', color: 'bg-red-500', size: 20, orbitSize: 42, speed: 15 },
  { id: 'jupiter', name: 'Júpiter', color: 'bg-orange-200', size: 45, orbitSize: 58, speed: 25 },
  { id: 'saturno', name: 'Saturno', color: 'bg-yellow-100', size: 40, orbitSize: 72, speed: 30 },
  { id: 'urano', name: 'Urano', color: 'bg-cyan-300', size: 30, orbitSize: 84, speed: 35 },
  { id: 'neptuno', name: 'Neptuno', color: 'bg-blue-700', size: 28, orbitSize: 94, speed: 40 },
];

interface SolarSystemGameProps {
  gameConfig?: GameConfig;
  subjectId: string;
  topicId: string;
  onExit: () => void;
}

const SolarSystemGame: React.FC<SolarSystemGameProps> = ({ subjectId, topicId, onExit }) => {
  const { addActivity } = useUser();
  
  const [targetPlanet, setTargetPlanet] = useState<Planet | null>(null);
  const [message, setMessage] = useState<string>('¡Bienvenida al espacio!');
  const [gameWon, setGameWon] = useState(false);
  const [foundPlanets, setFoundPlanets] = useState<string[]>([]);
  const [isCorrectAnimation, setIsCorrectAnimation] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    const availablePlanets = PLANETS.filter(p => !foundPlanets.includes(p.id));
    
    if (availablePlanets.length === 0) {
      setGameWon(true);
      addActivity({
        action: 'VIEW_GAME',
        subjectId,
        topicId,
        levelId: 'general',
        score: 100,
        duration: 0 
      });
      return;
    }

    const randomPlanet = availablePlanets[Math.floor(Math.random() * availablePlanets.length)];
    setTargetPlanet(randomPlanet);
    setMessage(`¡Encuentra: ${randomPlanet.name}!`);
  };

  const handlePlanetClick = (planet: Planet) => {
    if (!targetPlanet || gameWon) return;

    if (planet.id === targetPlanet.id) {
      setFoundPlanets(prev => [...prev, planet.id]);
      setMessage(`¡Correcto! Es ${planet.name}`);
      setIsCorrectAnimation(true);
      setTimeout(() => {
        setIsCorrectAnimation(false);
        startNewRound();
      }, 1500);
    } else {
      setMessage(`No, ese es ${planet.name}. Busca ${targetPlanet.name}.`);
    }
  };

  const handleReset = () => {
    setFoundPlanets([]);
    setGameWon(false);
    setTargetPlanet(null);
    setZoom(1);
    setTimeout(startNewRound, 100);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));

  if (gameWon) {
    return (
      <div className="h-[calc(100vh-140px)] flex items-center justify-center">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] border-8 border-yellow-400 shadow-2xl text-center max-w-2xl w-full mx-4 animate-in zoom-in-95">
          <div className="flex justify-center mb-6">
             <Rocket size={80} className="text-purple-500 animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-dyslexia-blue mb-4">¡Misión Cumplida!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Has explorado todo el Sistema Solar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleReset}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <RefreshCw size={24} /> Jugar Otra Vez
            </button>
            <button 
              onClick={onExit}
              className="flex items-center justify-center gap-2 bg-dyslexia-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-dyslexia-accent transition-colors shadow-lg"
            >
              <ArrowLeft size={24} /> Salir
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Define Layout Classes based on FullScreen State
  const containerClasses = isFullScreen
    ? "fixed inset-0 z-50 bg-[#FFFDD0] p-4 h-screen w-screen flex flex-col" // Full Screen Fixed
    : "flex flex-col h-[calc(100vh-140px)] w-full overflow-hidden relative animate-in fade-in"; // Normal embedded

  const viewportClasses = isFullScreen
    ? "flex-1 relative bg-[#0B0B15] rounded-[2rem] border-8 border-slate-700 shadow-inner overflow-hidden w-full mx-auto max-w-[95vw]" // Wider in full screen
    : "flex-1 relative bg-[#0B0B15] rounded-[2rem] border-8 border-slate-700 shadow-inner overflow-hidden w-full mx-auto max-w-5xl"; // Constrained in normal

  return (
    <div className={containerClasses}>
      {/* Styles for animation */}
      <style>{`
        @keyframes orbitSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .orbit-container {
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Game Header */}
      <div className="flex items-center justify-between mb-3 bg-white p-3 rounded-2xl border-4 border-dyslexia-blue shadow-md z-20 shrink-0">
        <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-full">
               <Rocket className="text-purple-600" size={24} />
            </div>
            <span className={`font-bold text-lg md:text-2xl ${isCorrectAnimation ? 'text-green-600 scale-105' : 'text-dyslexia-blue'} transition-all duration-300`}>
                {message}
            </span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 text-center hidden md:block">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Planetas</p>
            <p className="font-bold text-dyslexia-blue text-lg leading-none">{foundPlanets.length} / {PLANETS.length}</p>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
             <button 
                onClick={handleZoomOut}
                className="p-1.5 hover:bg-white rounded-md text-gray-600 hover:text-dyslexia-blue transition-colors disabled:opacity-30"
                disabled={zoom <= 0.5}
                title="Alejar"
             >
                <ZoomOut size={20} />
             </button>
             <span className="w-10 text-center text-xs font-bold text-gray-500 select-none">
                {Math.round(zoom * 100)}%
             </span>
             <button 
                onClick={handleZoomIn}
                className="p-1.5 hover:bg-white rounded-md text-gray-600 hover:text-dyslexia-blue transition-colors disabled:opacity-30"
                disabled={zoom >= 1.5}
                title="Acercar"
             >
                <ZoomIn size={20} />
             </button>
          </div>
          
          {/* Full Screen Toggle */}
          <button 
             onClick={() => setIsFullScreen(!isFullScreen)}
             className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 rounded-full transition-colors border-2 border-transparent hover:border-blue-200"
             title={isFullScreen ? "Minimizar" : "Pantalla Completa"}
          >
             {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          <button 
             onClick={onExit}
             className="p-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 rounded-full transition-colors"
             title="Salir"
          >
             <ArrowLeft size={20} />
          </button>
        </div>
      </div>

      {/* Solar System Viewport */}
      <div className={viewportClasses}>
        
        {/* Stars Background (Static) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', 
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
        }}></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
            backgroundSize: '90px 90px',
            backgroundPosition: '20px 20px'
        }}></div>

        {/* Zoom Wrapper (Scalable) */}
        <div 
            className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-center"
            style={{ transform: `scale(${zoom})` }}
        >
            {/* Sun - Centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.6)] z-10 flex items-center justify-center border-4 border-yellow-300">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 opacity-80"></div>
            </div>

            {/* Orbits & Planets */}
            {PLANETS.map((planet, index) => {
                return (
                    <div 
                        key={planet.id}
                        className="orbit-container absolute rounded-full border border-white/10 pointer-events-none"
                        style={{
                            width: `${planet.orbitSize}%`,
                            height: `${planet.orbitSize}%`, 
                            maxWidth: '95%',
                            maxHeight: '95%',
                            aspectRatio: '1 / 1',
                            animation: `orbitSpin ${planet.speed * 2}s linear infinite`,
                            zIndex: 10 + index
                        }}
                    >
                        {/* The Planet Button */}
                        <button
                            onClick={() => handlePlanetClick(planet)}
                            className={`absolute rounded-full shadow-lg pointer-events-auto transform transition-transform duration-200 border-2 border-white/30 flex items-center justify-center group ${planet.color} hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400`}
                            style={{
                                width: `${planet.size}px`,
                                height: `${planet.size}px`,
                                // Position on the right edge (0 degrees)
                                top: '50%',
                                right: `-${planet.size / 2}px`, 
                                marginTop: `-${planet.size / 2}px`,
                                // Counter-rotate the planet so it stays upright (optional, but nice for icons/text)
                                animation: `orbitSpin ${planet.speed * 2}s linear infinite reverse`
                            }}
                            aria-label={`Planeta ${planet.name}`}
                        >
                            {/* Rings for Saturn */}
                            {planet.id === 'saturno' && (
                                <div className="absolute w-[160%] h-[30%] bg-yellow-100/40 rounded-full border border-yellow-100/60 pointer-events-none"></div>
                            )}
                            
                            {/* Checkmark overlay if found */}
                            {foundPlanets.includes(planet.id) && (
                                <div className="absolute inset-0 bg-green-500/80 rounded-full flex items-center justify-center animate-in zoom-in">
                                    <CheckCircle size={planet.size * 0.7} className="text-white" />
                                </div>
                            )}
                        </button>
                    </div>
                );
            })}
        </div>

        {/* Info text if no planets found yet - Outside Zoom Wrapper */}
        {foundPlanets.length === 0 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 text-sm font-medium z-30 pointer-events-none flex items-center gap-2 w-max max-w-[90%]">
                <Info size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="truncate">Toca los planetas que giran para identificarlos</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystemGame;


import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Headphones, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
} from 'lucide-react';
import { getAudiosForTopic, AudioItem } from '../data/audios';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

const AudioView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  const audioRef = useRef<HTMLAudioElement>(null);

  const topicData = getTopicById(asignatura || '', tema || '');
  const audioList = getAudiosForTopic(asignatura || '', tema || '');

  // Player State
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);

  const currentTrack = audioList[currentTrackIndex];

  // Log activity on mount
  useEffect(() => {
    addActivity({
      action: 'VIEW_AUDIO',
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: 'general',
    });
  }, [asignatura, tema]);

  // Reset state when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setProgress(0);
      setError(false);
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => {
        console.error("Audio play error:", e);
        setError(true);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleTrackChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentTrackIndex < audioList.length - 1) {
      setCurrentTrackIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentTrackIndex > 0) {
      setCurrentTrackIndex(prev => prev - 1);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // --- RENDER ---
  
  if (!currentTrack) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] animate-in fade-in">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 text-center max-w-lg">
          <Headphones size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">No hay audios disponibles</h2>
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

  return (
    // Fixed height container calculation: 100vh - header(approx 4rem) - padding(approx 2rem)
    <div className="animate-in fade-in duration-500 w-full h-[calc(100vh-6rem)] flex flex-col overflow-hidden">
      
      {/* Header - Compact */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="p-1.5 bg-white border-2 border-dyslexia-blue rounded-full hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-dyslexia-blue" />
          </Link>
          <div className="leading-tight">
            <h2 className="text-xl font-bold text-dyslexia-blue">Audio Lecciones</h2>
            <p className="text-sm text-gray-600">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Player Container - Flex Grow to take available space */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2">
        <div className="bg-white w-full max-w-2xl h-full max-h-[600px] rounded-[2.5rem] shadow-xl border-4 md:border-8 border-green-100 flex flex-col items-center relative overflow-hidden">
          
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-1/4 bg-green-50 z-0"></div>
          
          {/* Content Wrapper - Centered Vertically */}
          <div className="z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-10 space-y-4 md:space-y-8">
            
            {/* Icon / Visualizer */}
            <div className="bg-white p-6 rounded-full shadow-lg border-4 border-green-200 relative shrink-0">
               {isPlaying ? (
                 <div className="flex items-end gap-1 h-12 w-12 md:h-16 md:w-16 justify-center">
                   <div className="w-2 bg-green-500 animate-[bounce_1s_infinite] rounded-full"></div>
                   <div className="w-2 bg-green-400 animate-[bounce_1.2s_infinite] rounded-full h-2/3"></div>
                   <div className="w-2 bg-green-600 animate-[bounce_0.8s_infinite] rounded-full h-full"></div>
                   <div className="w-2 bg-green-400 animate-[bounce_1.1s_infinite] rounded-full h-1/2"></div>
                 </div>
               ) : (
                 <Headphones className="text-green-500 h-12 w-12 md:h-16 md:w-16" />
               )}
            </div>

            {/* Track Info */}
            <div className="text-center w-full shrink-0">
              <h3 className="text-2xl md:text-3xl font-bold text-dyslexia-blue mb-1 line-clamp-2 leading-tight">
                {currentTrack.title}
              </h3>
              <p className="text-gray-500 font-medium text-sm md:text-base line-clamp-2">
                {currentTrack.description || 'Escucha con atención'}
              </p>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={currentTrack.src}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
            />

            {/* Controls Area */}
            <div className="w-full space-y-6">
              
              {/* Progress */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-500 touch-none"
                />
                <div className="flex justify-between text-xs md:text-sm font-bold text-gray-400 px-1">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <button 
                  onClick={() => handleTrackChange('prev')}
                  disabled={currentTrackIndex === 0}
                  className={`p-3 md:p-4 rounded-full transition-all ${currentTrackIndex === 0 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-100 active:scale-90'}`}
                >
                  <SkipBack size={28} className="md:w-8 md:h-8" fill="currentColor" />
                </button>

                <button 
                  onClick={togglePlay}
                  className="bg-green-500 text-white p-5 md:p-6 rounded-full shadow-lg hover:bg-green-400 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                >
                  {isPlaying ? (
                    <Pause size={40} className="md:w-12 md:h-12" fill="currentColor" />
                  ) : (
                    <Play size={40} className="md:w-12 md:h-12 ml-1" fill="currentColor" />
                  )}
                </button>

                <button 
                  onClick={() => handleTrackChange('next')}
                  disabled={currentTrackIndex === audioList.length - 1}
                  className={`p-3 md:p-4 rounded-full transition-all ${currentTrackIndex === audioList.length - 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-100 active:scale-90'}`}
                >
                  <SkipForward size={28} className="md:w-8 md:h-8" fill="currentColor" />
                </button>
              </div>
              
              {/* Volume */}
              <div className="flex justify-end">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-lg transition-colors ${isMuted ? 'text-red-400 bg-red-50' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>

          </div>

          {/* Playlist Dots (Absolute Bottom) */}
          {audioList.length > 1 && (
            <div className="absolute bottom-4 flex gap-2">
              {audioList.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 w-2 rounded-full transition-colors ${idx === currentTrackIndex ? 'bg-green-500 scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}

          {error && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 border-2 border-red-200 shadow-xl rounded-xl text-red-600 font-bold text-center z-50">
              <p>Error al cargar el archivo.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AudioView;

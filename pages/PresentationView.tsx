import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Presentation as PresentationIcon } from 'lucide-react';
import { getSlidesForTopic } from '../data/presentations';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

const PresentationView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const topicData = getTopicById(asignatura || '', tema || '');
  const slides = getSlidesForTopic(asignatura || '', tema || '');
  const totalSlides = slides.length;

  // Log activity on mount
  useEffect(() => {
    addActivity({
      action: 'VIEW_PRESENTATION',
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: 'general',
    });
  }, [asignatura, tema]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, totalSlides]);

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://placehold.co/1280x720/e2e8f0/1e293b/png?text=Slide+${currentSlideIndex + 1}`;
  };

  if (totalSlides === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] animate-in fade-in">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 text-center max-w-lg">
          <PresentationIcon size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">No hay presentación</h2>
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

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="animate-in fade-in duration-500 w-full h-[calc(100vh-120px)] flex flex-col">
      {/* Header - Compact */}
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            to={`/${asignatura}/${tema}`} 
            className="p-1.5 bg-white border-2 border-dyslexia-blue rounded-full hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} className="text-dyslexia-blue" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-dyslexia-blue leading-none">Presentación</h2>
            <p className="text-base text-gray-600 mt-1">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>
        
        <div className="hidden sm:block text-right">
          <span className="text-2xl font-bold text-dyslexia-blue">{currentSlideIndex + 1}</span>
          <span className="text-xl text-gray-400 mx-2">/</span>
          <span className="text-xl text-gray-500">{totalSlides}</span>
        </div>
      </div>

      {/* Main Viewer - Fills remaining space */}
      <div className="flex-1 min-h-0 relative bg-white rounded-2xl border-4 border-dyslexia-blue shadow-xl overflow-hidden group flex flex-col">
        
        {/* The Slide - Absolute positioning to guarantee fit */}
        <div className="flex-1 relative w-full bg-gray-50">
          <img 
            src={slides[currentSlideIndex]} 
            alt={`Diapositiva ${currentSlideIndex + 1}`} 
            className="absolute inset-0 w-full h-full object-contain"
            onError={handleImageError}
          />
        </div>

        {/* Overlay Controls (Desktop) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 z-10">
            <button 
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border-2 border-dyslexia-blue transition-all transform hover:scale-110 active:scale-95 ${
                currentSlideIndex === 0 ? 'opacity-0 cursor-default' : 'opacity-100 hover:bg-white text-dyslexia-blue'
              }`}
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </button>

            <button 
              onClick={handleNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`pointer-events-auto p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border-2 border-dyslexia-blue transition-all transform hover:scale-110 active:scale-95 ${
                currentSlideIndex === totalSlides - 1 ? 'opacity-0 cursor-default' : 'opacity-100 hover:bg-white text-dyslexia-blue'
              }`}
            >
              <ChevronRight size={32} strokeWidth={3} />
            </button>
        </div>

        {/* Progress Bar (Bottom of card) */}
        <div className="h-2 bg-gray-200 w-full flex-shrink-0 z-20">
          <div 
            className="h-full bg-dyslexia-accent transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-2 text-center text-gray-400 text-xs hidden sm:block">
        Usa las flechas del teclado ⬅️ ➡️ para moverte
      </div>
    </div>
  );
};

export default PresentationView;
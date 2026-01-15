
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, RotateCw } from 'lucide-react';
import { getFlashcardsForTopic, FlashcardItem } from '../data/flashcards';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

const ITEMS_PER_PAGE = 10;

const FlashcardsView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  
  const [currentPage, setCurrentPage] = useState(0);
  // Track flipped state for each card ID
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const topicData = getTopicById(asignatura || '', tema || '');
  const allCards = getFlashcardsForTopic(asignatura || '', tema || '');
  
  const totalPages = Math.ceil(allCards.length / ITEMS_PER_PAGE);

  // Log activity
  useEffect(() => {
    addActivity({
      action: 'VIEW_FLASHCARDS',
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: 'general',
    });
  }, [asignatura, tema]);

  const handleCardClick = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      setFlippedCards({}); // Reset flips on page change
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      setFlippedCards({}); // Reset flips on page change
    }
  };

  // Get current page items and fill with nulls to maintain grid structure
  const currentItems: (FlashcardItem | null)[] = allCards.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );
  
  while (currentItems.length < ITEMS_PER_PAGE) {
    currentItems.push(null);
  }

  if (allCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] animate-in fade-in">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 text-center max-w-lg">
          <FileText size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">No hay fichas disponibles</h2>
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
            <h2 className="text-xl font-bold text-dyslexia-blue">Fichas de Repaso</h2>
            <p className="text-sm text-gray-600">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
             <button 
               onClick={handlePrevPage} 
               disabled={currentPage === 0}
               className={`p-2 rounded-full border-2 ${currentPage === 0 ? 'border-gray-200 text-gray-300' : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'}`}
             >
               <ChevronLeft size={20} />
             </button>
             <span className="font-bold text-gray-500 text-sm">
               Pág {currentPage + 1} / {totalPages}
             </span>
             <button 
               onClick={handleNextPage} 
               disabled={currentPage === totalPages - 1}
               className={`p-2 rounded-full border-2 ${currentPage === totalPages - 1 ? 'border-gray-200 text-gray-300' : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'}`}
             >
               <ChevronRight size={20} />
             </button>
          </div>
        )}
      </div>

      {/* Grid Container */}
      <div className="flex-1 min-h-0 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-3 h-full">
          {currentItems.map((item, index) => {
            if (!item) {
              // Placeholder for empty slots to keep grid shape
              return (
                <div 
                  key={`empty-${index}`} 
                  className="rounded-2xl border-2 border-dashed border-gray-200 bg-white/30"
                />
              );
            }

            const isFlipped = flippedCards[item.id] || false;

            return (
              <div 
                key={item.id}
                className="group [perspective:1000px] cursor-pointer h-full"
                onClick={() => handleCardClick(item.id)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                >
                  {/* FRONT (Question) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-orange-100 border-4 border-orange-300 rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center hover:border-orange-400 hover:shadow-md transition-all">
                    <p className="font-bold text-orange-900 text-sm md:text-base leading-snug">
                      {item.question}
                    </p>
                    <div className="mt-2 text-orange-400 opacity-60">
                      <RotateCw size={16} />
                    </div>
                  </div>

                  {/* BACK (Answer) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border-4 border-dyslexia-blue rounded-2xl shadow-md flex items-center justify-center p-4 text-center">
                    <p className="font-bold text-dyslexia-blue text-sm md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Helper text */}
      <div className="text-center text-gray-400 text-xs mt-1 hidden sm:block">
        Toca una ficha para ver la respuesta
      </div>

    </div>
  );
};

export default FlashcardsView;

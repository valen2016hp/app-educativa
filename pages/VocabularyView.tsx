
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookA, X, MessageCircle, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { getVocabularyForTopic, VocabularyItem } from '../data/vocabulary';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

const ITEMS_PER_PAGE = 10;

const CARD_COLORS = [
  'bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200',
  'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200',
  'bg-green-100 border-green-300 text-green-800 hover:bg-green-200',
  'bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200',
  'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200',
  'bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200',
  'bg-teal-100 border-teal-300 text-teal-800 hover:bg-teal-200',
  'bg-indigo-100 border-indigo-300 text-indigo-800 hover:bg-indigo-200',
  'bg-red-100 border-red-300 text-red-800 hover:bg-red-200',
  'bg-cyan-100 border-cyan-300 text-cyan-800 hover:bg-cyan-200',
];

const VocabularyView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const topicData = getTopicById(asignatura || '', tema || '');
  const items = getVocabularyForTopic(asignatura || '', tema || '');

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  // Pagination Logic
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Get current page items
  const currentItemsRaw = items.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // Pad with nulls to ensure exactly 10 slots for grid consistency
  const displayItems = [...currentItemsRaw];
  while (displayItems.length < ITEMS_PER_PAGE) {
    displayItems.push(null as any);
  }

  useEffect(() => {
    addActivity({
      action: 'VIEW_VOCABULARY',
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: 'general',
    });
  }, [asignatura, tema]);

  return (
    <div className="animate-in fade-in duration-500 w-full h-[calc(100vh-120px)] flex flex-col">
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
            <h2 className="text-xl font-bold text-dyslexia-blue">Vocabulario</h2>
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
               className={`p-2 rounded-full border-2 transition-colors ${
                 currentPage === 0 
                   ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                   : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'
               }`}
             >
               <ChevronLeft size={20} />
             </button>
             <span className="font-bold text-gray-500 text-sm whitespace-nowrap">
               Pág {currentPage + 1} / {totalPages}
             </span>
             <button 
               onClick={handleNextPage} 
               disabled={currentPage === totalPages - 1}
               className={`p-2 rounded-full border-2 transition-colors ${
                 currentPage === totalPages - 1 
                   ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                   : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'
               }`}
             >
               <ChevronRight size={20} />
             </button>
          </div>
        )}
      </div>

      {/* Grid Container (Non-scrolling 10 items) */}
      <div className="flex-1 min-h-0">
        {/* We use a key on the grid to force a subtle animation when page changes */}
        <div key={currentPage} className="grid grid-cols-2 md:grid-cols-5 gap-3 h-full animate-in fade-in duration-300">
          {displayItems.map((item, index) => {
             // Assign a consistent color based on index
             const colorClass = CARD_COLORS[index % CARD_COLORS.length];
             
             if (!item) {
               return (
                 <div key={`empty-${index}`} className="rounded-2xl border-2 border-dashed border-gray-200 bg-white/30" />
               );
             }

             return (
               <button
                 key={item.id}
                 onClick={() => setSelectedWord(item)}
                 className={`group relative flex flex-col items-center justify-center p-2 rounded-2xl border-4 ${colorClass} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full text-center`}
               >
                 <div className="bg-white/60 p-3 rounded-full mb-2 backdrop-blur-sm group-hover:scale-110 transition-transform">
                   <BookA size={32} strokeWidth={2.5} className="opacity-80" />
                 </div>
                 <h3 className="text-lg md:text-xl font-bold leading-tight w-full break-words px-1">
                   {item.word}
                 </h3>
               </button>
             );
          })}
        </div>
      </div>

      {/* MODAL / POPUP */}
      {selectedWord && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dyslexia-blue/40 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedWord(null)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl border-8 border-dyslexia-blue p-6 md:p-10 relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedWord(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 rounded-full transition-colors"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center text-center space-y-6">
              
              {/* Title */}
              <div className="space-y-2">
                <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold uppercase tracking-wider">
                  Palabra Nueva
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-dyslexia-blue underline decoration-4 decoration-yellow-400 decoration-wavy underline-offset-8">
                  {selectedWord.word}
                </h2>
              </div>

              {/* Definition */}
              <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 w-full text-left">
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold">
                  <Info size={20} />
                  <span>Significado:</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                  {selectedWord.definition}
                </p>
              </div>

              {/* Example */}
              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100 w-full text-left">
                <div className="flex items-center gap-2 mb-2 text-green-600 font-bold">
                   <MessageCircle size={20} />
                   <span>Ejemplo:</span>
                </div>
                <p className="text-lg md:text-xl text-green-900 italic font-serif leading-relaxed">
                  "{selectedWord.example}"
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VocabularyView;

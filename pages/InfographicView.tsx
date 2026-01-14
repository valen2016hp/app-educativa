import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { getInfographicsForTopic, InfographicItem } from '../data/infographics';
import { getTopicById } from '../data/courses';

const InfographicView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const [selectedImage, setSelectedImage] = useState<InfographicItem | null>(null);

  const topicData = getTopicById(asignatura || '', tema || '');
  const items = getInfographicsForTopic(asignatura || '', tema || '');

  // Ensure we always have a grid of 6 items (fill with nulls if needed)
  const gridItems = [...items];
  while (gridItems.length < 6) {
    gridItems.push(null as any);
  }
  // Limit to 6 if we have more
  const displayItems = gridItems.slice(0, 6);

  // Helper to fallback to placeholder if user hasn't put images in folder yet
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, title: string) => {
    e.currentTarget.src = `https://placehold.co/600x800/e2e8f0/1e293b/png?text=${encodeURIComponent(title)}`;
    e.currentTarget.onerror = null; // Prevent infinite loop
  };

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
            <h2 className="text-2xl font-bold text-dyslexia-blue leading-none">Infografías</h2>
            <p className="text-base text-gray-600 mt-1">
              Colección: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>
      </div>

      {/* 6-Grid Layout - Fills remaining space */}
      <div className="flex-1 min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 h-full">
          {displayItems.map((item, index) => (
            <div 
              key={item ? item.id : `empty-${index}`}
              className={`rounded-2xl overflow-hidden shadow-sm border-2 transition-all duration-300 relative group h-full w-full
                ${item 
                  ? 'bg-white border-dyslexia-blue cursor-pointer hover:shadow-lg hover:border-dyslexia-accent' 
                  : 'bg-white/50 border-dashed border-gray-300'
                }`}
              onClick={() => item && setSelectedImage(item)}
            >
              {item ? (
                <>
                  {/* Image fills the cell entirely */}
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => handleImageError(e, item.title)}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dyslexia-blue/90 via-dyslexia-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-center gap-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={24} />
                      <span className="font-bold text-lg">Ver</span>
                    </div>
                  </div>

                  {/* Title Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-dyslexia-blue shadow-sm">
                    <p className="font-bold text-dyslexia-blue text-xs truncate max-w-[120px]">{item.title}</p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 select-none">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <span className="font-bold text-sm opacity-50">Vacío</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dyslexia-blue/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 border-2 border-white/50"
          >
            <X size={24} strokeWidth={3} />
          </button>
          
          <div 
            className="relative w-full max-w-7xl h-[95vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="h-full w-auto max-w-full object-contain rounded-lg shadow-2xl bg-black" 
              onError={(e) => handleImageError(e, selectedImage.title)}
            />
            <p className="mt-4 text-white font-bold text-xl bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfographicView;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Video, ChevronRight, ChevronLeft, Film } from 'lucide-react';
import { getVideosForTopic } from '../data/videos';
import { getTopicById } from '../data/courses';
import { useUser } from '../context/UserContext';

const VideoView: React.FC = () => {
  const { asignatura, tema } = useParams<{ asignatura: string; tema: string }>();
  const { addActivity } = useUser();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const topicData = getTopicById(asignatura || '', tema || '');
  const videoList = getVideosForTopic(asignatura || '', tema || '');
  const currentVideo = videoList[currentVideoIndex];

  // Log activity
  useEffect(() => {
    addActivity({
      action: 'VIEW_VIDEO',
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: 'general',
    });
  }, [asignatura, tema]);

  const handleNext = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  if (!currentVideo) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] animate-in fade-in">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 text-center max-w-lg">
          <Film size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-500 mb-2">No hay vídeos disponibles</h2>
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
    // No-Scroll Container: Full Viewport - Header/Padding
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
            <h2 className="text-xl font-bold text-dyslexia-blue">Vídeo Aula</h2>
            <p className="text-sm text-gray-600">
              Tema: <span className="font-bold text-dyslexia-accent">{topicData?.name}</span>
            </p>
          </div>
        </div>

        {videoList.length > 1 && (
          <div className="flex items-center gap-2">
             <button 
               onClick={handlePrev} 
               disabled={currentVideoIndex === 0}
               className={`p-2 rounded-full border-2 ${currentVideoIndex === 0 ? 'border-gray-200 text-gray-300' : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'}`}
             >
               <ChevronLeft size={20} />
             </button>
             <span className="font-bold text-gray-500 text-sm">
               {currentVideoIndex + 1} / {videoList.length}
             </span>
             <button 
               onClick={handleNext} 
               disabled={currentVideoIndex === videoList.length - 1}
               className={`p-2 rounded-full border-2 ${currentVideoIndex === videoList.length - 1 ? 'border-gray-200 text-gray-300' : 'border-dyslexia-blue text-dyslexia-blue hover:bg-blue-50'}`}
             >
               <ChevronRight size={20} />
             </button>
          </div>
        )}
      </div>

      {/* Video Container - Centered and Fit */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-2">
        <div className="w-full max-w-4xl h-full flex flex-col bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-dyslexia-blue relative group">
          
          {/* Title Overlay (Fades out) */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300">
             <h3 className="text-white text-lg font-bold">{currentVideo.title}</h3>
          </div>

          {/* The Video Player */}
          {/* We use key={currentVideo.id} to force React to reload the video element when changing tracks */}
          <video
            key={currentVideo.id}
            controls
            className="w-full h-full object-contain bg-black"
            poster={currentVideo.poster}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Tu navegador no soporta el elemento de vídeo.
          </video>
        </div>
      </div>

      {/* Description Footer */}
      <div className="mt-2 text-center flex-shrink-0 bg-white/50 py-2 rounded-xl">
        <p className="text-dyslexia-blue font-bold text-lg">{currentVideo.title}</p>
        <p className="text-gray-600 text-sm">{currentVideo.description}</p>
      </div>

    </div>
  );
};

export default VideoView;

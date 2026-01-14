import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { User, Award, Home, X } from 'lucide-react';
import { useUser } from '../context/UserContext';
import Breadcrumbs from './Breadcrumbs';

const Layout: React.FC = () => {
  const { userName, activityLog } = useUser();
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const location = useLocation();

  const toggleStats = () => setIsStatsOpen(!isStatsOpen);

  // Calculate simple stats
  const totalActivities = activityLog.length;
  const recentScore = activityLog.length > 0 ? activityLog[0].score : 0;
  
  // Breadcrumb-ish logic (simplified)
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-dyslexia-cream text-dyslexia-blue font-sans selection:bg-yellow-200">
      {/* Header - Compact Version */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-dyslexia-blue shadow-sm h-16 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            {!isHome && (
              <Link to="/" className="p-1.5 bg-yellow-100 hover:bg-yellow-200 rounded-full transition-colors border-2 border-dyslexia-blue" aria-label="Volver al inicio">
                <Home size={20} className="text-dyslexia-blue" />
              </Link>
            )}
            <h1 className="text-xl md:text-2xl font-bold tracking-wider truncate">
              Mente Brillante
            </h1>
          </div>

          <button 
            onClick={toggleStats}
            className="flex items-center gap-2 bg-dyslexia-blue text-white px-3 py-1.5 rounded-lg hover:bg-dyslexia-accent transition-all shadow-md focus:ring-4 focus:ring-blue-300 transform active:scale-95"
            aria-label="Ver progreso del usuario"
          >
            <span className="hidden sm:inline font-bold text-base">{userName}</span>
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Main Content - Reduced Padding */}
      <main className="max-w-6xl mx-auto px-4 py-2">
        <Breadcrumbs />
        <Outlet />
      </main>

      {/* User Stats Modal/Overlay */}
      {isStatsOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" 
            onClick={() => setIsStatsOpen(false)}
          />
          
          <div className="bg-white border-4 border-dyslexia-blue rounded-2xl shadow-2xl p-6 w-full max-w-sm pointer-events-auto relative animate-in fade-in slide-in-from-top-10 duration-300">
            <button 
              onClick={() => setIsStatsOpen(false)}
              className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-full text-red-600 transition-colors"
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-yellow-500" size={32} />
              Tu Progreso
            </h2>

            <div className="space-y-4 text-lg">
              <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
                <p className="font-bold text-gray-600">Total Actividades</p>
                <p className="text-4xl font-extrabold text-dyslexia-blue">{totalActivities}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200">
                <p className="font-bold text-gray-600">Última Puntuación</p>
                <p className="text-4xl font-extrabold text-green-700">{recentScore > 0 ? recentScore : '-'}</p>
              </div>

              <div className="pt-4 border-t-2 border-gray-100">
                <h3 className="font-bold mb-2">Historial Reciente:</h3>
                {activityLog.length === 0 ? (
                  <p className="text-gray-500 italic">¡Aún no has empezado! Vamos a jugar.</p>
                ) : (
                  <ul className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {activityLog.slice(0, 5).map((log) => (
                      <li key={log.id} className="text-sm bg-gray-50 p-2 rounded border border-gray-200 flex justify-between">
                        <span className="capitalize">{log.subjectId} - {log.levelId}</span>
                        <span className="font-bold">{log.score}pts</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
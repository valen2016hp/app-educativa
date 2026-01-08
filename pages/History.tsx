import React from 'react';
import { useUser } from '../context/UserContext';
import { ArrowLeft, Clock, Calendar, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  const { activityLog, clearHistory } = useUser();

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (seconds: number) => {
    if (!seconds) return '-';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-dyslexia-blue flex items-center gap-2">
            <Calendar size={32} />
            Historial Completo
          </h2>
          <p className="text-xl text-gray-600">Todo lo que has aprendido hasta ahora.</p>
        </div>
        
        {activityLog.length > 0 && (
          <button 
            onClick={clearHistory}
            className="flex items-center gap-2 text-red-600 hover:bg-red-100 px-4 py-2 rounded-xl transition-colors font-bold"
          >
            <Trash2 size={20} />
            <span className="hidden sm:inline">Borrar Historial</span>
          </button>
        )}
      </div>

      {activityLog.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border-4 border-dashed border-gray-200">
          <Star size={64} className="mx-auto text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-500">No hay actividades todavía</h3>
          <p className="text-lg text-gray-400 mb-6">¡Completa tu primera misión para verla aquí!</p>
          <Link to="/" className="bg-dyslexia-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-dyslexia-accent">
            Ir a Inicio
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border-4 border-dyslexia-blue shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-dyslexia-blue text-white">
                <tr>
                  <th className="p-4 md:p-6 text-lg font-bold">Actividad</th>
                  <th className="p-4 md:p-6 text-lg font-bold hidden sm:table-cell">Fecha</th>
                  <th className="p-4 md:p-6 text-lg font-bold hidden md:table-cell">Tiempo</th>
                  <th className="p-4 md:p-6 text-lg font-bold text-right">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-100">
                {activityLog.map((entry) => (
                  <tr key={entry.id} className="hover:bg-yellow-50 transition-colors">
                    <td className="p-4 md:p-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-xl capitalize text-dyslexia-blue">
                          {entry.subjectId}
                        </span>
                        <span className="text-gray-500 capitalize font-medium">
                          {entry.topicId} • <span className={`px-2 py-0.5 rounded text-sm ${
                            entry.levelId === 'evaluacion' ? 'bg-violet-100 text-violet-700' :
                            entry.levelId === 'dificil' ? 'bg-red-100 text-red-700' :
                            entry.levelId === 'medio' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }`}>{entry.levelId}</span>
                        </span>
                        {/* Mobile only date */}
                        <span className="sm:hidden text-xs text-gray-400 mt-1">
                          {formatDate(entry.timestamp)}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 hidden sm:table-cell font-medium text-gray-600">
                      {formatDate(entry.timestamp)}
                    </td>
                    <td className="p-4 md:p-6 hidden md:table-cell font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        {formatDuration(entry.duration)}
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-right">
                      <div className="inline-block bg-white border-2 border-gray-200 rounded-xl px-4 py-2">
                        <span className="block text-2xl font-extrabold text-dyslexia-accent">
                          {entry.score} <span className="text-sm text-gray-400 font-normal">pts</span>
                        </span>
                        {entry.maxScore && (
                          <span className="block text-xs text-gray-400 font-bold border-t border-gray-100 mt-1 pt-1">
                            de {entry.maxScore}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
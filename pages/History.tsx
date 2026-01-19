
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { 
  Clock, Calendar, Star, Trash2, FileDown, 
  Cloud, RefreshCw, Key, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  const { 
    activityLog, clearHistory, downloadReport, 
    magicKey, isSyncing, pullHistoryFromCloud 
  } = useUser() as any;

  const [inputKey, setInputKey] = useState('');

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('es-ES', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '-';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getActionLabel = (action: string) => {
     switch(action) {
       case 'TEST_COMPLETED': return 'Examen';
       case 'PRACTICE_COMPLETED': return 'Práctica';
       case 'VIEW_INFOGRAPHIC': return 'Infografía';
       case 'VIEW_PRESENTATION': return 'Presentación';
       case 'VIEW_AUDIO': return 'Audio';
       case 'VIEW_VIDEO': return 'Vídeo';
       case 'VIEW_FLASHCARDS': return 'Fichas';
       case 'VIEW_GAME': return 'Completado';
       default: return 'Actividad';
     }
  };

  const handleManualSync = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey.trim()) {
      pullHistoryFromCloud(inputKey.trim());
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Cloud Sync Section - Magic Key */}
      <section className="bg-gradient-to-br from-dyslexia-blue to-blue-900 rounded-[2.5rem] p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <Cloud size={140} />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Key className="text-yellow-400" size={32} />
              <h2 className="text-2xl font-bold uppercase tracking-widest">Tu Clave Mágica</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 inline-block">
              <span className="text-3xl md:text-4xl font-black text-yellow-300 font-mono tracking-tighter">
                {magicKey || 'Generando...'}
              </span>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed max-w-md">
              ¡Esta es tu llave maestra! Escríbela en un papel. Úsala en cualquier dispositivo para ver tus logros.
            </p>
          </div>

          <div className="bg-white/10 p-6 md:p-8 rounded-[2rem] border-2 border-white/20 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <RefreshCw size={24} className={isSyncing ? "animate-spin" : ""} />
              ¿Tienes otra clave?
            </h3>
            <p className="text-sm text-blue-200">Si vienes de otro iPad o computadora, pon tu clave aquí:</p>
            <form onSubmit={handleManualSync} className="flex gap-3">
              <input 
                type="text"
                placeholder="Ej: Estrella-Solar-Valiente"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                className="flex-1 bg-white/10 border-2 border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:border-yellow-400 transition-all font-bold"
              />
              <button 
                type="submit"
                disabled={isSyncing}
                className="bg-yellow-400 hover:bg-yellow-500 text-dyslexia-blue p-4 rounded-xl shadow-lg transition-transform active:scale-90 disabled:opacity-50"
              >
                <ArrowRight size={24} strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold text-dyslexia-blue flex items-center gap-3">
            <Calendar size={36} />
            Mis Logros Guardados
          </h2>
          <p className="text-xl text-gray-600">Todo lo que has aprendido en la nube.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            onClick={downloadReport}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-4 rounded-2xl transition-all font-bold shadow-lg active:translate-y-1"
          >
            <FileDown size={24} />
            <span>Descargar Excel</span>
          </button>

          {activityLog.length > 0 && (
            <button 
              onClick={clearHistory}
              className="p-4 text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
              title="Limpiar vista local"
            >
              <Trash2 size={28} />
            </button>
          )}
        </div>
      </div>

      {activityLog.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[3rem] border-8 border-dashed border-gray-100">
          <Star size={80} className="mx-auto text-yellow-400 mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold text-gray-400">¡Tu aventura te espera!</h3>
          <p className="text-xl text-gray-300 mb-10">Completa una lección para llenar tu historial de medallas.</p>
          <Link to="/" className="bg-dyslexia-blue text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-dyslexia-accent shadow-xl transition-all inline-block">
            ¡Empezar ahora!
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border-8 border-dyslexia-blue shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-dyslexia-blue text-white">
                <tr>
                  <th className="p-6 text-xl font-bold">Actividad</th>
                  <th className="p-6 text-xl font-bold hidden sm:table-cell">Fecha y Hora</th>
                  <th className="p-6 text-xl font-bold hidden md:table-cell">Tiempo</th>
                  <th className="p-6 text-xl font-bold text-right">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y-4 divide-gray-50">
                {activityLog.map((entry: any) => (
                  <tr key={entry.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="font-black text-xs text-dyslexia-accent uppercase tracking-widest mb-1">
                          {getActionLabel(entry.action)}
                        </span>
                        <span className="font-bold text-2xl capitalize text-dyslexia-blue">
                          {entry.subjectId.replace(/-/g, ' ')}
                        </span>
                        <span className="text-gray-500 capitalize font-bold opacity-70 mt-1">
                          {entry.topicId} • <span className="text-dyslexia-accent italic">{entry.levelId}</span>
                        </span>
                      </div>
                    </td>
                    <td className="p-6 hidden sm:table-cell font-bold text-gray-400">
                      {formatDate(entry.timestamp)}
                    </td>
                    <td className="p-6 hidden md:table-cell font-bold text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock size={18} />
                        {formatDuration(entry.duration)}
                      </div>
                    </td>
                    <td className="p-6 text-right">
                      {entry.score !== undefined ? (
                        <div className="inline-block bg-indigo-50 border-4 border-indigo-100 rounded-2xl px-6 py-3">
                          <span className="text-4xl font-black text-dyslexia-blue">
                            {entry.score}
                          </span>
                          <span className="text-lg text-indigo-300 font-black ml-1">/{entry.maxScore}</span>
                        </div>
                      ) : (
                        <div className="bg-green-50 text-green-500 p-4 rounded-full inline-block">
                          <Star size={32} fill="currentColor" />
                        </div>
                      )}
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

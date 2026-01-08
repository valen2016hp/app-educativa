import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Calculator,
  Pause,
  HardHat, 
  ArrowLeft,
  Hourglass
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Question } from '../types';
import { getContentForLevel } from '../data/content';

const INITIAL_TIME = 600; // 10 minutes

const ExerciseEngine: React.FC = () => {
  const { asignatura, tema, nivel } = useParams<{ asignatura: string; tema: string; nivel: string }>();
  const navigate = useNavigate();
  const { addActivity } = useUser();

  const isEvaluation = nivel === 'evaluacion';

  // Load questions based on URL params
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Game State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(INITIAL_TIME); 
  // Add 'timeout' to status
  const [status, setStatus] = useState<'playing' | 'feedback' | 'finished' | 'timeout'>('playing');
  
  // Feedback State
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean>(false);
  const [hasAttemptedCurrent, setHasAttemptedCurrent] = useState(false);
  
  // Input State
  const [numericInput, setNumericInput] = useState('');

  useEffect(() => {
    // Simulate a tiny loading delay for better UX
    setIsLoading(true);
    setTimeout(() => {
      const data = getContentForLevel(asignatura || '', tema || '', nivel || '');
      if (data && data.length > 0) {
        setQuestions(data);
      }
      setIsLoading(false);
    }, 500);
  }, [asignatura, tema, nivel]);

  // Timer Logic
  useEffect(() => {
    let interval: any;
    if (status === 'playing' && timer > 0 && !isLoading && questions.length > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setStatus('timeout'); // Trigger timeout
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status, timer, isLoading, questions]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCheckAnswer = (answer: string | number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = String(answer).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
    
    // Evaluation Logic
    if (isEvaluation) {
      if (isCorrect) {
        setScore((prev) => prev + 10);
      }
      
      // Move to next question immediately
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setNumericInput('');
      } else {
        setStatus('finished');
      }
      return;
    }

    // Standard Mode Logic
    setLastAnswerCorrect(isCorrect);
    setStatus('feedback');

    if (isCorrect) {
      if (!hasAttemptedCurrent) {
        setScore((prev) => prev + 10);
      }
    } else {
      setHasAttemptedCurrent(true);
    }
  };

  const handleNext = () => {
    if (lastAnswerCorrect) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setStatus('playing');
        setHasAttemptedCurrent(false);
        setNumericInput('');
      } else {
        setStatus('finished');
      }
    } else {
      // Retry mode
      setStatus('playing');
    }
  };

  const handleFinish = () => {
    const timeSpent = INITIAL_TIME - timer;
    const maxPossibleScore = questions.length * 10;

    addActivity({
      subjectId: asignatura || 'unknown',
      topicId: tema || 'unknown',
      levelId: nivel || 'unknown',
      score: score,
      maxScore: maxPossibleScore,
      duration: timeSpent,
    });
    // Navigate back to Topic Select
    navigate(`/${asignatura}`);
  };

  const handleTimeoutExit = () => {
    // We could save partial progress here, but for now we just exit
    navigate(`/${asignatura}/${tema}`);
  };

  // --- LOADING / ERROR STATES ---

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-dyslexia-blue"></div>
      </div>
    );
  }

  // "COMING SOON" STATE
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 shadow-xl max-w-2xl">
          <div className="bg-yellow-100 p-6 rounded-full inline-block mb-6">
            <HardHat size={64} className="text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-dyslexia-blue mb-4">¡En Construcción!</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nuestros profesores robots todavía están escribiendo las misiones para: <br/>
            <span className="font-bold text-dyslexia-accent mt-2 block capitalize">
              {asignatura} / {tema} / {nivel}
            </span>
          </p>
          <p className="text-lg text-gray-500 mb-8 italic">
            Prueba con "Matemáticas / Fracciones / Fácil" para ver una misión activa.
          </p>
          <Link 
            to={`/${asignatura}/${tema}`}
            className="inline-flex items-center gap-2 bg-dyslexia-blue text-white px-8 py-3 rounded-xl font-bold text-xl hover:bg-dyslexia-accent transition-colors"
          >
            <ArrowLeft size={24} />
            Elegir otro nivel
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;

  // --- RENDER HELPERS ---

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-6 mb-6 overflow-hidden border-2 border-gray-300">
      <div 
        className="bg-dyslexia-accent h-6 rounded-full transition-all duration-500 ease-out flex items-center justify-center text-xs text-white font-bold"
        style={{ width: `${progressPercentage}%` }}
      >
        {Math.round(progressPercentage)}%
      </div>
    </div>
  );

  const renderMultipleChoice = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
      {currentQuestion.options?.map((option) => (
        <button
          key={option}
          onClick={() => handleCheckAnswer(option)}
          className="bg-white p-8 rounded-3xl border-4 border-dyslexia-blue shadow-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all text-3xl font-bold text-dyslexia-blue"
        >
          {option}
        </button>
      ))}
    </div>
  );

  const renderComparator = () => (
  <div className="flex flex-wrap gap-6 justify-center items-center py-8 w-full max-w-3xl">
    {currentQuestion.options?.map((option) => (
      <button
        key={option}
        onClick={() => handleCheckAnswer(option)}
        className="min-w-[200px] p-6 bg-white rounded-3xl border-4 border-dyslexia-blue text-2xl font-bold text-dyslexia-blue hover:bg-yellow-50 hover:-translate-y-2 active:scale-95 transition-all shadow-lg"
      >
        {option}
      </button>
    ))}
  </div>
  );

  const renderNumeric = () => (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <input
        type="text"
        value={numericInput}
        onChange={(e) => setNumericInput(e.target.value)}
        placeholder="Respuesta..."
        className="w-full p-6 text-3xl text-center border-4 border-dyslexia-blue rounded-2xl focus:ring-4 focus:ring-blue-200 outline-none placeholder:text-gray-300"
        onKeyDown={(e) => e.key === 'Enter' && handleCheckAnswer(numericInput)}
      />
      <button
        onClick={() => handleCheckAnswer(numericInput)}
        className="bg-dyslexia-accent text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-600 transition-colors shadow-lg flex items-center gap-2"
      >
        <Calculator size={24} />
        {isEvaluation ? 'Siguiente' : 'Comprobar'}
      </button>
    </div>
  );

  // --- TIMEOUT VIEW (New) ---
  if (status === 'timeout') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
        <div className="bg-white p-10 rounded-[3rem] border-8 border-red-400 shadow-2xl text-center max-w-lg w-full">
          <Hourglass size={80} className="mx-auto text-red-500 mb-6 animate-pulse" />
          
          <h2 className="text-4xl font-bold text-dyslexia-blue mb-4">¡Tiempo Terminado!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Se ha acabado el tiempo para esta actividad.
          </p>
          
          <button
            onClick={handleTimeoutExit}
            className="w-full bg-dyslexia-blue text-white py-4 rounded-2xl text-2xl font-bold hover:bg-dyslexia-accent transition-all shadow-lg"
          >
            Volver al Menú
          </button>
        </div>
      </div>
    );
  }

  // --- FINISHED VIEW ---
  if (status === 'finished') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
        <div className="bg-white p-10 rounded-[3rem] border-8 border-yellow-400 shadow-2xl text-center max-w-lg w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400"></div>
          
          <Trophy size={80} className="mx-auto text-yellow-500 mb-6 animate-bounce" />
          
          <h2 className="text-4xl font-bold text-dyslexia-blue mb-2">¡Misión Cumplida!</h2>
          <p className="text-xl text-gray-600 mb-8">
            {isEvaluation ? 'Has completado la evaluación.' : 'Has completado el entrenamiento.'}
          </p>
          
          <div className="bg-blue-50 p-6 rounded-2xl mb-8 border-2 border-blue-100">
            <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">Puntuación Final</p>
            <p className="text-6xl font-extrabold text-dyslexia-accent">{score} pts</p>

            {isEvaluation && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xl text-gray-600">
                  Acertaste <span className="font-extrabold text-green-600 text-2xl">{score / 10}</span> de <span className="font-bold text-gray-800">{questions.length}</span> preguntas.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleFinish}
            className="w-full bg-green-500 text-white py-4 rounded-2xl text-2xl font-bold hover:bg-green-600 transition-all shadow-[0_6px_0_0_#15803d] active:shadow-none active:translate-y-2"
          >
            Guardar y Salir
          </button>
        </div>
      </div>
    );
  }

  // --- PLAYING VIEW ---
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-20">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border-2 border-gray-100 gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-dyslexia-blue text-white px-3 py-1 rounded-lg font-bold capitalize">{tema}</span>
          <span className="text-gray-400">/</span>
          <span className={`px-3 py-1 rounded-lg font-bold capitalize border-2 
            ${nivel === 'facil' ? 'bg-green-100 border-green-300 text-green-700' : 
              nivel === 'medio' ? 'bg-orange-100 border-orange-300 text-orange-700' : 
              nivel === 'dificil' ? 'bg-red-100 border-red-300 text-red-700' :
              'bg-violet-100 border-violet-300 text-violet-700'}`}>
            {nivel}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-xl font-bold ${timer < 60 ? 'text-red-500 animate-pulse' : 'text-dyslexia-blue'}`}>
            {status === 'feedback' ? <Pause size={24} /> : <Clock size={24} />}
            {formatTime(timer)}
          </div>
          {!isEvaluation && (
            <div className="bg-yellow-100 px-4 py-2 rounded-xl border-2 border-yellow-300 font-bold text-yellow-800">
              Score: {score}
            </div>
          )}
        </div>
      </div>

      {renderProgressBar()}

      {/* QUESTION CARD */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border-b-8 border-r-8 border-dyslexia-blue shadow-lg min-h-[400px] flex flex-col items-center justify-center relative">
        <span className="absolute top-6 left-8 text-gray-400 font-bold text-lg tracking-widest">
          MISIÓN {currentQuestionIndex + 1} DE {questions.length}
        </span>

        <h3 className="text-3xl md:text-4xl font-bold text-center text-dyslexia-blue mb-12 leading-relaxed max-w-3xl">
          {currentQuestion.prompt}
        </h3>

        {currentQuestion.type === 'multiple-choice' && renderMultipleChoice()}
        {currentQuestion.type === 'comparator' && renderComparator()}
        {currentQuestion.type === 'numeric' && renderNumeric()}
      </div>

      {/* FEEDBACK OVERLAY/SECTION (Only for Standard Mode) */}
      {!isEvaluation && status === 'feedback' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`bg-white rounded-3xl p-8 max-w-lg w-full border-b-8 shadow-2xl transform transition-all ${lastAnswerCorrect ? 'border-green-500' : 'border-orange-500'}`}>
            <div className="flex flex-col items-center text-center space-y-4">
              {lastAnswerCorrect ? (
                <>
                  <CheckCircle size={80} className="text-green-500 animate-bounce" />
                  <h2 className="text-3xl font-bold text-green-700">¡Fantástico!</h2>
                  <p className="text-xl text-gray-600">¡Lo has hecho genial! Sigue así.</p>
                  <button 
                    onClick={handleNext}
                    autoFocus
                    className="mt-4 bg-green-500 text-white px-8 py-3 rounded-xl text-xl font-bold hover:bg-green-600 transition-colors w-full shadow-md"
                  >
                    Siguiente Misión <ArrowRight className="inline ml-2" />
                  </button>
                </>
              ) : (
                <>
                  <XCircle size={80} className="text-orange-500" />
                  <h2 className="text-3xl font-bold text-orange-600">¡Casi casi!</h2>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 text-left w-full">
                    <p className="font-bold text-orange-800 mb-1">Pista de Exploradora:</p>
                    <p className="text-lg text-gray-700">{currentQuestion.feedback}</p>
                  </div>
                  <button 
                    onClick={handleNext} 
                    className="mt-4 bg-dyslexia-blue text-white px-8 py-3 rounded-xl text-xl font-bold hover:bg-dyslexia-accent transition-colors w-full shadow-md flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={20} />
                    Intentarlo de nuevo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseEngine;
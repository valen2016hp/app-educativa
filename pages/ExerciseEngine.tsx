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
  Hourglass,
  AlertCircle,
  Check
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Question } from '../types';
import { getContentForLevel } from '../data/content';

const INITIAL_TIME = 600; // 10 minutes

// Helper type to track history within the session
type UserAnswerRecord = {
  questionId: string;
  prompt: string;
  userResponse: string | number;
  correctResponse: string | number;
  isCorrect: boolean;
};

const ExerciseEngine: React.FC = () => {
  const { asignatura, tema, nivel } = useParams<{ asignatura: string; tema: string; nivel: string }>();
  const navigate = useNavigate();
  const { addActivity } = useUser();

  const isEvaluation = nivel?.includes('evaluacion') || false;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Game State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(INITIAL_TIME); 
  const [status, setStatus] = useState<'playing' | 'feedback' | 'finished' | 'timeout'>('playing');
  
  // Feedback State
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean>(false);
  const [hasAttemptedCurrent, setHasAttemptedCurrent] = useState(false);
  
  // Track all answers for the summary
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  
  // Input State
  const [numericInput, setNumericInput] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = getContentForLevel(asignatura || '', tema || '', nivel || '');
      if (data && data.length > 0) {
        setQuestions(data);
      }
      setIsLoading(false);
    }, 500);
  }, [asignatura, tema, nivel]);

  useEffect(() => {
    let interval: any;
    if (status === 'playing' && timer > 0 && !isLoading && questions.length > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setStatus('timeout');
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
    
    // Record the answer
    setUserAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      prompt: currentQuestion.prompt,
      userResponse: answer,
      correctResponse: currentQuestion.correctAnswer,
      isCorrect: isCorrect
    }]);

    if (isEvaluation) {
      if (isCorrect) setScore((prev) => prev + 10);
      
      // In evaluation, we move immediately to next or finish
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setNumericInput('');
      } else {
        setStatus('finished');
      }
      return;
    }

    // Normal Practice Mode Logic
    setLastAnswerCorrect(isCorrect);
    setStatus('feedback');

    if (isCorrect) {
      if (!hasAttemptedCurrent) setScore((prev) => prev + 10);
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
    navigate(`/${asignatura}`);
  };

  const handleTimeoutExit = () => {
    navigate(`/${asignatura}/${tema}`);
  };

  if (isLoading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-dyslexia-blue"></div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
        <div className="bg-white p-10 rounded-[3rem] border-4 border-dashed border-gray-300 shadow-xl max-w-2xl">
          <HardHat size={64} className="text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-dyslexia-blue mb-4">¡En Construcción!</h2>
          <p className="text-lg text-gray-600 mb-6">Estamos trabajando en este nivel.</p>
          <Link to={`/${asignatura}/${tema}`} className="inline-flex items-center gap-2 bg-dyslexia-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-dyslexia-accent transition-colors">
            <ArrowLeft size={20} /> Elegir otro nivel
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;

  // --- RENDER HELPERS ---

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden border-2 border-gray-300 flex-shrink-0">
      <div 
        className="bg-dyslexia-accent h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );

  const renderMultipleChoice = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-h-full overflow-y-auto pr-1">
      {currentQuestion.options?.map((option) => (
        <button
          key={option}
          onClick={() => handleCheckAnswer(option)}
          className="bg-white p-6 rounded-2xl border-4 border-dyslexia-blue shadow-md hover:bg-blue-50 hover:scale-[1.01] active:scale-95 transition-all text-2xl font-bold text-dyslexia-blue flex items-center justify-center text-center min-h-[100px]"
        >
          {option}
        </button>
      ))}
    </div>
  );

  const renderComparator = () => (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full h-full">
      {currentQuestion.options?.map((option) => (
        <button
          key={option}
          onClick={() => handleCheckAnswer(option)}
          className="w-full sm:w-1/2 p-8 bg-white rounded-3xl border-4 border-dyslexia-blue text-2xl font-bold text-dyslexia-blue hover:bg-yellow-50 hover:-translate-y-1 active:scale-95 transition-all shadow-lg flex items-center justify-center text-center min-h-[150px]"
        >
          {option}
        </button>
      ))}
    </div>
  );

  const renderNumeric = () => (
    <div className="flex flex-col items-center gap-6 w-full max-w-md justify-center h-full">
      <input
        type="text"
        value={numericInput}
        onChange={(e) => setNumericInput(e.target.value)}
        placeholder="Tu respuesta..."
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

  if (status === 'timeout') {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
        <div className="bg-white p-8 rounded-[2rem] border-8 border-red-400 shadow-2xl text-center max-w-lg w-full">
          <Hourglass size={64} className="mx-auto text-red-500 mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold text-dyslexia-blue mb-2">¡Tiempo Terminado!</h2>
          <button onClick={handleTimeoutExit} className="w-full bg-dyslexia-blue text-white py-3 rounded-xl text-xl font-bold mt-6">
            Volver al Menú
          </button>
        </div>
      </div>
    );
  }

  // --- FINISHED VIEW (Detailed for Evaluation) ---
  if (status === 'finished') {
    const incorrectAnswers = userAnswers.filter(a => !a.isCorrect);
    const correctCount = userAnswers.length - incorrectAnswers.length;

    return (
      <div className="h-full max-h-[calc(100vh-120px)] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500 p-4">
        <div className="bg-white rounded-[2rem] border-8 border-yellow-400 shadow-2xl w-full max-w-4xl flex flex-col max-h-full overflow-hidden">
          
          {/* Header Section */}
          <div className="p-6 md:p-8 text-center flex-shrink-0 bg-yellow-50 border-b-2 border-yellow-100">
            <Trophy size={64} className="mx-auto text-yellow-500 mb-2 animate-bounce" />
            <h2 className="text-3xl font-bold text-dyslexia-blue mb-2">
              {isEvaluation ? '¡Examen Completado!' : '¡Misión Cumplida!'}
            </h2>
            <div className="flex justify-center gap-4 text-xl font-bold text-gray-600">
              <span className="text-green-600">{correctCount} Aciertos</span>
              <span>•</span>
              <span className="text-red-500">{incorrectAnswers.length} Errores</span>
              <span>•</span>
              <span className="text-dyslexia-accent">{score} Pts</span>
            </div>
          </div>

          {/* Results List (Scrollable) */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 bg-white">
            {incorrectAnswers.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto text-green-500 mb-3" />
                <h3 className="text-2xl font-bold text-green-600">¡Perfecto! Todo correcto.</h3>
                <p className="text-gray-500">Has demostrado ser una experta.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-dyslexia-blue flex items-center gap-2 mb-4 py-2 border-b border-gray-100">
                  <AlertCircle className="text-orange-500" />
                  Repasemos los errores:
                </h3>
                <div className="space-y-4">
                  {incorrectAnswers.map((record, index) => (
                    <div key={index} className="bg-red-50 rounded-xl p-4 border-l-8 border-red-400">
                      <p className="font-bold text-lg text-gray-800 mb-3">{record.prompt}</p>
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                        <div className="flex items-center gap-2 text-red-700 bg-white/50 px-3 py-2 rounded-lg w-full md:w-auto">
                          <XCircle size={20} className="flex-shrink-0" />
                          <span className="font-bold text-sm uppercase text-red-400 mr-1">Tú dijiste:</span>
                          <span className="font-bold">{record.userResponse}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-700 bg-green-100 px-3 py-2 rounded-lg w-full md:w-auto border border-green-200">
                          <Check size={20} className="flex-shrink-0" />
                          <span className="font-bold text-sm uppercase text-green-600 mr-1">Correcto:</span>
                          <span className="font-bold">{record.correctResponse}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t-2 border-gray-100 bg-gray-50 flex-shrink-0">
            <button onClick={handleFinish} className="w-full bg-dyslexia-blue text-white py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-dyslexia-accent transition-colors">
              Guardar y Salir
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col max-w-5xl mx-auto animate-in fade-in duration-500">
      {/* HEADER - Fixed Height */}
      <div className="flex-shrink-0 flex justify-between items-center bg-white p-3 rounded-2xl shadow-sm border-2 border-gray-100 mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-dyslexia-blue text-white px-2 py-1 rounded-lg text-sm font-bold capitalize">{tema}</span>
          <span className="text-gray-400">/</span>
          <span className="text-dyslexia-blue font-bold capitalize text-sm">{nivel?.replace('evaluacion-', '')}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 font-bold ${timer < 60 ? 'text-red-500 animate-pulse' : 'text-dyslexia-blue'}`}>
            {status === 'feedback' ? <Pause size={20} /> : <Clock size={20} />}
            {formatTime(timer)}
          </div>
          {!isEvaluation && (
            <div className="bg-yellow-100 px-3 py-1 rounded-lg border border-yellow-300 font-bold text-yellow-800 text-sm">
              {score} pts
            </div>
          )}
        </div>
      </div>

      {renderProgressBar()}

      {/* QUESTION CARD - Flexible Area */}
      <div className="flex-1 min-h-0 bg-white rounded-[2rem] border-b-8 border-r-8 border-dyslexia-blue shadow-lg relative flex flex-col p-6 overflow-hidden">
        {/* Prompt Section */}
        <div className="flex-shrink-0 mb-4 text-center">
          <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1 block">
            {isEvaluation ? 'Pregunta' : 'Misión'} {currentQuestionIndex + 1} de {questions.length}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-dyslexia-blue leading-snug">
            {currentQuestion.prompt}
          </h3>
        </div>

        {/* Options Section - Takes remaining space */}
        <div className="flex-1 min-h-0 flex items-center justify-center w-full">
           {currentQuestion.type === 'multiple-choice' && renderMultipleChoice()}
           {currentQuestion.type === 'comparator' && renderComparator()}
           {currentQuestion.type === 'numeric' && renderNumeric()}
        </div>
      </div>

      {/* FEEDBACK OVERLAY (Absolute) - Only for Practice Mode */}
      {!isEvaluation && status === 'feedback' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`bg-white rounded-3xl p-6 max-w-md w-full border-b-8 shadow-2xl ${lastAnswerCorrect ? 'border-green-500' : 'border-orange-500'}`}>
            <div className="flex flex-col items-center text-center space-y-3">
              {lastAnswerCorrect ? (
                <>
                  <CheckCircle size={60} className="text-green-500 animate-bounce" />
                  <h2 className="text-2xl font-bold text-green-700">¡Fantástico!</h2>
                  <button onClick={handleNext} autoFocus className="mt-2 bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-bold w-full shadow-md">
                    Siguiente <ArrowRight className="inline ml-1" size={20} />
                  </button>
                </>
              ) : (
                <>
                  <XCircle size={60} className="text-orange-500" />
                  <h2 className="text-2xl font-bold text-orange-600">¡Casi casi!</h2>
                  <div className="bg-orange-50 p-3 rounded-xl border border-orange-200 text-left w-full text-sm">
                    <p className="font-bold text-orange-800">Pista:</p>
                    <p className="text-gray-700">{currentQuestion.feedback}</p>
                  </div>
                  <button onClick={handleNext} className="mt-2 bg-dyslexia-blue text-white px-6 py-3 rounded-xl text-lg font-bold w-full shadow-md flex items-center justify-center gap-2">
                    <RotateCcw size={18} /> Reintentar
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
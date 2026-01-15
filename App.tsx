
// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicSelect from './pages/TopicSelect';
import LevelSelect from './pages/LevelSelect';
import ExerciseEngine from './pages/ExerciseEngine';
import History from './pages/History';
import InfographicView from './pages/InfographicView';
import PresentationView from './pages/PresentationView';
import PracticeSelect from './pages/PracticeSelect';
import EvaluationSelect from './pages/EvaluationSelect';
import AudioView from './pages/AudioView';
import VideoView from './pages/VideoView';
import FlashcardsView from './pages/FlashcardsView';
import GameView from './pages/GameView';
import VocabularyView from './pages/VocabularyView';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home: Subject Selector */}
            <Route index element={<Home />} />

            <Route path="history" element={<History />} />
            
            {/* Subject: Topic Selector */}
            <Route path=":asignatura" element={<TopicSelect />} />
            
            {/* Subject/Topic: Level Selector */}
            <Route path=":asignatura/:tema" element={<LevelSelect />} />
            
            {/* SPECIAL VIEWS (Must be before generic :nivel route) */}
            <Route path=":asignatura/:tema/infografias" element={<InfographicView />} />
            <Route path=":asignatura/:tema/presentacion" element={<PresentationView />} />
            <Route path=":asignatura/:tema/audio" element={<AudioView />} />
            <Route path=":asignatura/:tema/video" element={<VideoView />} />
            <Route path=":asignatura/:tema/fichas" element={<FlashcardsView />} />
            <Route path=":asignatura/:tema/juegos" element={<GameView />} />
            <Route path=":asignatura/:tema/vocabulario" element={<VocabularyView />} />
            <Route path=":asignatura/:tema/practica" element={<PracticeSelect />} />
            <Route path=":asignatura/:tema/evaluacion" element={<EvaluationSelect />} />

            {/* Subject/Topic/Level: Exercise Engine */}
            <Route path=":asignatura/:tema/:nivel" element={<ExerciseEngine />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

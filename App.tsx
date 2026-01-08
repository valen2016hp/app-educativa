import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicSelect from './pages/TopicSelect';
import LevelSelect from './pages/LevelSelect';
import ExerciseEngine from './pages/ExerciseEngine';
import History from './pages/History';

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
            
            {/* Subject/Topic/Level: Exercise Engine */}
            <Route path=":asignatura/:tema/:nivel" element={<ExerciseEngine />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
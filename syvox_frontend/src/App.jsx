import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import STT from './pages/stt';
import TTS from './pages/tts';


function App(){
  return (
    <Routes>
      <Route path="/" element = {<Dashboard />} />
      <Route path="/stt" element = {<STT />} />
      <Route path="/tts" element = {<TTS />} />
    </Routes>
  );
}

export default App;
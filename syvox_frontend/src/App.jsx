import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';


function App(){
  return (
    <Routes>
      <Route path="/" element = {<Dashboard />} />
      <Route path="/stt" element = {<stt />} />
      <Route path="/tts" element = {<tts />} />
    </Routes>
  );
}

export default App;
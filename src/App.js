import Navbar from './components/navbar'; 
import Main from './components/main';
import AboutMe from './components/aboutme';
import Values from './components/values';
import Project from './components/project';
import Skill from './components/skill';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      <AboutMe />
      <Values />
      <Project />
      <Skill />
    </div>
  );
}

export default App;

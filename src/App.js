import Navbar from './components/navbar'; 
import Main from './components/main';
import AboutMe from './components/aboutme';
import Values from './components/values';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      <AboutMe />
      <Values />
    </div>
  );
}

export default App;

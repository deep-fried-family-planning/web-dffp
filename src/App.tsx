import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const Root = () => {
  return (
      <h1>Root</h1>
  )
}


const App = () => {
  return (
      <Routes>
        <Route path="/" element={ <Root/>} />
        <Route path="/Home" element={ <Home/>} />
        <Route path="/About" element={ <About/>} />

      </Routes>

  );
};

export default App;

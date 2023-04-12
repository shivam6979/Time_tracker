import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
// import Tasks from './components/Tasks';
// import Timer from './components/Timer';
// import {BrowserRouter, Route,Routes } from 'react-router-dom';
// import Last from './components/Last';

function App() {
  return (
    <div className="App">
      {/* <Timer/> */}
      <Projects/>
      {/* <BrowserRouter>
        <Routes>
        <Route path="last" element={<Last/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Tasks/> */}
      {/* <Timer/> */}
    </div>
  );
}

export default App;

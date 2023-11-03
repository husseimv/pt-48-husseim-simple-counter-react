import './App.css';
import Design from './components/Design';
import Footer from './components/Footer.jsx'
import Calendar from './components/Calendar.jsx';
import Messages from './components/Messages.jsx';
import Config from './components/Config.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
  
    <div>

      <BrowserRouter>

        <Routes>

        <Route path='/' element={<Design/>}/>
        <Route path='/Calendar' element={<Calendar/>}/>
        <Route path='/Messages' element={<Messages/>}/>
        <Route path='/Config' element={<Config/>}/>

        </Routes>

        <Footer />

      </BrowserRouter>
      
    </div>
  
  </>);
}

export default App;

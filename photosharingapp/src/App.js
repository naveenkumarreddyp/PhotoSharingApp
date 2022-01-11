import Postview from './postview/postview';
import Homepage from './homepage/homepage';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path='/Postview' element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

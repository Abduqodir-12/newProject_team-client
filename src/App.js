import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { useInfoContext } from './context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home'
import CarSell from './components/CarSell/CarSell'
import CarPost from './components/CarPost/CarPost';
import Yanglik from './components/Yangiliklar/Yanglik';

function App() {
  const { currentUser } = useInfoContext()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={currentUser ? <Home /> : <Auth />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/Sell' element={<CarSell />} />
        <Route path='/carpost/:id' element={<CarPost />} />
        <Route path='/news' element={<Yanglik />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

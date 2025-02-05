import './App.scss';
import { Header } from './layout/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './layout/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

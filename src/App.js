import './App.css';
import './components/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/navbar/header';
import Navbar from './components/navbar/navbar';
import MyRoutes from './components/navbar/router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
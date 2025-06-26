import './App.css';
import './components/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import MyRoutes from './components/navbar/router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
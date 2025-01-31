import './App.css';
import Dashboard from './components/dashboard';
import LoginPage from './components/login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedroutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Router>
    );
}

export default App;

import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Record';
import Login from './pages/Login'
import Record from './pages/Record'
function App() {

  return (
    <Router>
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/" element={<MainPage />} />
       <Route path="/record" element={<Record />} />
     </Routes>
   </Router>
  )
}

export default App

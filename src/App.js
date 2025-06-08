import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import StudentLogin from './StudentLogin';
import StudentDetails from './StudentDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/student-login' element={<StudentLogin />}></Route>
          <Route path='/student-details' element={<StudentDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
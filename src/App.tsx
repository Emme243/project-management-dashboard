import { Route, Routes } from 'react-router-dom';
import { Login } from './modules/auth/pages/Login';
import { Register } from './modules/auth/pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

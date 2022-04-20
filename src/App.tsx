import { Auth } from './modules/auth/pages/auth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;

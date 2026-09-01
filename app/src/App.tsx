import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import ReferencePage from './pages/ReferencePage';

export default function App() {
  return (
    <>
      <Header />
      <div className="app-body">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:slug" element={<RecipePage />} />
            <Route path="/reference/:slug" element={<ReferencePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './pages/HomePage';

export const App = () => (
  <>
    <Navbar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs" element={<TabsPage />}>
            <Route path=":selectedTab" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />

        </Routes>

      </div>
    </div>
  </>
);

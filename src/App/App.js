import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import './App.scss';
import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';

import HomePage from '@pages/HomePage/HomePage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';
import NoMatchPage from '@pages/NoMatchPage/NoMatchPage';

function App() {
  const mode = useSelector(state => state.settings.mode);
  
  return (
    <Router>
      <Header></Header>
      <Layout>
        <div className={mode}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="history" element={<HistoryPage />} />
            <Route exact path="settings" element={<SettingsPage />} />
            <Route path="/*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
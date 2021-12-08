import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="yt-downloader-site/" element={<HomePage />} />
            <Route path="yt-downloader-site/history" element={<HistoryPage />} />
            <Route path="yt-downloader-site/settings" element={<SettingsPage />} />
            <Route path="yt-downloader-site/*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
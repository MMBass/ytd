import{ HashRouter as Router, Routes, Route} from "react-router-dom";

import './App.scss';
import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';

import HomePage from '@pages/HomePage/HomePage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';
import NoMatchPage from '@pages/NoMatchPage/NoMatchPage';

function App() {

  return (
       <Router>
          <Header></Header>
          <Layout>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="history" element={<HistoryPage />} />
              <Route exact path="settings" element={<SettingsPage />} />
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </Layout>
      </Router>
  );
}

export default App;
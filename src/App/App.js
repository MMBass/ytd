import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import downAxios from "@apis/downAxios";

import './App.scss';
import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';
import HeadTags from '@components/HeadTags/HeadTags';

import HomePage from '@pages/HomePage/HomePage';
import HistoryPage from '@pages/HistoryPage/HistoryPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';
import NoMatchPage from '@pages/NoMatchPage/NoMatchPage';

function App() {
  const mode = useSelector(state => state.settings.mode);

  function init() {
    downAxios.get('/').then((res) => {
      if (res.status === 200) {
      }
    }).catch((err) => {
      console.log(err)
    });

  }

  useEffect(() => {
    // if (first === true) {

    // }
    init();
  }, []);

  return (
    <Router>
      <HeadTags></HeadTags>
      <div className={mode}>
        <Header></Header>
        <Layout>
          <Routes>
            <Route exact path="yt-downloader-site/" element={<HomePage />} />
            <Route exact path="yt-downloader-site/history" element={<HistoryPage />} />
            <Route exact path="yt-downloader-site/settings" element={<SettingsPage />} />
            <Route path="yt-downloader-site/*" element={<NoMatchPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
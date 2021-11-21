import "./HomePage.scss";

import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayLayout from '../../components/DisplayLayout/DisplayLayout';
import DownBtn from "../../components/DownBtn/DownBtn";

function HomePage() {
        return (
          <div className="home-page">
            <SearchBar></SearchBar>
            <DisplayLayout></DisplayLayout>
            <DownBtn></DownBtn>
          </div>
        );
};

export default HomePage;
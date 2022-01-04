import "./HistoryPage.scss";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { MdOutlineArrowBack } from 'react-icons/md';
import { NavLink } from "react-router-dom";

import InnerFrame from "@components/InnerFrame/InnerFrame";
import InnerNav from "@components/InnerNav/InnerNav";
import VideoList from "components/VideoList/VideoList";
// import vidListActionCreators from "@store/creators/vidList.creator.js";

function HistoryPage() {

    const dispatch = useDispatch();
    const sections = [{ text: "Search", id: 1 }, { text: "Watch", id: 2 }, { text: "Download", id: 3 }];
    // const { setList } = bindActionCreators(vidListActionCreators, dispatch);
    const [active, setActive] = useState(1);

    useEffect(() => {
        // setList();
    },[]);

    const handleSetActive = (i) => {

        // setActive(i);
    }

    const ActiveChild = () => {
        if (active === 1) {
            return <p></p>;
        }
        // return <VideoList></VideoList>;

    }

    return (
        <>
            <NavLink className="back-arrow" to="../ytd/"><MdOutlineArrowBack></MdOutlineArrowBack></NavLink>
            <InnerNav items={sections} navClick={handleSetActive} active={active}></InnerNav>
            <InnerFrame id="HISTORY_PAGE">
                {/* // just a videoList component, dynamic content, with no player option, use the ls for start content  */}
                <ActiveChild></ActiveChild>
            </InnerFrame>
        </>

    );
};

export default HistoryPage;
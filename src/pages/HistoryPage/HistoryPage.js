import "./HistoryPage.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { MdOutlineArrowBack } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import { removeFromHistory, deleteHistory} from "@services/history.service";

import InnerFrame from "@components/InnerFrame/InnerFrame";
import InnerNav from "@components/InnerNav/InnerNav";
import VideoList from "components/VideoList/VideoList";
import vidListActionCreators from "@store/creators/vidList.creator.js";
import Button from "components/Button/Button";

function HistoryPage() {

    const dispatch = useDispatch();
    const sections = [{ text: "Search", id: 1 }, { text: "Watch", id: 2 }, { text: "Download", id: 3 }];
    const { setList, resetList } = bindActionCreators(vidListActionCreators, dispatch);
    const [active, setActive] = useState(1);
    const [change, setChange] = useState(0);

    const handleSetActive = (i) => {
        setActive(i);
        setChange(change + 1);
    }

    const handleRemove = (type, id) => {
        removeFromHistory(type,id);
        setChange(change + 1);
    }

    const ActiveChild = () => {
        if (active === 1) {
            if (window.localStorage.getItem("SEARCH_HISTORY") !== null) {
                return <>
                 <div className="del-all-wrapper"><Button><span onClick={()=>{deleteHistory("SEARCH_HISTORY")}} id="del-all-btn">DELETE ALL</span></Button></div>
                    {
                        JSON.parse(window.localStorage.getItem("SEARCH_HISTORY")).map((search) => {
                            return <div className="search-item">
                                <p id={search.id}>{search.search}</p>
                                <span onClick={()=>{handleRemove("SEARCH_HISTORY",search.id)}}>X</span>
                            </div>
                        })
                    }
                </>;
            } else {
                return <div>Nothing Saved</div>;
            }
        } else if (active === 2) {
            if (window.localStorage.getItem("WATCH_HISTORY") !== null) {
                return <>
                    <div className="del-all-wrapper"><Button><span onClick={()=>{deleteHistory("WATCH_HISTORY")}} id="del-all-btn">DELETE ALL</span></Button></div>
                    <VideoList history="WATCH_HISTORY"></VideoList>
                </>;
            } else {
                return <div>Nothing Saved</div>;
            }
        }else if (active === 3) {
            if (window.localStorage.getItem("DOWN_HISTORY") !== null) {
                return <>
                    <div className="del-all-wrapper"><Button><span onClick={()=>{deleteHistory("DOWN_HISTORY")}} id="del-all-btn">DELETE ALL</span></Button></div>
                    <VideoList history="DOWN_HISTORY"></VideoList>
                </>;
            } else {
                return <div>Nothing Saved</div>;
            }
        }
    }

    useEffect(() => {
        resetList();
        switch (active) {
            case 1:
                break;
            case 2:
                setList(JSON.parse(window.localStorage.getItem("WATCH_HISTORY")));
                break;
            case 3:
                setList(JSON.parse(window.localStorage.getItem("DOWN_HISTORY")));
                break
            default:
                break;
        }
        window.history.pushState({}, undefined, "/ytd");
    }, [change, ActiveChild]);

return (
    <>
        <NavLink className="back-arrow" to="../ytd/"><MdOutlineArrowBack></MdOutlineArrowBack></NavLink>
        <InnerNav items={sections} navClick={handleSetActive} active={active}></InnerNav>
        <InnerFrame>
            {/* // just a videoList component, dynamic content, with no player option, use the ls for content  */}
            <ActiveChild></ActiveChild>
        </InnerFrame>
    </>
);
};

export default HistoryPage;
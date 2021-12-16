import "./SettingsPage.scss";

import InnerFrame from "@components/InnerFrame/InnerFrame";
import { MdOutlineArrowBack } from 'react-icons/md';
import { NavLink } from "react-router-dom";

function SettingsPage() {

    function changeGlobalFormat() {

    }

    function changeMode() {

    }

    return (
        <>
            <NavLink to="../yt-downloader-site/" className="back-arrow"><MdOutlineArrowBack></MdOutlineArrowBack></NavLink>
            <InnerFrame id="SETTINGS_PAGE">
                <div className="settings-content">

                    <div className="settings-item">
                        <p>Global Quality</p>
                        <input type="radio" name="globalFormat" value='audio' onChange={() => changeGlobalFormat()} />
                        <label htmlFor="audio">Audio - mp3</label>
                        <input type="radio" name="globalFormat" value='720' onChange={() => changeGlobalFormat()} />
                        <label htmlFor="720">720p (If exist)</label>
                        <input type="radio" name="globalFormat" value='lower' onChange={() => changeGlobalFormat()} />
                        <label htmlFor="lower">Lower (video)</label>
                        <input type="radio" name="globalFormat" value='higher' onChange={() => changeGlobalFormat()} />
                        <label htmlFor="higher">Higher (video)</label>
                    </div>

                    <div className="settings-item">
                        <p>Mode</p>
                        <input type="radio" name="mode" value='music' onChange={() => changeMode()} />
                        <label htmlFor="music">music</label>
                        <input type="radio" name="mode" value='playlist' onChange={() => changeMode()} />
                        <label htmlFor="playlist">playlist</label>
                        <input type="radio" name="mode" value='video' onChange={() => changeMode()} />
                        <label htmlFor="video">video</label>
                    </div>

                </div>
            </InnerFrame>
        </>

    );
};

export default SettingsPage;
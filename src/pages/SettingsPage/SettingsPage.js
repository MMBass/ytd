import "./SettingsPage.scss";

import { useSelector } from "react-redux";

import InnerFrame from "@components/InnerFrame/InnerFrame";
import { MdOutlineArrowBack } from 'react-icons/md';
import { NavLink } from "react-router-dom";

function SettingsPage() {
    const mode = useSelector(state => state.settings.mode);

    function changeGlobalFormat(e) {
        // todo settings 
    }

    function changeMode(e) {
        // e.preventDefault();
        let newMode = e.target.value
        if (newMode === 'music')  window.localStorage.setItem('globalFormat','audio');
        window.localStorage.setItem('mode', newMode); // todo redux middlwere every time mode changes?
        window.location.reload();
    }

    return (
        <>
            <NavLink to="../yt-downloader-site/" className="back-arrow"><MdOutlineArrowBack></MdOutlineArrowBack></NavLink>
            <InnerFrame id="SETTINGS_PAGE">
                <div className="settings-content">
                    <div className="settings-item"  onChange={changeGlobalFormat}>
                        <p>Global Quality</p>
                        <div>
                            <input type="radio" name="globalFormat" value='audio' disabled={mode === 'music'} checked={mode === 'music'} />
                            <label htmlFor="audio">Audio - mp3</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='720' disabled={mode === 'music'} />
                            <label htmlFor="720">720p (If exist)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='lower' disabled={mode === 'music'} />
                            <label htmlFor="lower">Lower (video)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='higher' disabled={mode === 'music'} />
                            <label htmlFor="higher">Higher (video)</label>
                        </div>
                    </div>

                    <div className="settings-item" onChange={changeMode}>
                        <p>Mode</p>
                        <input type="radio" name="mode" value='music' />
                        <label htmlFor="music">music</label>
                        <input type="radio" name="mode" value='playlist' />
                        <label htmlFor="playlist">playlist</label>
                        <input type="radio" name="mode" value='video' />
                        <label htmlFor="video">video</label>
                    </div>

                </div>
            </InnerFrame>
        </>

    );
};

export default SettingsPage;
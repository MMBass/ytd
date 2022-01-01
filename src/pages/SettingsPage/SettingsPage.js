import "./SettingsPage.scss";

import { useSelector } from "react-redux";

import InnerFrame from "@components/InnerFrame/InnerFrame";
import { MdOutlineArrowBack } from 'react-icons/md';
import { NavLink } from "react-router-dom";

function SettingsPage() {
    const mode = useSelector(state => state.settings.mode);
    const globalFormat = useSelector(state => state.settings.globalFormat);

    function changeGlobalFormat(e) {
        let newFormat = e.target.value;
        
        if(newFormat === 'choose'){
            window.localStorage.removeItem('globalFormat');
        }
        else{
            window.localStorage.setItem('globalFormat',newFormat);
        }
        window.location.reload();
    }

    function changeMode(e) {
        // e.preventDefault();
        let newMode = e.target.value
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
                            <input type="radio" name="globalFormat" value='audio' disabled={mode === 'music'} checked={globalFormat === 'audio'}/>
                            <label htmlFor="audio">Audio - mp3</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='136' disabled={mode === 'music'} checked={globalFormat === '136'}/>
                            <label htmlFor="720">720p (If exist)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='18' disabled={mode === 'music'} checked={globalFormat === '18'}/>
                            <label htmlFor="720">360p (If exist)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='lowestvideo' disabled={mode === 'music'} checked={globalFormat === 'lowestvideo'}/>
                            <label htmlFor="lowest">Lowest (video)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='highestvideo' disabled={mode === 'music'} checked={globalFormat === 'highestvideo'}/>
                            <label htmlFor="highest">Highest (video)</label>
                        </div>
                        <div>
                            <input type="radio" name="globalFormat" value='choose' disabled={mode === 'music'}checked={globalFormat == null}/>
                            <label htmlFor="choose">Choose-every-time</label>
                        </div>
                    </div>

                    <div className="settings-item" onChange={changeMode}>
                        <p>Mode</p>
                        <input type="radio" name="mode" value='music' checked={mode === 'music'}/>
                        <label htmlFor="music">music</label>
                        <input type="radio" name="mode" value='playlist'  checked={mode === 'playlist'}/>
                        <label htmlFor="playlist">playlist</label>
                        <input type="radio" name="mode" value='video'  checked={mode === 'video'}/>
                        <label htmlFor="video">video</label>
                    </div>

                </div>
            </InnerFrame>
        </>

    );
};

export default SettingsPage;
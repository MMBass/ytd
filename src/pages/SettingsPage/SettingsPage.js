import "./SettingsPage.scss";

import InnerFrame from "@components/InnerFrame/InnerFrame";

function SettingsPage() {

    function changeGlobalFormat(){
        
    }

    function changeMode() {

    }

    return (
        <>
            <InnerFrame id="SETTINGS_PAGE">
                <div className="settings-content">

                    <div className="settings-item">
                        <p>Global Quality</p>
                        <input type="radio" name="globalFormat" value='audio' onChange={() => changeGlobalFormat()}/>
                        <label htmlFor="audio">audio</label>
                    </div> 

                    <div className="settings-item">
                        <p>Mode</p>
                        <input type="radio" name="mode" value='music' onChange={() => changeMode()}/>
                        <label htmlFor="music">music</label>
                        <input type="radio" name="mode" value='playlist' onChange={() => changeMode()}/>
                        <label htmlFor="playlist">playlist</label>
                        <input type="radio" name="mode" value='video' onChange={() => changeMode()}/>
                        <label htmlFor="video">video</label>
                    </div>

                </div>
            </InnerFrame>
        </>

    );
};

export default SettingsPage;
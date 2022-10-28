import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import style from './Photo.module.css'

function Photo(props) {
    const [photo, setPhoto] = useState("https://walter.trakt.tv/images/episodes/003/411/284/screenshots/original/a356884197.jpg")
    useEffect(() => {
        if (props.photo != null) {
            setPhoto(props.photo)
        }
    }, [props.photo])
    const Close = () => {
        window.history.back()
    }
    return (

        <div className={style.background}>
            <div className={style.outOfWindow} onClick={Close}></div>
                <div className={`backgroundBlock ${style.photoBlock}`}>
                    <img className={style.avatar} alt={"Avatar"} src={props.photo}/>
                </div>
        </div>


    );
}

const mapStateToProps = state => ({
    photo: (state.Profile.profile && state.Profile.profile.photos.large) || null
})
export default connect(mapStateToProps)(Photo);
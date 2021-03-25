import React from 'react'
import './ResultsHeader.css'

function ResultsHeader(props) {




    return(
        <div className="headerSet">
            <img className="avatar" src={props.img_src} />
            <div className="name_bio">
                <div className="uName">{props.userName}</div>
                <div className="bio">{props.bio}</div>
            </div>
        </div>
    );
}


export default ResultsHeader;
import React, { useState } from 'react'
import './searchBox.css'

function SearchBox(props) {

    return (
        <div className="searchBoxBackground">
            <div className="searchBox">
                <div className="header">
                    Which profile can I <span className="git">git</span> for you?
                </div>
                <input className="userInput" onChange={props.handleChange} />
                <button className="go" onClick={props.handleSubmit}>GO!</button>
            </div>
        </div>
    );
}


export default SearchBox;
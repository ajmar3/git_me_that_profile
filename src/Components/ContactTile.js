import React, { useState, useEffect } from 'react'
import './ContactTile.css'


function ContactTile(props) {
    
    const passIns = props.userData

    const name = passIns.name
    const followers = passIns.followers;
    const following = passIns.following;
    let hireable;
    let location;
    let email;

    if(passIns.email === null) {
        email = "Whoops! This user hasn't uploaded an email."
    } else {
        email=passIns.email;
    }
    if(passIns.location === null) {
        location = "Whoops! This user hasn't uploaded a location."
    } else {
        location=passIns.location
    }
    if(passIns.hireable === null) {
        hireable = "Whoops! This user hasn't uploaded an employment status."
    } else {
        hireable=passIns.hireable
    }


    return(
        <div className="socialsTile">
            <div className="socialsTileTitle">{name}'s Social Stats</div>
            <div className="socialsList">
                <div className="followers">
                    <div className="Value">{followers}</div>
                    <div className="tag">Followers</div>
                </div>
                <div className="following">
                    <div className="Value">{following}</div>
                    <div className="tag">Following</div>
                </div>
                <div className="email">
                    <div className="Value">{email}</div>
                    <div className="tag">Email</div>
                </div>
                <div className="location">
                    <div className="Value">{location}</div>
                    <div className="tag">Location</div>
                </div>
                <div className="hireable">
                    <div className="Value">{hireable}</div>
                    <div className="tag">Hireable?</div>
                </div>
                
            </div>
        </div> 
    );
}

export default ContactTile;
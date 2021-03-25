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
                    <div className="followersValue">{followers}</div>
                    <div className="followerstag">Followers</div>
                </div>
                <div className="following">
                    <div className="followingValue">{following}</div>
                    <div className="followingtag">Following</div>
                </div>
                <div className="email">
                    <div className="emailValue">{email}</div>
                    <div className="emailtag">Email</div>
                </div>
                <div className="location">
                    <div className="locationValue">{location}</div>
                    <div className="locationtag">Location</div>
                </div>
                <div className="hireable">
                    <div className="hireableValue">{hireable}</div>
                    <div className="hireabletag">Hireable?</div>
                </div>
                
            </div>
        </div> 
    );
}

export default ContactTile;
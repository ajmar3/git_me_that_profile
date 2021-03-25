import React, { useState, useEffect } from 'react'
import './ResultsPage.css'
import ResultsHeader from './ResultsHeader'
import LanguagesTile from './LanguagesTile'
import RepoTile from './RepoTile'
import ContactTile from './ContactTile'


function ResultsPage(props) {

    //gettng info from props
    const userData = props.searchResults
    const bio = userData.bio
    const img_src = userData.avatar_url
    const email = userData.email
    const repo_src = userData.repos_url
    const userName = userData.name

    //console.log(userData)
    //setting hooks

    
    return (
        <div className="resultsPage">
            <div className="resultsPageTiles">
                <ResultsHeader 
                    img_src={img_src}
                    bio={bio}
                    userName={userName}
                />
                <LanguagesTile 
                    repo_src={`${repo_src}?per_page=100`}
                    userName={userName}
                />
                <RepoTile
                    repo_src={`${repo_src}?per_page=100`}
                    userName={userName}
                />
                <ContactTile
                    userData={userData}
                    
                />
            </div>    
        </div>
    );
}


export default ResultsPage;
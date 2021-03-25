import React, { useState, useEffect } from 'react'
import './ResultsPage.css'
import ResultsHeader from './ResultsHeader'
import LanguagesTile from './LanguagesTile'

function ResultsPage(props) {

    //gettng info from props
    const userData = props.searchResults
    const bio = userData.bio
    const img_src = userData.avatar_url
    const email = userData.email
    const repo_src = userData.repos_url
    const userName = userData.name

    //setting hooks

    
    return (
        <div className="resultsPage">
            <ResultsHeader 
                img_src={img_src}
                bio={bio}
                userName={userName}
            />
            <LanguagesTile 
                repo_src={`${repo_src}?per_page=100`}
                userName={userName}
            />
        </div>
    );
}


export default ResultsPage;
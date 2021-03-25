import React, { useState, useEffect } from 'react'
import './LanguagesTile.css'


function LanguagesTile(props) {
    const repo_url = props.repo_src;

    const [repo_info, set_repo_info] = useState([])
    const[isfetching, setisfetching] = useState(true)

    useEffect(() => {
        async function fetchRepoInfo() {
            const url = repo_url;
            const response = await fetch(url);
            const data = await response.json();
            set_repo_info(data)
            setisfetching(false)
        }
        fetchRepoInfo()
    }, [])

    return(
        <div className="languageTile">
        {isfetching ? 
            null : 
            <div>
                {repo_info.map((repo) => {
                    return (
                        <div key={repo.name}>
                            {repo.language}
                        </div>
                    )
                })}
            </div>    
        }
      </div>
    );
}


export default LanguagesTile
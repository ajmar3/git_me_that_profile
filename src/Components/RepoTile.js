import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RepoTile.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function RepoTile(props) {

    //setting hooks
    const [repo_info, set_repo_info] = useState([])
    const[isfetching, setisfetching] = useState(true)
    const tempObj = {};
    const tempObj2 = {};
    const tempLinks = {};
    const tempRepoNames = [];
    const tempRepoStars=[];

    //getting data
    useEffect(() => {
        async function fetchRepoInfo() {
            const url = props.repo_src;
            const response = await fetch(url);
            const data = await response.json();

            set_repo_info(data)
            setisfetching(false)
        }
        fetchRepoInfo()
    }, [])


    //getting object of repos and how many stars they have
    function getRepoInfo() {
        {repo_info.map((repo) => {
            tempObj[repo.name] = repo.stargazers_count;
            tempObj2[repo.name] = repo.description;
            tempLinks[repo.name] = repo.svn_url;
        })}
    }
    getRepoInfo();
    //sorting this object into new object called sortable
    const sortable = Object.fromEntries(
        Object.entries(tempObj).sort(([,a], [,b]) => b-a)
    )


    //geting size of new object. If bigger than 5 reducing to 5
    Object.getSize = function(obj) {
        let size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    const size = Object.getSize(sortable);

    if(size > 2){
        let tempIndex = 0
        for(let current in sortable) {
            if(tempIndex < 2) {
                tempRepoNames.push(current)
                tempRepoStars.push(sortable[current])
                tempIndex++
            }
            else {
                break
            }    
        }
    } else if(size > 0 && size <= 2) {
        let tempIndex = 0
        for(let current in sortable) {
            if(tempIndex < size) {
                tempRepoNames.push(current)
                tempRepoStars.push(sortable[current])
                tempIndex++
            }
            else {
                break
            }    
        }
    }

    return(
        <div className="repoTile">
            {isfetching ? 
                
                null : 
                <div>
                    <div className="repoTileHeader">{props.userName}'s Popular Repositories</div>
                    <div className="repoList">
                        {tempRepoNames.map((repoName, index) => (
                            <a href={tempLinks[repoName]}  key={index}>
                                <div className="repoDisplayTile">
                                    <div className="repoTitle">{repoName}</div>
                                    <div className="repoStars">
                                        <FontAwesomeIcon icon={faStar} className="starIcon"/>
                                        {tempRepoStars[index]}                                
                                    </div>
                                    <div className="repoDes">{tempObj2[repoName]}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>  
            }
        </div>
    );
}

export default RepoTile;


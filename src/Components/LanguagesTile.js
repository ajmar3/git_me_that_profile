import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './LanguagesTile.css'


function LanguagesTile(props) {

    const repo_url = props.repo_src;
    const backgroundColoursRange = ["#a1cae2", "#ffcb91", "#f39189", "f56a79", "#065c6f"]
    let tempData = {};
    let tempLabels= [];
    let tempValues= [];
    let tempColours = [];

    //setting hooks
    const [repo_info, set_repo_info] = useState([])
    const[isfetching, setisfetching] = useState(true)
    

    //getting data
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


    //getting object of languages and how many times they occur
    function getRepoLanguages() {
        {repo_info.map((repo) => {
            if(repo.language != null) {
                if(tempData[repo.language] != null)
                    tempData[repo.language] = tempData[repo.language] + 1;
                else{
                    tempData[repo.language] = 1
                }
            }
        })}
    }
    getRepoLanguages();
    //sorting this object into new object called sortable
    const sortable = Object.fromEntries(
        Object.entries(tempData).sort(([,a], [,b]) => b-a)
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
    if(size >= 5){
        let tempIndex = 0
        for(let current in sortable) {
            if(tempIndex < 5) {
                tempLabels.push(current);
                tempValues.push(sortable[current])
                tempColours.push(backgroundColoursRange[tempIndex])
                tempIndex++;
            }
            else {
                break
            }    
        }
    } else if(size > 0 && size < 5) {
        let tempIndex = 0
        for(let current in sortable) {
            if(tempIndex < size) {
                tempLabels.push(current);
                tempValues.push(sortable[current])
                tempColours.push(backgroundColoursRange[tempIndex])
                tempIndex++;
            }
            else {
                break
            }    
        }
    }
    
    //putting gathered language data into an object for chart.js
    const ChartData = {
        labels: tempLabels,
        datasets: [{
            label: "languages",
            data:tempValues,
            backgroundColor:tempColours
        }]
    }




    return(
        <div className="languageTile">
            {isfetching ? 
                null : 
                
                <div className="doughnut">
                    <div className="chartTitle">Languages Used In <span>{props.userName}</span>'s Repositories</div>
                    <Doughnut className="graph" 
                    data={ChartData}
                    options={{maintainAspectRatio: false}}
                    />
                </div>   
            }
        </div>
    );
}


export default LanguagesTile


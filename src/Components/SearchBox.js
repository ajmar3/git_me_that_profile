import React, { useState, useEffect } from 'react'

function SearchBox() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [name, setname] = useState("jbjbf")
    const [gender, setgender] = useState("nkdnkd")

    

    useEffect(() => {
        async function fetchData() {
            const url = "https://api.github.com/users/ajmnz/repos";
            const response = await fetch(url);
            const data = await response.json();
            //const results = data.results[0]
            console.log(data)
        }

        fetchData();
    }, [])


    return (
        <div className="searchBox">
            
            {isLoaded ? <div>loaded...</div> : <div>loading...</div>}
            <div>

            </div>
        </div>
    );
}


export default SearchBox;

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const People = (props) => {

    const {id} = props;

    const [isError, setIsError] = useState(false);
    const [apiData, setApiData] = useState({});
    const [homeWorld, setHomeWorld] = useState("")
    const [homeWorldId, setHomeWorldId] = useState();
    
    console.log("props")
    console.log(props);


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then((response) => {
            setIsError(false);
            setApiData(response.data)
            setHomeWorld(response.data.homeWorld)
            axios.get(response.data.homeWorld)
                .then((homeWorldRes) => {
                    setHomeWorld(homeWorldRes.data.name)
                })
                .catch((err) => {console.log(err)})
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
        })
    }, [props]);

    if (!isError) {
        return (
            <div>
                <h1>Height:</h1>
                <p>Hair Color: </p>
                <p>Eye Color: </p>
                <p>Skin Color: </p>
                <p>Home Planet: </p>
            </div>
        )
    } else {
        return (
            <div>
    
            </div>
        )
    }

}

export default People;
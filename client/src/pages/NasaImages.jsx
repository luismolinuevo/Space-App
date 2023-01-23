import {useState} from 'react';
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import { Box, Center, Image, Flex } from '@chakra-ui/react';

export default function NasaImages() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [haveError, setHaveError] = useState(false);

    const searchImages = (event) => {

        event.preventDefault();  //stops if from refreshing on submit
        console.log(event.value)
        try {
            axios.get(`https://images-api.nasa.gov/search?q=${searchParam}`).then((res) => {   //gets the res from the api
                setSearchResults(res.data.collection.items)   //sets data state to the data that was fetched
                console.log(res.data.collection.items)
            })
        }catch {
            setHaveError((prev) => !prev);
        }
        
    }
   
    return (
        <div>
            <Center>
            <form>
                <input 
                    value={searchParam} 
                    onChange= {event => setSearchParam(event.target.value)} 
                    // onKeyDown = {searchImages} 
                    placeholder="Search" type="text"
                />
                <input type="submit" onClick={searchImages}/>
            </form>
            <div>
            {
                !haveError ?
                
                <ul>
                    {searchResults.map(imagedata => (  /*Map once and then map again to the array with the data */
                        imagedata.data.map(innerElement => (
                            <li key={innerElement.nasa_id}>
                                <Link to = {`/nasaimages/${innerElement.nasa_id}`}>{innerElement.title}</Link>
                                {/* <p>{innerElement.nasa_id}</p> */}
                            </li>
                        ))
                    ))}
                </ul>
                

                :

                <div>Have error</div>
            }
            </div>
            </Center>
            
            
        </div>
    )
      
}

// create a custom Hook
import { useState,useEffect } from "react"
//NOTE firstly custom hooks or any hook in general must start with a "use"
const useFetch=()=>{
    // now we take the function from the home component
    // and customize it here in out custom Hook 
    //NOTE now beacuse this is a custom hook 
    // we want to be able to use it in differnt use cases
    // so we can change the names to be more dynamic and make more sense
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        // fetch data 
        // handling fetch errors
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            // check if the response status is ok
            // if its not then throw an error
            if(!res.ok){
                throw Error('cant fetch data right now')
            }
            return res.json()
           
            })
        .then(data=>{
            setData(data);
            setLoading(false);
            setError(null)
        })
        .catch(err=>{
            // then catch the error and log it  
            setError(err.message)
            setLoading(false);
        })
        
    },[])

    // NOTE to be able to access the values from variables we need to return then like so
    // NOTE However the return values can be whatever you need to acess,it could be an array like useState, a boolean or string etc
    // NOTE we're going to return an object and return three values in that object so that when we use our custom hooks we want to be able to grab these values
    return(loading,error,data)
}
// export
export default useFetch
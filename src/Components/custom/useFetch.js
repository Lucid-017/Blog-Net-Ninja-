// create a custom Hook
import { useState,useEffect } from "react"
//NOTE firstly custom hooks or any hook in general must start with a "use"
const useFetch=(url)=>{
    //NOTE now beacuse this is a custom hook 
    // we want to be able to use it in differnt use cases
    // so we can change the value names to be more dynamic and make more sense
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        //REVIEW creating an abort controller for the cleanup function
        const abortCtrl= new AbortController()
        setTimeout(()=>{
            //NOTE we want to pass in the url/endpoint into the function 
            // this is because when reusing this hook the url might not always be the same 
            fetch(url,{signal:abortCtrl.signal})
            // {sign al:abortCtrl.signal} is connecting/Associating the abort controller to the specific fetch request
            
           .then(res=>{
                // handling fetch errors, checking if the response status is ok
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
               //REVIEW but if the error is an abort error which we are handling then ignore it
            if(err.name === 'AbortError'){
                console.log('AbortError Ignored & fetch Aborted ')
            }else{
                setError(err.message)
                setLoading(false);
            }
               
           })
        },1000)

       /*REVIEW we are getting errors beacuse we are leaving the home component to the newBlog component before the fetch is compelete
       ERROR:
        react_devtools_backend.js:4026 Warning: Can't perform a React state update on an unmounted component.
        This is a no-op, but it indicates a memory leak in your application.
        To fix, cancel all subscriptions and asynchronous tasks 
        in a useEffect cleanup function.*/ 

        // cleanup function,abortCtrl.abort() aborts any fetch function
        //  assocaited with the abortctrl variable
        return (()=>abortCtrl.abort())
         },
    // passing in the url will mean the endpoint might change depending on its usecase
    // so we want to rerun this function whenever there's changes to the url
    [url])

    // NOTE to be able to access the values from variables we need to return then like so
    // NOTE However the return values can be whatever you need to acess,it could be an array like useState, a boolean or string etc
    // NOTE we're going to return an object and return three values in that object so that when we use our custom hooks we want to be able to grab these values
    return{loading,error,data}
}
// export
export default useFetch
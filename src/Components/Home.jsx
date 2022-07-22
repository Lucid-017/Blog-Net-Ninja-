import React from 'react'
import Blogs from './Blogs'
import { useState,useEffect } from 'react'

 const Home = () => {
    const [blogs,setBlogs]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
// use npm to run a json server,run the code from the web npx json-server --watch src/data/Db.json --port 8000 
    
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
            setBlogs(data);
            setLoading(false);
            setError(null)
        })
        .catch(err=>{
            // then catch the error and log it 
            setError(err.message)
            setLoading(false);
        })
        
    },[])
  return (
    
    <div className='home'>
        {/* because blogs is initially null and will throw an error 
         if the fetched data is available */}
         {error && <h2 className='blog-preview'>{error}</h2> }
         {loading && <h2 className='blog-preview'>loading</h2> }
         {blogs && (
           <div className="">
                <Blogs blogs={blogs} title='All Posts'/>
                {blogs.length ==0 && <p>No blogs Available</p> }

            </div>
         )
            } 
        

    </div>
  )
}
export default Home
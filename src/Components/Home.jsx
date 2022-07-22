import React from 'react'
import Blogs from './Blogs'
import { useState,useEffect } from 'react'

 const Home = () => {
    
// use npm to run a json server,run the code from the web npx json-server --watch src/data/Db.json --port 8000 
    
    
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
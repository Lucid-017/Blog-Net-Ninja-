import React from 'react'
import Blogs from './Blogs'
import useFetch from './custom/useFetch'

 const Home = () => {
// use npm to run a json server,run the code from the web npx json-server --watch src/data/Db.json --port 8000 
    const {data:blogs,loading,error}= useFetch('http://localhost:8000/blogs')
    
  return (
    
    <div className='home'>
        {/* because blogs is initially null and will throw an error 
         if the fetched data is available */}
         {error && <h2 className='blog-preview'>{error}</h2> }
         {loading && <h2 className='blog-preview'>loading</h2> }
         {blogs && (
           <div className="">
            {/* now beacuse the name of the varaible cionatining blogs is no longer called blogs,
             do we need to change name on this component? well no ,we can destructure the data variable 
             and name it what ever name this component wants to */}
                <Blogs blogs={blogs} title='All Posts'/>
                {blogs.length ==0 && <p>No blogs Available</p> }

            </div>
         )
            } 
        

    </div>
  )
}
export default Home
import React from 'react'
import Blogs from './Blogs'
import { useState } from 'react'

 const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'my new website', body:'lorem ipsum....', author:'Austin',id:1},
        {title:'my life as the hokage', body:'lorem ipsum....', author:'Naruto',id:2},
        {title:'i hate my wife', body:'lorem ipsum....', author:'sasuke',id:3},
    ])
// use npm to run a json server,run the code from the web npx json-server --watch src/data/Db.json --port 8000 
    const handleDelete=(id)=>{
        console.log(id)
        const updateBlogs= blogs.filter(blog=>blog.id !== id)
        setBlogs(updateBlogs)
        
    }
  return (
    
    <div class='home'>
        {blogs.length ==0 ? <p className='blog-preview'>No post right now</p> :
            <Blogs handleDelete={handleDelete} blogs={blogs} title='All Posts'/>
            }
    </div>
  )
}
export default Home
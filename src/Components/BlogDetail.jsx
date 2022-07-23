import {useParams } from 'react-router-dom'
import useFetch from './custom/useFetch'

const BlogDetail = () => {
  //REVIEW accessing url parameters
    const {id} =useParams()
    const {data:blog,loading,error}= useFetch(`http://localhost:8000/blogs/${id}`)

  return (
    <div className='blog-details'>
        {error && <h2 className='blog-preview'>{error}</h2> }
        {loading && <h2 className='blog-preview'>loading</h2> }
         {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p className='author'>written by {blog.author}</p>
                <p>{blog.body}</p>
            </article>
         )}
        
    </div>
  )
}

export default BlogDetail
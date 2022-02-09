import React, { useEffect } from 'react'
import { PostSingle } from './PostSingle'

export const PostList = ({posts, onDelete}) => {
  useEffect(() => {
    console.log(posts)
  }, [posts]);
  return (
    <div className="row">

          <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th className="td-action" scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post=>(
              <PostSingle key={post.id} post={post} onDelete={onDelete}/>
            )
          )}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td className='td-action'><button className="btn btn-danger">Eliminar</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
          </tr> */}
        </tbody>
      </table>
    </div>
      // <PostSingle/>
  )
}

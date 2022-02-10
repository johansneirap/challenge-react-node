import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { PostSingle } from './PostSingle';

export const PostList = ({ onDelete}) => {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(posts)
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
        </tbody>
      </table>
    </div>
      // <PostSingle/>
  )
}

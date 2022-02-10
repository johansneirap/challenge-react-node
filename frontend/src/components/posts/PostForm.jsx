import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction, initPosts } from "../../reducers/postReducer";

export const PostForm = () => {

  const dispatch = useDispatch();
  
  const [post, setPost] = useState({name:"", description:""});

  const addPost = async(e)=>{
    e.preventDefault();
    // const newPost = await createPost(post);
    dispatch(createPostAction(post));
    // dispatch(initPosts);
    setPost({name:"", description:""});

  }
	return (
		<form className="row g-3" onSubmit={(e) => addPost(e)}>
			<div className="col-auto">
				<input type="text" className="form-control" placeholder="Nombre" value={post.name} onChange={(e) => setPost({ ...post, name: e.target.value })} />
			</div>
			<div className="col-auto">
				<input type="text" className="form-control" placeholder="Descripcion" value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} />
			</div>
			<div className="col-auto">
				<button type="submit" className="btn btn-primary mb-3">
					Crear
				</button>
			</div>
		</form>
	);
};

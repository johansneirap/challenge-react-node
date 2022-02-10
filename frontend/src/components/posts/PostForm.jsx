import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../reducers/postReducer";

export const PostForm = () => {
	const dispatch = useDispatch();

	const [post, setPost] = useState({ name: "", description: "" });

	const addPost = async (e) => {
		e.preventDefault();
		dispatch(createPostAction(post));
		setPost({ name: "", description: "" });
	};

	return (
		<form className="row g-3  justify-content-md-center" onSubmit={(e) => addPost(e)}>
			<div className="col-2">
				<input type="text" className="form-control" placeholder="Nombre" value={post.name} onChange={(e) => setPost({ ...post, name: e.target.value })} />
			</div>
			<div className="col-5">
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

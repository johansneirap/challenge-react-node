import React from "react";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../../reducers/postReducer/";

export const PostSingle = ({ post }) => {
	const dispatch = useDispatch();

	const deletePost = async (id) => {
		dispatch(deletePostAction(id));
	};

	return (
		<tr>
			<th scope="row">{post.name}</th>
			<td>{post.description}</td>
			<td className="text-center">
				<button className="btn btn-danger" onClick={() => deletePost(post.id)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

import React from "react";
import { useSelector } from "react-redux";
import { PostSingle } from "./PostSingle";

export const PostList = () => {
	const posts = useSelector((state) => state.posts);

	return (
		<div className="row">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Descripción</th>
						<th className="td-action" scope="col">
							Acción
						</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<PostSingle key={post.id} post={post} />
					))}
				</tbody>
			</table>
		</div>
	);
};

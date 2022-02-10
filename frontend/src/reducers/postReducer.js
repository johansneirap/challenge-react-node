import { createPost, deletePost, getAllPosts } from "../services/posts";

export const postReducer = (state = [], action) => {
	if (action.type === "@posts/init") {
		return [...action.payload];
	}
	if (action.type === "@posts/created") {
		return [...state, action.payload];
	}
	if (action.type === "@posts/deleted") {
		return [...state.filter((post) => post.id !== action.payload.id)];
	}
	return state;
};

export const createPostAction = (post) => {
	return async (dispatch) => {
		const res = await createPost(post);
		dispatch({
			type: "@posts/created",
			payload: res.post,
		});
	};
};

export const deletePostAction = (id) => {
	return async (dispatch) => {
		const res = await deletePost(id);
		dispatch({
			type: "@posts/deleted",
			payload: res.post,
		});
	};
};

export const initPosts = () => {
	return async (dispatch) => {
		const posts = await getAllPosts();
		dispatch({
			type: "@posts/init",
			payload: posts,
		});
	};
};

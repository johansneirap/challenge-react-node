import { createPost, deletePost, getAllPosts } from "../services/posts";

export const postReducer = (state = { posts: [], filteredPosts: [] }, action) => {
	switch (action.type) {
		case "@posts/init":
			return { ...state, posts: [...action.payload], filteredPosts: [...action.payload] };
		case "@posts/created":
			return {
				...state,
				posts: [...state.posts, action.payload],
				filteredPosts: [...state.posts, action.payload],
			};
		case "@posts/deleted":
			return {
				...state,
				posts: [...state.posts.filter((post) => post.id !== action.payload.id)],
				filteredPosts: [...state.posts.filter((post) => post.id !== action.payload.id)],
			};
		case "@posts/search":
			if (action.payload) {
				return {
					...state,
					filteredPosts: [...state.posts.filter((post) => post.name.toLowerCase().includes(action.payload.toLowerCase()))],
				};
			}
			return {
				...state,
				filteredPosts: [...state.posts],
			};
		default:
			return state;
	}
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

export const filterPostAction = (textToSearch) => {
	return {
		type: "@posts/search",
		payload: textToSearch,
	};
};

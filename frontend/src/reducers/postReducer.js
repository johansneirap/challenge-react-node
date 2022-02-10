import { createPost, getAllPosts } from "../services/posts";


export const postReducer = (state = [], action) => {
	if (action.type === "@posts/init") {
		return [...state, ...action.payload]
	}
	if (action.type === "@posts/created") {
		return [...state, action.payload]
	}

    return state
	// if (action.type) {
	// }
};

export const createPostAction = (post) => {
    return async(dispatch) => {
        const res = await createPost(post);
        dispatch( {
            type: "@posts/created",
            payload: res.post,
        });
    }
};
export const deletePostAction = (content) => {
	return {
		type: "@posts/deleted",
		payload: content,
	};
};
export const initPosts = () => {
    return async(dispatch) => {
        const posts = await getAllPosts()
        dispatch( {
            type: "@posts/init",
            payload: posts,
        })
    }
};

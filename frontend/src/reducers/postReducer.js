import { createPost, deletePost, getAllPosts } from "../services/posts";

export const postReducer = (state = {posts:[],filteredPosts:[]}, action) => {
	if (action.type === "@posts/init") {
		return {...state,posts:[...action.payload],filteredPosts:[...action.payload]};
	}
	if (action.type === "@posts/created") {
		return {
            ...state,
            posts:[...state.posts, action.payload],
            filteredPosts:[...state.posts, action.payload]
        };
	}
	if (action.type === "@posts/deleted") {
		return {
            ...state,
            posts:[...state.posts.filter((post) => post.id !== action.payload.id)],
            filteredPosts:[...state.posts.filter((post) => post.id !== action.payload.id)]
        };
	}
	if (action.type === "@posts/search") {
        if (action.payload) {
            return {
                ...state,
                filteredPosts:[...state.posts.filter((post) => post.name.toLowerCase().includes(action.payload.toLowerCase()))]
            };
        }
        return {
            ...state,
            filteredPosts: [...state.posts]
        }
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

export const filterPostAction = (textToSearch)=>{
    return {
        type: "@posts/search",
        payload: textToSearch,
    }
};

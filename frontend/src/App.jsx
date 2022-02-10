import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PostForm } from "./components/posts/PostForm";
import { PostList } from "./components/posts/PostList";
import { SearchBar } from "./components/posts/SearchBar";
import { initPosts } from "./reducers/postReducer";
import "./App.css";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initPosts());
	}, [dispatch]);

	return (
		<div className="App container mt-5">
			<div className="row justify-content-md-center">
				<h1 className="my-5 text-center">Challenge React Node Posts</h1>
				<SearchBar />
				<PostList />
				<PostForm />
			</div>
		</div>
	);
};

export default App;

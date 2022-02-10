import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import './App.css';
import { PostForm } from './components/posts/PostForm';
import { PostList } from './components/posts/PostList';
import { SearchBar } from './components/posts/SearchBar';
import { initPosts } from './reducers/postReducer';

const App =({store}) => {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const [posts, setPosts] = useState([]);

  const fetchPosts = async()=>{
    const response = await axios.get('http://localhost:3001/api/posts');
    setPosts(response.data);
  }

  // const onSubmit = async(e)=>{
  //   e.preventDefault();
  //   if (post.name && post.description){
  //     const response = await axios.post('http://localhost:3001/api/posts',post)
  //     if (response.data.message === "Post created succesfully"){
  //       fetchPosts();
  //       alert(response.data.message);
  //       setPost({name:"", description:""})
  //     }
  //   }
  // }

  const onDelete = async(id)=>{
    const { data } = await axios.delete(`http://localhost:3001/api/posts/${id}`)
    const {message, body:{post}} = data;
      if (message === "Post deleted succesfully"){
        fetchPosts();
        alert(`${message}: ${post.name}`);
      }
  }

  useEffect(() => {
    // fetchPosts();
    // console.log(store)
    dispatch(initPosts())
  }, [dispatch]);

  return (
    <div className="App container">
      <div className="row">
      <h1 className="my-3">Postify</h1>
      <SearchBar/>
      <PostList onDelete={onDelete}/>
      <PostForm />
      </div>
    </div>
  )
}

export default App

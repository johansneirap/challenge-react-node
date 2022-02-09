import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { PostForm } from './components/posts/PostForm';
import { PostList } from './components/posts/PostList';
import { SearchBar } from './components/posts/SearchBar';


function App() {

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({name:"", description:""});

  const fetchPosts = async()=>{
    const response = await axios.get('http://localhost:3001/api/posts');
    setPosts(response.data);
  }

  const onSubmit = async(e)=>{
    console.log("entrando aqui")
    e.preventDefault();
    if (post.name && post.description){
      const response = await axios.post('http://localhost:3001/api/posts',{
        name: post.name,
        description: post.description
      })
      if (response.data.message === "Post created succesfully"){
        alert(response.data.message)
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App container">
      <div className="row">
      <h1 className=" mb-10">Postify</h1>
      <SearchBar/>
      <PostList posts={posts}/>
      <PostForm post={post} setPost={setPost} onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default App

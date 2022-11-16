import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 0, title: 'aa', body: 'cc'},
        {id: 1, title: 'bb', body: 'bb'},
        {id: 2, title: 'cc', body: 'aa'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})//инициализация фильтра и поиска

    const sortedPosts = useMemo(() => {
        if (filter.sort){
           return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])//функция фильтра и её кеширование

    const searchedFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])//функция поиска и её кеширование

    
    




    // console.log(sortedPosts.length)
    // console.log(searchedFilteredPosts.length)
    // console.log(sortSelected)

    return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr color={'teal'} style={{margin: '15px 0'}} size='3'/>

        <PostFilter
        filter={filter}
        setFilter={setFilter}

        />
       <PostList remove={removePost} posts={searchedFilteredPosts} title='JS пост'/>



    </div>
  );
}

export default App;
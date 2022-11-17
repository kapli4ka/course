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
import MyModal from "./components/UI/Modal/MyModal";
import {usePost} from "./hooks/usePost";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([
        {id: 0, title: 'aa', body: 'cc'},
        {id: 1, title: 'bb', body: 'bb'},
        {id: 2, title: 'cc', body: 'aa'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})//инициализация фильтра и поиска

    const [modal, setModal] = useState(false)

    const searchedFilteredPosts = usePost(posts, filter.sort, filter.query)

    async function fetchpost(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    return (
    <div className="App">
        <button onClick={fetchpost} >Скачать </button>
        <MyButton style = {{marginTop: 30, marginInline: 'auto', display: 'flex', fontSize: '35px'}} onClick = { () => setModal(true)} >
            Создать пост
        </MyButton>
        <MyModal
            visibel={modal}
            setVisible={setModal}
        >
            <PostForm create={createPost}/>
        </MyModal>

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
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

    const [sortSelected, setSortSelected] = useState('')

    function qwe() {
        console.log('Выполнена')
        if (sortSelected){
            return [...posts].sort((a, b) => a[sortSelected].localeCompare(b[sortSelected]))
        }
        return posts;
    }
    
    const sortedPosts = qwe()

    const sortSelect = (sort) => {
        setSortSelected(sort);
    }
    const [searchQuery, setsearchQuery] = useState('')

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr color={'teal'} style={{margin: '15px 0'}} size='3'/>
        <MyInput
            value={searchQuery}
            placeholder={'Поиск'}
            onChange = {e => setsearchQuery(e.target.value)}
        />
        <MySelect
            value={sortSelected}
            onChange={sortSelect}
            defaultOption="Сортировка по"
            options={[
                {value: "title", name: "По названию"},
                {value: "body", name: "По описанию"}
            ]}

        />
        {posts.length
            ? <PostList remove={removePost} posts={sortedPosts} title='JS пост'/>
            :
            <h1 style={{textAlign: 'center'}}>
                Постов нету
            </h1>
        }

    </div>
  );
}

export default App;
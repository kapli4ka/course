import React, {useEffect, useMemo, useRef, useState} from "react";
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
import PostService from "./API/PostService";
import Loading from "./components/UI/loading/loading";
import {useFetch} from "./hooks/useFetch";
import PageAndLimit from "./utilitys/PageAndLimit";
import pageCount from "./utilitys/PageList";
import MyPageButton from "./components/UI/pageButton/MyPageButton";

function App() {
    const [posts, setPosts] = useState([
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
    const [fetchPost, isLoading, error] = useFetch(async () =>{
        const posts = await PostService.getAll(page, limit);
        setPosts(posts.data)
        const totalPost = posts.headers['x-total-count']
        PageAndLimit(totalPost, limit, setTotalPages)

    })
    const [page, setPage] = useState(1)//текущаю старница
    const [limit, setLimit] = useState(10)//лимит на странице
    const [totalPages, setTotalPages] = useState(0)//общие колличество страниц
    let pagesList = pageCount(totalPages)
    useEffect(() => {
        fetchPost()
    }, [page])

    console.log(totalPages, page)
    return (
    <div className="App">
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
        {error &&
        <h1> Ошикбка ${error}</h1>}
        {isLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}><Loading/></div>
            : <PostList remove={removePost} posts={searchedFilteredPosts} title='Пост'/>
        }
        <div style={{display: 'flex', justifyContent: 'center'}}>{pagesList.map(c =>
            <MyPageButton onClick={() => setPage(c)} key={c} page = {page}>{c}</MyPageButton>)}
            <MyPageButton onClick={() => setPage(page+1)} key={page+1}>Next</MyPageButton>
        </div>



    </div>
  );
}

export default App;
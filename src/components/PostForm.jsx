import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '', number: ''})


    const addNewPost = (e) =>{
        e.preventDefault()
        const newPosts = {
            ...post, id: post.number
        }
        create(newPosts)
        setPost({title: '', body: '', number: ''})
    }

    return (
        <form>
            <MyInput
                value={post.number}
                onChange = {e => setPost({...post, number: e.target.value})}
                type={'text'}
                placeholder={'Номер'}
            />
            <MyInput
                value={post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={'Название'}
            />
            <MyInput
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type={'text'}
                placeholder={'Описание'}
            />
            <MyButton onClick = {addNewPost} >Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;
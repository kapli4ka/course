import React from 'react';
import MyButton from "./UI/button/MyButton";
import {Link, Route, useNavigate} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import OpenedPost from "../pages/OpenedPost";

const PostItem = (props) => {
    const route = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => route(`/main/${props.post.id}`)}>Открыть</MyButton>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
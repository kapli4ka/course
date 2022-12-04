import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetch} from "../hooks/useFetch";
import PostList from "../components/PostList";
import Loading from "../components/UI/loading/loading";




const OpenedPost = () => {
    const params = useParams()
    const [onePost, setOnePost] = useState({});
    const [onePostComment, setOnePostComment] = useState([]);
    const[fetchOne, isLoading, error] = useFetch(async () =>{
        const response = await PostService.getOne(params.id);
        setOnePost(response.data)
    });
    useEffect(() => {
        fetchOne()
        fetchOneComment()
    }, [])
    const[fetchOneComment, isLoadingComment, errorComment] = useFetch(async () =>{
        const response = await PostService.getComment(params.id);
        setOnePostComment(response.data)
    });
    const comments =onePostComment.map(({id, email, name, body}, key) =>
            <div key={key}>
                {id}
                {email}
                {name}
                {body}
            </div>
        )
    // console.log(onePost)
    return (
        <div>
            {isLoading
                ?<div><Loading/></div>
                :<div className={"post"}>
                    <h1> Постно номер {onePost.id}</h1>
                    {onePost.title}
                    <div>
                        {onePost.body}
                    </div>
                    <div>
                        {comments}
                    </div>
                </div>
            }

        </div>
    );
};

export default OpenedPost;
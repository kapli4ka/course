import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetch} from "../hooks/useFetch";
import PostList from "../components/PostList";
import Loading from "../components/UI/loading/loading";




const OpenedPost = () => {
    const params = useParams()
    const [onePost, setOnePost] = useState({});
    const[fetchOne, isLoading, error] = useFetch(async () =>{
        const response = await PostService.getOne(params.id);
        setOnePost(response.data)
    });
    useEffect(() => {
        fetchOne()

    }, [])
    console.log(onePost)
    return (
        <div>
            ТОТ САМЫЙ ПОСТ
            {isLoading
                ?<div><Loading/></div>
                :<div>
                    {onePost.title}
                </div>
            }

        </div>
    );
};

export default OpenedPost;
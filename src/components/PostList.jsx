import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}} >
                Постов нету
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{/*выравнивание по центру, метод реакт*/}
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post = {post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
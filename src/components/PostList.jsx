import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
            <TransitionGroup>

                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="list"
                        unmountOnExit
                    >
                    <PostItem remove={remove} number={index + 1} post = {post}/>
                    </CSSTransition>
                )}

            </TransitionGroup>

        </div>
    );
};

export default PostList;
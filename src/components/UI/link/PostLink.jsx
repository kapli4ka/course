import React from 'react';
import {Link} from "react-router-dom";

const PostLink = () => {
    return (
        <div className={'navbar'}>
            <Link to={'/'} className={'navbar__link'}>Дом</Link>

            <Link to={'/main'} className={'navbar__link'}>Основная</Link>
        </div>
    );
};

export default PostLink;
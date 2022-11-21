import React from 'react';
import classes from './MyPageButton.module.css';

const MyPageButton = ({ children, ...props}) => {
    return (

            <button {...props} className={classes.pageButton}>{children}</button>

    );
};

export default MyPageButton;
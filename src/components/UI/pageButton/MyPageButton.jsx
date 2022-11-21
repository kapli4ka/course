import React from 'react';
import classes from './MyPageButton.module.css';

const MyPageButton = ({page, children, ...props}) => {
    if(children === page){
        return <button {...props} className={classes.pageButton} style={{background: 'rgba(0, 128, 128, 0.39)'}}>{children}</button>;
    }return <button {...props} className={classes.pageButton} >{children}</button>;


};

export default MyPageButton;
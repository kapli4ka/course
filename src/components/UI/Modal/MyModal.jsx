import React from 'react';
import cl from './MyModal.module.css'
const MyModal = ({children, visibel, setVisible}) => {
    const rootClasses = [cl.myModal]
    if (visibel){
        rootClasses.push(cl.myModalActive)
    }

    return (
        <div className={rootClasses.join(' ')} onClick = {() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
};

export default MyModal;
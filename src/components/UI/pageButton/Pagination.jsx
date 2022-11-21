import React from 'react';
import MyPageButton from "./MyPageButton";
import pageCount from "../../../utilitys/PageList";


const Pagination = ({totalPages, setPage, page}) => {
    let pagesList = pageCount(totalPages)//список из всего колличества страниц

    return (

        <div style={{
            display: 'flex',
            justifyContent: 'center'}}>
            <MyPageButton
                onClick={() =>setPage(page > 1? page-1: page)}
                key={page-1}>Back</MyPageButton>
            {pagesList.map(c =>
                <MyPageButton
                    onClick={() => setPage(c)}
                    key={c} page = {page}>{c}</MyPageButton>)}
            <MyPageButton
                onClick={() => setPage(page < totalPages? page+1: page)}
                key={page+1}>Next</MyPageButton>
        </div>
    );
};

export default Pagination;
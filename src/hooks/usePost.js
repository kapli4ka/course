import {useMemo} from "react";

export const usePost = (posts, sort, query) =>{
    const sortedPosts = useMemo(() => {
        if (sort){
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])//функция фильтра и её кеширование

    const searchedFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query))
    }, [query, sortedPosts])//функция поиска и её кеширование
    return searchedFilteredPosts;
}

import HomePage from "../pages/HomePage";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";
import OpenedPost from "../pages/OpenedPost";

export const routes =
    [
        {path: '/', element: <HomePage/>},
        {path: '/main', element: <Posts/>},
        {path: '/*', element: <PageNotFound/>},
        {path: '/main/:id', element: <OpenedPost/>},
    ]
export default function PageAndLimit(totalPost,limit, setPage){

    setPage(Math.ceil(totalPost/limit))
}
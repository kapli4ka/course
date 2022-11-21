
export default function pageCount (totalPage){
    let list = []
    let i = 1
    while(list.length < totalPage){
        list.push(i)
        ++i
    }
    return list

}
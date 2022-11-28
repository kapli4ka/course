import axios from "axios";


export default class PostService {
    static async getAll(page, limit) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params:{
            _limit: limit,
            _page:page,
            }})
        return response;
    }
    static async getOne(postNumber) {
        const responseOne = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`
            )
        return responseOne;
    }

}
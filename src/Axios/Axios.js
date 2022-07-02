import * as axios from "axios";

let instance = axios.create(
    {
        withCredentials: true,
        headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'},
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
)

export class ApiUserAxios {
    static async GetUserAxios(userId){
        return Promise.all([
            instance.get(`profile/${userId}`),
            instance.get(`follow/${userId}`)
        ]).then(([UserResponse, FollowResponse]) => {
            return [UserResponse.data, FollowResponse.data]
        })
    }
    static async GetUsers(pageCount, pageNumber){
        return instance.get(`users?count=${pageCount}&page=${pageNumber}`).then((response)=>{
            return ({items: response.data.items, totalCount:response.data.totalCount})
        })
    }
}
import * as axios from "axios";

let instance = axios.create(
    {
        withCredentials: true,
        headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'},
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
)

export class ApiUserAxios {
    static async GetUser(userId){
        return Promise.all([
            instance.get(`profile/${userId}`),
            instance.get(`follow/${userId}`),
            instance.get(`profile/status/${userId}`)
        ]).then(([UserResponse, FollowResponse, StatusResponse]) => {
            return [UserResponse.data, FollowResponse.data, StatusResponse.data]
        })
    }
    static async GetUsers(pageCount, pageNumber){
        return instance.get(`users?count=${pageCount}&page=${pageNumber}`).then((response)=>{
            return ({items: response.data.items, totalCount:response.data.totalCount})
        })
    }
    static async Follow(userId){
        return instance.post(`follow/${userId}`)
    }
    static async Unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
    static async SetStatus(status){
        return instance.put(`profile/status`,{status})
    }
}
export class ApiAuthAxios{
    static async Auth(){
        return instance.get('auth/me').then((response)=>{
            return {id: response.data.data.id, login: response.data.data.login, email:response.data.data.email}
        })
    }
    static async LoginToAPI(email,password,rememberMe){
        return instance.post('auth/login',{email,password,rememberMe})
    }
    static async LogoutFromAPI(){
        return instance.delete('auth/login')
    }
}
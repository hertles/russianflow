import * as axios from "axios";

let instance = axios.create(
    {
        withCredentials: true,
        headers: {'API-KEY':'ea3d200c-ad10-4771-b08b-33869071b724'},
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
)

export class ApiUserAxios {
    static GetUser(userId){
        return Promise.all([
            instance.get(`profile/${userId}`),
            instance.get(`profile/status/${userId}`)
        ]).then(([UserResponse, StatusResponse]) => {
            return [UserResponse.data, StatusResponse.data]
        })
    }
    static GetFollowedStatus(userId){
        return instance.get(`follow/${userId}`).then((response) => {
            return response.data
        })
    }
    static async GetUsers(pageCount, pageNumber, onlyFollowed, searchString){
        return instance.get(`users?count=${pageCount}&page=${pageNumber}&friend=${onlyFollowed}&term=${searchString}`).then((response)=>{
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
    static async SetPhoto(photo){
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    static async SetProfile(newProfileData){
        return instance.put(`profile`,newProfileData)
    }
}
export class AuthAxios{
    static async GetAuthUserData(){
        return instance.get('auth/me').then((response)=>{
            return {id: response.data.data.id, login: response.data.data.login, email:response.data.data.email}
        })
    }
    static async GetCaptcha(){
        return instance.get('security/get-captcha-url').then((response)=>{
            return response.data.url
        })
    }
    static async LoginToAPI(email,password,rememberMe,captcha){
        return instance.post('auth/login',{email,password,rememberMe,captcha})
    }
    static async LogoutFromAPI(){
        return instance.delete('auth/login')
    }
}
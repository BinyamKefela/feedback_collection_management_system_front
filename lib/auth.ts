import axios from "axios";
import Cookies from "js-cookie";

export async function refreshAccessToken(){
    const refereshToken = Cookies.get('refresh_token');
    if(!refereshToken) throw new Error('No refresh token found');

    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refersh`,
        {refresh_token:refereshToken},
        {withCredentials:true}
    );
    const {access_token} = res.data

    Cookies.set('access_token',access_token,{path:'/',sameSite:'lax'});
    return access_token;
}
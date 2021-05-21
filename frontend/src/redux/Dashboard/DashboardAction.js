import { APIServices } from "../../resources/APIServices";

export const onGetContent =()=>{

    return async(dispatch)=>{
        const url ='https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&order=desc&sort=activity&site=stackoverflow'
        const res = await new APIServices().get(url)
        .then((res)=>{
            if(res.status===200){
                //console.log(res.results)
                dispatch(onGetContentSuccess(res.results))
            }
            
        }).catch(error=>{
           console.log(error)
        })
    }            
} 

export const onGetContentSuccess = (data)=>{
    return{
        type : "ON_GETCONTENT_SUCCESS",
        payload : data,
    }
}

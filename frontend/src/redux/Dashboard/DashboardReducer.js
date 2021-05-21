const initialState={
    content:{},
    single_content:{},
    error_msg:null,
    success_msg:null,
    loading:true,
    isSuccess:false,
}

const dashboardReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_GETCONTENT_SUCCESS":
            return{
                
                ...state,
                content:action.payload,
                loading:false,  
                
            }
        default:{
            return{
                ...state
            }
        }    
    }
}

export default dashboardReducer;

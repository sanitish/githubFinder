export default (state,action)=>{
    switch(action.type){
        case 'SEARCH_USERS':
            return {
                ...state,
                users:action.payload,
                loading:false
            }
            case 'HOME_FILL':
                return {
                    ...state,
                    users:action.payload,
                    loading:false
                }
        case 'SET_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos:action.payload,
                loading:true

            }
        case 'GET_USER':
            return{
                ...state,
                user:action.payload,
                loading:false

            }
        case 'CLEAR_USERS':
            return{
                ...state,
                loading:false,
                users:[]
            }
            
            
        default:
            return state;

    }
}
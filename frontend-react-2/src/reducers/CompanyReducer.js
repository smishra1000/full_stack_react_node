const initialState = {
    companies:[
    ]
}

function CompanyReducer(state=initialState,action) {
    if(action.type==="get_company"){
        return [...state]
    }else if(action.type==="save_company"){
        return {...state,companies:state.companies.concat(action.payload)}
    }else if(action.type==="delete_company"){
        return {
            ...state,companies:state.companies.filter((item)=>{return item.id!==action.payload})
        }
    }
    else{
        return state
    }

}

export default CompanyReducer
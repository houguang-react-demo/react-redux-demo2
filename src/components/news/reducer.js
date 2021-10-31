import axios from "axios";

const data = {
    value:"请输入",
    list:[],
    loading:false,
    show_add_item:false,
}

const reducer = (state=data,action)=>{

    const {type,payload} = action
    const newState = JSON.parse(JSON.stringify(state))
    if (type === "get_list_data"){
        newState.list = payload.list
    }

    if (type === "set_loading"){
        newState.loading = !newState.loading
    }

    if (type === "show_add_item"){
        newState.show_add_item = !newState.show_add_item
    }

    if (type === "delete_item"){
        newState.list.splice(payload.index,1)
    }

    return newState
}

const getListData = ()=>{
    return dispatch=>{
        dispatch({type:"set_loading",payload:{}})
        axios.get("http://127.0.0.1:4523/mock/389130/list").then(res=>{
            dispatch({type:"get_list_data",payload:{list:res.data.list}})
            dispatch({type:"set_loading",payload:{}})
        })
    }
}

export {getListData}
export default reducer

export const actionTypeLogger=storeAPI=>next=>action=>{
    console.log("Dispatching", action.type)

    let result=next(action)
    console.log("next state", storeAPI.getState())
    return result
}

export const payloadLogger=storeAPI=>next=>action=>{
    if (action.payload!==undefined){
        console.log("payload", action.payload)
    }
    return next(action)
}
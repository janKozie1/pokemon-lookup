export let checkResponseStatus = (res) => {
    if(res.ok){
        return res;
    }else{
        throw Error(res.statusText)
    }
}



export let getErrorMessage = (error) =>{
    switch(error.message){
        case 'Failed to fetch':
            return "Couldn't connect!"
        case 'Not Found':
            return 'Not found!'
        default :
            return 'Something went wrong!'
    }
}
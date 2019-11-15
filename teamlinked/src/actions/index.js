// ACTION CREATORS : Return actions

// Enviar datos de Loggin al store
export const storeLoginAccountInfo = (loginAccountInfo) =>{
    return{
        type: 'STORED_LOGIN_ACCOUNT_INFO',
        payload: {
            key: loginAccountInfo.key,
            id: loginAccountInfo.id,
            nombre: loginAccountInfo.nombre,
            apellido:loginAccountInfo.apellido,
            email: loginAccountInfo.email,      
        }
    };
};

export const logOut = () =>{
    return {
        type: 'CLOSED_SESSION_ACCOUNT',
        payload: null
    };
};


export const uploadURLImageToSend = (file)=>{
    return{
        type: 'UPLOAD_URL_IMAGE_TO_SEND',
        payload: {
            name: file.name,
            type: file.type,
            photo: file.photo
        }
    };
};
// ACTION CREATORS : Return actions

// Enviar datos de Loggin al store
export const storeLoginAccountInfo = (loginAccountInfo) =>{
    return{
        type: 'STORED_LOGIN_ACCOUNT_INFO',
        payload: {
            key: loginAccountInfo.key,
            accountInfo: loginAccountInfo.accountInfo,
            id: loginAccountInfo.id,
            role: loginAccountInfo.role       
        }
    };
};


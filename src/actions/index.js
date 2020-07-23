export const signIn = (userId) => {
    return{
        type: 'SiGN_IN',
        payload: userId


    };
}
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
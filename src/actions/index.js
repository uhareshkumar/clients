import server from '../apis/server';

export const signIn = (userId, name, emailId, imageUrl) => async (dispatch) => {
    
    const user = await server.get(`/users?q=${userId}`);
    if(user.data.length === 0){
        await server.post('/users', { [userId]: { userId, imageUrl, name, emailId } });
    }
    
    dispatch({ type:"SIGN_IN", payload:{userId, name, emailId, imageUrl} });
}

export const signOut = () => {
    return({ type:"SIGN_OUT" });
}

export const burgerMenu = () => {
    const nav = document.querySelector('.navLinks');
    nav.classList.toggle('nav-active');

    const burger = document.querySelector('.burger');
    burger.classList.toggle('toggle');
}

import {author} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return {
                ...state,
            }
    }
};

export let setAuthUserDate = (id, email, login) => ({type:SET_USER_DATA, data: {id, email, login}});

export let authentication = () => {
    return (dispach) => {
        author.authorize()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispach(setAuthUserDate(id, email, login));
                }
            });
    }
}

export default authReducer;

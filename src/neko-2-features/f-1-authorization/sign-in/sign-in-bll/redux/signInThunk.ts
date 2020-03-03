import {SignInAPI} from "../../sign-in-dal/SignInAPI";
import {ThunkAction} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {SignInAllActionsType, signInError, signInLoading, signInSuccess} from "./signInActions";

export const signInThunk = (email: string, password: string, rememberMe: boolean)
    :ThunkAction<void, IAppStore, unknown, SignInAllActionsType> =>
    async (dispatch) => {
        try {
            dispatch(signInLoading(true));
            await SignInAPI({email, password, rememberMe});
            dispatch(signInLoading(false));
            dispatch(signInSuccess())

        } catch (e) {
            let error = e.response.data.error;
            debugger
            dispatch(signInError(error))
            dispatch(signInLoading(false));

        }
    };

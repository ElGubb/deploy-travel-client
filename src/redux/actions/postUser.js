import { POST_USER, API_DB } from "./actionTypes";
import axios from "axios";

export const postUser = (userDb) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/users`, userDb);
            return dispatch({
                type: POST_USER,
                payload: result.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};
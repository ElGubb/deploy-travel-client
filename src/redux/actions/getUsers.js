import { GET_USERS, API_DB } from './actionTypes'
import axios from 'axios'

export const getUsers = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/users`);
            return dispatch({
                type: GET_USERS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
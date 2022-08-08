import { PUT_USER, API_DB } from './actionTypes'
import axios from "axios";

export const PutUser = (id, rol) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/admin/${id}`, rol);
            return dispatch({
                type: PUT_USER,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
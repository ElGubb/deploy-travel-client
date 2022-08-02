import { PUT_ACTIVITY, API_DB } from './actionTypes'
import axios from 'axios'

export const putActivity = (id, hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${API_DB}/activities/${id}`, hotel);
            console.log(result.data)
            return dispatch({
                type: PUT_ACTIVITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
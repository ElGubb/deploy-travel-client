import { POST_ACTIVITY, API_DB } from './actionTypes'
import axios from 'axios'

export const postActivity = (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/activities`, hotel);
            console.log(result.data)
            return dispatch({
                type: POST_ACTIVITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
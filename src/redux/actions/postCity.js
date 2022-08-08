import { POST_CITY, API_DB } from './actionTypes'
import axios from 'axios'

export const postCity = (city) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/cities/`, city);
            console.log(result.data)
            return dispatch({
                type: POST_CITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
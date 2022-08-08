import { POST_HOTEL, API_DB } from './actionTypes'
import axios from 'axios'

export const postHotel = (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/hotels`, hotel);
            console.log(result.data)
            return dispatch({
                type: POST_HOTEL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
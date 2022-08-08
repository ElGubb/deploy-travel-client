import { GET_HOTELS, API_DB } from './actionTypes'
import axios from 'axios'

export const getHotels = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/hotels`);
            return dispatch({
                type: GET_HOTELS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
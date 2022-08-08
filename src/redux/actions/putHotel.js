import { PUT_HOTEL, API_DB } from './actionTypes'
import axios from 'axios'

export const putHotel = (id, hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${API_DB}/hotels/${id}`, hotel);
            console.log(result.data)
            return dispatch({
                type: PUT_HOTEL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
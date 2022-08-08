import { PUT_BUS, API_DB } from './actionTypes'
import axios from 'axios'

export const putBus = (id, bus) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${API_DB}/business/${id}`, bus);
            return dispatch({
                type: PUT_BUS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
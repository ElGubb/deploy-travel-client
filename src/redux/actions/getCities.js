import { GET_CITIES, API_DB } from './actionTypes'
import axios from 'axios'

export const getCities = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/cities`);
            return dispatch({
                type: GET_CITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
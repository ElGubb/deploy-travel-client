import { GET_PACKAGES, API_DB } from './actionTypes'
import axios from 'axios'

export const getPackages = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/packages`);
            console.log(result.data)
            return dispatch({
                type: GET_PACKAGES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
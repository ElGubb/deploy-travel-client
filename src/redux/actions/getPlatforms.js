import { GET_PLATFORMS, API_DB } from './actionTypes'
import axios from 'axios'

export const getPlatforms = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/plattforms`);
            return dispatch({
                type: GET_PLATFORMS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
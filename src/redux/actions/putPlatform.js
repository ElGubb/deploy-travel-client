import { PUT_PLATFORM, API_DB } from './actionTypes'
import axios from 'axios'

export const putPlatform = (id, platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${API_DB}/plattforms/${id}`, platform);
            console.log(result.data)
            return dispatch({
                type: PUT_PLATFORM,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
import { POST_PLATFORM, API_DB } from './actionTypes'
import axios from 'axios'

export const postPlatform = (platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/plattforms`, platform);
            console.log(result.data)
            return dispatch({
                type: POST_PLATFORM,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
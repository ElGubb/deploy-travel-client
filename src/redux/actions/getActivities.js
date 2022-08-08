import { GET_ACTIVITIES, API_DB } from './actionTypes'
import axios from 'axios'

export const getActivities = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${API_DB}/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
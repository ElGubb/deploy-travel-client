import { POST_PACKAGE, API_DB } from './actionTypes'
import axios from 'axios'

export const postPackage = (packages) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/packages`, packages);
            console.log(result.data)
            return dispatch({
                type: POST_PACKAGE,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
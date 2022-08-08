import { SEND_MAIL, API_DB } from './actionTypes';
import axios from 'axios'

export const sendMail = (mail) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${API_DB}/mailing`, mail);
            console.log(result.data)
            return dispatch({
                type: SEND_MAIL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
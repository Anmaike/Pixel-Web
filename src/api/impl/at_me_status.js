import axios from 'axios';
import { HOST_CONCIG, API_ROUTER_CONFIG } from '../../api/config/api-config'
import { logger } from '../../utils/logger'
import store from '../../store/'


export const getAtMeStatus = (page, okCallback, errorCallback) => {

    const accesstoken = store.getters.token.access_token

    var request_data = {
        access_token: accesstoken,
        count: 30,
        page: page
    }

    var config = {
        method: 'get',
        url: API_ROUTER_CONFIG.at_me_statue,
        baseURL: HOST_CONCIG.host,
        params: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios(config)
        .then(function (response) {
            logger("oauthPost-ok", 'getAtMeStatus response succeed')
            okCallback(response.data)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}
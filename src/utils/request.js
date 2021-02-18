import axios  from 'axios';

// Customize Axios requests
const TIMEOUT = 2 * 60000;

const DEFAULT_CONFIG = {
    baseURL: '/',
    timeout: TIMEOUT
}

function getAxiosInstance() {
    const instance = axios.create(DEFAULT_CONFIG);

    instance.interceptors.response.use(
        function (response) {
            return response.data;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

    return instance;
}

export default getAxiosInstance();
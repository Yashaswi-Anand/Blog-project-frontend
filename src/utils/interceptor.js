import axios from 'axios';
// import { auth } from "../firebase";

const api = axios.create({
    baseURL: window.config.endpoint,
});

// const getRefreshedTokenId = async () => {
//     return new Promise(async (resolve, reject) => {
//         const unsubscribe = auth.onAuthStateChanged(async (user) => {
//             unsubscribe();
//             try {
//                 const refreshedToken = await user.getIdToken(true);
//                 resolve(refreshedToken);
//             } catch (error) {
//                 console.error(error);
//                 reject(error);
//             }
//         });
//     });
// };

api.interceptors.request.use(
    async(config) => {
        const token = localStorage.getItem('token');
        config.data = config.data || {};
        // config.data.company_id = localStorage.getItem('company_id');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        config.headers['Content-Type'] = 'application/json'
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// api.interceptors.response.use(
//     response => {
//       return response;
//     },
//     async error => {
//       const original_request = error.config;   
//       // If the error is 401 and it's not the token refresh request itself
//       if (error.response.status === 401 && !original_request._retry) {
//         original_request._retry = true;

//         const refreshed_token = await getRefreshedTokenId();

//         localStorage.setItem('token', refreshed_token);
        
//         // Update the original request with the new token
//         original_request.headers.Authorization = `Bearer ${refreshed_token}`;

//         // Retry the original request
//         return axios(original_request);
//       }
//       return Promise.reject(error);
//     }
//   );

export default api;

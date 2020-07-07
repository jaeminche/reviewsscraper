import axios from "axios";

const client = require("axios").default;

// const client = axios.create({
//   baseURL: `${host}`,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   }
// });

// client.interceptors.request.use(
//   function (config) {
//     const user = getItemInSessionStorage("user");
//     config.headers.Authorization = user ? `Bearer ${user.access}` : null;
//     // console.log("===axios가 요청에서 인터셉트함, isLoggedIn:", !!user, config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// client.interceptors.response.use(
//   response => {
//     console.log("axios가 응답을 인터셉트함");
//     return response;
//   },
//   error => {
//     console.log("axios가 에러를 인터셉트함", error.response);
//     if (error.response.status === 401) {
//       console.log("401에러입니다");
//       refreshAndSetJwtAndLoginType();
//     }
//     // return Promise.reject(error.message);
//     return error;
//   }
// );

export default client;

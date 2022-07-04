import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const TimeOut = 3000;

const service = axios.create({
  timeout: TimeOut,
});

//统一请求拦截 可配置自定义headers 例如 language、token等
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //配置自定义请求头
    let customHeaders: AxiosRequestHeaders = {};
    config.headers = customHeaders;
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

export default service;

import axios, {
    AxiosError,
    type AxiosInstance,    
    type AxiosResponse,
    type InternalAxiosRequestConfig
} from "axios";

const http: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 15000,
    headers: {
        "Content-Type": "application/json"
    }
});

http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {

        // if (config.headers) {
        //     config.headers?.setAuthorization('');
        // }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

http.interceptors.response.use(
    (response:AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

export const httpClient = {

    get: async <T>(url: string): Promise<T> => {
        const response = await http.get<T>(url);
        return response.data;
    },

    post: async <T, V>(url: string, data: V): Promise<T> => {
        const response = await http.post<T>(url, data);
        return response.data;
    },

    put: async <T, V>(url: string, data: V): Promise<T> => {
        const response = await http.put<T>(url, data);
        return response.data;
    },

    patch: async <T, V>(url: string, data: V): Promise<T> => {
        const response = await http.patch<T>(url, data);
        return response.data;
    },

    delete: async<T>(url: string): Promise<T> => {
        const response = await http.delete<T>(url);
        return response.data;
    }

}
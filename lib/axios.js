import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: '/api',
})

axiosInstance.interceptors.request.use(
    options => {
        let accessToken
        if (typeof window !== "undefined") {
            accessToken = localStorage.getItem("accessToken") || ""
        }
        if (accessToken) {
            options.headers.Authorization = `Bearer ${accessToken}`
        }
        return options
    },
    error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(({ data }) => data, error => Promise.reject(error))

export { axiosInstance } 
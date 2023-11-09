import { axiosInstance } from "@lib/axios"
export const uploadService = {
    async getAll() {
        return await axiosInstance.get('/upload')
    },
    async deleteFile(filename) {
        return await axiosInstance.delete(`/upload/${filename}`)
    },
}
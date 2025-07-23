import { isAxiosError } from "axios"
import api from "../config/axios"

export async function getUser() {
    const token = localStorage.getItem('token')
    try {

        const { data } = await api(`/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data



    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }
    }
}
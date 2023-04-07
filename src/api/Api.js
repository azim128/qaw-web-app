import axios from "axios"

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_APIURL}`
})

export const getblog = async () => {
    const response = await baseApi.get("/api/blog/ ")
    return response.data
}
export const getSingleBlog = async (id) => {
    const response = await baseApi.get(`/api/blog/get-blog/${id}/`)
    return response.data
}
export const getPortfolio = async () => {
    const response = await baseApi.get("/api/portfolio/")
    return response.data
}
export const getSinglePortfolio = async (id) => {
    const response = await baseApi.get(`/api/portfolio/get-portfolio/${id}/`)
    return response.data
}

export const addSubscriber = async (email) => {
    return await baseApi.post("/api/newsletter/add-subscriber/", email)
}

export const addContact = async (contact) => {
    return await baseApi.post("api/contact/", contact)
}

export default baseApi;
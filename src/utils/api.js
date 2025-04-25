import api from "./interceptor";

// User Login
export const loginUser = async (body_data) => {
    try {
        const response = await api.post(`/user/login`, body_data);
        return response
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getUserList = async () => {
    try {
        const response = await api.get(`/user/users`);
        return response
    } catch (error) {
        console.log(error);
    }
}

// Blog Project
export const createNewBlog = async (body_data) => {
    try {
        const response = await api.post(`/project/add_new_blog`, body_data);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getBlogList = async () => {
    try {
        const response = await api.get(`/project/all_blogs`);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const updateExsistingBlog = async (body_data, blog_id) => {
    try {
        const response = await api.post(`/project/update_blog/:${blog_id}`, body_data);
        return response
    } catch (error) {
        return error
    }
}

export const getBlogById = async (blog_id) => {
    try {
        const response = await api.get(`/project/get_blog/${blog_id}`);
        return response
    } catch (error) {
        return error
    }
}

export const mostViewedBlogs = async () => {
    try {
        const response = await api.get(`/project/most_viewed_blogs`);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const mostRecentBlogs = async () => {
    try {
        const response = await api.get(`/project/most_recent_blogs`);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const blogCategoryByCategory = async (category) => {
    try {
        const response = await api.get(`/project/blog_content_by_category`, { params: { category: category.content_type, page: category.page, limit: category.limit } });
        return response
    } catch (error) {
        console.log(error);
    }
}
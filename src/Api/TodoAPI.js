import instance from "./axiosInstance"

export const TodoApi = {

    getAllTodo() {
        let queryPath = `/mtodos`;
        return instance.get(queryPath)
            .then(response => response.data);
    },

};

import axios from "axios";

/**
 * Creates a new user in the MongoDB and returns its typescript interface
 * @param {string} username - username of the the user
 * @returns object of the new user
 */
export const createNewUser = async (username) => {
    const res = await axios.post("/user/", {
        username: username
    });
    return (res.status === 201) ? {
        id: res.data._id,
        username: res.data.username
    } : null;
};

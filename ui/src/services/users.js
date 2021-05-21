import axios from "axios";

const userServiceBaseUrl = "http://localhost:8080";

export const getUsers = async () => {
  const { data } = await axios.get(`${userServiceBaseUrl}/users`);
  return data;
};

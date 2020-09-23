import axios from "axios";

export const AxiosCall = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://anytime-fitness-database.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
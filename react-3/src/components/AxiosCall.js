import axios from "axios";

export const AxiosCall = () => {
  const token = localStorage.getItem("token");
  // const tok1="ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  return axios.create({
    //  baseURL: "https://anytime-fitness-database.herokuapp.com/api/fitness",
     baseURL: "http://localhost:5555/api/fitness",
    headers: {
      Authorization: token,
    },
    // withCredentials:true
    // ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98
  });

};
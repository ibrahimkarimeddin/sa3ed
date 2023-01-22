import axios from "axios";

export const useAxios = () => {
  return axios.create({
    baseURL:"https://parcel.kammun.com/api/parcel_order/"
  })
};

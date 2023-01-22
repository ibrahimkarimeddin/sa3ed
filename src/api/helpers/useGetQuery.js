import { useQuery } from "react-query";
import { useAxios } from "./useAxios";

export const useGetQuery = (key, url, params = null, options = {}) => {
  const axios = useAxios();

  return useQuery(
    params ? [key, params] : key,
    async () => {
      const { data } = await axios.get(url, { params });
      return data.data;
    },
  );
};

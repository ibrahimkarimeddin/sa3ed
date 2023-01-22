import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";

export const useUpdateMutation = (key, url,toastMessage=true) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation(
    async (dataToSend) => {
      const { data } = await axios.put(url, dataToSend);
      return data;
    },
    {
      onSuccess: ({ message }) => {
        toastMessage&&toast.success(message || ("updated_successfully"));
        queryClient.invalidateQueries([key]);
      },
      onError: (err) => {
        const message =
          err?.response?.data?.message || ("failed_to_update_data");
        toast.error(message);
      },
    }
  );
};

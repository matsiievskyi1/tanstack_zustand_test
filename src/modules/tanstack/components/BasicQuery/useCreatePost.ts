import { useMutation } from "@tanstack/react-query";
import { IInputs } from "../../../../components/PostForm/PostForm";
import { api } from "../../../../global/api";
import { IPost } from "../../../../global/api/interfaces_types";
import { apiRoutes } from "../../../../global/routes";

export const useCreatePost = () => {
  return useMutation(async (values: IInputs) => {
    const resp = await api.post<IInputs, IPost>(apiRoutes.posts, values);
    console.log(resp);
  });
};

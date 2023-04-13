import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../global/api";
import { IPost } from "../../../../global/api/interfaces_types";
import { apiRoutes } from "../../../../global/routes";

export const useGetPost = (postId?: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      return await api.get<IPost>(`${apiRoutes.posts}/${postId}`);
    },
  });
};

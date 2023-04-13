import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../global/api";
import { IPost } from "../../../../global/api/interfaces_types";
import { apiRoutes } from "../../../../global/routes";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await api.get<IPost[]>(apiRoutes.posts);
      return data;
    },
  });
};

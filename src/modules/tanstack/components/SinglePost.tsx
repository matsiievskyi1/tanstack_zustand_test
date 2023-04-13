import { useParams } from "react-router-dom";
import { useGetPost } from "./BasicQuery/useGetPost";

export const SinglePosts = () => {
  const { id } = useParams();
  const postQuery = useGetPost(id);
  const { data: postData, isLoading, isError } = postQuery;

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Oops</div>;

  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
};

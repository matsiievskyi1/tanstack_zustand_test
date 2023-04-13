import { Link, useLocation } from "react-router-dom";
import { IInputs, PostForm } from "../../../../components/PostForm/PostForm";
import { useCreatePost } from "./useCreatePost";
import { useGetPosts } from "./useGetPosts";

export const BasicQuery = () => {
  const { pathname } = useLocation();
  const { data: postsList, isLoading, isError } = useGetPosts();
  const { mutate } = useCreatePost();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Oops</div>;

  const addPost = (data: IInputs) => {
    mutate(data);
  };

  return (
    <div>
      <p>Basic</p>
      <div>
        <h3>Create Post</h3>
        <PostForm onSubmit={addPost} clearOnSubmit={true} submitText='Add Post' />
      </div>
      <ul>
        {postsList.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`${pathname}/${post.id}`}>{post.body}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

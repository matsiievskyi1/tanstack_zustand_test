export const apiRoutes = {
  posts: "https://jsonplaceholder.typicode.com/posts",
  comments: "https://jsonplaceholder.typicode.com/comments",
};

export interface IRoutes {
  [key: string]: { path: string; title: string; desc?: string };
}

export const pageRoutes: IRoutes = {
  main: { path: "/", title: "Main" },
  posts: { path: "/posts", title: "Posts", desc: "Basic Fetch" },
  basicQuery: { path: "basic-query", title: "Basic query" },
  zustandTodo: { path: "zustand-todo", title: "Zustand Todo" },
};

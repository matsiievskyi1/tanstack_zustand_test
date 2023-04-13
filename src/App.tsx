import "./App.css";
import { Routes, Route } from "react-router-dom";
import { pageRoutes } from "./global/routes";
import { Posts, Main } from "./pages";
import { BasicQuery } from "./modules/tanstack/components/BasicQuery";
import { SinglePosts } from "./modules/tanstack/components/SinglePost";
import { TodoList } from "./modules/zustand/TodoList";

function App() {
  return (
    <>
      <Routes>
        <Route path={pageRoutes.main.path} element={<Main pageRoutes={pageRoutes} />} />
        <Route path={pageRoutes.posts.path} element={<Posts />} />
        <Route path={pageRoutes.basicQuery.path} element={<BasicQuery />} />
        <Route path={`${pageRoutes.basicQuery.path}/:id`} element={<SinglePosts />} />
        <Route path={pageRoutes.zustandTodo.path} element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;

import { Card, Checkbox, Typography, Box, Input, Button } from "@mui/material";
import { ITodo } from "./interfaces";
import { useTodos } from "./store";
import { useState } from "react";
import { Filter } from "./Filter";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const addTodo = useTodos((state) => state.addTodo);

  const handleAddTodo = (value: string) => {
    addTodo(value);
  };

  return (
    <Box>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => handleAddTodo(value)}>Add Todo</Button>
    </Box>
  );
};

const Todo = ({ id, title, completed }: ITodo) => {
  const toggleTodo = useTodos((state) => state.toggleTodo);
  return (
    <Card sx={{ minWidth: "300px" }}>
      <Checkbox checked={completed} onChange={() => toggleTodo(id)} />
      <Typography>{title}</Typography>
    </Card>
  );
};

export const TodoList = () => {
  const todos = useTodos((state) => state.todos);
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <AddTodo />
      {todos.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
      <Filter />
    </Box>
  );
};

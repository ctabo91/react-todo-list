import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const addTodo = (todoList, task = "write tests") => {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Add Todo!");
  fireEvent.click(submitButton);
}

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", () => {
  const list = render(<TodoList />);
  addTodo(list);

  // expect form to clear and todo to be on the page
  expect(list.getByLabelText("Task:")).toHaveValue("");
  expect(list.getByText("write tests")).toBeInTheDocument();
  expect(list.getByText("Mark as complete")).toBeInTheDocument();
  expect(list.getByText("X")).toBeInTheDocument();
});


it("can delete a todo", () => {
  const list = render(<TodoList />);
  addTodo(list);

  fireEvent.click(list.getByText("X"));

  // expect todo to be gone
  expect(list.queryByText("write tests")).not.toBeInTheDocument();
});

it("can mark todo as complete", () => {
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText("Mark as complete"));

    expect(list.queryByText("write tests")).toHaveStyle("textDecoration: line-through");

    fireEvent.click(list.getByText("Mark as complete"));

    expect(list.queryByText("write tests")).not.toHaveStyle("textDecoration: line-through");
})

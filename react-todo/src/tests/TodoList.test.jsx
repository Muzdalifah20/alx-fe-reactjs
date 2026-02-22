import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import TodoList from "../components/TodoList";

global.React = React;

describe("TodoList", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByRole("button", { name: /add/i });
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const firstTodo = screen.getByText("Learn React").closest("li");
    fireEvent.click(firstTodo.querySelector("span"));
    expect(firstTodo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes todo", () => {
    render(<TodoList />);
    const todos = screen.getAllByRole("listitem");
    const firstDeleteButton = todos[0].querySelector("button");
    fireEvent.click(firstDeleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});

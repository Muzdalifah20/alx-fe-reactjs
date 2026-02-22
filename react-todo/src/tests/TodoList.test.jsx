import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

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
    const firstTodo = screen.getByText("Learn React");

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes todo", () => {
    render(<TodoList />);
    const firstTodo = screen.getByText("Learn React");
    const deleteButton = screen.getAllByRole("button")[0];

    fireEvent.click(deleteButton);
    expect(firstTodo).not.toBeInTheDocument();
  });
});

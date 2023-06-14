import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const MockTodo = () => {
  return(
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

describe("Todo", () => {
    it('should render input element', async () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        fireEvent.click(buttonElement)

        const divElement = screen.getByText(/Go Grocery Shopping/i)

        expect(divElement).toBeInTheDocument();
      });

      it('should render multiple items', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping", "Pet My Cat", "Wash My Hand"])

        const divElement = screen.getAllByTestId('task-container')
        
        expect(divElement.length).toBe(3);
      });

      it('task shouldnt have completed class when initially rendered', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);

        expect(divElement).not.toHaveClass('todo-item-active')
      });

      it('task should have completed class when clicked', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement)

        expect(divElement).toHaveClass('todo-item-active')
      });
})
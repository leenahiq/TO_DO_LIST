import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';
import Input from './compnents/Input';

test("renders the header", () => {
  render(<Input />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
test("render the submit button", () => {
  render(<Input />);
  const button = screen.getByText(/Add Todo/i);
  expect(button).toBeInTheDocument();
});
test("render one submit button", () => {
  render(<Input />);
  const element = screen.getAllByText(/Add Todo/i);
  expect(element.length).toBe(1);
});


// test("fireEevent submit button", () => {
//   render(<Input />);
//   const submitButton = screen.getByText(/Add Todo/i);
//   fireEvent.click(submitButton);
//   const deleteButton = screen.getAllByText(/Delete/i);
//   expect(deleteButton).toBeInTheDocument();
// });

// test("input value is rendered", () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText("ADD YOUR TASK");
//   fireEvent.change(inputElement, { target: { value: "get food"} });
//   expect(inputElement.value).toBe("get food");
// });

test("input value is rendered", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("ADD YOUR TASK");
  fireEvent.change(inputElement, { target: { value: ""} });
  expect(inputElement.value).toBeDefined();
});

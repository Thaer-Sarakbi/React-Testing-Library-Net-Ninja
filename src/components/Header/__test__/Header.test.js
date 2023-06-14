import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', async () => {
  render(<Header title="Header"/>);
  const headingElement = screen.getByText(/Header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', async () => {
//     render(<Header title="Header"/>);
//     const headingElement = screen.getByRole('heading');
//     expect(headingElement).toBeInTheDocument();
//   }); 

// it('should render same text passed into title prop', async () => {
//     render(<Header title="Header"/>);
//     const headingElement = screen.getByRole('heading', { name: "Header" });
//     expect(headingElement).toBeInTheDocument();
//   }); 

//   it('should render same text passed into title prop', async () => {
//     render(<Header title="Header"/>);
//     const headingElement = screen.getByRole('heading', { name: "Cats" });
//     expect(headingElement).toBeInTheDocument();
//   }); 
  
  it('should render same text passed into title prop', async () => {
    render(<Header title="Header"/>);
    const headingElement = screen.getByTitle('Header');
    expect(headingElement).toBeInTheDocument();
  }); 


  //FIND BY
  it('should render same text passed into title prop', async () => {
    render(<Header title="Header"/>);
    const headingElement = await screen.findByText(/Header/i);
    expect(headingElement).toBeInTheDocument();
  }); 

  //QUERY BY
  it('should render same text passed into title prop', () => {
    render(<Header title="Header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  }); 

  it('should render same text passed into title prop', () => {
    render(<Header title="Header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  }); 
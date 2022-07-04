import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


test('renders the landing page', () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Suas tarefas/);
    expect(screen.getByTestId("popUpButton")).toHaveTextContent("+");
  });


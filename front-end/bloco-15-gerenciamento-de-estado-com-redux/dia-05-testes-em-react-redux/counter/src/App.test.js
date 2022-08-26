import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore, combineReducers } from 'redux';
import App from './App';
import clickReducer from './redux/reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store
});

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByText('Clique aqui');

    expect(addBtn).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increase the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('clicking the button should increase the value by 1', () => {
    renderWithRedux(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
    
    const addBtn = screen.getByText('Clique aqui');
    userEvent.click(addBtn);

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

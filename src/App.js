import React from 'react';
import ExpenseSort from './components/Expenses/ExpenseSort';
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <div className="form">
        <h1> hey! this is very nice website 👍</h1>
        <p>
          ah... i'm know this is not a lot and this is just the scratch the
          start of the start.<div className="height2px">&nbsp;</div>
          <br />
          description:
          <br />
          {'*(data that stored at the main App.js Tree components) ↴'}
          <br />
          {
            '*App.js Give the data into ExpenseSort.js anther the name {item} using props, and at the same line ask to get the return of ExpenseSort.js ↴'
          }
          <br />
          {
            '*ExpenseSort.js resive the props from App, then use map function to navigte and spreed the array, ExpenseSort.js eventialy return the all the data from {expenses} after styling and some defenitions back to App.js'
          }
        </p>
      </div>
      <div className="form">
        <ExpenseSort item={expenses} />
      </div>
    </div>
  );
};

export default App;

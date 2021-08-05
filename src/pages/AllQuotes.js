import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
  { id: 'q1', author: 'Don', text: 'Learning React Router' },
  { id: 'q2', author: 'John', text: 'Learning React Router by John' },
  { id: 'q3', author: 'Adam', text: 'Learning React Router by Adam' },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_DATA}></QuoteList>;
}

export default AllQuotes;

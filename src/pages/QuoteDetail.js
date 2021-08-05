import React from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  { id: 'q1', author: 'Don', text: 'Learning React Router' },
  { id: 'q2', author: 'John', text: 'Learning React Router by John' },
  { id: 'q3', author: 'Adam', text: 'Learning React Router by Adam' },
];

function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => (quote.id = params.quoteId));

  if (!quote) {
    return <p>No Quote was found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;

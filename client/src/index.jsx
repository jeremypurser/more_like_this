import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import More from './components/More.jsx';

ReactDOM.render(<ErrorBoundary><More /></ErrorBoundary>,
  document.getElementById('more'));
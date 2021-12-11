import React, { useEffect, Fragment } from 'react';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

// implement HOC to inject values 'history', 'children' like in withRouter from 'react-router-dom';
export default ScrollToTop;
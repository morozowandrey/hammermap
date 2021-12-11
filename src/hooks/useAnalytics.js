import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const makePageView = (pageName) =>
  ReactGA.pageview(pageName);

export const useAnalytics = pageName =>
  useEffect(() => {
    makePageView(pageName);
    // to track of how long the user stayed on the page
    // return () => getPageTime(pageName);
  }, [pageName]);
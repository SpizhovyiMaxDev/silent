import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageEventListener () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default PageEventListener;

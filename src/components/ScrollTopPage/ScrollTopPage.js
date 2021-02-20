import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

const ScrollTopPage = ({ children }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [path]);

  return <>{children}</>;
};

export default ScrollTopPage;
